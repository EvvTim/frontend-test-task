import React from "react";
import {classList} from "../classList";
import Input from "../shared/Input";


function FormSection({distance, age, weight}) {
    return (
        <section className={classList.formSection}>
            <form>
                <Input inputName={'distance'} inputType={'text'} labelContent={'Количество километров'} onChange={distance}/>
                <Input inputName={'age'} labelContent={'Возраст'} inputType={'text'} onChange={age}/>
                <Input inputName={'weight'} inputType={'text'} labelContent={'Вес багажа'} onChange={weight}/>
            </form>
        </section>
    )
}

export default FormSection
