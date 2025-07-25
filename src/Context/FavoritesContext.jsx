import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
};

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false); // Track if we've loaded from localStorage

    // Load favorites from localStorage ONLY on component mount
    useEffect(() => {
        try {
            const savedFavorites = localStorage.getItem('robos-favorites');
            if (savedFavorites) {
                const parsedFavorites = JSON.parse(savedFavorites);
                if (Array.isArray(parsedFavorites)) {
                    setFavorites(parsedFavorites);
                }
            }
        } catch (error) {
            console.error('Failed to load favorites from localStorage:', error);
            // If there's an error, clear the corrupted data
            localStorage.removeItem('robos-favorites');
        }
        setIsLoaded(true); // Mark as loaded
    }, []); // Empty dependency array - only runs once on mount

    // Save favorites to localStorage ONLY after initial load and when favorites actually change
    useEffect(() => {
        if (isLoaded) { // Only save after we've loaded initial data
            try {
                localStorage.setItem('robos-favorites', JSON.stringify(favorites));
                console.log('Favorites saved to localStorage:', favorites); // Debug log
            } catch (error) {
                console.error('Failed to save favorites to localStorage:', error);
            }
        }
    }, [favorites, isLoaded]); // Only runs when favorites change AND we've loaded initial data

    const addToFavorites = (product) => {
        setFavorites(prev => {
            // Check if product is already in favorites
            const existingIndex = prev.findIndex(fav => fav.id === product.id);
            if (existingIndex !== -1) {
                console.log('Product already in favorites:', product.name);
                return prev; // Don't add duplicates
            }
            console.log('Adding to favorites:', product.name);
            return [...prev, product];
        });
    };

    const removeFromFavorites = (productId) => {
        setFavorites(prev => {
            const filtered = prev.filter(fav => fav.id !== productId);
            console.log('Removing from favorites, new count:', filtered.length);
            return filtered;
        });
    };

    const toggleFavorite = (product) => {
        const isAlreadyFavorite = favorites.find(fav => fav.id === product.id);
        
        if (isAlreadyFavorite) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product);
        }
    };

    const isFavorite = (productId) => {
        return favorites.some(fav => fav.id === productId);
    };

    const clearAllFavorites = () => {
        console.log('Clearing all favorites');
        setFavorites([]);
    };

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        toggleFavorite,
        isFavorite,
        clearAllFavorites,
        favoritesCount: favorites.length,
        isLoaded // Export this so components can check if data is ready
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
};