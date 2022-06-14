import React from 'react';
import logo from "./imgs/Rectangle 8.svg"
import Whats from "./imgs/WhatsApp.svg"
import VK from "./imgs/VK.svg"
import TG from "./imgs/Vector.svg"
import "./sectionFooter.scss"

const SectionFooter = () => {
    const middleBlock = [{
        id: 1,
        description: "Товар"
    },{
        id: 2,
        description: "Преимущества"
    },{
        id: 3,
        description: "Гарантии"
    },{
        id: 4,
        description: "Отзывы"
    },{
        id: 5,
        description: "FAQ"
    },{
        id: 6,
        description: "Контакты"
    },
    ]
    return (
        <section className="template3SectionFooter">
            <div className="leftBlock">
                <img src={logo} alt="" className="leftBlock__img"/>
                <p className="leftBlock__RR">Copyright</p>
            </div>
            <div className="middleBlock">
                {middleBlock.map(item=>
                    <h4 key={item.id} className="middleBlock__item">{item.description}</h4>
                )}
            </div>
            <div className="rightBlock">
                <a href="#" className="rightBlock__phone"><h2>+7 (999) 999-99-99</h2></a>
                <h2 className="rightBlock__mail">mail@mail.ru</h2>
                <div className="socialNetworks">
                    <img src={Whats} alt="" className="socialNetworks__item"/>
                    <img src={VK} alt="" className="socialNetworks__item"/>
                    <img src={TG} alt="" className="socialNetworks__item"/>
                </div>
            </div>
        </section>
    );
};

export default SectionFooter;