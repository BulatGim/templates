import FormPreview from "./imgs/Rectangle 17.svg"
import "./sectionForm.scss"

export default function SectionForm() {
    return(
        <section className="template2Form">
            <h2 className="template2Form__title">Оставить заявку</h2>
            <div className="template2Form__container">
                <div className="formBLock">
                        <textarea type="text" placeholder="Имя" className="formBlock__item"/>
                        <textarea type="text" placeholder="Телефон" className="formBlock__item"/>
                        <textarea type="text" placeholder="Электронная почта" className="formBlock__item"/>
                        <textarea type="text" placeholder="Текст" className="formBlock__item formBlock__item_text"/>
                        <button className="formBlock__btn"><h4>Оформить заявку</h4></button>
                        <div className="agreement">
                            <input type="checkbox" className="agreement__input"/>
                            <p className="agreement__text">Я согласен на обработку персональных данных и соглашаюсь c политикой конфиденциальности</p>
                        </div>
                </div>
                <img src={FormPreview} alt="FormPreview" className="formPreviewBlock"/>
            </div>
        </section>
    )
}