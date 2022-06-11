import './sectionSlider.scss';
import img1 from './imgs/1.svg';
import img2 from './imgs/2.svg';
import img3 from './imgs/3.svg';
import img4 from './imgs/4.svg';
import img5 from './imgs/5.svg';
import img6 from './imgs/6.svg';
import img7 from './imgs/7.svg';
import { useState } from 'react';

export default function SectionSlider() {
    const [active, setActive] = useState(1);
    const sliders = [
        { id: 1, img: img1 },
        { id: 2, img: img2 },
        { id: 3, img: img3 },
        { id: 4, img: img4 },
        { id: 5, img: img5 },
        { id: 6, img: img6 },
        { id: 7, img: img7 },
    ]
    function doNextSlide() {
        setActive((current) => current === sliders.length ? 1 : current + 1)
    }
    
    function doPrevSlide() {
        setActive((current) => current === 1 ? sliders.length : current - 1)
    }

    return (
        <div className="template3SectionSlider">
            {sliders.slice(`${active - 1}`, `${active}`).map((slide) => (
                <img src={slide.img} alt="Фото товара" className="template3SectionSlider__img" />
            ))}
            <div className="template3SectionSlider__buttons">
                <button className="template3SectionSlider__button template3SectionSlider__button_left" onClick={doPrevSlide}></button>
                <button className="template3SectionSlider__button template3SectionSlider__button_right" onClick={doNextSlide}></button>
            </div>
        </div>
    )
}