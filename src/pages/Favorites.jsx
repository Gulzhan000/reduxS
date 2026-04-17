
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchEvents, setSelectedEvent, setCurrentGenre, deleteEvent, setShowForm, setEditingEvent } from "../features/events/eventsSlice";
import RatingStars from "../components/RatingStars";
import ActionButtons from "../components/ActionButtons";
import EventForm from "../components/EventForm";
import "../styles/home.css";
import "../styles/neomorphic.css";

const Favorites = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { events, favorites, status, showForm, editingEvent } = useSelector(state => state.events);
    const theme = useSelector(state => state.ui.theme);
    
    const favoriteEvents = events.filter(event => favorites?.includes(event.id) || false);
    
    useEffect(() => {
        if (status === 'idle' && events.length === 0) {
            dispatch(fetchEvents());
        }
    }, [dispatch, status, events.length]);
    
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    
    const handleDetailsClick = (event) => {
        dispatch(setSelectedEvent(event));
        navigate("/");
    };
    
    const handleEditClick = (e, event) => {
        e.stopPropagation();
        dispatch(setEditingEvent(event));
        dispatch(setShowForm(true));
    };
    
    const handleDeleteClick = (e, eventId) => {
        e.stopPropagation();
        if (window.confirm("Are you sure you want to delete this event?")) {
            dispatch(deleteEvent(eventId));
        }
    };
    
    const handleBrowseAll = () => {
        dispatch(setCurrentGenre("All"));
        navigate("/");
    };
    
    const handleCloseForm = () => {
        dispatch(setShowForm(false));
        dispatch(setEditingEvent(null));
    };
    
    if (status === 'loading') {
        return (
            <div className={`home ${theme}`}>
                <div className="fluid-background"></div>
                <div className="events-loading container">
                    <div className="loading-skeletons">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="event-skeleton">
                                <div className="skeleton-img skeleton"></div>
                                <div className="skeleton-content">
                                    <div className="skeleton-title skeleton"></div>
                                    <div className="skeleton-artist skeleton"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    
    return (
        <div className={`home ${theme}`}>
            <div className="fluid-background"></div>
            
            <div className="events-list-container">
                <div className="container">
                    <div className="list-header" style={{ justifyContent: 'center' }}>
                        <h2 className="list-title shimmer-text" style={{ textAlign: 'center' }}>
                            My Favorite Events
                        </h2>
                        <p className="list-count">{favoriteEvents.length} events</p>
                    </div>
                    
                    {favoriteEvents.length === 0 ? (
                        <div style={{
                            textAlign: 'center',
                            padding: '60px 20px',
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '20px',
                            marginTop: '40px'
                        }}>
                            <div style={{ fontSize: '64px', marginBottom: '20px' }}>⭐</div>
                            <h3 style={{ marginBottom: '10px' }}>No favorites yet</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
                                Start adding events to your favorites by clicking the star button on any concert
                            </p>
                            <button 
                                onClick={handleBrowseAll}
                                className="create-button"
                                style={{ margin: '0 auto' }}
                            >
                                Browse Concerts
                            </button>
                        </div>
                    ) : (
                        <div className="events-grid">
                            {favoriteEvents.map((event) => (
                                <div key={event.id} className="event-card">
                                    <div className="event-image">
                                        <img src={event.image} alt={event.title} />
                                        <div className="image-overlay"></div>
                                        <span className="genre-tag" style={{ backgroundColor: event.color }}>
                                            {event.genre}
                                        </span>
                                        <span className="price-tag">${event.price}</span>
                                    </div>

                                    <div className="event-content" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                                        <h3 className="event-title" style={{ textAlign: 'left', width: '100%' }}>{event.title}</h3>
                                        <div className="event-artist" style={{ textAlign: 'left', width: '100%' }}>
                                            Singer: {event.artist}
                                        </div>

                                        <div className="event-date" style={{ marginBottom: '12px', textAlign: 'left', width: '100%' }}>
                                            <span className="date-large">
                                                Date: {new Date(event.date).toLocaleDateString('en-US', { 
                                                    day: '2-digit', 
                                                    month: '2-digit', 
                                                    year: 'numeric' 
                                                }).replace(/\//g, '.')}
                                            </span>
                                        </div>

                                        <div className="event-rating-section" style={{ width: '100%' }}>
                                            <div className="rating-header" style={{ textAlign: 'left' }}>
                                                <span className="rating-label">Rate this event:</span>
                                            </div>
                                            <RatingStars 
                                                eventId={event.id} 
                                                currentRating={event.userRating}
                                                size="small"
                                            />
                                            {event.averageRating > 0 && (
                                                <div className="average-rating-mini" style={{ textAlign: 'left' }}>
                                                    <span>{event.averageRating}/5</span>
                                                </div>
                                            )}
                                        </div>

                                        <ActionButtons event={event} />

                                        <div className="event-actions" style={{ width: '100%', display: 'flex', gap: '8px', marginTop: 'auto' }}>
                                            <button
                                                className="edit-btn"
                                                onClick={(e) => handleEditClick(e, event)}
                                                style={{ flex: 1, padding: '8px 5px' }}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="delete-btn"
                                                onClick={(e) => handleDeleteClick(e, event.id)}
                                                style={{ flex: 1, padding: '8px 5px' }}
                                            >
                                                Delete
                                            </button>
                                            <button
                                                className="view-btn"
                                                onClick={() => handleDetailsClick(event)}
                                                style={{ flex: 1, padding: '8px 5px' }}
                                            >
                                                View
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            
            {showForm && (
                <EventForm 
                    event={editingEvent}
                    isEditing={!!editingEvent}
                    onClose={handleCloseForm}
                />
            )}
        </div>
    );
};

export default Favorites;