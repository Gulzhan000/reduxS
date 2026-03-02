import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearSelectedEvent } from "../features/events/eventsSlice";
import "../styles/neomorphic.css";

const EventDetail = ({ event }) => {
    const dispatch = useDispatch();
    const [ticketCount, setTicketCount] = useState(1);

    const handleBack = () => {
        dispatch(clearSelectedEvent());
    };

    const handleTicketChange = (e) => {
        setTicketCount(Number(e.target.value));
    };

    const handleBookNow = () => {
        const totalPrice = event.price * ticketCount;
        alert(`Booking ${ticketCount} ticket(s) for ${event.title}!\nTotal: $${totalPrice}`);
    };

    if (!event) return null;

    const totalPrice = event.price * ticketCount;

    return (
        <div className="event-detail-container">
            <div className="detail-hero">
                <div className="hero-background" style={{ backgroundImage: `url(${event.image})` }}></div>
                <div className="hero-overlay"></div>
                
                <div className="container">
                    <button className="back-btn liquid-button" onClick={handleBack}>
                        ← Back to Events
                    </button>

                    <div className="hero-content">
                        <div className="event-meta">
                            <span className="genre-badge" style={{ backgroundColor: event.color }}>
                                {event.genre}
                            </span>
                            <span className="date-badge">
                                {new Date(event.date).toLocaleDateString('en-US', { 
                                    weekday: 'long', 
                                    month: 'long', 
                                    day: 'numeric' 
                                })}
                            </span>
                        </div>

                        <h1 className="event-title shimmer-text">{event.title}</h1>
                        <h2 className="event-artist">🎤 {event.artist}</h2>

                        <div className="event-stats-hero">
                            <div className="stat-circle">
                                <div className="stat-label">TIME</div>
                                <div className="stat-value">{event.time}</div>
                            </div>
                            <div className="stat-circle">
                                <div className="stat-label">WHERE</div>
                                <div className="stat-value">{event.venue}</div>
                            </div>
                            <div className="stat-circle">
                                <div className="stat-label">CITY</div>
                                <div className="stat-value">{event.city}</div>
                            </div>
                            <div className="stat-circle">
                                <div className="stat-label">SOLD</div>
                                <div className="stat-value">{event.ticketsAvailable} left</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="detail-content container">
                <div className="content-grid">
                    <div className="left-column">
                        <div className="detail-section neomorphic">
                            <h3 className="section-title">About This Event</h3>
                            <p className="event-description">{event.description}</p>
                        </div>

                        <div className="detail-section neomorphic">
                            <h3 className="section-title">Location & Venue</h3>
                            <div className="venue-info">
                                <p><strong>{event.venue}</strong></p>
                                <p>{event.city}</p>
                                <p className="venue-note">Doors open 1 hour before</p>
                            </div>
                        </div>
                    </div>

                    <div className="right-column">
                        <div className="detail-section neomorphic booking-section">
                            <h3 className="section-title">Book Tickets</h3>
                            
                            <div className="price-box">
                                <span>Price per ticket</span>
                                <span className="price-value">${event.price}</span>
                            </div>

                            <div className="ticket-selector">
                                <label>Number of tickets</label>
                                <select 
                                    className="ticket-select" 
                                    value={ticketCount}
                                    onChange={handleTicketChange}
                                >
                                    <option value={1}>1 ticket</option>
                                    <option value={2}>2 tickets</option>
                                    <option value={3}>3 tickets</option>
                                    <option value={4}>4 tickets</option>
                                    <option value={5}>5 tickets</option>
                                </select>
                            </div>

                            <div className="total-price">
                                <span>Total:</span>
                                <span className="total-amount">${totalPrice}</span>
                            </div>

                            <button className="book-now-btn liquid-button" onClick={handleBookNow}>
                                🎟️ Book Now
                            </button>

                            <p className="secure-booking">🔒 Secure booking • Instant confirmation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;