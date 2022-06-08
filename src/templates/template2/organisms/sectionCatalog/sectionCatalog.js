import './sectionCatalog.scss';
import Card from './Card/Card';
import image from './imgs/img.png'

export default function SectionCatalog (){
    const cards = [
        {id:1,img:image, title:'Наименование товара',info: 'Характеристика',price:'Цена'},
        {id:2,img:image, title:'Наименование товара',info: 'Характеристика',price:'Цена'},
        {id:3,img:image, title:'Наименование товара',info: 'Характеристика',price:'Цена'},
    ]
    return (
        <div className="template2SectionCatalog">
            <div className="template2SectionCatalog__content">
                <h2>Каталог</h2>
                <div className="template2SectionCatalog__container">
                    {cards.map((card)=>(
                        <Card
                        key={card.id}
                        card={card}/>
                    ))}
                </div>
                <button className="template2SectionCatalog__button"><h4>Оформить заявку</h4></button>
            </div>
        </div>
    )
}