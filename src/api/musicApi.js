// Фейковый JSON музыкальных данных с картинками
const musicData = [
    {
        id: 1,
        title: "Neon Dreams",
        artist: "Synth Collective",
        genre: "Synthwave",
        duration: "3:45",
        bpm: 128,
        mood: "Nostalgic",
        description: "A retro-futuristic journey through neon-lit cityscapes. This track combines vintage synthesizers with modern production techniques to create a sound that's both nostalgic and forward-thinking. Perfect for late-night drives or cyberpunk-inspired gaming sessions.",
        plays: 12500,
        likes: 2400,
        color: "#FF1493",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        releaseDate: "2024-03-15",
        tags: ["Cyberpunk", "Retro", "Electronic", "80s"],
        similarTracks: ["Midnight City", "Digital Love", "Blinding Lights"]
    },
    {
        id: 2,
        title: "Liquid State",
        artist: "Fluid Dynamics",
        genre: "Electronic",
        duration: "4:20",
        bpm: 110,
        mood: "Calm",
        description: "Flowing melodies that mimic water currents. This ambient electronic piece uses generative algorithms to create ever-evolving soundscapes that never repeat exactly the same way twice. Ideal for meditation, work, or relaxation.",
        plays: 8900,
        likes: 1800,
        color: "#8A2BE2",
        image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        releaseDate: "2024-02-28",
        tags: ["Ambient", "Generative", "Experimental", "Chill"],
        similarTracks: ["Waterfalls", "Ocean Eyes", "Flow State"]
    },
    {
        id: 3,
        title: "Midnight Pulse",
        artist: "Dark Matter",
        genre: "Ambient",
        duration: "5:15",
        bpm: 90,
        mood: "Mysterious",
        description: "Deep atmospheric textures with subtle rhythmic pulses. This track explores the boundaries between ambient music and deep techno, creating a hypnotic experience that pulls you into its sonic universe. Features field recordings from abandoned industrial sites.",
        plays: 15600,
        likes: 3200,
        color: "#9370DB",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        releaseDate: "2024-01-10",
        tags: ["Dark", "Atmospheric", "Industrial", "Hypnotic"],
        similarTracks: ["Black Hole", "Void", "Eclipse"]
    },
    {
        id: 4,
        title: "Urban Flow",
        artist: "City Vibes",
        genre: "Hip Hop",
        duration: "3:30",
        bpm: 95,
        mood: "Urban",
        description: "Smooth beats with urban atmosphere. Capturing the essence of city life after dark, this track blends traditional hip-hop elements with modern lo-fi aesthetics. Features sampled street sounds and vinyl crackle for authentic warmth.",
        plays: 21000,
        likes: 4500,
        color: "#FF4500",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        releaseDate: "2024-04-05",
        tags: ["Lo-Fi", "City", "Chillhop", "Street"],
        similarTracks: ["City Lights", "Night Drive", "Urban Jungle"]
    },
    {
        id: 5,
        title: "Digital Waves",
        artist: "Binary Soul",
        genre: "Electronic",
        duration: "4:05",
        bpm: 125,
        mood: "Energetic",
        description: "Digital soundscapes with fluid transitions. Pushing the boundaries of electronic music with complex rhythm patterns and evolving synthesizer textures. This track is built around a central algorithm that generates unique variations with each play.",
        plays: 14300,
        likes: 2900,
        color: "#00CED1",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        releaseDate: "2024-03-22",
        tags: ["Algorithmic", "Progressive", "Futuristic", "Tech"],
        similarTracks: ["Digital Native", "Code Flow", "Binary Beats"]
    }
];

const genresData = [
    { id: 1, name: "Synthwave", color: "#FF1493", icon: "🌃", description: "Retro-futuristic electronic music" },
    { id: 2, name: "Electronic", color: "#8A2BE2", icon: "⚡", description: "Diverse electronic sounds" },
    { id: 3, name: "Ambient", color: "#9370DB", icon: "🌌", description: "Atmospheric soundscapes" },
    { id: 4, name: "Hip Hop", color: "#FF4500", icon: "🎤", description: "Urban beats and rhymes" },
    { id: 5, name: "Lo-Fi", color: "#00CED1", icon: "☕", description: "Chill, relaxed beats" },
    { id: 6, name: "Rock", color: "#DC143C", icon: "🎸", description: "Guitar-driven music" },
    { id: 7, name: "Jazz", color: "#FFD700", icon: "🎷", description: "Improvisational classics" },
    { id: 8, name: "Metal", color: "#2F4F4F", icon: "🤘", description: "Heavy and powerful" }
];

// Имитация задержки сервера
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Получить все треки
export const fetchTracksApi = async (genre = null) => {
    console.log(`API: Fetching tracks${genre ? ` for genre: ${genre}` : ''}...`);
    await delay(800);
    
    if (genre && genre !== "All") {
        return musicData.filter(track => track.genre === genre);
    }
    return musicData;
};

// Получить один трек по id
export const fetchTrackByIdApi = async (id) => {
    console.log(`API: Fetching track id=${id}...`);
    await delay(500);
    return musicData.find(track => track.id === Number(id));
};

// Получить все жанры
export const fetchGenresApi = async () => {
    console.log("API: Fetching genres...");
    await delay(300);
    return genresData;
};