import './sectionAdvantages.scss';
import img from './imgs/review_img.svg'
import Advantage from './Advantage/Advantage';
export default function SectionAdvantages() {
    const reviewsCards = [
        { id: 1, src: img, title: 'Преимущество 1', subtitle: 'Коротко расскажите в чем его суть и добавьте яркое фото, чтобы привлечь больше внимания клиентов.' },
        { id: 2, src: img, title: 'Преимущество 2', subtitle: 'Коротко расскажите в чем его суть и добавьте яркое фото, чтобы привлечь больше внимания клиентов.' },
        { id: 3, src: img, title: 'Преимущество 3', subtitle: 'Коротко расскажите в чем его суть и добавьте яркое фото, чтобы привлечь больше внимания клиентов.' },
        { id: 4, src: img, title: 'Преимущество 4', subtitle: 'Коротко расскажите в чем его суть и добавьте яркое фото, чтобы привлечь больше внимания клиентов.' },
    ]
    return (
        <div className="template2SectionAdvantages">
            <div className="template2SectionAdvantages__content">
                <div className="template2SectionAdvantages__container">
                    {reviewsCards.map((card) => (
                        <Advantage
                            card={card}
                            key={card.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}