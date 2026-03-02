import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEvent, updateEvent } from "../features/events/eventsSlice";
import "../styles/neomorphic.css";
import "../styles/form.css";

const EventForm = ({ event, isEditing, onClose }) => {
    const dispatch = useDispatch();
    
    const [formData, setFormData] = useState({
        title: event?.title || "",
        artist: event?.artist || "",
        genre: event?.genre || "Synthwave",
        date: event?.date || "",
        time: event?.time || "",
        venue: event?.venue || "",
        city: event?.city || "",
        price: event?.price || "",
        description: event?.description || "",
        image: event?.image || "",
        ticketsAvailable: event?.ticketsAvailable || ""
    });

    const genres = ["Synthwave", "Electronic", "Ambient", "Hip Hop", "Rock", "Jazz", "Metal", "Pop"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isEditing && event) {
            dispatch(updateEvent({ id: event.id, updates: formData }));
        } else {
            const newEvent = {
                ...formData,
                id: Date.now(),
                price: Number(formData.price),
                ticketsAvailable: Number(formData.ticketsAvailable)
            };
            dispatch(addEvent(newEvent));
        }
        
        if (onClose) {
            onClose();
        }
    };

    return (
        <div className="form-overlay">
            <div className="form-container neomorphic">
                <h2 className="form-title shimmer-text">
                    {isEditing ? "Edit Event" : "Create New Event"}
                </h2>
                
                <form onSubmit={handleSubmit} className="event-form">
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Title *</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                className="form-input"
                                placeholder="Event title"
                            />
                        </div>

                        <div className="form-group">
                            <label>Artist *</label>
                            <input
                                type="text"
                                name="artist"
                                value={formData.artist}
                                onChange={handleChange}
                                required
                                className="form-input"
                                placeholder="Artist name"
                            />
                        </div>

                        <div className="form-group">
                            <label>Genre *</label>
                            <select
                                name="genre"
                                value={formData.genre}
                                onChange={handleChange}
                                required
                                className="form-select"
                            >
                                {genres.map(g => (
                                    <option key={g} value={g}>{g}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Date *</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label>Time *</label>
                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label>Venue *</label>
                            <input
                                type="text"
                                name="venue"
                                value={formData.venue}
                                onChange={handleChange}
                                required
                                className="form-input"
                                placeholder="Venue name"
                            />
                        </div>

                        <div className="form-group">
                            <label>City *</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                className="form-input"
                                placeholder="City"
                            />
                        </div>

                        <div className="form-group">
                            <label>Price ($) *</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                                min="0"
                                className="form-input"
                                placeholder="Price"
                            />
                        </div>

                        <div className="form-group full-width">
                            <label>Description *</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                className="form-textarea"
                                rows="4"
                                placeholder="Event description"
                            />
                        </div>

                        <div className="form-group full-width">
                            <label>Image URL *</label>
                            <input
                                type="url"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                required
                                className="form-input"
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>

                        <div className="form-group">
                            <label>Tickets Available *</label>
                            <input
                                type="number"
                                name="ticketsAvailable"
                                value={formData.ticketsAvailable}
                                onChange={handleChange}
                                required
                                min="1"
                                className="form-input"
                                placeholder="Number of tickets"
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button 
                            type="button" 
                            className="cancel-btn liquid-button"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="submit-btn liquid-button pulse-glow">
                            {isEditing ? "Update Event" : "Create Event"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EventForm;