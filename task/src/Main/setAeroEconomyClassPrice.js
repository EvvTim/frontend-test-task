export function setAeroEconomyClassPrice(weight, distance) {
    const rate = distance * 8
    const baggagePrice = 4000

    if (weight > 5 && weight < 20) {
        return rate + baggagePrice + '₽'
    } else if (weight > 20) {
        return <span className={'warning'}>Максимальный вес багажа 20 кг.</span>
    } else {
        return distance * 4 + '₽'
    }
}
