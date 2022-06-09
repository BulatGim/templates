import Navigate from './Link/Link';
import './sectionHeader.scss';
import logo from './imgs/logo.svg'
import burger from './imgs/burger.svg'
import {links} from './links'
export default function SectionHeader(props) {
    
    return (
        <div className="template2Header">
            <div className="template2Header_dextop">
                <div className="template2Header__container">
                    {links.slice(0, 3).map((link) => (
                        <Navigate
                            key={link.id}
                            link={link} />
                    ))}
                    <img src={logo} alt='Лого' className="template2Header__logo" />
                    {links.slice(3, 6).map((link) => (
                        <Navigate
                            key={link.id}
                            link={link} />
                    ))}
                </div>
            </div>
            <div className="template2Header_mobile">
                <div className="template2Header__container">
                    <img src={logo} alt='Лого' className="template2Header__logo" />
                    <img src={burger} alt='Меню' className="template2Header__menu" onClick={props.open} />
                </div>
            </div>
        </div>
    )
}