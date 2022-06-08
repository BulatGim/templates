import './sectionAboutCompany.scss';
import img from './imgs/image.png'
export default function SectionAboutCompany() {
    return (
        <div className="template2sectionAboutCompany">
            <div className="template2sectionAboutCompany__text">
                <h2 className="template2sectionAboutCompany__title">О нашей компании</h2>
                <h4>Коротко представьтесь и расскажите о компании или сервисе в 3-4 строках. С какими клиентами вы работаете, что вас вдохновляет. Чем гордится ваша команда, какие у нее ценности и мотивация.</h4>
            </div>
        <img src={img} alt="Картинка 1" className="template2sectionAboutCompany__img1"/>
        <img  src={img} alt="Картинка 2" className="template2sectionAboutCompany__img2"/>
        </div>
    )
}