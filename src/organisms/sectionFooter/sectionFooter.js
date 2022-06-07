import './sectionFooter.scss';
export default function SectionFooter (){
    return(
        <div className="sectionFooter">
            <div className="sectionFooter__container">
                <h2 className="sectionFooter__title">Наши контакты</h2>
                <a href="tel:+79999999999" className="sectionFooter__telephone"><h2>+7 (999) 999-99-99</h2></a>
                <a className="sectionFooter__email" href="mailto:mail@mail.ru"><h2>mail@mail.ru</h2></a>
                <div className="sectionFooter__links">
                    <a className="sectionFooter__link sectionFooter__link_wa"></a>
                    <a className="sectionFooter__link sectionFooter__link_wk"></a>
                    <a className="sectionFooter__link sectionFooter__link_tg"></a>
                </div>
            </div>
        </div>
    )
}