export function setRailwayEconomyClass(weight,distance,age) {
    const rate = distance * 0.5
    const baggagePrice = weight * 50

    if (age > 0 && age < 5 && weight < 15) {
        return rate / 100 * 30 + '₽'
    } else if (age > 0 && age < 5 && weight > 15 && weight < 50) {
        return rate / 100 * 30 + baggagePrice + '₽'
    } else if (weight > 15 && weight < 50) {
        return rate + baggagePrice + '₽'
    } else if (weight > 50) {
        return <span className={'warning'}>Максимальный вес багажа 50 кг.</span>
    } else {
        return rate + '₽'
    }
}
