import './Advantage.scss';
export default function Advantage(props) {
    return (
        <div className="template4Advantage">
            <img src={props.item.img} alt="" className="template4Advantage__img" />
            <h3 className="template4Advantage__description">{props.item.description}</h3>
        </div>
    )
}