import { useEffect } from "react";
import { useSelector } from "react-redux";
import GenreButtons from "../components/GenreButtons";
import MusicList from "./MusicList";
import MusicDetail from "./MusicDetail";
import "../styles/home.css";
import "../styles/neomorphic.css";
import "../styles/animations.css";

const Home = () => {
    const theme = useSelector(state => state.ui.theme);
    const { selectedTrack } = useSelector(state => state.music);
    
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <main className={`home ${theme}`}>
            {/* Жидкий фон */}
            <div className="fluid-background"></div>
            
            {/* Основной контент */}
            {selectedTrack ? (
                <MusicDetail track={selectedTrack} />
            ) : (
                <>
                    {/* Кнопки жанров */}
                    <div className="genre-section-wrapper">
                        <GenreButtons />
                    </div>

                    {/* Список треков */}
                    <MusicList />

                    {/* Дополнительные секции */}
                    <div className="features-section container">
                        <h3 className="section-title shimmer-text">Why Voxel?</h3>
                        <div className="features-grid">
                            <div className="feature-card neomorphic">
                                <div className="feature-icon">🎧</div>
                                <h4>Lossless Audio</h4>
                                <p>Experience music in studio quality with our high-fidelity streaming</p>
                            </div>
                            <div className="feature-card neomorphic">
                                <div className="feature-icon">🌀</div>
                                <h4>Adaptive Flow</h4>
                                <p>Music that adapts to your mood and listening habits in real-time</p>
                            </div>
                            <div className="feature-card neomorphic">
                                <div className="feature-icon">🎨</div>
                                <h4>Visual Sound</h4>
                                <p>Each track comes with unique visualizers that respond to the music</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </main>
    );
};

export default Home;