import "./sectionAboutUs.scss"
import aboutUs from"./imgs/Rectangle 12.svg"

export default function SectionAboutUs() {
    return (
        <div className="sectionAboutUs">
            <div className="leftBlock">
                <h2 className="leftBlock__title">О нашей компании</h2>
                <h4 className="leftBlock__description">Коротко представьтесь и расскажите о компании или сервисе в 3-4
                    строках. С какими клиентами вы работаете, что вас вдохновляет. Чем гордится ваша команда, какие у
                    нее ценности и мотивация.</h4>
            </div>
            <img src={aboutUs} alt="about us" className="rightBlock"/>
        </div>
    )
}