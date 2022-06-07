export default function SectionService(props) {
    return(
        <div className="sectionService">
            <img src={props.service.img} alt="service image" className="sectionService__preview"/>
            <h3 className="sectionService__title">{props.service.title}</h3>
            <h4 className="sectionService__description">{props.service.description}</h4>
        </div>
    )
}