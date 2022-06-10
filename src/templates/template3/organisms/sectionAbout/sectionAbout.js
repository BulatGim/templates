import './sectionAbout.scss';
import about from './imgs/about.svg'
export default function SectionAbout() {
    return (
        <div className="template3SectionAbout">
            <div className="template3SectionAbout__container">
                <div className="template3SectionAbout__info">
                    <h1 className="template3SectionAbout__title">Заголовок сайта</h1>
                    <h4 className="template3SectionAbout__subtitle">Добавьте интересные подробности о вашей компании.</h4>
                    <button className="template3SectionAbout__button"><h4>Призыв к действию</h4></button>
                </div>
                <img src={about} alr="Сайт" className="template3SectionAbout__img"/>
            </div>
        </div>
    )
}