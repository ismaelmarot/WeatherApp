import { ICONS } from '../../../constants'
import { UVINumber } from '../InfoPopupContent.style'
import { Container } from './InfoPopupScreen3.style'

export function InfoPopupScreen3() {
    return (
        <Container>
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
        </Container>
    )
}
