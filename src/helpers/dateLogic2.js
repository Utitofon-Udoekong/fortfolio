Date.prototype.addDays = function (days) {
    let date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString().substr(0, 10);
};
const dateRange2 = (startDate, endDate, steps = 1) => {
    const dateArray = [];
    let currentDate = new Date(startDate);

    while (currentDate <= new Date(endDate)) {
        dateArray.push(
            new Date(currentDate).toISOString().substr(0, 10)
        );
        // Use UTC date to prevent problems with time zones and DST
        currentDate.setUTCDate(currentDate.getUTCDate() + steps);
    }
    return dateArray;
}

export default dateRange2; 