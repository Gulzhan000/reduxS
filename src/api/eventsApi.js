// Минимум данных для концертов
const eventsData = [
    {
        id: 1,
        title: "Neon Dreams Live",
        artist: "Synth Collective",
        genre: "Synthwave",
        date: "2024-06-15",
        time: "20:00",
        venue: "The Grand Arena",
        city: "Los Angeles",
        price: 89,
        description: "Experience the synthwave sensation live! A night of retro-futuristic electronic music with stunning visuals.",
        image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ticketsAvailable: 250
    },
    {
        id: 2,
        title: "Liquid State Tour",
        artist: "Fluid Dynamics",
        genre: "Electronic",
        date: "2024-07-22",
        time: "21:30",
        venue: "Electric Ballroom",
        city: "London",
        price: 65,
        description: "Immerse yourself in flowing electronic soundscapes. A unique audiovisual experience.",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ticketsAvailable: 180
    },
    {
        id: 3,
        title: "Midnight Pulse",
        artist: "Dark Matter",
        genre: "Ambient",
        date: "2024-08-05",
        time: "22:00",
        venue: "The Underground",
        city: "Berlin",
        price: 45,
        description: "Deep atmospheric textures in an intimate venue. Perfect for late-night listening.",
        image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ticketsAvailable: 120
    },
    {
        id: 4,
        title: "Urban Flow Festival",
        artist: "City Vibes",
        genre: "Hip Hop",
        date: "2024-09-12",
        time: "18:00",
        venue: "City Park",
        city: "New York",
        price: 120,
        description: "The biggest hip-hop event of the summer. Multiple stages, food trucks, and more.",
        image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ticketsAvailable: 500
    }
];

const genresData = [
    { id: 1, name: "All" },
    { id: 2, name: "Synthwave" },
    { id: 3, name: "Electronic" },
    { id: 4, name: "Ambient" },
    { id: 5, name: "Hip Hop" }
];

// Функция для генерации цвета на основе жанра (будет использоваться в UI)
export const getGenreColor = (genre) => {
    const colors = {
        "Synthwave": "#FF1493",
        "Electronic": "#8A2BE2",
        "Ambient": "#9370DB",
        "Hip Hop": "#FF4500",
        "Rock": "#DC143C",
        "Jazz": "#FFD700",
        "Metal": "#2F4F4F",
        "Pop": "#00CED1",
        "All": "#8A2BE2"
    };
    return colors[genre] || "#8A2BE2";
};

// Имитация задержки сервера
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Получить все события
export const fetchEventsApi = async (genre = null) => {
    console.log(`API: Fetching events${genre ? ` for genre: ${genre}` : ''}...`);
    await delay(600);
    
    if (genre && genre !== "All") {
        return eventsData.filter(event => event.genre === genre);
    }
    return eventsData;
};

// Получить одно событие по id
export const fetchEventByIdApi = async (id) => {
    console.log(`API: Fetching event id=${id}...`);
    await delay(400);
    return eventsData.find(event => event.id === Number(id));
};

// Получить все жанры
export const fetchGenresApi = async () => {
    console.log("API: Fetching genres...");
    await delay(200);
    return genresData;
};

// Функции для сохранения в localStorage (чтобы данные не пропадали при перезагрузке)
export const saveEventsToStorage = (events) => {
    localStorage.setItem('voxel_events', JSON.stringify(events));
};

export const loadEventsFromStorage = () => {
    const saved = localStorage.getItem('voxel_events');
    return saved ? JSON.parse(saved) : null;
};