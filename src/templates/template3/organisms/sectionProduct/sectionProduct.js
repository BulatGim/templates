import './sectionProduct.scss';
export default function SectionProduct() {
    return (
        <div className="template3SectionProduct">
            <div className="template3SectionProduct__container">
                <div className="template3SectionProduct__info">
                    <h2 className="template3SectionProduct__title">Название товара</h2>
                    <h5 className="template3SectionProduct__price">9990.-</h5>
                </div>
                <h4 className="template3SectionProduct__text">Коротко представьтесь и расскажите о компании или сервисе в 3-4 строках. С какими клиентами вы работаете, что вас вдохновляет. Чем гордится ваша команда, какие у нее ценности и мотивация.</h4>
                <button className="template3SectionProduct__button"><h4>Заказать</h4></button>
            </div>
        </div>
    )
}