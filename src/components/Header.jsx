import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/ui/uiSlice";
import "../styles/header.css";
import "../styles/neomorphic.css";

const Header = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.ui.theme);

    return (
        <header className={`header ${theme}`}>
            <div className="hero-header">
                <div className="hero-overlay"></div>
                <div className="hero-content container">
                    <div className="top-nav">
                        <div className="logo">
                            <span className="logo-main">VOXEL</span>
                            <span className="logo-sub">Concert Tickets</span>
                        </div>
                        
                        <nav className="nav">
                            <a href="#" className="nav-link-simple">Home</a>
                            <a href="#" className="nav-link-simple">Concerts</a>
                            <a href="#" className="nav-link-simple">My Tickets</a>
                            <a href="#" className="nav-link-simple">Profile</a>
                        </nav>

                        <button
                            className="theme-btn liquid-button"
                            onClick={() => dispatch(toggleTheme())}
                        >
                            {theme === 'light' ? '🌙' : '☀️'}
                        </button>
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