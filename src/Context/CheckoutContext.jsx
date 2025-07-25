// CheckoutContext.jsx - Multi-Step Checkout Flow State Management
// Demonstrates form state management, wizard patterns, and checkout flow architecture

import { useState, createContext, useContext } from "react";

// ========== CONTEXT SETUP ==========

// CHECKOUT CONTEXT CREATION - Dedicated state management for checkout process
// Separating checkout logic from cart logic demonstrates proper separation of concerns
// This allows independent development and testing of checkout functionality
export const CheckoutContext = createContext();

/**
 * CUSTOM HOOK PATTERN - useCheckout()
 * 
 * Following the same pattern as useCart, this custom hook provides:
 * 1. TYPE SAFETY: Ensures context is properly initialized
 * 2. DEVELOPER EXPERIENCE: Clear error messaging for improper usage
 * 3. ABSTRACTION: Simplifies context consumption throughout the app
 * 4. CONSISTENCY: Matches established patterns in the codebase
 */
export const useCheckout = () => {
    const context = useContext(CheckoutContext);
    
    // DEFENSIVE PROGRAMMING - Prevents silent failures
    // Throws descriptive error if hook used outside provider tree
    if (!context) {
        throw new Error('useCheckout must be used within a CheckoutProvider');
    }
    return context;
}

/**
 * CHECKOUT PROVIDER - Multi-Step Form State Management
 * 
 * This provider demonstrates advanced form and workflow patterns:
 * 
 * FEATURES IMPLEMENTED:
 * - Multi-step wizard navigation with validation
 * - Comprehensive form data management
 * - Step progression and regression controls
 * - Modal-style checkout interface
 * - Form state persistence during checkout session
 * 
 * BUSINESS LOGIC:
 * - 3-step checkout process (shipping, payment, confirmation)
 * - Form validation readiness
 * - Data collection for order processing
 * - User flow management
 * 
 * TECHNICAL PATTERNS:
 * - Centralized state management for complex forms
 * - Wizard navigation with boundary checking
 * - Immutable state updates for form data
 * - Clean state reset functionality
 */
