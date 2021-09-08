import React from "react";
import {classList} from "../classList";

function OfferSection({
                          aeroEconomyClass,
                          aeroAdvancedClass,
                          aeroLux,
                          railwayEconomyClass,
                          railwayAdvancedClass,
                          railwayLux
                      }) {
    return (
        <section className={classList.offerSection}>
            <div className={classList.aeroflotContainer}>
                <h2>Аэрофлот</h2>
                <p>Эконом: {aeroEconomyClass}</p>
                <p>Продвинутый: {aeroAdvancedClass}</p>
                <p>Люкс: {aeroLux}</p>
            </div>
            <div className={classList.russianRailwaysContainer}>
                <h2>РЖД</h2>
                <p>Эконом: {railwayEconomyClass}</p>
                <p>Продвинутый: {railwayAdvancedClass}</p>
                <p>Люкс: {railwayLux}</p>
            </div>
        </section>
    )
}

export default OfferSection
