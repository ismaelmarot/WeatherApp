export function getCurrentHour(weather: any) {
    return Number(
        weather?.location.localtime.split(' ')[1].split(':')[0]
    );
}