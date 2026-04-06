import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { register } from "../features/auth/authSlice";
import "../styles/neomorphic.css";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuth, error } = useSelector(state => state.auth);
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [passwordError, setPasswordError] = useState("");
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        if (e.target.name === "confirmPassword" || e.target.name === "password") {
            if (e.target.name === "confirmPassword" && form.password !== e.target.value) {
                setPasswordError("Passwords do not match");
            } else if (e.target.name === "password" && form.confirmPassword !== e.target.value) {
                setPasswordError("Passwords do not match");
            } else {
                setPasswordError("");
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (form.password !== form.confirmPassword) {
            setPasswordError("Passwords do not match");
            return;
        }
        
        if (form.password.length < 6) {
            setPasswordError("Password must be at least 6 characters");
            return;
        }
        
        dispatch(register({ email: form.email, password: form.password }));
    };
    if (isAuth) {
        navigate("/");
        return null;
    }

    return (
        <div className="container" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="detail-section neomorphic" style={{ maxWidth: '500px', width: '100%' }}>
                <h2 className="section-title shimmer-text" style={{ textAlign: 'center' }}>Create Account</h2>
                <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '30px' }}>
                    Join Voxel to book concert tickets
                </p>

                {error && (
                    <div className="error-message" style={{ color: '#ff6b6b', marginBottom: '15px', textAlign: 'center' }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="event-form">
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            onChange={handleChange}
                            value={form.email}
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Create a password (min 6 characters)"
                            onChange={handleChange}
                            value={form.password}
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                            onChange={handleChange}
                            value={form.confirmPassword}
                            required
                            className="form-input"
                        />
                    </div>

                    {passwordError && (
                        <div style={{ color: '#ff6b6b', fontSize: '0.85rem', marginTop: '-10px' }}>
                            {passwordError}
                        </div>
                    )}

                    <button type="submit" className="submit-btn liquid-button pulse-glow" style={{ width: '100%' }}>
                        Register
                    </button>
                </form>

                <p style={{ marginTop: '20px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                    Already have an account?{' '}
                    <a href="/login" style={{ color: 'var(--fluid-cyan)', textDecoration: 'none' }}>
                        Login here
                    </a>
                </p>
            </div>
        </div>
    );
};
export default Register;