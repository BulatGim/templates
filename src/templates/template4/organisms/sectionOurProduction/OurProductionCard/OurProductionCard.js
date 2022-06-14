import './OurProductionCard.scss';
export default function OurProductionCard(props){
    return (
        <div className="template4OurProductionCard">
            <img src={props.card.img} alt={props.card.title} className="template4OurProductionCard__img"/>
            <h2>{props.card.title}</h2>
        </div>
    )
}