import { ICONS } from '../../constants'
import { Circle } from '../WindCompass/WindCompass.style'

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
            <ICONS.circle />(verde)- Bueno
            <ICONS.circle />(amarillo)- Moderado
            <ICONS.circle />(naranja) - No saludable para personas sensibles
            <ICONS.circle />(violeta) - Altamente no saludable
            <ICONS.circle />(marrón) - Peligroso

                
            <p><strong>Fuente</strong></p>

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
