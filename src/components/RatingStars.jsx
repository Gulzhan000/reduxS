
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRating } from "../features/events/eventsSlice";
import "../styles/rating.css";

const RatingStars = ({ eventId, currentRating, readonly = false, size = "medium" }) => {
    const dispatch = useDispatch();
    const [hoverRating, setHoverRating] = useState(0);
    const [localRating, setLocalRating] = useState(currentRating || 0);

    useEffect(() => {
        setLocalRating(currentRating || 0);
    }, [currentRating]);
    
    const stars = [1, 2, 3, 4, 5];
    
    const handleRating = (rating) => {
        if (readonly) return;
        setLocalRating(rating);
        dispatch(addRating({ eventId, rating }));
    };
    
    const getStarSize = () => {
        switch(size) {
            case "small": return "18px";
            case "large": return "32px";
            default: return "24px";
        }
    };
    
    return (
        <div className="rating-stars">
            {stars.map(star => (
                <span
                    key={star}
                    className={`star ${star <= (hoverRating || localRating) ? 'filled' : ''} ${readonly ? 'readonly' : ''}`}
                    onClick={() => handleRating(star)}
                    onMouseEnter={() => !readonly && setHoverRating(star)}
                    onMouseLeave={() => !readonly && setHoverRating(0)}
                    style={{
                        fontSize: getStarSize(),
                        cursor: readonly ? 'default' : 'pointer'
                    }}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default RatingStars;