import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProtectedLayout from './layouts/ProtectedLayout/ProtectedLayout';
import PublicLayout from './layouts/PublicLayout/PublicLayout';

// Public Pages
import AboutPage from './pages/About/AboutPage';
import BlogPage from './pages/Blog/BlogPage';
import CategoriesPage from './pages/Categories/CategoriesPage';
import CategoryPage from './pages/Category/CategoryPage';
import ContactPage from './pages/Contact/ContactPage';
import FAQPage from './pages/FAQ/FAQPage';
import LandingPage from './pages/Landing/LandingPage';
import LoginPage from './pages/Login/LoginPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import PrivacyPage from './pages/Privacy/PrivacyPage';
import ProductDetailsPage from './pages/ProductDetails/ProductDetailsPage';
import ProductsPage from './pages/Products/ProductsPage';
import RegisterPage from './pages/Register/RegisterPage';
import ReturnsPage from './pages/Returns/ReturnsPage';
import SearchResultsPage from './pages/Search/SearchResultsPage';
import ShippingPage from './pages/Shipping/ShippingPage';
import TermsPage from './pages/Terms/TermsPage';

// Protected Pages
import CartPage from './pages/Cart/CartPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import OrdersPage from './pages/Orders/OrdersPage';
import ProfilePage from './pages/Profile/ProfilePage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route element={<PublicLayout />}>
                    <Route
                        path='/'
                        element={<LandingPage />}
                    />
                    <Route
                        path='/products'
                        element={<ProductsPage />}
                    />
                    <Route
                        path='/products/:id'
                        element={<ProductDetailsPage />}
                    />
                    <Route
                        path='/categories'
                        element={<CategoriesPage />}
                    />
                    <Route
                        path='/category/:categoryName'
                        element={<CategoryPage />}
                    />
                    <Route
                        path='/search'
                        element={<SearchResultsPage />}
                    />
                    <Route
                        path='/login'
                        element={<LoginPage />}
                    />
                    <Route
                        path='/register'
                        element={<RegisterPage />}
                    />
                    <Route
                        path='/about'
                        element={<AboutPage />}
                    />
                    <Route
                        path='/contact'
                        element={<ContactPage />}
                    />
                    <Route
                        path='/blog'
                        element={<BlogPage />}
                    />
                    <Route
                        path='/shipping'
                        element={<ShippingPage />}
                    />
                    <Route
                        path='/returns'
                        element={<ReturnsPage />}
                    />
                    <Route
                        path='/privacy'
                        element={<PrivacyPage />}
                    />
                    <Route
                        path='/faq'
                        element={<FAQPage />}
                    />
                    <Route
                        path='/terms'
                        element={<TermsPage />}
                    />
                </Route>

                {/* Protected Routes */}
                <Route element={<ProtectedLayout />}>
                    <Route
                        path='/cart'
                        element={<CartPage />}
                    />
                    <Route
                        path='/checkout'
                        element={<CheckoutPage />}
                    />
                    <Route
                        path='/orders'
                        element={<OrdersPage />}
                    />
                    <Route
                        path='/profile'
                        element={<ProfilePage />}
                    />
                </Route>

                {/* 404 Route */}
                <Route
                    path='*'
                    element={<NotFoundPage />}
                />
            </Routes>
        </Router>
    );
};

export default App;
