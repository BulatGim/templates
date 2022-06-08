import './Card.scss';
export default function Card(props) {
    return (
        <div className="template2Card">
            <div className="template2Card__content">
                <img className="template2Card__img" src={props.card.img} alt={props.card.title} />
                <h4 className="template2Card__title">{props.card.title}</h4>
                <p>{props.card.info}</p>
                <h3 className="template2Card__price">{props.card.price}</h3>
            </div>
        </div>
    )
}