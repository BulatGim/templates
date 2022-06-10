import {services} from "./consts";
import Service from "./molecules/sectionService/service";
import "./sectionServices.scss"
import {useEffect, useState} from "react";

export default function SectionServices() {
    const [width, setWidth] = useState()
    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])
    return (
        <section className="sectionServices">
            <h2 className="sectionServices__title">Услуги</h2>

            {width <= 1024 ? (
                <div className="sectionServices__container">
                    <div className="upperBlock">
                        {services.slice(0, 2).map((item) =>
                            <Service service={item} key={item.id}/>
                        )}
                    </div>
                    <div className="lowerBlock">
                        {services.slice(2, 4).map((item) =>
                            <Service service={item} key={item.id}/>
                        )}
                    </div>
                </div>
            ) : (
                <div className="sectionServices__container">
                    {
                        services.map((item) =>
                            <Service service={item} key={item.id}/>
                        )
                    }
                </div>
            )}
        </section>
    )
}