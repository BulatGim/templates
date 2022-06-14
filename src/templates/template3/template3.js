import SectionAbout from './organisms/sectionAbout/sectionAbout';
import SectionAdvantage from './organisms/sectionAdvantage/sectionAdvantage';
import SectionGuarantees from './organisms/sectionGuarantees/sectionGuarantees';
import SectionHeader from './organisms/sectionHeader/sectionHeader';
import SectionProduct from './organisms/sectionProduct/sectionProduct';
import SectionSlider from './organisms/sectionSlider/sectionSlider';
import './template3.scss';
import { useState } from 'react'
import Menu from './organisms/sectionHeader/Menu/Menu';
import SectionClientSays from "./organisms/sectionClientsSays/sectionClientSays";
import SectionQuestions from "./organisms/sectionQuestions/sectionQuestions";
import SectionForm from "./organisms/sectionForm/sectionForm";
import SectionFooter from "./organisms/sectionFooter/sectionFooter";
export default function Template3(){
    const [visible,setVisible] = useState(false)
    function handleVisible(){
        setVisible(!visible)
    }
    return (
        <div className="template3">
            <SectionHeader
            open={handleVisible}/>
            <SectionAbout/>
            <SectionProduct/>
            <SectionSlider/>
            <SectionAdvantage/>
            <SectionGuarantees/>
            <Menu
            visible={visible}
            close={handleVisible}/>
            <SectionClientSays />
            <SectionQuestions />
            <SectionForm />
            <SectionFooter />
        </div>
    )
}