
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
        ticketsAvailable: 250,
        averageRating: 4.5,
        ratingsCount: 128
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
        ticketsAvailable: 180,
        averageRating: 4.2,
        ratingsCount: 95
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
        ticketsAvailable: 120,
        averageRating: 4.7,
        ratingsCount: 203
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
        ticketsAvailable: 500,
        averageRating: 4.8,
        ratingsCount: 312
    },
    {
        id: 5,
        title: "Electric Echoes",
        artist: "Neon Pulse",
        genre: "Electronic",
        date: "2024-10-01",
        time: "19:30",
        venue: "Warehouse 44",
        city: "Chicago",
        price: 55,
        description: "An immersive electronic music experience with cutting-edge visuals and sound design.",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ticketsAvailable: 300,
        averageRating: 4.3,
        ratingsCount: 67
    },
    {
        id: 6,
        title: "Rock Revolution",
        artist: "Thunderstrike",
        genre: "Rock",
        date: "2024-10-15",
        time: "20:00",
        venue: "Stadium Arena",
        city: "Boston",
        price: 75,
        description: "High-energy rock concert featuring the best of classic and modern rock.",
        image: "https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ticketsAvailable: 450,
        averageRating: 4.6,
        ratingsCount: 189
    },
    {
        id: 7,
        title: "Jazz Under Stars",
        artist: "Midnight Quartet",
        genre: "Jazz",
        date: "2024-11-05",
        time: "21:00",
        venue: "Jazz Club",
        city: "New Orleans",
        price: 60,
        description: "An intimate evening of smooth jazz under the stars. Perfect for a romantic night out.",
        image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ticketsAvailable: 80,
        averageRating: 4.9,
        ratingsCount: 245
    },
    {
        id: 8,
        title: "Metal Mayhem",
        artist: "Iron Legion",
        genre: "Metal",
        date: "2024-11-20",
        time: "22:00",
        venue: "Metal Hall",
        city: "Detroit",
        price: 70,
        description: "The heaviest metal concert of the year. Prepare for headbanging and mosh pits!",
        image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ticketsAvailable: 200,
        averageRating: 4.4,
        ratingsCount: 156
    },
    {
        id: 9,
        title: "Pop Extravaganza",
        artist: "Starlight",
        genre: "Pop",
        date: "2024-12-10",
        time: "19:00",
        venue: "Grand Theater",
        city: "Miami",
        price: 95,
        description: "A spectacular pop music show with dazzling performances and special effects.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ticketsAvailable: 350,
        averageRating: 4.1,
        ratingsCount: 234
    },
    {
        id: 10,
        title: "Synthwave Sunset",
        artist: "Retro Future",
        genre: "Synthwave",
        date: "2024-12-25",
        time: "20:30",
        venue: "Beach Club",
        city: "Santa Monica",
        price: 85,
        description: "A magical synthwave experience during sunset on the beach. Retro vibes all night long.",
        image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ticketsAvailable: 150,
        averageRating: 4.7,
        ratingsCount: 178
    }
];

// Данные жанров
const genresData = [
    { id: 1, name: "All", color: "#8A2BE2" },
    { id: 2, name: "Synthwave", color: "#FF1493" },
    { id: 3, name: "Electronic", color: "#8A2BE2" },
    { id: 4, name: "Ambient", color: "#9370DB" },
    { id: 5, name: "Hip Hop", color: "#FF4500" },
    { id: 6, name: "Rock", color: "#DC143C" },
    { id: 7, name: "Jazz", color: "#FFD700" },
    { id: 8, name: "Metal", color: "#2F4F4F" },
    { id: 9, name: "Pop", color: "#00CED1" }
];

// Функция для получения цвета жанра
export const getGenreColor = (genre) => {
    const genreItem = genresData.find(g => g.name === genre);
    return genreItem ? genreItem.color : "#8A2BE2";
};

