import React from 'react';

const Header = () => {
  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Programas", href: "#programas" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      {/* Header Fijo */}
      <header className="fixed w-full top-0 left-0 bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo o Título de la Aplicación */}
            <div className="flex-shrink-0 text-xl font-bold text-green-700">
              SENA - CGMLTI
            </div>

            {/* Enlaces de Navegación */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Menú para móvil - Oculto por defecto */}
            <div className="md:hidden">
              <button className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 p-2 rounded-md">
                  {/* Icono de menú (hamburguesa) */}
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
      
      {/* ESPACIADOR: Este div invisible asegura que el contenido debajo del header no quede oculto. */}
      {/* Su altura (h-16) coincide con la altura del header fijo. */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;
