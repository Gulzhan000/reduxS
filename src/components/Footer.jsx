import "../styles/footer.css";
import "../styles/neomorphic.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const footerLinks = [
        { text: "About Voxel", url: "#" },
        { text: "Privacy", url: "#" },
        { text: "Terms", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Blog", url: "#" },
        { text: "Help", url: "#" }
    ];

    const socialLinks = [
        { name: "SoundCloud", url: "#" },
        { name: "App", url: "#" },
        { name: "Twitter", url: "#" },
        { name: "Instagram", url: "#" }
    ];

    return (
        <footer className="footer neomorphic">
            <div className="container">
                <div className="footer-content">
                    {/* Бренд */}
                    <div className="footer-brand">
                        <h3 className="footer-logo shimmer-text">VOXEL</h3>
                        <p className="footer-tagline">
                            Where music flows like liquid
                        </p>
                    </div>

                    {/* Ссылки */}
                    <div className="footer-sections">
                        <div className="footer-section">
                            <h4>Explore</h4>
                            <div className="footer-links">
                                {footerLinks.slice(0, 3).map((link, index) => (
                                    <a 
                                        key={index} 
                                        href={link.url}
                                        className="footer-link"
                                    >
                                        {link.text}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="footer-section">
                            <h4>Connect</h4>
                            <div className="footer-links">
                                {socialLinks.map((social, index) => (
                                    <a 
                                        key={index} 
                                        href={social.url}
                                        className="social-link"
                                    >
                                        <span className="social-icon">{social.icon}</span>
                                        <span>{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Копирайт */}
                    <div className="footer-bottom">
                        <p className="copyright">
                            © {currentYear} Voxel Music. All sounds are liquid.
                        </p>
                        <div className="tech-stack">
                            <span className="tech-badge">React</span>
                            <span className="tech-badge">Redux</span>
                            <span className="tech-badge">Neomorphic</span>
                            <span className="tech-badge">Web Audio</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;