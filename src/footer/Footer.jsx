import { Info } from "../components/Info"
import { Link } from "../components/Link"

function Footer() {
    return (
        <footer
            className="footer border-t border-gray-700 bg-black text-gray-300 px-6 sm:px-8 md:px-12 lg:px-20 py-12"
            role="contentinfo"
        >
            {/* Top Footer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Empresa */}
                <aside aria-label="Acerca de JA Partners">
                    <div className="flex items-center gap-2 mb-5">
                        <div className="logo px-2 py-1 rounded text-xs"></div>
                        <h2 className="font-bold text-lg text-white">
                            J&A Partners
                        </h2>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-400">
                        Estudio de desarrollo de software e Inteligencia
                        Artificial especializado en soluciones web,
                        automatización empresarial e innovación digital.
                    </p>
                </aside>

                {/* Navegación */}
                <nav aria-label="Links rápidos">
                    <h3 className="text-sm font-bold tracking-widest text-white mb-5 uppercase">
                        Quick Links
                    </h3>

                    <ul className="space-y-3">
    <li>
        <a
            href="https://www.linkedin.com/company/j-a-partners/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition"
        >
            LinkedIn
        </a>
    </li>
</ul>
                </nav>

                {/* Contacto */}
                <section aria-labelledby="contact-heading">
                    <h3
                        id="contact-heading"
                        className="text-sm font-bold tracking-widest text-white mb-5 uppercase"
                    >
                        Contacto
                    </h3>

                    <div className="space-y-3">
                        <Info
                            icon="📧"
                            value="contacto@japartners.com"
                        />
                        <Info
                            icon="📍"
                            value="Huancayo, Perú"
                        />
                        <Info
                            icon="📞"
                            value="+51 925 290 477"
                        />
                    </div>
                </section>

                {/* CTA */}
                <section aria-labelledby="cta-heading">
                    <h3
                        id="cta-heading"
                        className="text-sm font-bold tracking-widest text-white mb-5 uppercase"
                    >
                        Trabajemos juntos
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed mb-5">
                        ¿Tienes un proyecto de software o IA?
                        Conversemos y construyamos una solución
                        tecnológica para tu empresa.
                    </p>

                    <a
                        href="#form-section"
                        className="inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold hover:scale-105 transition-transform"
                    >
                        Solicitar asesoría
                    </a>
                </section>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

                {/* Copyright */}
                <p>
                    © {new Date().getFullYear()} J&A Partners.
                    Todos los derechos reservados.
                </p>

                {/* Políticas */}
                <div className="flex gap-5">
                    <a
                        href="/privacy-policy"
                        className="hover:text-white transition"
                    >
                        Política de Privacidad
                    </a>

                    <a
                        href="/terms"
                        className="hover:text-white transition"
                    >
                        Términos y Condiciones
                    </a>

                    <a
                        href="/cookies"
                        className="hover:text-white transition"
                    >
                        Política de Cookies
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer