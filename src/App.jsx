import { About, Home, Projects, Contact, Footer } from "./pages/index";

function App() {
  return (
    <div className="bg_color h-full overflow-x-hidden">
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
