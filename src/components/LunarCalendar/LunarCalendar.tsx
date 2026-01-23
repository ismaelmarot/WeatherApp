import { moonImages } from '../../utils/moonImages';

type LunarDay = {
    date: string;
    moon_phase: string;
    moon_illumination: string;
};

type Props = {
    days: LunarDay[];
};

export function LunarCalendar({ days }: Props) {
    return (
        <div>
        <h3>Lunar calendar</h3>

        <div style={{ display: 'flex', gap: 16 }}>
            {days.map(day => (
            <div key={day.date} style={{ textAlign: 'center' }}>
                <img
                    src={moonImages[day.moon_phase]}
                    alt={day.moon_phase}
                    style={{borderRadius:'50%', width:'3rem'}}

                />

                <div style={{ fontSize: 12 }}>
                {new Date(day.date).toLocaleDateString()}
                </div>

                <div style={{ fontSize: 11, opacity: 0.7 }}>
                {day.moon_illumination}%
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}
