type Hour = {
  time: string;
  temp_c: number;
  chance_of_rain: number;
};

type Props = {
  hours: Hour[];
};

export function RainChanceChart({ hours }: Props) {
  return (
    <div style={{ marginTop: '1rem' }}>
      {hours.map((h) => {
        const hourLabel = h.time.split(' ')[1].slice(0, 5);

        return (
          <div
            key={h.time}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px 0',
              fontSize: '14px',
            }}
          >
            <span>{hourLabel}</span>
            <span>{Math.round(h.temp_c)}°C</span>
            <span>{h.chance_of_rain}% 🌧️</span>
          </div>
        );
      })}
    </div>
  );
}
