import React, {useState} from "react";
import FormSection from "./FormSection";
import OfferSection from "./OfferSection";
import {setAeroEconomyClassPrice} from "./setAeroEconomyClassPrice";
import {setAeroAdvancedClass} from "./setAeroAdvancedClass";
import {setAeroLux} from "./setAeroLux";
import {setRailwayEconomyClass} from "./setRailwayEconomyClass";
import {setRailwayLux} from "./setRailwayLux";
import {setRailwayAdvancedClass} from "./setRailwayAdvancedClass"

function Main() {
    const [distance, setDistance] = useState('0')
    const [age, setAge] = useState('0')
    const [weight, setWeight] = useState('0')

    return (
        <main>
            <FormSection
                distance={event => setDistance(event.target.value)}
                weight={event => setWeight(event.target.value)}
                age={event => setAge(event.target.value)}
            />
            <OfferSection
                aeroEconomyClass={setAeroEconomyClassPrice(weight, distance)}
                aeroAdvancedClass={setAeroAdvancedClass(weight, distance, age)}
                aeroLux={setAeroLux(weight, distance, age)}
                railwayEconomyClass={setRailwayEconomyClass(weight,distance,age)}
                railwayAdvancedClass={setRailwayAdvancedClass(weight,distance,age)}
                railwayLux={setRailwayLux(weight,distance)}
            />
        </main>
    )
}

export default Main
