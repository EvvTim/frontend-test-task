export function setRailwayAdvancedClass(weight,distance,age) {
    const rate = distance * 2
    const baggagePrice = weight * 50

    if (age > 0 && age < 8 && weight < 20) {
        return rate / 100 * 30 + "₽"
    } else if (age > 0 && age < 8 && weight > 20 && weight < 60) {
        return rate / 100 * 30 + baggagePrice + '₽'
    } else if (weight > 20 && weight < 60) {
        return rate + baggagePrice + '₽'
    } else if (weight > 60) {
        return <span className={'warning'}>Максимальный вес багажа 60 кг.</span>
    } else {
        return rate + '₽'
    }
}
