import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
        className="fixed w-full bg-gray-800 p-4 z-10 shadow-lg"
      >
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-400">Alejandro García</a>
          <div>
            <a href="#about" className="mx-2 hover:text-blue-400">Sobre Mí</a>
            <a href="#projects" className="mx-2 hover:text-blue-400">Proyectos</a>
            <a href="#contact" className="mx-2 hover:text-blue-400">Contacto</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("/Purrcrafter.png")' }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Hola, soy Alejandro García</h1>
          <p className="text-2xl text-gray-300">Desarrollador de Software</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700"
          >
            <a href="#projects">Ver Proyectos</a>
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Sobre Mí</h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg max-w-3xl mx-auto"
          >
            Soy un apasionado de la tecnología y el desarrollo de software. Tengo experiencia trabajando con una variedad de tecnologías, incluyendo desarrollo de API REST, bases de datos para sistemas de inventario y aplicaciones web interactivas con React. Disfruto resolviendo problemas complejos y aprendiendo nuevas tecnologías para mejorar mis habilidades.
          </motion.p>
          <h3 className="text-3xl font-bold mt-12 mb-6">Habilidades Técnicas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['JavaScript', 'C#', 'Kotlin', 'HTML', 'CSS', 'React', 'Tailwind CSS', 'Node.js', 'API REST', 'SQL', 'Git', 'GitHub', 'VS Code'].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-700 px-4 py-2 rounded-full text-blue-300 text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1: PurrCrafter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <img src="/Purrcrafter.png" alt="PurrCrafter" className="rounded-lg mb-4"/>
              <h3 className="text-2xl font-bold mb-2">PurrCrafter - Herramientas PDF Online</h3>
              <p className="text-gray-400 mb-4">Aplicación web para manipular archivos PDF de manera fácil y eficiente.</p>
              <a href="https://aalejandr12.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Ver Proyecto</a>
            </motion.div>

            {/* Project 2: SmartSort */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <img src="/Sorting1.png" alt="SmartSort" className="rounded-lg mb-4"/>
              <img src="/Sorting2.png" alt="SmartSort" className="rounded-lg mb-4"/>
              <h3 className="text-2xl font-bold mb-2">SmartSort - Sistema de Clasificación de Paquetes</h3>
              <p className="text-gray-400 mb-4">Solución integral (app de escritorio y móvil) para clasificar y escanear paquetes.</p>
              <p className="text-gray-500 text-sm">Kotlin, C# y 9 aptitudes más</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contacto</h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg max-w-2xl mx-auto mb-8"
          >
            Estoy disponible para nuevas oportunidades y colaboraciones. No dudes en contactarme.
          </motion.p>
          <div className="flex justify-center gap-8">
            <motion.a
              href="https://github.com/aalejandr12"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-blue-400 hover:text-blue-300 text-xl"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://aalejandr12.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-blue-400 hover:text-blue-300 text-xl"
            >
              Sitio Web
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-gray-500">
        <p>&copy; 2025 Alejandro García. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
