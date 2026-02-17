import { COLORS_AIR_QUALITY_LEVELS } from '../../constants'
import { StatusDot } from '../../components'

export function InfoPopupScreen3() {
    return (
        <>
            <p><strong>UV Index:</strong> Descripción del índice UV...</p>
            <p><strong>Humidity:</strong> Descripción de humedad...</p>
            <p><strong>Pressure:</strong> Descripción de presión...</p>
            <p><strong>Visibility:</strong> Descripción de visibilidad...</p>
            <p><strong>Wind:</strong> Descripción del viento...</p>
        </>
    )
}

export function InfoPopupScreen4(){
    return (
        <>
            <p><strong>Min temperature:</strong>Descripton del mínimo de temperatura</p>
        </>
    )
}

export function InfoPopupScreen5(){
    return (
        <>
            <p>Niveles</p>
            <StatusDot color={COLORS_AIR_QUALITY_LEVELS.verde} /> - Bueno
            <StatusDot color={COLORS_AIR_QUALITY_LEVELS.verde} /> - Moderado
            <StatusDot color={COLORS_AIR_QUALITY_LEVELS.verde} /> - No saludable para personas sensibles
            <StatusDot color={COLORS_AIR_QUALITY_LEVELS.verde} /> - Altamente no saludable
            <StatusDot color={COLORS_AIR_QUALITY_LEVELS.verde} /> - Peligroso

                
            <p><strong>Title</strong></p>

            <p>
                Contiene información del Servicio de Vigilancia Atmosférica de
                Copernicus para el 2026 o información modificada del Servicio de Vigilancia
                de Copernicus para el 2026.
            </p>
            <p>
                Ni la Comisión Europea ni el ECMWF son responsables por ningún uso que se
                haga de esta información.
            </p>

                
        </>
    )
}
