import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Faq from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

function App() {
    return(
        <div className="page">
            <Navbar />
            <main className="page-content">
                <Hero />
                <About />
                <Services />
                <Faq />
            </main>
            <Footer />
        </div>
    );
}

export default App;