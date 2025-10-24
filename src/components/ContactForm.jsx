import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ nombre: "", correo: "", mensaje: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias ${formData.nombre}, tu mensaje ha sido enviado.`);
    setFormData({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="py-12 px-6 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-8 uppercase">Contacto</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-md"
          required
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          value={formData.correo}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-md"
          required
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-md"
          rows="4"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Contactar
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
