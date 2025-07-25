import { Link } from "react-router-dom"
import { useState } from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { useCart } from "../Context/CartContext"
import { CreditCard, Lock, CheckCircle, ArrowLeft, Shield, Truck, AlertCircle, Trash2 } from 'lucide-react';
import Cart from '../Components/Cart';
import emailjs from 'emailjs-com'; 

function Checkout() {
    const { cartItems, cartTotal, removeFromCart, clearCart, updateQuantity } = useCart();
    const [currentStep, setCurrentStep] = useState(1);
    const [isProcessing, setIsProcessing] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);
    const [finalOrderTotal, setFinalOrderTotal] = useState(0); 
    const [formData, setFormData] = useState({
        // Contact
        email: '',
        // Shipping
        firstName: '',
        lastName: '',
        address: '',
        apartment: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'United States',
        // Payment 
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardName: '',
        // Options
        saveInfo: false,
    });

    const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const AUTO_REPLY_TEMPLATE_ID = import.meta.env.VITE_AUTO_REPLY_TEMPLATE_ID;
    const INQUIRY_TEMPLATE_ID = import.meta.env.VITE_INQUIRY_TEMPLATE_ID;
    const EMAIL_USER_ID = import.meta.env.VITE_EMAILJS_PUBLIC_ID;

    // Use real cart data instead of sample data
    const cartSubtotal = cartTotal;
    const shipping = 0;
    const tax = cartSubtotal * 0.08;
    const total = cartSubtotal + shipping + tax;

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev, 
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    const handleNextStep = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    }

    const handlePreviousStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    }

    // ✅ Updated handleSubmitOrder function with proper email functionality
    const handleSubmitOrder = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        try {
            // ✅ Save the final total BEFORE clearing the cart
            const finalTotal = cartSubtotal + shipping + (cartSubtotal * 0.08);
            setFinalOrderTotal(finalTotal);

            // ✅ Send emails BEFORE setting orderComplete
            // Send notification email TO YOU
            await emailjs.send(
                EMAIL_SERVICE_ID,
                INQUIRY_TEMPLATE_ID,
                {
                    from_name: `${formData.firstName} ${formData.lastName}`, // ✅ Fixed: combine first and last name
                    from_email: formData.email,
                    subject: `New Order - Order #RW-2025-001`, // ✅ Better subject line
                    message: `New order received:
                    
Customer: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Order Total: $${finalTotal.toFixed(2)}
Items: ${cartItems.length} items

Shipping Address:
${formData.address}
${formData.apartment ? formData.apartment + '\n' : ''}${formData.city}, ${formData.state} ${formData.zipCode}

Items ordered:
${cartItems.map(item => `- ${item.name} (Qty: ${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`).join('\n')}`,
                    timestamp: new Date().toLocaleString(),
                    to_email: 'alexander.robaczewski@gmail.com' // ✅ Fixed: use consistent email
                },
                EMAIL_USER_ID
            );

            // Send order confirmation TO CUSTOMER
            await emailjs.send(
                EMAIL_SERVICE_ID,
                AUTO_REPLY_TEMPLATE_ID,
                {
                    to_email: formData.email, // ✅ This should match your template variable
                    to_name: formData.firstName, // ✅ Use firstName instead of name
                    inquiry_subject: `Order Confirmation - #RW-2025-001`, // ✅ Better subject
                    resume_link: '/resume/Alexander_Robaczewski_Resume.pdf',
                    portfolio_link: window.location.origin
                },
                EMAIL_USER_ID
            );

            console.log('Both order emails sent successfully!');

            // Simulate payment processing
            await new Promise(resolve => setTimeout(resolve, 3000));

            setIsProcessing(false);
            setOrderComplete(true);
            
            // Clear cart after successful order
            setTimeout(() => {
                clearCart();
            }, 1000);

        } catch (error) {
            console.error('Order submission failed:', error);
            alert('Failed to process order. Please try again.');
            setIsProcessing(false);
        }
    }

    const handleQuantityChange = (productId, newQuantity) => {
        const qty = parseInt(newQuantity);
        console.log('Changing quantity for product:', productId, 'to:', qty); // Debug log
        updateQuantity(productId, qty); 
    }

    const handleRemoveItem = (productId) => {
        if (window.confirm('Remove this item from your cart?')){
            removeFromCart(productId);
        }
    }

    const handleClearAll = () => {
        clearCart();
    }

    // Debug: Log cart items to console
    console.log('Current cart items:', cartItems);

    if (cartItems.length === 0 && !orderComplete) {
        return (
            <>
                <Header />
                <div className="min-h-screen bg-gray-50 py-12">
                    <div className="max-w-2xl mx-auto px-6 text-center">
                        <div className="bg-white rounded-lg shadow-sm p-8">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                Your Cart is Empty
                            </h1>
                            <p className="text-gray-600 mb-6">
                                Add some items to your cart before checking out.
                            </p>
                            <Link
                                to="/products"
                                className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-block"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    if (orderComplete) {
        return (
            <>
                <Header />
                <div className="min-h-screen bg-gray-50 py-12">
                    <div className="max-w-2xl mx-auto px-6">
                        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                            <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                Order Confirmed!
                            </h1>
                            <p className="text-gray-600 mb-6">
                                Thank you for your order. We'll send you a confirmation email shortly.
                            </p>
                            
                            <div className="bg-gray-50 rounded-lg p-6 mb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-gray-600">Order Number:</span>
                                    <span className="font-semibold">#RW-2025-001</span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-gray-600">Total:</span>
                                    <span className="font-semibold">${finalOrderTotal.toFixed(2)}</span> {/* ✅ Use saved total */}
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Expected Delivery:</span>
                                    <span className="font-semibold">3-5 Business Days</span>
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                <Link
                                    to="/products"
                                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors block text-center"
                                >
                                    Continue Shopping
                                </Link>
                                <p className="text-xs text-gray-500">
                                    <em>Portfolio Demo: No real order was placed</em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="bg-white border-b border-gray-200 sticky top-0 z-[5]"> {/* ✅ Fixed z-index */}
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Link to="/products" className="p-2 hover:bg-gray-100 rounded-full mr-4 transition-colors">
                                    <ArrowLeft className="h-5 w-5" />
                                </Link>
                                <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
                            </div>
                            
                            {/* Progress Steps */}
                            <div className="hidden md:flex items-center space-x-8">
                                <div className={`flex items-center ${currentStep >= 1 ? 'text-indigo-600' : 'text-gray-400'}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${currentStep >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                                        1
                                    </div>
                                    <span className="ml-2 font-medium">Information</span>
                                </div>
                                <div className={`w-12 h-px ${currentStep >= 2 ? 'bg-indigo-600' : 'bg-gray-300'}`} />
                                <div className={`flex items-center ${currentStep >= 2 ? 'text-indigo-600' : 'text-gray-400'}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${currentStep >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                                        2
                                    </div>
                                    <span className="ml-2 font-medium">Payment</span>
                                </div>
                                <div className={`w-12 h-px ${currentStep >= 3 ? 'bg-indigo-600' : 'bg-gray-300'}`} />
                                <div className={`flex items-center ${currentStep >= 3 ? 'text-indigo-600' : 'text-gray-400'}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${currentStep >= 3 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                                        3
                                    </div>
                                    <span className="ml-2 font-medium">Review</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        
                        {/* Left Column - Forms */}
                        <div className="space-y-8">
                            
                            {/* Step 1: Contact & Shipping Info */}
                            {currentStep === 1 && (
                                <div className="space-y-6">
                                    {/* Contact Information */}
                                    <div className="bg-white rounded-lg shadow-sm p-6">
                                        <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
                                        
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                    placeholder="john@example.com"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Shipping Address */}
                                    <div className="bg-white rounded-lg shadow-sm p-6">
                                        <h2 className="text-xl font-bold text-gray-900 mb-6">Shipping Address</h2>
                                        
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        First Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="firstName"
                                                        value={formData.firstName}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Last Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="lastName"
                                                        value={formData.lastName}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Address *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                    required
                                                />
                                            </div>
                                            
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Apartment, Suite, etc.
                                                </label>
                                                <input
                                                    type="text"
                                                    name="apartment"
                                                    value={formData.apartment}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                />
                                            </div>
                                            
                                            <div className="grid grid-cols-3 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        City *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        value={formData.city}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        State *
                                                    </label>
                                                    <select
                                                        name="state"
                                                        value={formData.state}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                        required
                                                    >
                                                        <option value="AL">Alabama</option>
                                                        <option value="AK">Alaska</option>
                                                        <option value="AZ">Arizona</option>
                                                        <option value="AR">Arkansas</option>
                                                        <option value="CA">California</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="CT">Connecticut</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="DC">District Of Columbia</option>
                                                        <option value="FL">Florida</option>
                                                        <option value="GA">Georgia</option>
                                                        <option value="HI">Hawaii</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="IL">Illinois</option>
                                                        <option value="IN">Indiana</option>
                                                        <option value="IA">Iowa</option>
                                                        <option value="KS">Kansas</option>
                                                        <option value="KY">Kentucky</option>
                                                        <option value="LA">Louisiana</option>
                                                        <option value="ME">Maine</option>
                                                        <option value="MD">Maryland</option>
                                                        <option value="MA">Massachusetts</option>
                                                        <option value="MI">Michigan</option>
                                                        <option value="MN">Minnesota</option>
                                                        <option value="MS">Mississippi</option>
                                                        <option value="MO">Missouri</option>
                                                        <option value="MT">Montana</option>
                                                        <option value="NE">Nebraska</option>
                                                        <option value="NV">Nevada</option>
                                                        <option value="NH">New Hampshire</option>
                                                        <option value="NJ">New Jersey</option>
                                                        <option value="NM">New Mexico</option>
                                                        <option value="NY">New York</option>
                                                        <option value="NC">North Carolina</option>
                                                        <option value="ND">North Dakota</option>
                                                        <option value="OH">Ohio</option>
                                                        <option value="OK">Oklahoma</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="PA">Pennsylvania</option>
                                                        <option value="RI">Rhode Island</option>
                                                        <option value="SC">South Carolina</option>
                                                        <option value="SD">South Dakota</option>
                                                        <option value="TN">Tennessee</option>
                                                        <option value="TX">Texas</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="VT">Vermont</option>
                                                        <option value="VA">Virginia</option>
                                                        <option value="WA">Washington</option>
                                                        <option value="WV">West Virginia</option>
                                                        <option value="WI">Wisconsin</option>
                                                        <option value="WY">Wyoming</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        ZIP Code *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="zipCode"
                                                        value={formData.zipCode}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name="saveInfo"
                                                    checked={formData.saveInfo}
                                                    onChange={handleInputChange}
                                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                                />
                                                <label className="ml-2 text-sm text-gray-600">
                                                    Save this information for next time
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleNextStep}
                                        className="w-full bg-indigo-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors"
                                    >
                                        Continue to Payment
                                    </button>
                                </div>
                            )}

                            {/* Step 2: Payment */}
                            {currentStep === 2 && (
                                <div className="space-y-6">
                                    <div className="bg-white rounded-lg shadow-sm p-6">
                                        <div className="flex items-center mb-6">
                                            <Lock className="h-5 w-5 text-green-600 mr-2" />
                                            <h2 className="text-xl font-bold text-gray-900">Secure Payment</h2>
                                        </div>
                                        
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Cardholder Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="cardName"
                                                    value={formData.cardName}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                    required
                                                />
                                            </div>
                                            
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Card Number *
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        name="cardNumber"
                                                        value={formData.cardNumber}
                                                        onChange={handleInputChange}
                                                        placeholder="1234 5678 9012 3456"
                                                        className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                        required
                                                    />
                                                    <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                </div>
                                            </div>
                                            
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Expiry Date *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="expiryDate"
                                                        value={formData.expiryDate}
                                                        onChange={handleInputChange}
                                                        placeholder="MM/YY"
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        CVV *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="cvv"
                                                        value={formData.cvv}
                                                        onChange={handleInputChange}
                                                        placeholder="123"
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex space-x-4">
                                        <button
                                            onClick={handlePreviousStep}
                                            className="w-1/3 bg-gray-200 text-gray-700 py-4 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                                        >
                                            Back
                                        </button>
                                        <button
                                            onClick={handleNextStep}
                                            className="w-2/3 bg-indigo-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors"
                                        >
                                            Review Order
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Review & Submit */}
                            {currentStep === 3 && (
                                <div className="space-y-6">
                                    <div className="bg-white rounded-lg shadow-sm p-6">
                                        <h2 className="text-xl font-bold text-gray-900 mb-6">Review Your Order</h2>
                                        
                                        <div className="space-y-4">
                                            <div className="border-b pb-4">
                                                <h3 className="font-semibold text-gray-900 mb-2">Shipping To:</h3>
                                                <p className="text-gray-600">
                                                    {formData.firstName} {formData.lastName}<br/>
                                                    {formData.address}<br/>
                                                    {formData.city}, {formData.state} {formData.zipCode}
                                                </p>
                                            </div>
                                            
                                            <div className="border-b pb-4">
                                                <h3 className="font-semibold text-gray-900 mb-2">Payment Method:</h3>
                                                <p className="text-gray-600">
                                                    •••• •••• •••• {formData.cardNumber.slice(-4)}<br/>
                                                    {formData.cardName}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                        <div className="flex items-center">
                                            <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                                            <p className="text-sm text-yellow-800">
                                                <strong>Portfolio Demo:</strong> No real payment will be processed. This is for demonstration purposes only.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex space-x-4">
                                        <button
                                            onClick={handlePreviousStep}
                                            className="w-1/3 bg-gray-200 text-gray-700 py-4 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                                        >
                                            Back
                                        </button>
                                        <button
                                            onClick={handleSubmitOrder}
                                            disabled={isProcessing}
                                            className="w-2/3 bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center justify-center"
                                        >
                                            {isProcessing ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                    Processing Order...
                                                </>
                                            ) : (
                                                'Complete Order'
                                            )}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column - Order Summary */}
                        <div className="lg:sticky lg:top-24 lg:self-start">
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                                
                                {/* Cart Items with Better Layout */}
                                <div className="space-y-4 mb-6">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="border-b pb-4 last:border-b-0">
                                            <div className="flex items-start space-x-4">
                                                <div className="relative flex-shrink-0">
                                                    <img 
                                                        src={item.image} 
                                                        alt={item.name}
                                                        className="w-16 h-16 object-cover rounded-md border"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 mb-2">
                                                        {item.name}
                                                    </h3>
                                                    {/* ✅ Show size for apparel items */}
                                                    {item.size && (
                                                        <p className="text-sm text-gray-600 mb-2">
                                                            Size: <span className="font-medium">{item.size}</span>
                                                        </p>
                                                    )}
                                                    <p className="text-indigo-600 font-bold mb-3">
                                                        ${item.price.toFixed(2)} each
                                                    </p>
                                                    
                                                    {/* Quantity and Remove Controls */}
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center space-x-2">
                                                            <label className="text-sm text-gray-600">Qty:</label>
                                                            <select 
                                                                value={item.quantity} 
                                                                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                                                className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                            >
                                                                <option value={1}>1</option>
                                                                <option value={2}>2</option>
                                                                <option value={3}>3</option>
                                                                <option value={4}>4</option>
                                                                <option value={5}>5</option>
                                                                <option value={6}>6</option>
                                                                <option value={7}>7</option>
                                                                <option value={8}>8</option>
                                                                <option value={9}>9</option>
                                                                <option value={10}>10</option>
                                                            </select>
                                                        </div>
                                                        
                                                        <button
                                                            onClick={() => handleRemoveItem(item.id)}
                                                            className="text-red-600 hover:text-red-700 p-1"
                                                            title="Remove item"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                    
                                                    {/* Item Subtotal */}
                                                    {item.quantity > 1 && (
                                                        <p className="text-xs text-gray-500 mt-1">
                                                            Subtotal: ${(item.price * item.quantity).toFixed(2)}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <button type="button" className="text-red-600 bg-white hover:text-white hover:bg-red-600 border-red-600 border-1 py-1 px-2 rounded-full" onClick={handleClearAll}>Delete All</button>
                                </div>

                                {/* Pricing Breakdown */}
                                <div className="border-t pt-4 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Subtotal:</span>
                                        <span>${cartSubtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Shipping:</span>
                                        <span className="text-green-600">Free</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Tax:</span>
                                        <span>${tax.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-bold border-t pt-2">
                                        <span>Total:</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Trust Badges */}
                                <div className="mt-6 pt-6 border-t">
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div className="flex flex-col items-center">
                                            <Shield className="h-8 w-8 text-green-600 mb-2" />
                                            <span className="text-xs text-gray-600">Secure Checkout</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Truck className="h-8 w-8 text-blue-600 mb-2" />
                                            <span className="text-xs text-gray-600">Free Shipping</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Cart/>
        </>
    );
}

export default Checkout;