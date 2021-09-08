export function setAeroLux(weight,distance,age) {
    const rate = distance * 15

    if (age > 0 && age < 16 && weight < 50) {
        return rate / 100 * 30 + '₽'
    } else if (weight > 50) {
        return <span className={'warning'}>Максимальный вес багажа 50 кг.</span>
    } else {
        return rate + '₽'
    }
}