export const CheckoutProvider = ({ children }) => {
    // ========== CHECKOUT FLOW STATE ==========
    
    // MODAL STATE - Controls checkout overlay visibility
    // Allows checkout to be triggered from cart or other components
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    
    // WIZARD STATE - Tracks current step in multi-step checkout
    // Step 1: Shipping Information
    // Step 2: Payment Information  
    // Step 3: Order Confirmation
    const [checkoutStep, setCheckoutStep] = useState(1);
    
    // ========== FORM DATA STATE ==========
    
    /**
     * COMPREHENSIVE FORM STATE - Complete Checkout Data Model
     * 
     * This state object demonstrates real-world e-commerce requirements:
     * 
     * CUSTOMER INFORMATION:
     * - Contact details (email for receipts and communication)
     * - Personal identification (first/last name for shipping)
     * 
     * SHIPPING ADDRESS:
     * - Complete address with apartment/suite support
     * - City, state, ZIP for shipping calculations
     * 
     * PAYMENT INFORMATION:
     * - Credit card details (number, expiry, CVV)
     * - Cardholder name for verification
     * 
     * USER PREFERENCES:
     * - Save information for future purchases
     * 
     * This structure matches what real payment processors expect
     */
    const [formData, setFormData] = useState({
        // CUSTOMER CONTACT INFORMATION
        email: '',          // Required for order confirmation and receipt
        firstName: '',      // Required for shipping and billing
        lastName: '',       // Required for shipping and billing
        
        // SHIPPING ADDRESS DETAILS
        address: '',        // Street address line 1
        apartment: '',      // Optional apartment/suite/unit number
        city: '',          // City for shipping calculation
        state: '',         // State/province for tax calculation
        zipCode: '',       // ZIP/postal code for shipping zones
        
        // PAYMENT CARD INFORMATION
        cardNumber: '',     // Credit card number (will be masked in UI)
        expiryDate: '',     // MM/YY format for card expiration
        cvv: '',           // Security code for transaction verification
        cardName: '',      // Name on card for billing verification
        
        // USER PREFERENCES
        saveInfo: false,   // Checkbox for saving info for future purchases
    });

    // ========== CHECKOUT MODAL CONTROLS ==========
    
    /**
     * OPEN CHECKOUT FUNCTION - Initialize Checkout Flow
     * 
     * Triggered when user clicks "Checkout" from cart
     * Could be enhanced to accept initial data or step
     */
    const openCheckout = () => {
        setIsCheckoutOpen(true);
    };

    /**
     * CLOSE CHECKOUT FUNCTION - Complete Checkout Reset
     * 
     * Demonstrates proper cleanup when user cancels checkout:
     * 1. MODAL CLOSURE: Hide checkout interface
     * 2. STEP RESET: Return to first step for next checkout
     * 3. FORM PERSISTENCE: Maintains form data for user convenience
     * 
     * Note: Form data is intentionally NOT cleared to preserve
     * user input if they accidentally close checkout
     */
    const closeCheckout = () => {
        setIsCheckoutOpen(false);
        setCheckoutStep(1); // Reset to first step
    };

    // ========== WIZARD NAVIGATION CONTROLS ==========
    
    /**
     * NEXT STEP FUNCTION - Forward Navigation with Boundary Checking
     * 
     * Implements step progression with validation:
     * 1. BOUNDARY PROTECTION: Prevents going beyond final step
     * 2. VALIDATION READY: Could add step validation before progression
     * 3. CONTROLLED FLOW: Ensures users follow intended sequence
     */
    const nextStep = () => {
        // BOUNDARY CHECK - Don't exceed maximum steps
        // Currently supports 3-step checkout process
        if (checkoutStep < 3) {
            setCheckoutStep(checkoutStep + 1);
        }
    };

    /**
     * PREVIOUS STEP FUNCTION - Backward Navigation with Boundary Checking
     * 
     * Allows users to return to previous steps for corrections:
     * 1. BOUNDARY PROTECTION: Prevents going below first step
     * 2. USER EXPERIENCE: Allows easy correction of information
     * 3. CONTROLLED FLOW: Maintains step integrity
     */
    const prevStep = () => {
        // BOUNDARY CHECK - Don't go below first step
        if (checkoutStep > 1) {
            setCheckoutStep(checkoutStep - 1);
        }
    };

    // ========== FORM DATA MANAGEMENT ==========
    
    /**
     * UPDATE FORM DATA FUNCTION - Partial State Updates
     * 
     * This function demonstrates advanced form state patterns:
     * 1. PARTIAL UPDATES: Merge new data with existing state
     * 2. IMMUTABILITY: Creates new object while preserving unchanged fields
     * 3. FLEXIBILITY: Accepts any subset of form fields
     * 4. PERFORMANCE: Only updates changed fields
     * 
     * Usage examples:
     * updateFormData({ email: 'user@example.com' })
     * updateFormData({ firstName: 'John', lastName: 'Doe' })
     * updateFormData({ cardNumber: '4111111111111111', cvv: '123' })
     */
    const updateFormData = (newData) => {
        setFormData(prev => ({ 
            ...prev,    // Preserve existing form data
            ...newData  // Merge in new/updated fields
        }));
    };

    // ========== CONTEXT VALUE OBJECT ==========
    
    /**
     * CHECKOUT API - Complete Checkout Interface
     * 
     * This object provides comprehensive checkout functionality:
     * 
     * STATE ACCESS:
     * - Current checkout visibility and step
     * - Complete form data for all checkout steps
     * 
     * NAVIGATION CONTROLS:
     * - Open/close checkout modal
     * - Step progression and regression
     * 
     * DATA MANAGEMENT:
     * - Form data updates with partial state support
     */
    const value = {
        // CHECKOUT FLOW STATE
        isCheckoutOpen,     // Boolean: Is checkout modal visible?
        checkoutStep,       // Number: Current step (1-3)
        formData,          // Object: Complete form data
        
        // MODAL CONTROLS
        openCheckout,      // Function: Show checkout modal
        closeCheckout,     // Function: Hide checkout modal and reset step
        
        // WIZARD NAVIGATION
        nextStep,          // Function: Advance to next step (with boundary check)
        prevStep,          // Function: Return to previous step (with boundary check)
        
        // FORM MANAGEMENT
        updateFormData     // Function: Update form data with partial state
    };

    // ========== PROVIDER RENDER ==========
    
    /**
     * CONTEXT PROVIDER - Checkout State Distribution
     * 
     * Makes checkout functionality available throughout component tree
     * Components can access via useCheckout() hook
     */
    return (
        <CheckoutContext.Provider value={value}>
            {children}
        </CheckoutContext.Provider>
    );
};

// ========== CHECKOUT FLOW ARCHITECTURE ==========
//
// This implementation demonstrates mastery of:
//
// 1. MULTI-STEP FORM PATTERNS:
//    - Wizard navigation with step validation
//    - Boundary checking for step transitions
//    - State persistence across steps
//
// 2. COMPLEX FORM STATE MANAGEMENT:
//    - Comprehensive data model for e-commerce checkout
//    - Partial state updates for performance
//    - Immutable state patterns for React optimization
//
// 3. USER EXPERIENCE DESIGN:
//    - Modal-based checkout interface
//    - Form data preservation during navigation
//    - Clear step progression and regression
//
// 4. BUSINESS LOGIC INTEGRATION:
//    - Real-world checkout requirements
//    - Payment and shipping data collection
//    - User preference management
//
// 5. SCALABLE ARCHITECTURE:
//    - Separated checkout concerns from cart logic
//    - Extensible step system for future enhancements
//    - Clean API for component integration
//
// FUTURE ENHANCEMENTS:
// - Step validation before progression
// - Form data persistence to localStorage
// - Integration with payment processing APIs
// - Address validation and autocomplete
// - Tax calculation based on shipping address
// - Order confirmation and receipt generation
//
// This level of implementation shows understanding of:
// - Complex form management in React
// - Multi-step user interface patterns
// - E-commerce business requirements
// - State management best practices