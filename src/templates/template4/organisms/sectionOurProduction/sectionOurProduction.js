import './sectionOurProduction.scss'
import img from './imgs/img.svg'
import OurProductionCard from './OurProductionCard/OurProductionCard'
export default function SectionOurProduction() {
    const cards = [
        { id: 1, title: 'Название 1', img: img },
        { id: 2, title: 'Название 2', img: img },
        { id: 3, title: 'Название 3', img: img },
        { id: 4, title: 'Название 4', img: img },
        { id: 5, title: 'Название 5', img: img },
        { id: 6, title: 'Название 6', img: img },
    ]
    return (
        <div className="template4SectionOurProduction">
            <h1 className="template4SectionOurProduction__title">НАША ПРОДУКЦИЯ И УСЛУГИ</h1>
            <div className="template4SectionOurProduction__container">

                {cards.map((card) => (
                    <OurProductionCard
                        key={card.id}
                        card={card} />
                ))}
            </div>
        </div>
    )
}