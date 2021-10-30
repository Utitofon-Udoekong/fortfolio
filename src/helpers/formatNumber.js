const formatter = (number) => {
    const sign = Math.sign(Number(number));
    // Twelve Zeroes for Trillions
    return Math.abs(Number(number)) >= 1.0e12
        ? sign * (Math.abs(Number(number)) / 1.0e12) + "T"
        : // Nine Zeroes for Billions
        Math.abs(Number(number)) >= 1.0e9
            ? sign * (Math.abs(Number(number)) / 1.0e9) + "B"
            : // Six Zeroes for Millions
            Math.abs(Number(number)) >= 1.0e6
                ? sign * (Math.abs(Number(number)) / 1.0e6).toFixed(2) + "M"
                : // Three Zeroes for Thousands
                Math.abs(Number(number)) >= 1.0e3
                    ? sign * (Math.abs(Number(number)) / 1.0e3) + "K"
                    : sign * Math.abs(Number(number));
}

export default formatter;