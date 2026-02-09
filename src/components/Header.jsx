import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/ui/uiSlice";
import "../styles/header.css";
import "../styles/neomorphic.css";
import "../styles/animations.css";

const Header = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.ui.theme);

    return (
        <header className={`header ${theme}`}>
            {/* Hero секция с картинкой */}
            <div className="hero-header">
                <div className="hero-overlay"></div>
                <div className="hero-content container">
                    {/* Навбар */}
                    <div className="top-nav">
                        <div className="logo">
                            <span className="logo-main">VOXEL</span>
                            <span className="logo-sub">Music Fluid</span>
                        </div>
                        
                        <nav className="nav">
                            {/* Просто текст без иконок */}
                            <a href="#" className="nav-link-simple">Home</a>
                            <a href="#" className="nav-link-simple">Discover</a>
                            <a href="#" className="nav-link-simple">Library</a>
                            <a href="#" className="nav-link-simple">Profile</a>
                        </nav>

                        <button
                            className="theme-btn liquid-button pulse-glow"
                            onClick={() => dispatch(toggleTheme())}
                        >
                            <span className="theme-icon">
                                {theme === 'light' ? '🌙' : '☀️'}
                            </span>
                            <span className="theme-text">
                                {theme === 'light' ? 'Dark' : 'Light'}
                            </span>
                        </button>
                    </div>

                    {/* Hero текст */}
                    <div className="hero-text">
                        <h1 className="hero-title shimmer-text">
                            <span className="hero-line">Dive Into</span>
                            <span className="hero-line">Liquid Sound</span>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;