import './sectionFooter.scss';
import * as Scroll from 'react-scroll';
import { Link } from "react-scroll";
import arrow from "./imgs/Arrow.svg"
export default function SectionFooter(){
    let scroll = Scroll.animateScroll;
    const toTop = () => scroll.scrollToTop()
    return(
        <div className="template4SectionFooter">
                <div className="template4SectionFooter__container">
                    <h4 className="template4SectionFooter__RR">© 2022 DAIMAX.TEAM</h4>
                    <Link className="template4ScrollToTop" activeClass="rocket_active"
                        onClick={toTop}
                        spy={true}
                        to='header'
                    >
                        <h4 className="template4ScrollToTop__description">НАВЕРХ</h4>
                        <img src={arrow} alt="" className="template4ScrollToTop__img" />
                    </Link>
                </div>
            </div>
    )
}