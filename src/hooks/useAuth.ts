import { useCallback, useEffect, useState } from 'react';

interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}

export const useAuth = () => {
    const [authState, setAuthState] = useState<AuthState>({
        user: null,
        isAuthenticated: false,
        isLoading: true,
    });

    // Check if user is authenticated on mount
    useEffect(() => {
        const checkAuth = async () => {
            try {
                // Get token from localStorage
                const token = localStorage.getItem('auth_token');

                if (!token) {
                    setAuthState({
                        user: null,
                        isAuthenticated: false,
                        isLoading: false,
                    });
                    return;
                }

                // TODO: Replace with actual API call to validate token and get user data
                // For now, we'll simulate a successful authentication
                const mockUser: User = {
                    id: '1',
                    email: 'user@example.com',
                    firstName: 'John',
                    lastName: 'Doe',
                };

                setAuthState({
                    user: mockUser,
                    isAuthenticated: true,
                    isLoading: false,
                });
            } catch (error) {
                console.error('Authentication check failed:', error);
                setAuthState({
                    user: null,
                    isAuthenticated: false,
                    isLoading: false,
                });
            }
        };

        checkAuth();
    }, []);

    const login = useCallback(async (email: string, password: string) => {
        try {
            // TODO: Replace with actual API call
            // For now, we'll simulate a successful login
            const mockUser: User = {
                id: '1',
                email,
                firstName: 'John',
                lastName: 'Doe',
            };

            // Store token in localStorage
            localStorage.setItem('auth_token', 'mock_token');

            setAuthState({
                user: mockUser,
                isAuthenticated: true,
                isLoading: false,
            });

            return true;
        } catch (error) {
            console.error('Login failed:', error);
            return false;
        }
    }, []);

    const logout = useCallback(() => {
        // Remove token from localStorage
        localStorage.removeItem('auth_token');

        setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
        });
    }, []);

    const register = useCallback(
        async (userData: {
            email: string;
            password: string;
            firstName: string;
            lastName: string;
        }) => {
            try {
                // TODO: Replace with actual API call
                // For now, we'll simulate a successful registration
                const mockUser: User = {
                    id: '1',
                    email: userData.email,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                };

                // Store token in localStorage
                localStorage.setItem('auth_token', 'mock_token');

                setAuthState({
                    user: mockUser,
                    isAuthenticated: true,
                    isLoading: false,
                });

                return true;
            } catch (error) {
                console.error('Registration failed:', error);
                return false;
            }
        },
        [],
    );

    return {
        user: authState.user,
        isAuthenticated: authState.isAuthenticated,
        isLoading: authState.isLoading,
        login,
        logout,
        register,
    };
};
