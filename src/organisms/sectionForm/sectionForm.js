import './sectionForm.scss';
import { useState } from 'react'
export default function SectionForm() {
    const [values, setValues] = useState({})
    function handleChange(e) {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    function handleForm(e) {
        e.preventDefault();
        console.log(values)
    }
    return (
        <div className="sectionForm">
            <div className="sectionForm__container">
                <h2 className="sectionForm__title">Заголовок формы</h2>
                <h4 className="sectionForm__subtitle">Укажите поля и данные, которые необходимо заполнить клиенту для заказа услуги или связи с вами.</h4>
                <form className="sectionForm__form" onSubmit={handleForm}>
                    <input type="text" className="sectionForm__input" placeholder='Имя' name='name' value={values.name || ''} onChange={handleChange}></input>
                    <input type="text" className="sectionForm__input" placeholder='E-mail' name='email' value={values.email || ''} onChange={handleChange}></input>
                    <input type="text" className="sectionForm__input" placeholder='Текст' name='text' value={values.text || ''} onChange={handleChange}></input>
                    <button type="submit" className="sectionForm__button"><h4>Отправить</h4></button>
                </form>
            </div>
        </div>
    )
}