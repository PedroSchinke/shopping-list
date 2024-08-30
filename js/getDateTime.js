export function getDateTime() {
    const dateTime = `${new Date().toLocaleDateString('en-US', {weekday: 'long'})} (${new Date().toLocaleDateString()}) at ${new Date().toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'})}`;

    return dateTime;
}