// Имитация задержки сервера
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Получить все события (с фильтрацией по жанру)
export const fetchEventsApi = async (genre = null) => {
    console.log(`API: Fetching events${genre ? ` for genre: ${genre}` : ''}...`);
    await delay(600);
    
    let events = [...eventsData];
    
    // Фильтрация по жанру
    if (genre && genre !== "All") {
        events = events.filter(event => event.genre === genre);
    }
    
    // Добавляем цвет жанра к каждому событию
    events = events.map(event => ({
        ...event,
        color: getGenreColor(event.genre)
    }));
    
    return events;
};

// Получить одно событие по id
export const fetchEventByIdApi = async (id) => {
    console.log(`API: Fetching event id=${id}...`);
    await delay(400);
    
    const event = eventsData.find(event => event.id === Number(id));
    
    if (event) {
        return {
            ...event,
            color: getGenreColor(event.genre)
        };
    }
    
    throw new Error(`Event with id ${id} not found`);
};

// Получить все жанры
export const fetchGenresApi = async () => {
    console.log("API: Fetching genres...");
    await delay(200);
    return genresData;
};

// Создать новое событие (для будущего использования с сервером)
export const createEventApi = async (eventData) => {
    console.log("API: Creating new event...");
    await delay(800);
    
    const newEvent = {
        ...eventData,
        id: Date.now(),
        averageRating: 0,
        ratingsCount: 0,
        color: getGenreColor(eventData.genre)
    };
    
    return newEvent;
};

// Обновить событие
export const updateEventApi = async (id, updates) => {
    console.log(`API: Updating event id=${id}...`);
    await delay(600);
    
    const eventIndex = eventsData.findIndex(e => e.id === Number(id));
    if (eventIndex === -1) {
        throw new Error(`Event with id ${id} not found`);
    }
    
    const updatedEvent = {
        ...eventsData[eventIndex],
        ...updates,
        color: getGenreColor(updates.genre || eventsData[eventIndex].genre)
    };
    
    return updatedEvent;
};

// Удалить событие
export const deleteEventApi = async (id) => {
    console.log(`API: Deleting event id=${id}...`);
    await delay(500);
    
    const eventIndex = eventsData.findIndex(e => e.id === Number(id));
    if (eventIndex === -1) {
        throw new Error(`Event with id ${id} not found`);
    }
    
    return { success: true, id: Number(id) };
};

// Функции для работы с localStorage (сохранение пользовательских данных)

// Сохранить события в localStorage
export const saveEventsToStorage = (events) => {
    localStorage.setItem('voxel_events', JSON.stringify(events));
};

// Загрузить события из localStorage
export const loadEventsFromStorage = () => {
    const saved = localStorage.getItem('voxel_events');
    return saved ? JSON.parse(saved) : null;
};

// Сохранить лайки
export const saveLikesToStorage = (likes) => {
    localStorage.setItem('liked_events', JSON.stringify(likes));
};

// Загрузить лайки
export const loadLikesFromStorage = () => {
    const saved = localStorage.getItem('liked_events');
    return saved ? JSON.parse(saved) : [];
};

// Сохранить избранное
export const saveFavoritesToStorage = (favorites) => {
    localStorage.setItem('favorite_events', JSON.stringify(favorites));
};

// Загрузить избранное
export const loadFavoritesFromStorage = () => {
    const saved = localStorage.getItem('favorite_events');
    return saved ? JSON.parse(saved) : [];
};

// Сохранить оценки
export const saveRatingsToStorage = (ratings) => {
    localStorage.setItem('event_ratings', JSON.stringify(ratings));
};

// Загрузить оценки
export const loadRatingsFromStorage = () => {
    const saved = localStorage.getItem('event_ratings');
    return saved ? JSON.parse(saved) : {};
};

// Сохранить оценки пользователя
export const saveUserRatingsToStorage = (userRatings) => {
    localStorage.setItem('user_ratings', JSON.stringify(userRatings));
};

// Загрузить оценки пользователя
export const loadUserRatingsFromStorage = () => {
    const saved = localStorage.getItem('user_ratings');
    return saved ? JSON.parse(saved) : {};
};

// Экспорт всех данных для отладки
export const getEventsData = () => eventsData;
export const getGenresData = () => genresData;