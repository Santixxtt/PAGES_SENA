import Header from "./components/Header";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Programs />
      <ContactForm />
      <footer className="text-center py-4 text-sm text-gray-500">
        © 2025 Servicio Nacional de Aprendizaje - SENA
      </footer>
    </div>
  );
}

export default App;
