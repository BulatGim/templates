import './Example.scss'
export default function Example(props) {
    function createText(item) {
        return { __html: item.text };
    }
    return (
        <div className="template4Example" onClick={() => props.open(props.item)}>
            <img src={props.item.pic} alt="" className="template4Example__item" />
            <div className="template4Example__background">
                <h3 className="template4Example__text" dangerouslySetInnerHTML={createText(props.item)}></h3>
            </div>
        </div>
    )
}