import React from 'react';
import "./form.scss"

const Form = () => {
    return (
        <section className="template3Form">
            <input className="template3Form__item" type="text" placeholder="Имя"/>
            <input className="template3Form__item" type="text" placeholder="Электронная почта"/>
            <textarea className="template3Form__item" type="text" placeholder="Текст"/>
            <div className="template3Form-submit">
                <button className="template3Form-submit__btn"><h4>Отправить</h4></button>
                <p className="template3Form-submit__agreement">Нажимая кнопку “отправить” вы соглашаетесь с политикой конфиденциальности</p>
            </div>
        </section>
    );
};

export default Form;