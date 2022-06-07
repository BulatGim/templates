import './sectionReviews.scss';
import img from './imgs/review_img.svg'
import Review from './Review/Review';
export default function SectionReviews() {
    const reviewsCards = [
        { id: 1, src: img, title: 'Вы профессионалы. При первой встрече я рассказала об идее проекта, а вы помогли доработать и трансформировать ее во что-то особое.', author: 'Тамара Ларина' },
        { id: 2, src: img, title: 'Мы узнали много нового и получили очень дельные советы. Очень рекомендуем Максима в качестве гида!', author: 'Рита Кац' },
        { id: 3, src: img, title: 'Отличные рребята, очень артистичные, умело организовали досуг. Обязательно приеду в следующем году!', author: 'Юлия Санина' },
        { id: 4, src: img, title: 'Работая в большой корпорации, сложнее все держать под контролем. Так что это идеальный сервис для нас.', author: 'Саша Коротких' },
    ]
    return (
        <div className="sectionReviews">
            <div className="sectionReviews__content">
                <h2>Отзывы наших клиентов</h2>
                <div className="sectionReviews__container">
                    {reviewsCards.map((card) => (
                        <Review
                            card={card}
                            key={card.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}