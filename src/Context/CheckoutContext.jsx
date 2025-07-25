import { useState, createContext, useContext } from "react";

export const CheckoutContext = createContext();

export const useCheckout = () => {
    const context = useContext(CheckoutContext);
    if (!context) {
        throw new Error('useCheckout must be used within a CheckoutProvider');
    }
    return context;
}

export const CheckoutProvider = ({ children }) => {
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [checkoutStep, setCheckoutStep] = useState(1);
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        apartment: '',
        city: '',
        state: '',
        zipCode: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardName: '',
        saveInfo: false,
    });

    const openCheckout = () => {
        setIsCheckoutOpen(true);
    };

    const closeCheckout = () => {
        setIsCheckoutOpen(false);
        setCheckoutStep(1); // Reset to first step
    };

    const nextStep = () => {
        if (checkoutStep < 3) {
            setCheckoutStep(checkoutStep + 1);
        }
    };

    const prevStep = () => {
        if (checkoutStep > 1) {
            setCheckoutStep(checkoutStep - 1);
        }
    };

    const updateFormData = (newData) => {
        setFormData(prev => ({ ...prev, ...newData }));
    };

    const value = {
        isCheckoutOpen,
        checkoutStep,
        formData,
        openCheckout,
        closeCheckout,
        nextStep,
        prevStep,
        updateFormData
    };

    return (
        <CheckoutContext.Provider value={value}>
            {children}
        </CheckoutContext.Provider>
    );
};