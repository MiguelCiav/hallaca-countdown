const daysUntilChristmas = () => {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25);
    if (today.getMonth() === 11 && today.getDate() === 25) {
        return 0; // Today is Christmas!
    }
    if (today > christmas) {
        christmas.setFullYear(christmas.getFullYear() + 1);
    }
    const diff = christmas - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
};
const hallacaCounter = () => {
    if(daysUntilChristmas() === 0) {
        console.log("¡Hoy es 25, ya puedes comer hallacas, mano!");
    } else {
        console.log(`Faltan ${daysUntilChristmas()} dias para las hallacas mano`);
    }
}

module.exports = {
    hallacaCounter
};