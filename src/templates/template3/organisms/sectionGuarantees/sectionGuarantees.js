import './sectionGuarantees.scss';
export default function SectionGuarantees() {
    const guarantees = [
        { id: 1, text: 'Гарантия 1' },
        { id: 2, text: 'Гарантия 2' },
        { id: 3, text: 'Гарантия 3' },
        { id: 4, text: 'Гарантия 4' },
        { id: 5, text: 'Гарантия 5' },
        { id: 6, text: 'Гарантия 6' },
    ]
    return (
        <div className="template3SectionGuarantees">
            <div className="template3SectionGuarantees__container">
                <h2 className="template3SectionGuarantees__title">Мы гарантируем</h2>
                <div className="template3SectionGuarantees__info">
                    {guarantees.map((elem) => (
                        <div className="template3SectionGuarantees__guarantee">
                            <span className="template3SectionGuarantees__guarantee_dot"></span>
                            <h4>{elem.text}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}