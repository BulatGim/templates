import './sectionHeader.scss';
import Navigate from './Link/Link'
import { links } from './links';
import logo from './imgs/logo.svg';
import burger from './imgs/burger.svg'
export default function SectionHeader() {
    return (
        <div className="template3SectionHeader">
            <div className="template3SectionHeader__container">
                <img src={logo} alt="Логотип" className="template3SectionHeader__logo"/>
                <div className="template3SectionHeader__links">
                    {links.map((link) => (
                        <Navigate
                            key={link.id}
                            link={link} />
                    ))}
                </div>
                <img src={burger}className="template3SectionHeader__burger" />
            </div>
        </div>
    )
}