import { Card } from "../components/Card"
import auto from '../assets/svg/auto.svg'
import chat from '../assets/svg/chat.svg'
import code from '../assets/svg/code.svg'
import flow from '../assets/svg/flow.svg'
import search from '../assets/svg/search.svg'
import stats from '../assets/svg/stats.svg'

function Services() {

    return(
        <section 
            id="services-section" 
            className="bg-blue-100"
            aria-label="Nuestros servicios y expertise"
        >
            <div className="px-4 sm:px-6 md:px-8">
                <h1 
                    className="text-center pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-4 sm:pb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700"
                    id="services-title"
                >
                    Nuestra Experiencia
                </h1>
                <p 
                    className="text-gray-700 text-center pb-8 sm:pb-10 md:pb-12 text-sm sm:text-base md:text-lg"
                    aria-describedby="services-title"
                >
                    Soluciones impulsadas por IA diseñadas para navegar y simplificar la complejidad empresarial moderna.
                </p>
            </div>

            <div 
                className="cards-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
                role="region"
                aria-labelledby="services-title"
                aria-live="polite"
            >
                <Card 
                    icon={code}
                    name="Software Personalizado"
                    description="Desarrollo a medida adaptado a su infraestructura específica y requisitos comerciales."
                />
                <Card 
                    icon={chat}
                    name="Chatbots Inteligentes"
                    description="Agentes impulsados por LLM que comprenden el contexto y proporcionan interacciones humanas."
                />
                <Card 
                    icon={flow}
                    name="Flujos de Agentes"
                    description="Procesos de agentes automatizados y de múltiples pasos que manejan tareas lógicas complejas de forma autónoma."
                />
                <Card 
                    icon={auto}
                    name="Agentes de Automatización"
                    description="Reemplace el trabajo manual con agentes de IA que gestionan datos, hojas de cálculo y correos rutinarios."
                />
                <Card 
                    icon={search}
                    name="IA para Investigación"
                    description="Sintetice rápidamente grandes conjuntos de datos y extraiga ideas procesables con modelos de IA especializados."
                />
                <Card 
                    icon={stats}
                    name="Optimización"
                    description="Reduzca los costos operativos y elimine cuellos de botella mediante el análisis inteligente de flujos de trabajo."
                />
            </div>
        </section>
    )
}

export default Services