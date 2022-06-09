import './Menu.scss';
import {useState} from 'react'
import logo from '../imgs/logo.svg'
import close_btn from '../imgs/close.svg'
import {links} from '../links'
import Navigate from '../Link/Link';
export default function Menu (props) {
    const [close,setClose] = useState('')
    function closeMenu(){
        props.close();
        setClose('close')
    }
    return (
        <div className={props.visible?"template2Menu":`template2Menu_hiden ${close}`}>
            <div className="template2Menu__content">
                <img src={logo} alt='Логотип'className="template2Menu__logo"/>
                {links.map((link)=>(
                    <Navigate
                    key={link.id}
                    link={link}/>
                ))}
            </div>
            <img src={close_btn} alt="Закрытие" className="template2Menu__close-button" onClick={closeMenu}/>
        </div>
    )
}