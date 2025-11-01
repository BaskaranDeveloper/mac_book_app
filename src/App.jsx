import Hero from "./componets/Hero";
import NavBar from "./componets/NavBar";
import ProductViewer from "./componets/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return(
        <main>
            <NavBar/>
            <Hero/>
            <ProductViewer/>
        </main>
    )
}

export default App;
