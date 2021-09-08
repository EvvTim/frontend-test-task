export function setAeroAdvancedClass(weight,distance,age) {
    const rate = distance * 8
    const baggagePrice = 5000

    if (age > 0 && age < 7 && weight < 20) {
        return rate / 100 * 30 + '₽'
    } else if (age > 0 && age < 7 && weight > 20 && weight < 50) {
        return rate / 100 * 30 + baggagePrice + '₽'
    } else if (weight > 20 && weight < 50) {
        return rate + baggagePrice + '₽'
    } else if (weight > 50) {
        return <span className={'warning'}>Максимальный вес багажа 50 кг.</span>
    } else {
        return rate + '₽'
    }
}
