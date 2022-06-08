import "./sectionFooter.scss"
import FooterLogo from "./imgs/Rectangle 19.svg"
import WhatsappImg from "./imgs/whatsapp.svg"
import VKImg from "./imgs/VK.svg"
import TelegramImg from "./imgs/telegram.svg"

export default function SectionFooter() {
    return(
        <section className="template2Footer">
            <img src={FooterLogo} alt="FooterLogo" className="template2Footer__logo"/>
            <div className="contacts">
                <h2 className="contacts__title">Наши контакты</h2>
                <h2 className="contacts__phone">+7 (999) 999-99-99</h2>
                <h2 className="contacts__mail">mail@mail.ru</h2>
                <div className="socialNetworks">
                    <img src={WhatsappImg} alt="whatsapp" className="socialNetworks__item"/>
                    <img src={VKImg} alt="vkontakte" className="socialNetworks__item"/>
                    <img src={TelegramImg} alt="telegram" className="socialNetworks__item"/>
                </div>
            </div>
        </section>
    )
}