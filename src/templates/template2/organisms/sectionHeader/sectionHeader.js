import Navigate from './Link/Link';
import './sectionHeader.scss';
import logo from './imgs/logo.svg'
export default function SectionHeader(){
    const links = [
        {id:1,to:'',text:'О нас'},
        {id:2,to:'',text:'Преимущества'},
        {id:3,to:'',text:'Каталог'},
        {id:4,to:'',text:'Галерея'},
        {id:5,to:'',text:'Отзывы'},
        {id:6,to:'',text:'Контакты'},
    ];
    return (
        <div className="template2Header">
            <div className="template2Header__container">
                {links.slice(0,3).map((link)=>(
                    <Navigate
                    key={link.id}
                    link={link}/>
                ))}
                <img src={logo} alt='Лого' className="template2Header__logo"/>
                {links.slice(3,6).map((link)=>(
                    <Navigate
                    key={link.id}
                    link={link}/>
                ))}
            </div>
        </div>
    )
}