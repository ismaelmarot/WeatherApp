import { COLORS_AIR_QUALITY_LEVELS } from '../../../constants'
import { StatusDot } from '../../StatusDot'

export function InfoPopupScreen5(){
    return (
        <>
            <p>Niveles</p>
            <StatusDot color={COLORS_AIR_QUALITY_LEVELS.Bueno} /> - Bueno
            <StatusDot color={COLORS_AIR_QUALITY_LEVELS.Moderado} /> - Moderado
            <StatusDot color={COLORS_AIR_QUALITY_LEVELS['Poco saludable para grupos sensibles']} /> - No saludable para personas sensibles
            <StatusDot color={COLORS_AIR_QUALITY_LEVELS['Muy no saludable']} /> - Altamente no saludable
            <StatusDot color={COLORS_AIR_QUALITY_LEVELS.Peligroso} /> - Peligroso
         
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