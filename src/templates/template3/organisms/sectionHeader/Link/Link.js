import './Link.scss';
import * as Scroll from 'react-scroll';
import { Link } from "react-scroll";
export default function Navigate (props){
    return (
        <Link
        className="template3Link" 
        activeClass="link_active"
        to={props.link.to}
        spy={true}
        >
        <h4>{props.link.text}</h4>
        </Link>
    )
}