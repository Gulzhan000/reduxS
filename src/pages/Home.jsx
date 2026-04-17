import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import GenreButtons from "../components/GenreButtons";
import EventsList from "./EventsList";
import EventDetail from "./EventDetail";
import EventForm from "../components/EventForm";
import { setShowForm, setEditingEvent } from "../features/events/eventsSlice";
import "../styles/home.css";
import "../styles/neomorphic.css";

const Home = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.ui.theme);
    const { selectedEvent, showForm, editingEvent } = useSelector(state => state.events);
    
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const handleCloseForm = () => {
        dispatch(setShowForm(false));
        dispatch(setEditingEvent(null));
    };

    return (
        <main className={`home ${theme}`}>
            <div className="fluid-background"></div>
            
            {selectedEvent ? (
                <EventDetail event={selectedEvent} />
            ) : (
                <>
                    <div className="genre-section-wrapper">
                        <GenreButtons />
                    </div>
                    <EventsList />
                    
                  
                    {showForm && (
                        <EventForm 
                            event={editingEvent}
                            isEditing={!!editingEvent}
                            onClose={handleCloseForm}
                        />
                    )}
                </>
            )}
        </main>
    );
};

export default Home;