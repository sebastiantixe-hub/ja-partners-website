import perfil from "../assets/images/perfil.webp"

function About() {
    return (
        <section
            id="about-section"
            className="relative py-24 border-b-2 border-gray-600 bg-blue-100 overflow-hidden"
        >
        <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
                <div
                    key={i}
                    className="rain-line"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${5 + Math.random() * 5}s`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                />
            ))}
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
                About JA Partners
            </h1>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                Building real solutions with Artificial Intelligence
            </p>
        </div>
        <div className="relative max-w-7xl mx-auto mt-20 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                    About the Company
                </h2>

                <p className="text-gray-600 text-base leading-relaxed">
                    JA Partners es un estudio de desarrollo de software e Inteligencia Artificial que opera bajo la marca personal de Aaron Sosa, orientado al diseño e implementación de soluciones tecnológicas personalizadas para entidades públicas y privadas a nivel nacional e internacional.
                </p>

                <p className="text-gray-600 text-base leading-relaxed mt-4">
                    La empresa se especializa en el desarrollo de aplicaciones web, software empresarial con integración de Inteligencia Artificial y sistemas avanzados aplicados a la investigación científica y académica.
                </p>
            </div>
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
                <div className="relative group">
                    <img
                        src={perfil}
                        alt="Aaron Sosa"
                        className="w-80 h-80 object-cover rounded-xl shadow-xl
                        transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-blue-300/40"></div>
                </div>
                <div className="text-center mt-4 lg:text-right">
                    <p className="text-gray-800 font-semibold">
                        Aaron Sosa
                    </p>
                    <p className="text-gray-600 text-sm">
                        Founder & Software Engineer
                    </p>
                </div>
            </div>
        </div>
        <div className="relative max-w-7xl mx-auto mt-24 px-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                Our Story
            </h2>

            <div className="max-w-4xl mx-auto text-center">
                <p className="text-gray-600 text-base leading-relaxed">
                    La creación de JA Partners surge como resultado de la evolución profesional de su fundador, quien inicialmente desarrollaba proyectos tecnológicos de manera independiente.
                </p>

                <p className="text-gray-600 text-base leading-relaxed mt-4">
                    Con el incremento en la complejidad de las soluciones requeridas y la incorporación de tecnologías emergentes como la Inteligencia Artificial, se hizo necesaria la consolidación de un equipo multidisciplinario capaz de abordar proyectos de mayor alcance, con estándares técnicos alineados a prácticas internacionales.
                </p>
            </div>
        </div>
        <div className="relative max-w-7xl mx-auto mt-24 px-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                Our Approach
            </h2>

            <p className="text-gray-600 text-base leading-relaxed max-w-4xl mx-auto text-center">
                Desde su fundación, JA Partners ha enfocado sus esfuerzos en la ejecución de proyectos reales, priorizando resultados medibles y soluciones funcionales sobre enfoques teóricos. Esta filosofía ha permitido el desarrollo de propuestas tecnológicas adaptadas a necesidades específicas, generando valor tanto en el ámbito empresarial como en el académico.
            </p>
        </div>
      
        <div className="relative max-w-7xl mx-auto mt-24 grid md:grid-cols-2 gap-10 px-6">
            
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    🚀 Mission
                </h3>
                <p className="text-gray-600 text-base">
                    Diseñar e implementar herramientas digitales que resuelvan problemas concretos mediante el uso estratégico del software y la Inteligencia Artificial.
                </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    🌎 Vision
                </h3>
                <p className="text-gray-600 text-base">
                    Convertirse en un referente en el desarrollo de soluciones tecnológicas innovadoras con impacto real.
                </p>
            </div>

        </div>
        <div className="relative max-w-7xl mx-auto mt-20 text-center px-6">
            <p className="text-gray-700 text-lg">
                Let’s build something impactful together
            </p>

            <a href="#form-section">
                <button className="mt-6 px-10 py-4 rounded-lg text-white font-medium
                    transition duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ backgroundColor: "var(--color-2)" }}
                >
                    Get Started
                </button>
            </a>
        </div>

        </section>
    )
}

export default About