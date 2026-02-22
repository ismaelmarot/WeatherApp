import { getMoonImage } from '../../constants'
import type { LunarCalendarProps } from '../../types'
import { Container, Calendar, Title,Image, Item, Day, Lightning } from './LunarCalendar.style'

export function LunarCalendar({ days }: LunarCalendarProps) {

    return (
        <Container>
        <Title>Lunar calendar</Title>
        <Calendar>
            {days.map(day => (
                <Item key={day.date}>
                    <Image
                        src={getMoonImage(day.moon_phase)}
                        alt={day.moon_phase}
                        data-testid='moon-image'
                    />
                    <Day>
                        {new Date(day.date).toLocaleDateString()}
                    </Day>
                    <Lightning data-testid='moon-illumination'>
                        {day.moon_illumination}%
                    </Lightning>
                </Item>
            ))}
        </Calendar>
        </Container>
    )
}