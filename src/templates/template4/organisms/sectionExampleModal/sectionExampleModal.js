import './sectionExampleModal.scss';
export default function SectionExampleModal(props) {
    return (
        <div className={props.visible ? "template4SectionExampleModal template4SectionExampleModal_visible" : "template4SectionExampleModal"} data-modal='hide' onClick={(e) => props.close(e)}>
            <div className="template4SectionExampleModal__content">
                <img src={props.pic} alt="" className="template4Example__item" />
            </div>
            <button className="template4SectionExampleModal__close"data-modal='close' onClick={props.close}></button>
        </div>
    )
}