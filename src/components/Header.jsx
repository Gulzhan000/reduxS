import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleTheme } from "../features/ui/uiSlice";
import { logout } from "../features/auth/authSlice";
import "../styles/header.css";
import "../styles/neomorphic.css";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useSelector(state => state.ui.theme);
    const { isAuth, user } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
        alert("You have been logged out");
    };
    const getUserName = () => {
        if (user?.email) {
            return user.email.split('@')[0];
        }
        return "";
    };

    return (
        <header className={`header ${theme}`}>
            <div className="hero-header">
                <div className="hero-overlay"></div>
                <div className="hero-content container">
                    <div className="top-nav">
                        <div className="logo">
                            <a href="/" style={{ textDecoration: 'none' }}>
                                <span className="logo-main">VOXEL</span>
                            </a>
                        </div>
                        
                        <nav className="nav">
                            <a href="/" className="nav-link-simple">Home</a>
                            <a href="/concerts" className="nav-link-simple">Concerts</a>
                            {isAuth && <a href="/my-tickets" className="nav-link-simple">My Tickets</a>}
                        </nav>

                        <div className="auth-buttons">
                            {isAuth ? (
                                <>
                                    <span className="user-email">
                                        {getUserName()}
                                    </span>
                                    <button className="theme-btn liquid-button" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <a href="/login" className="nav-link-simple">Login</a>
                                    <a href="/register" className="nav-link-simple">Register</a>
                                </>
                            )}
                            <button
                                className="theme-btn liquid-button"
                                onClick={() => dispatch(toggleTheme())}
                            >
                                {theme === 'light' ? '🌙' : '☀️'}
                            </button>
                        </div>
                    </div>

                    <div className="hero-text">
                        <h1 className="hero-title shimmer-text">
                            <span className="hero-line">Live Music</span>
                            <span className="hero-line">Awaits You</span>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;