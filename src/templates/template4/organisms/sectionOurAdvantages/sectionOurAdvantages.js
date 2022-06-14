import './sectionOurAdvantages.scss'
import img from './imgs/img.svg'
import Advantage from './Advantage/Advantage'
export default function SectionOurAdvantages(props) {
    const advantages = [{
        id: 1,
        img: img,
        description: "Преимущество 1"
    }, {
        id: 2,
        img: img,
        description: "Преимущество 2"
    }, {
        id: 3,
        img: img,
        description: "Преимущество 3"
    }, {
        id: 4,
        img: img,
        description: "Преимущество 4"
    }
    ]
    return (
        <div className="template4SectionOurAdvantages">
            <h1 className="template4SectionOurAdvantages__title">НАШИ ПРЕИМУЩЕСТВА</h1>
            <div className="template4SectionOurAdvantages__container">
                {advantages.map((item) =>
                    <Advantage
                        key={item.id}
                        item={item} />
                )}
            </div>
            <button className="template4SectionOurAdvantages__btn" onClick={() => props.open(true)}>
                <h4>ОСТАВИТЬ ЗАЯВКУ</h4>
                <div className="template4Animation__container">
                    <div className="template4Animation__highlight"></div>
                </div>
            </button>
        </div>
    )
}