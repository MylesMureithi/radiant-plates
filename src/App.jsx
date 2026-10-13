import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

function App() {
    return(
        <div className="page">
            <Navbar />
            <main className="page-content">
                <Hero />
            </main>
            <Footer />
        </div>
    );
}

export default App;