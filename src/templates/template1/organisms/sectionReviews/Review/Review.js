import './Review.scss';
export default function Review(props) {
    return (
        <div className="review">
            <img src={props.card.src} alt="" className="review__img"></img>
            <div className="review__text">
                <h4 className="review__title">{props.card.title}</h4>
                <p>{props.card.author}</p>
            </div>
        </div>
    )
}