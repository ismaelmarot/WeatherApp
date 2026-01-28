export function formatHour(time: string) {
    return new Date(time).toLocaleTimeString('es-AR', {
        hour: '2-digit',
        minute: '2-digit',
    });
}