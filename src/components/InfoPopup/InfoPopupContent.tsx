import { COLORS_AIR_QUALITY_LEVELS, ICONS } from '../../constants'
import { StatusDot } from '../../components'
import { UVINumber } from './InfoPopupContent.style'

export function InfoPopupScreen3() {
    return (
        <>
            <strong>UV Index:</strong>
            <div>Descripción del índice UV...
                <ICONS.SunOne style={{fontSize:'2rem', color:'#e7e193'}} />
                <ICONS.SunTwo style={{fontSize:'2rem',  color:'#f0e006'}} />
                <ICONS.SunThree style={{fontSize:'2rem',  color:'#ff9500'}} />
                <ICONS.SunFour style={{fontSize:'2rem',  color:'#ffae00'}} />
                <ICONS.SunFive style={{fontSize:'2rem',  color:'#ff0000'}} />
                
                <UVINumber $bgColor='#40de07'>1</UVINumber>
                <UVINumber $bgColor='#40de07'>2</UVINumber>
                <UVINumber $bgColor='#ffc802'>3</UVINumber>
                <UVINumber $bgColor='#ffc802'>4</UVINumber>
                <UVINumber $bgColor='#ffc802'>5</UVINumber>
                <UVINumber $bgColor='#eb950c'>6</UVINumber>
                <UVINumber $bgColor='#eb950c'>7</UVINumber>
                <UVINumber $bgColor='#de0740'>8</UVINumber>
                <UVINumber $bgColor='#de0740'>9</UVINumber>
                <UVINumber $bgColor='#de0740'>10</UVINumber>
                <UVINumber $bgColor='#c908ff'>11+</UVINumber>
                <p>Low</p>
                No protectin needed
                <p>Moderate</p>
                Some protection is required
                <p>High</p>
                Protection essential
                <p>Very High</p>
                Extra protection is needed
                <p>Extreme</p>
                Stay inside
               
            </div> 

            <strong>Humidity:</strong> 
            <p>Descripción de humedad...</p>

            <strong>Pressure:</strong> 
            <p>Descripción de presión...</p>
            
            <strong>Visibility:</strong> 
            <p>Descripción de visibilidad...</p>

            <strong>Wind:</strong> 
            <p>Descripción del viento...</p>
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
