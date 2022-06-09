import {useState} from 'react'
import SectionAboutCompany from './organisms/sectionAboutCompany/sectionAboutCompany';
import SectionAdvantages from './organisms/sectionAdvantages/sectionAdvantages';
import SectionHeader from './organisms/sectionHeader/sectionHeader';
import SectionInfo from './organisms/sectionInfo/sectionInfo';
import SectionFooter from "./organisms/sectionFooter/sectionFooter";
import './template2.scss';
import SectionForm from "./organisms/sectionForm/sectionForm";
import SectionCatalog from './organisms/sectionCatalog/sectionCatalog';
import Menu from './organisms/sectionHeader/Menu/Menu';

export default function Template2(){
    const [visible,setVisible] = useState(false)
    function handleVisible(){
        setVisible(!visible)
    }
    return (
        <div className="template2">
            <SectionHeader
            open={handleVisible}/>
            <SectionInfo/>
            <SectionAboutCompany/>
            <SectionAdvantages/>
            <SectionCatalog/>
            <SectionForm />
            <SectionFooter />
            <Menu 
            visible={visible}
            close={handleVisible}/>
        </div>
    )
}