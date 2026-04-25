import {CardTrafic} from '../components/CardTrafic'

function WhySection() {
    
    return(
        <section id="why-section" className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20 bg-blue-100 border-b-2 border-gray-600">

            <h1 className="text-3xl sm:text-4xl lg:text-7xl mb-6 font-bold sm:mb-8 leading-tight text-gray-700">Un sistema diseñado para <br />
                convertir la atención en crecimiento
            </h1>
            <br />
            <br />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                <CardTrafic
                    title="Atraer las oportunidades adecuadas"
                    desc="Identificamos y llegamos a prospectos de alto valor a través de canales digitales específicos, asegurando que su negocio conecte con la audiencia correcta en el momento oportuno."
                    index="1"
                />
                <CardTrafic
                    title="Generar confianza al instante"
                    desc="Creamos una propuesta de valor clara y convincente que comunica credibilidad, experiencia y diferenciación desde la primera interacción."
                    index="2"
                />
                <CardTrafic
                    title="Capturar la demanda real"
                    desc="A través de viajes de usuario optimizados y formularios inteligentes, transformamos el interés en clientes potenciales procesables minimizando la fricción."
                    index="3"
                />
                <CardTrafic
                    title="Filtrar lo que importa"
                    desc="Evaluamos cada lead basándonos en criterios clave como necesidades comerciales, urgencia, presupuesto y preparación tecnológica para priorizar las oportunidades de alto impacto."
                    index="4"
                />
                <CardTrafic
                    title="Convertir en reuniones"
                    desc="Los prospectos calificados son guiados sin problemas para programar reuniones, asegurando que cada interacción tenga contexto y relevancia comercial."
                    index="5"
                />
                <CardTrafic
                    title="Escalar el crecimiento a largo plazo"
                    desc="Implementamos seguimientos continuos, automatización y seguimiento del rendimiento para generar un crecimiento sostenible y asociaciones a largo plazo."
                    index="6"
                />
                

            </div>
            
        </section>
    )

}

export default WhySection