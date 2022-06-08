import"./review.scss"

export default function Review(props) {
    return(
        <div className="reviewTemplate2">
            <h4 className="reviewTemplate2__text">{props.review.text}</h4>
            <p className="reviewTemplate2__user">{props.review.user}</p>
        </div>
    )
}