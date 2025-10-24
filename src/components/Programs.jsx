import React from 'react';

const programs = [
  { title: "ADSO", description: "Análisis y Desarrollo de Software (Desarrollo Web, Móvil y Apps)." },
  { title: "Animación 3D", description: "Modelado, texturizado, renderizado y producción de contenido digital 3D." },
  { title: "Redes de Datos", description: "Infraestructura, configuración y ciberseguridad en ambientes de red." },
  { title: "Gestión Logística", description: "Optimización de procesos de cadena de suministro, almacenamiento y transporte." },
  { title: "Diseño Gráfico", description: "Creación de piezas visuales y contenido multimedia para diferentes plataformas." },
  { title: "Marketing Digital", description: "Estrategias de posicionamiento, SEO/SEM y gestión de comunidades online." },
  { title: "Telecomunicaciones", description: "Implementación y mantenimiento de sistemas de comunicación inalámbrica y por fibra óptica." },
  { title: "AudioVisuales", description: "Implementación y desarrollo de estudios audio-visuales a escala profesional." },
];

const Programs = () => {
  return (
    <section id="programas" className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-extrabold mb-10 text-gray-800 uppercase border-b-2 border-green-500 pb-2 inline-block">
        Programas de Formación CGMLTI
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {programs.map((p, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 shadow-xl rounded-xl p-8 transform hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer text-left"
          >
            <div className="text-green-500 mb-3">
                {/* Icono simple para destacar */}
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-700">{p.title}</h3>
            <p className="text-gray-600 text-sm">{p.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-12 text-gray-500 text-sm">
        *Estos son algunos de los programas técnicos y tecnológicos ofrecidos por el Centro de Gestión de Mercados, Logística y Tecnologías de la Información (CGMLTI) del SENA.
      </p>
    </section>
  );
};

export default Programs;
