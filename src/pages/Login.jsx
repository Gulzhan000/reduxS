import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/auth/authSlice";
import "../styles/neomorphic.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, error } = useSelector(state => state.auth);
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };
  if (isAuth) {
    navigate("/");
    return null;
  }

  return (
    <div className="container" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="detail-section neomorphic" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="section-title shimmer-text" style={{ textAlign: 'center' }}>Login to Voxel</h2>
        <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '30px' }}>
          Access your concert tickets and bookings
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
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <button type="submit" className="submit-btn liquid-button pulse-glow" style={{ width: '100%' }}>
            Login
          </button>
        </form>

        <p style={{ marginTop: '20px', textAlign: 'center', color: 'var(--text-secondary)' }}>
          Don't have an account?{' '}
          <a href="/register" style={{ color: 'var(--fluid-cyan)', textDecoration: 'none' }}>
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;