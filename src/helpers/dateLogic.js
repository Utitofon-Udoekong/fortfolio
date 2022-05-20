Date.prototype.addDays = function (days) {
    let date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString().substring(0,10);
};
const dateRange = (startDate, endDate, steps = 1) => {
    const dateArray = [];
    let currentDate = new Date(startDate);

    while (currentDate <= new Date(endDate)) {
        const region = window.navigator.languages
        const options = { month: 'long', day: 'numeric' }
        dateArray.push(
            new Intl.DateTimeFormat(region, options).format(currentDate)
            // new Date(currentDate).toLocaleDateString('pt',{ month: 'long', day: 'numeric' })
            // new Date(currentDate).toISOString().substr(0, 10)
        );
        // Use UTC date to prevent problems with time zones and DST
        currentDate.setUTCDate(currentDate.getUTCDate() + steps);
    }
    return dateArray;
}

export default dateRange; 