import './sectionAdvantage.scss';
export default function SectionAdvantage() {
    const advantages = [
        { id: 1, title: 'Первое преимущество', text: 'Коротко расскажите в чем ее суть и добавьте яркое фото, чтобы привлечь больше внимания клиентов.' },
        { id: 2, title: 'Второе преимущество', text: 'Коротко расскажите в чем ее суть и добавьте яркое фото, чтобы привлечь больше внимания клиентов.' },
        { id: 3, title: 'Третье преимущество', text: 'Коротко расскажите в чем ее суть и добавьте яркое фото, чтобы привлечь больше внимания клиентов.' },
        { id: 4, title: 'Четвертое преимущество', text: 'Коротко расскажите в чем ее суть и добавьте яркое фото, чтобы привлечь больше внимания клиентов.' },
    ]
    return (
        <div className="template3SectionAdvantage">
            <div className="template3SectionAdvantage__container">
                {advantages.map((card)=>(
                    <div className="template3SectionAdvantage__card">
                        <h3 className="template3SectionAdvantage__title">{card.title}</h3>
                        <h4 className="template3SectionAdvantage__text">{card.text}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}