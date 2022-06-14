import './sectionModal.scss'
import { useState, useRef } from 'react';
import close from "./imgs/Close.svg"
export default function SectionModal(props) {
    const [values, setValues] = useState({});
    function handleChange(e) {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    let orderForm = useRef(null);
    let handleForm = async (e) => {
        e.preventDefault();
        let formData = new FormData(orderForm.current)
        try {
            const response = await fetch('/send.php', {
                method: 'POST',
                body: formData
            });
            props.close(false)
            const result = await response.json();
        } catch (error) {
        }
    }
    return (
        props.modalOpen ? (
            <div className="template4SectionModal">
                <div className="template4SectionModal__container">
                    <h3 className="template4SectionModal__title">ОТПРАВЬТЕ ВАШИ ДАННЫЕ</h3>
                    <h4 className="template4SectionModal__description">и наш менеджер ответит Вам в ближайшее время</h4>
                    <form ref={orderForm} onSubmit={handleForm}>
                        <input type="text" name='email' value={values.email || ''} onChange={handleChange} placeholder="E-MAIL" className="template4SectionModal__input" />
                        <input type="text" name='name' value={values.name || ''} onChange={handleChange} placeholder="ИМЯ" className="template4SectionModal__input" />
                        <input type="text" name='tel' value={values.tel || ''} onChange={handleChange} placeholder="ТЕЛЕФОН" className="template4SectionModal__input" />
                        <input type="text" name='compani' value={values.compani || ''} onChange={handleChange} placeholder="НАЗВАНИЕ ВАШЕЙ КОМПАНИИ" className="template4SectionModal__input" />
                        <button type='submit' className="template4SectionModal__btn">ОТПРАВИТЬ</button>
                    </form>
                    <h4 className="template4SectionModal__agreement">ОТПРАВЛЯЯ ЗАЯВКУ, ВЫ ДАЕТЕ СОГЛАСИЕ НА ОБРАБОТКУ ВАШИХ ПЕРСОНАЛЬНЫХ ДАННЫХ</h4>
                    <img src={close} alt="" className="template4SectionModal__close" onClick={() => props.close(false)} />
                </div>
            </div>
        ) : ""
    )
}