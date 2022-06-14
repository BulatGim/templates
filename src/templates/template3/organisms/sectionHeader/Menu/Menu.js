import './Menu.scss';
import { links } from '../links'
import Navigate from '../Link/Link'
import logo from '../imgs/logo.svg'
import close_btn from '../imgs/close.svg'
import { useState } from 'react';
export default function Menu(props) {
    const [close,setClose] = useState('')
    function closeMenu(){
        props.close();
        setClose('close')
    }
    return (
        <div className={props.visible?"template3Menu":`template3Menu_hiden ${close}`}>
            <div className="template3Menu__content">
                <img src={logo} alt="logo" className="template3Menu__logo"/>
                <div className="template3Menu__links">
                    {links.map((link) => (
                        <Navigate
                            key={link.id}
                            link={link} />
                    ))}
                </div>
                <a href="tel:+79999999999" ><h2 className="template3Menu__contact">+7 (999) 999-99-99</h2></a>
                <a href="mailto:mail@mail.ru"><h2 className="template3Menu__contact">mail@mail.ru</h2></a>
                <div className="template3Menu__social">
                    <a className="template3Menu__social_vk"></a>
                    <a className="template3Menu__social_tg"></a>
                    <a className="template3Menu__social_wa"></a>
                </div>
                <img src={close_btn} alt="Закрытие" className="template3Menu__close-button" onClick={closeMenu}/>
            </div>
        </div >
    )
}