import './Advantage.scss';
export default function Advantage(props) {
    return (
        <div className="advantage">
            <img src={props.card.src} alt="" className="advantage__img"></img>
            <div className="advantage__text">
                <h3 className="advantage__title">{props.card.title}</h3>
                <h4 className="advantage__subtitle">{props.card.subtitle}</h4>
            </div>
        </div>
    )
}