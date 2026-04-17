
import { useDispatch, useSelector } from "react-redux";
import { toggleLike, toggleFavorite } from "../features/events/eventsSlice";
import "../styles/actions.css";

const ActionButtons = ({ event }) => {
    const dispatch = useDispatch();
    const { likes, favorites } = useSelector(state => state.events);
    
    const isLiked = likes?.includes(event.id) || false;
    const isFavorite = favorites?.includes(event.id) || false;
    
    const handleLike = (e) => {
        e.stopPropagation();
        dispatch(toggleLike(event.id));
    };
    
    const handleFavorite = (e) => {
        e.stopPropagation();
        dispatch(toggleFavorite(event.id));
    };
    
    return (
        <div className="action-buttons">
            <button 
                className={`action-btn like-btn ${isLiked ? 'active' : ''}`}
                onClick={handleLike}
                title={isLiked ? "Unlike" : "Like"}
            >
                ❤️ 
            </button>
            
            <button 
                className={`action-btn favorite-btn ${isFavorite ? 'active' : ''}`}
                onClick={handleFavorite}
                title={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
                {isFavorite ? 'Favorited' : 'Favorite'}
            </button>
        </div>
    );
};

export default ActionButtons;