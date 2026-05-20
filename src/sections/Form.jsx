import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Info } from "../components/Info.jsx"

const SERVICE_OPTIONS = [
    { value: "", label: "Selecciona un servicio" },
    { value: "ia", label: "Inteligencia Artificial" },
    { value: "automatizacion", label: "Automatización empresarial" },
    { value: "software", label: "Software a medida" },
    { value: "consultoria", label: "Consultoría tecnológica" },
    { value: "otro", label: "Otro" },
]

const STAGE_OPTIONS = [
    { value: "", label: "Selecciona una etapa" },
    { value: "idea", label: "Solo tengo una idea" },
    { value: "mvp", label: "Tengo un MVP o prototipo" },
    { value: "operacion", label: "Operación en marcha — quiero escalar" },
    { value: "optimizar", label: "Quiero optimizar procesos existentes" },
]

const BUDGET_OPTIONS = [
    { value: "", label: "Rango estimado (opcional)" },
    { value: "menos-5k", label: "Menos de USD 5,000" },
    { value: "5k-15k", label: "USD 5,000 – 15,000" },
    { value: "15k-50k", label: "USD 15,000 – 50,000" },
    { value: "mas-50k", label: "Más de USD 50,000" },
    { value: "por-definir", label: "Por definir" },
]

const inputClass =
    "p-3 sm:p-4 rounded-lg placeholder-gray-400 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#3AA1B8]"

function Submit({ disabled }) {
    const { pending } = useFormStatus()

    return (
        <button
            disabled={pending || disabled}
            type="submit"
            className="btn-submit sm:col-span-2 p-3 sm:p-4 rounded-lg font-bold cursor-pointer mt-2 hover:opacity-90 transition text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed"
        >
            {pending ? "Enviando diagnóstico…" : "Enviar diagnóstico"}
        </button>
    )
}

async function handleFormSubmit(_prevState, formData) {
    const fullName = formData.get("fullName")?.toString().trim()
    const email = formData.get("email")?.toString().trim()
    const company = formData.get("company")?.toString().trim()
    const phone = formData.get("phone")?.toString().trim()
    const service = formData.get("service")?.toString()
    const stage = formData.get("stage")?.toString()
    const challenge = formData.get("challenge")?.toString().trim()

    if (!fullName) {
        return { ok: false, message: "Ingresa tu nombre completo." }
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { ok: false, message: "Ingresa un correo electrónico válido." }
    }
    if (!company) {
        return { ok: false, message: "Indica el nombre de tu empresa." }
    }
    if (!service) {
        return { ok: false, message: "Selecciona el tipo de servicio que necesitas." }
    }
    if (!stage) {
        return { ok: false, message: "Selecciona la etapa de tu proyecto." }
    }
    if (!challenge || challenge.length < 20) {
        return {
            ok: false,
            message: "Describe tu desafío con al menos 20 caracteres para orientar el diagnóstico.",
        }
    }

    const payload = {
        fullName,
        email,
        company,
        phone,
        service,
        stage,
        budget: formData.get("budget")?.toString() || "",
        challenge,
        submittedAt: new Date().toISOString(),
    }

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT?.trim()

    if (endpoint) {
        try {
            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(payload),
            })
            if (!res.ok) {
                return {
                    ok: false,
                    message: "No pudimos enviar el formulario. Intenta de nuevo o agenda una reunión.",
                }
            }
        } catch {
            return {
                ok: false,
                message: "Error de conexión. Revisa tu red o escríbenos a contacto@japartners.com.",
            }
        }
    } else if (import.meta.env.DEV) {
        console.log("[Diagnóstico]", payload)
    }

    return {
        ok: true,
        message:
            "¡Gracias! Recibimos tu diagnóstico. Te contactaremos en un plazo de 24 a 48 horas hábiles.",
    }
}

