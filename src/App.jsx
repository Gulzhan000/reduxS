import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./styles/theme.css";
import "./styles/neomorphic.css";
import "./styles/animations.css";

function App(){
  return(
    <>
      <Header/>
      <Home />
      <Footer />
    </>
  )
}

export default App;