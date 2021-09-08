export function setRailwayLux(weight,distance) {
    const rate = distance * 4

    if (weight > 60) {
        return <span className={'warning'}>Максимальный вес багажа 60 кг.</span>
    } else {
        return rate + '₽'
    }
}
