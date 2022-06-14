import './sectionAboutUs.scss'
import aboutUs from "./imgs/aboutUs.svg"
export default function SectionAboutUs(){
    return (
        <div className="template4SectionAboutUs">
                <h1 className="template4SectionAboutUs__title">О НАС</h1>
                <h4 className="template4SectionAboutUs__description">НАША КОМПАНИЯ БЫЛА ОСНОВАНА В 2000 ГОДУ.</h4>
                <h4 className="template4SectionAboutUs__description">МЫ СПЕЦИАЛИЗИРУЕМСЯ НА РАЗРАБОТКЕ ДИЗАЙНА И ПРОИЗВОДСТВЕ РЕКЛАМНЫХ МАТЕРИАЛОВ</h4>
                <h4 className="template4SectionAboutUs__description">ДЛЯ ИЗВЕСТНЫХ РОССИЙСКИХ И МЕЖДУНАРОДНЫХ БРЕНДОВ.</h4>
                <h4 className="template4SectionAboutUs__description">МЫ НАХОДИМ ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ КЛИЕНТУ, ВЫСТРАИВАЯ ДОЛГОСРОЧНЫЕ ПАРТНЕРСКИЕ ОТНОШЕНИЯ.</h4>
                <img className="template4SectionAboutUs__img" src={aboutUs} alt="" />
            </div>
    )
}