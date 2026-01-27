import type { LunarCalendarProps } from '../../types/LunarCalendar.type';
import { Calendar, Image, Item, Day, Lightning } from './LunarCalendar.style';
import { moonImages } from '../../utils/moonImages';

export function LunarCalendar({ days }: LunarCalendarProps) {
    return (
        <div>
            <h3>Lunar calendar</h3>
            <Calendar>
                {days.map(day => (
                <Item key={day.date}>
                    <Image
                        src={moonImages[day.moon_phase]}
                        alt={day.moon_phase}
                    />
                    <Day>
                        {new Date(day.date).toLocaleDateString()}
                    </Day>

                    <Lightning>
                        {day.moon_illumination}%
                    </Lightning>
                </Item>
                ))}
            </Calendar>
        </div>
    );
}
