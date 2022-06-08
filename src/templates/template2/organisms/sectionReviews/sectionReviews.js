import Review from "./atoms/review/review";
import "./sectionReviews.scss"


export default function SectionReviews() {
    const reviews = [
        {
            id: 1,
            text: "Вы профессионалы. При первой встрече я рассказала об идее проекта, а вы помогли доработать и трансформировать ее во что-то особое.",
            user: "Тамара Ларина"
        },{
            id: 2,
            text: "Работая в большой корпорации, сложнее все держать под контролем. Так что это идеальный сервис для нас. Мы общаемся и обсуждаем задачи в режиме реального времени.",
            user: "Саша Коротких"
        },{
            id: 3,
            text: "У меня всегда очень плотный график и много поездок. Docket помогает не выходить из рабочего ритма и всегда знать что происходит в команде даже за мили от офиса. Просто работая онлайн, я так же общаюсь с командой.",
            user: "Юлия Санина"
        },{
            id: 4,
            text: "Мы узнали много нового и получили очень дельные советы. Очень рекомендуем Максима в качестве гида!",
            user: "Рита Кац"
        },
    ]
    return(
        <section className="template2Reviews">
            <h2 className="template2Reviews__title">Отзывы</h2>
            <div className="template2Reviews__container">
                <div className="template2Reviews__leftBlock">
                    {reviews.slice(0,2).map(item=>
                        <div className="reviewTemplate2">
                            <h4 className="reviewTemplate2__text">{item.text}</h4>
                            <p className="reviewTemplate2__user">{item.user}</p>
                        </div>
                    )}
                </div>
                <div className="template2Reviews__rightBlock">
                    {reviews.slice(2,4).map(item=>
                        <div className="reviewTemplate2">
                            <h4 className="reviewTemplate2__text">{item.text}</h4>
                            <p className="reviewTemplate2__user">{item.user}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}