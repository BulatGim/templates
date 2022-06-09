import {useState, useEffect} from "react";
import slide from "./imgs/Rectangle 15.svg";
import pepe from "./imgs/c35f6b1503ff6062369841f69f51d152.jpg";
import drift from "./imgs/dbd21532-9a52-46f7-ad49-72fb314aa447_rw_1920.jpg"
import first from "./imgs/1.svg"
import second from "./imgs/2.svg"
import third from "./imgs/3.svg"
import fourth from "./imgs/4.svg"
import five from "./imgs/5.svg"
import six from "./imgs/6.svg"
import seven from "./imgs/7.svg"
import "./sectionOurProjects.scss"
import Slider from "./molecules/Slider/Slider";

export default function SectionOurProjects() {
    const slides = [first, second, third, fourth, five, six, seven/*slide, pepe, drift, slide, drift, pepe, drift, drift, slide, slide, slide, slide, slide, slide, slide, slide, slide, slide, slide, slide, slide*/]
    /*const [activeIndex, setActiveIndex] = useState(0);

    const [isMouseDown, setIsMouseDown] = useState(false);

    const [x3, setX3] = useState(null);

    const [y3, setY3] = useState(null);

    function doNextSlide(){
        console.log("donextslide")
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись
            const res = current === slides.length - 1 ? 0 : current+1;
            // Возвращаем индекс
            console.log(res)
            return res
        })
        //countIndex(1);
    }

    function doPrevSlide(){
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись
            const res = current === 0 ? slides.length - 1 : current-1;
            // Возвращаем индекс
            //console.log(res)
            return res
        })
        // countIndex(-1);
    }

    // Хук Effect
    useEffect(() => {
        // Запускаем интервал
        const interval = setInterval(() => {
            doNextSlide();
        }, 5000)
        // Выключаем интервал
        return () => clearInterval(interval)
    }, [])

    // Вычисляем индекс предыдущего слайда
    const prevImgIndex = activeIndex ? activeIndex - 1 : slides.length - 1
    // Вычисляем индекс следующего слайда
    const nextImgIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1

    //инициализируем переменные для начала ведения отсчета для перелистывания
    let x1 = null;
    let y1 = null;


    //функция записывающая начало свайпа по координатам x и y
    function handleTouchStart(e){
        x1 = e.touches[0].clientX;
        y1 = e.touches[0].clientY;
    }





    function handleTouchMove(e){
        if(!x1 || !y1){
            // если не существует начала свайпа, выходим из функци
            return false;
        }

        //каждый раз инициализируется переменная записывающая текущие координаты свайпа
        let x2 = e.touches[0].clientX;
        let y2 = e.touches[0].clientY;

        let xDifference = x2-x1;
        let yDifference = y2-y1

        calculateCoordinates(xDifference, yDifference)

    }


    function handleMouseDown(e){
        setIsMouseDown(true);
        setX3(e.pageX);
        setY3(e.pageY);
    }


    function handleMouseMove(e){
        if(isMouseDown == true){
            let x4 = e.pageX;
            let y4 = e.pageY;
            e.preventDefault();
            if(Math.abs(x4-x3)>80){
                setX3(x4)
                let xDifference = x4-x3;
                let yDifference = y4-y3;
                calculateCoordinates(xDifference, yDifference);
            }else{
                return false;
            }
        }
    }

    function handleMouseUp(e){
        setIsMouseDown(false);
    }

    function calculateCoordinates(xDiff, yDiff){
        // записываем разницу в координатах
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            //ветка выполняется, когда свайп идет влево или вправо
            if (xDiff>0) {
                doPrevSlide();
            }else {
                doNextSlide();
            }
        }
    }*/
    return(
        <section className="template2OurProjects">
            {/*<div className="slider" onTouchStart={(e)=>handleTouchStart(e)} onTouchMove={(e)=>handleTouchMove(e)}>*/}
                {/*<img src={slides[prevImgIndex]} alt="" className="slider__img"/>
                <img src={slides[activeIndex]} alt="" className="slider__img"/>
                <img src={slides[nextImgIndex]} alt="" className="slider__img"/>*/}
            <h2 className="template2OurProjects__title">Наши работы</h2>
                <Slider slides={slides}/>



                {/*{slides.slice(`${prevImgIndex}`, `${nextImgIndex}`).map((card) => (
                    <div className="technology-map__info">
                        <img src={card} alt="" className="slider__img"/>
                    </div>
                ))}*/}

            {/*<div className="slider__currentSlides slider__prevSlides">
                    {slides.slice(`${prevImgIndex}`, `${activeIndex}`).map(item =>
                        <img className="slider__img" src={item} alt="card" />
                    )}
                </div>
                <div className="slider__currentSlides">
                    {slides.slice(`${prevImgIndex}`, `${activeIndex}`).map(item =>
                        <img className="slider__img" src={item} alt="card" />
                    )}
                </div>
                <div className="slider__currentSlides slider__nextSlides ">
                    {slides.slice(`${activeIndex}`, `${nextImgIndex}`).map(item =>
                        <img className="slider__img" src={item} alt="card" />
                    )}
                </div>*/}
            {/*</div>*/}
        </section>
    )
}