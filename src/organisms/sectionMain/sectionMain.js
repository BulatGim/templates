import "./sectionMain.scss"


export default function SectionMain() {
    return(
        <div className="sectionMain">
            <h1 className="sectionMain__title">Заголовок сайта</h1>
            <h3 className="sectionMain__subtitle">Добавьте интересные подробности о вашей компании.</h3>
            <button className="sectionMain__btn"><h4 className="sectionMain__btnDescription">Призыв к действию</h4></button>
        </div>
    )
}