function Form() {
    const [state, formAction] = useActionState(handleFormSubmit, { ok: null, message: "" })

    return (
        <section
            id="form-section"
            className="form-section flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 md:gap-12 p-4 sm:p-8 md:p-12 lg:p-20 text-white"
            aria-label="Formulario de contacto y diagnóstico"
        >
            <aside className="aside w-full lg:w-2/5" aria-labelledby="contact-title">
                <h2
                    id="contact-title"
                    className="title text-2xl sm:text-3xl md:text-4xl font-bold pb-4 sm:pb-6"
                >
                    Diagnóstico gratuito
                </h2>
                <p
                    className="description text-sm sm:text-base md:text-lg pb-6 sm:pb-8 md:pb-10"
                    aria-describedby="contact-title"
                >
                    Cuéntanos tu contexto y te proponemos un plan inicial. También puedes
                    agendar una reunión directamente en nuestro calendario.
                </p>
                <ul
                    className="flex flex-col gap-4 sm:gap-5 md:gap-6"
                    aria-label="Información de contacto"
                >
                    <Info icon="📧" title="Correo" value="contacto@japartners.com" />
                    <Info icon="📍" title="Ubicación" value="Huancayo, Perú" />
                    <Info icon="📞" title="Teléfono" value="+51 925 290 477" />
                </ul>
                <a
                    href="#agenda-section"
                    className="inline-flex mt-6 sm:mt-8 items-center justify-center px-4 sm:px-5 py-3 rounded-lg font-semibold text-sm sm:text-base border-2 border-[var(--color-2)] text-[var(--color-2)] hover:bg-[var(--color-2)] hover:text-white transition"
                >
                    O agenda una reunión →
                </a>
            </aside>

            <form
                className="form w-full lg:w-1/2 p-6 sm:p-8 md:p-10 rounded-xl md:rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
                action={formAction}
                aria-labelledby="form-title"
                noValidate
            >
                <h2 id="form-title" className="sr-only">
                    Formulario de diagnóstico
                </h2>

                {state.message && (
                    <div
                        role="alert"
                        aria-live="polite"
                        className={`sm:col-span-2 p-3 sm:p-4 rounded-lg text-sm sm:text-base ${
                            state.ok
                                ? "bg-emerald-900/40 text-emerald-200 border border-emerald-600"
                                : "bg-red-900/30 text-red-200 border border-red-600"
                        }`}
                    >
                        {state.message}
                    </div>
                )}

                <fieldset className="flex flex-col gap-2">
                    <label htmlFor="fullName" className="text-sm font-medium">
                        Nombre completo
                        <span aria-label="requerido" className="text-red-500">
                            *
                        </span>
                    </label>
                    <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="María García"
                        className={inputClass}
                        required
                        aria-required="true"
                        aria-describedby="fullName-error"
                    />
                    <span id="fullName-error" className="sr-only" />
                </fieldset>

                <fieldset className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                        Correo corporativo
                        <span aria-label="requerido" className="text-red-500">
                            *
                        </span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="maria@empresa.com"
                        className={inputClass}
                        required
                        aria-required="true"
                        aria-describedby="email-error"
                    />
                    <span id="email-error" className="sr-only" />
                </fieldset>

                <fieldset className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-medium">
                        Empresa
                        <span aria-label="requerido" className="text-red-500">
                            *
                        </span>
                    </label>
                    <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Nombre de la empresa"
                        className={inputClass}
                        required
                        aria-required="true"
                        aria-describedby="company-error"
                    />
                    <span id="company-error" className="sr-only" />
                </fieldset>

                <fieldset className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                        Teléfono / WhatsApp
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+51 999 999 999"
                        className={inputClass}
                        aria-describedby="phone-hint"
                    />
                    <span id="phone-hint" className="text-xs text-gray-500">
                        Opcional
                    </span>
                </fieldset>

                <fieldset className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-sm font-medium">
                        Servicio de interés
                        <span aria-label="requerido" className="text-red-500">
                            *
                        </span>
                    </label>
                    <select
                        id="service"
                        name="service"
                        className={inputClass}
                        required
                        aria-required="true"
                        defaultValue=""
                    >
                        {SERVICE_OPTIONS.map(({ value, label }) => (
                            <option key={value || "empty"} value={value} disabled={!value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </fieldset>

                <fieldset className="flex flex-col gap-2">
                    <label htmlFor="stage" className="text-sm font-medium">
                        Etapa del proyecto
                        <span aria-label="requerido" className="text-red-500">
                            *
                        </span>
                    </label>
                    <select
                        id="stage"
                        name="stage"
                        className={inputClass}
                        required
                        aria-required="true"
                        defaultValue=""
                    >
                        {STAGE_OPTIONS.map(({ value, label }) => (
                            <option key={value || "empty"} value={value} disabled={!value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </fieldset>

                <fieldset className="flex flex-col gap-2 sm:col-span-2">
                    <label htmlFor="budget" className="text-sm font-medium">
                        Presupuesto estimado
                    </label>
                    <select id="budget" name="budget" className={inputClass} defaultValue="">
                        {BUDGET_OPTIONS.map(({ value, label }) => (
                            <option key={value || "empty"} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </fieldset>

                <fieldset className="flex flex-col gap-2 sm:col-span-2">
                    <label htmlFor="challenge" className="text-sm font-medium">
                        ¿Cuál es tu principal desafío?
                        <span aria-label="requerido" className="text-red-500">
                            *
                        </span>
                    </label>
                    <textarea
                        id="challenge"
                        name="challenge"
                        placeholder="Describe el problema que quieres resolver, procesos actuales, plazos u objetivos…"
                        className={`resize-none ${inputClass} h-28 sm:h-36`}
                        required
                        aria-required="true"
                        aria-describedby="challenge-error"
                        minLength={20}
                    />
                    <span id="challenge-error" className="text-xs text-gray-500">
                        Mínimo 20 caracteres
                    </span>
                </fieldset>

                <Submit disabled={state.ok === true} />
            </form>
        </section>
    )
}

export default Form
