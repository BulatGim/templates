import logo from "./imgs/Rectangle 8.svg"
import "./sectionHeader.scss"

export default function SectionHeader() {
    return(
        <section className="sectionHeader">
            <img src={logo} alt="logo" className="sectionHeader__logo"/>
            <div className="headerActions">
                <h4 className="headerActions__item">О нас</h4>
                <h4 className="headerActions__item">Услуги</h4>
                <h4 className="headerActions__item">Контакты</h4>
            </div>
        </section>
    )
}