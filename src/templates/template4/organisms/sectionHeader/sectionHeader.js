import './sectionHeader.scss';
import phone from "./imgs/phone.svg";
import mail from "./imgs/mail.svg"
import logo from "./imgs/logo.svg"
export default function SectionHeader(props) {
    return (
        <div className={props.open ? "template4SectionHeader_hide" : "template4SectionHeader"} id="header">
            <div className="template4SectionHeader__container">
                <div className="template4SectionHeader__about">
                    <img src={logo} alt="" className="template4SectionHeader__logo" />
                    <h3 className="template4SectionHeader__title">Название компании</h3>
                </div>
                <div className="template4SectionHeader__contacts">
                    <a className="template4SectionHeader__phone" href="tel:+79999999999">
                        <img className="phone__img" src={phone} alt="" />
                        <p className="phone__link"><p>+7 (999) 999 99 99</p></p>
                    </a>
                    <a className="template4SectionHeader__mail" href="mailto:mail@mail.ru">
                        <img className="mail__img" src={mail} alt="" />
                        <p className="mail__address">mail@mail.ru</p>
                    </a>
                </div>
            </div>
        </div>
    )
}