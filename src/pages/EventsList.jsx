import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents, setSelectedEvent, deleteEvent, setShowForm, setEditingEvent } from "../features/events/eventsSlice";
import "../styles/neomorphic.css";

const EventsList = () => {
    const dispatch = useDispatch();
    const { events, status, currentGenre } = useSelector(state => state.events);

    useEffect(() => {
        dispatch(fetchEvents(currentGenre === 'All' ? null : currentGenre));
    }, [dispatch, currentGenre]);

    const handleDetailsClick = (event) => {
        dispatch(setSelectedEvent(event));
    };

    const handleEditClick = (e, event) => {
        e.stopPropagation(); // Предотвращаем всплытие события
        dispatch(setEditingEvent(event));
        dispatch(setShowForm(true));
    };

    const handleDeleteClick = (e, eventId) => {
        e.stopPropagation(); // Предотвращаем всплытие события
        if (window.confirm("Are you sure you want to delete this event?")) {
            dispatch(deleteEvent(eventId));
        }
    };

    if (status === 'loading') {
        return (
            <div className="events-loading container">
                <div className="loading-skeletons">
                    {[...Array(4)].map((_, i) => (
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
        );
    }

    return (
        <div className="events-list-container">
            <div className="container">
                <div className="list-header">
                    <h2 className="list-title shimmer-text">
                        {currentGenre === 'All' ? 'Upcoming Concerts' : `${currentGenre} Events`}
                    </h2>
                    <p className="list-count">{events.length} events</p>
                </div>

                <div className="events-grid">
                    {events.map((event) => (
                        <div key={event.id} className="event-card">
                            <div className="event-image">
                                <img src={event.image} alt={event.title} />
                                <div className="image-overlay"></div>
                                <span className="genre-tag" style={{ backgroundColor: event.color }}>
                                    {event.genre}
                                </span>
                                <span className="price-tag">${event.price}</span>
                            </div>

                            <div className="event-content">
                                <h3 className="event-title">{event.title}</h3>
                                <div className="event-artist">
                                    <span>Singer:</span> {event.artist}
                                </div>

                                <div className="event-details">
                                    <div className="detail-item date-large">
                                        Date: {new Date(event.date).toLocaleDateString('en-US', { 
                                            day: '2-digit', 
                                            month: '2-digit', 
                                            year: 'numeric' 
                                        }).replace(/\//g, '.')}
                                    </div>
                                </div>

                                <div className="event-actions">
                                    <button
                                        className="edit-btn"
                                        onClick={(e) => handleEditClick(e, event)}
                                    >
                                        ✏️ Edit
                                    </button>
                                    <button
                                        className="delete-btn"
                                        onClick={(e) => handleDeleteClick(e, event.id)}
                                    >
                                        🗑️ Delete
                                    </button>
                                    <button
                                        className="view-btn"
                                        onClick={() => handleDetailsClick(event)}
                                    >
                                        👁️ View
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventsList;