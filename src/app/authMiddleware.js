export const authMiddleware = (store) => (next) => (action) => {
  if (action.type === "auth/register") {
    console.log("Регистрация:", action.payload);
    const existingUser = localStorage.getItem(`user_${action.payload.email}`);
    
    if (existingUser) {
      alert("Пользователь с таким email уже существует!");
      store.dispatch({ type: "auth/setError", payload: "User already exists" });
      return;
    }
    localStorage.setItem(`user_${action.payload.email}`, JSON.stringify(action.payload));
    store.dispatch({ type: "auth/login", payload: action.payload });
    alert("Регистрация успешна!");
  }
  if (action.type === "auth/login") {
    const savedUser = localStorage.getItem(`user_${action.payload.email}`);
    
    if (!savedUser) {
      alert("Пользователь не найден! Зарегистрируйтесь сначала.");
      store.dispatch({ type: "auth/setError", payload: "User not found" });
      return;
    }
    
    const userData = JSON.parse(savedUser);
    
    if (userData.password !== action.payload.password) {
      alert("Неверный пароль!");
      store.dispatch({ type: "auth/setError", payload: "Wrong password" });
      return;
    }

    console.log("Успешный вход:", userData.email);
    alert(`Добро пожаловать, ${userData.email}!`);
  }

  return next(action);
};