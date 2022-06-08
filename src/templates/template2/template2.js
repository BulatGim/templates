import SectionAboutCompany from './organisms/sectionAboutCompany/sectionAboutCompany';
import SectionHeader from './organisms/sectionHeader/sectionHeader';
import SectionInfo from './organisms/sectionInfo/sectionInfo';
import SectionFooter from "./organisms/sectionFooter/sectionFooter";
import './template2.scss';
import SectionForm from "./organisms/sectionForm/sectionForm";

export default function Template2(){
    return (
        <div className="template2">
            {/* <SectionHeader/> */}
            <SectionInfo/>
            <SectionAboutCompany/>
            {/*<div style={{width:'100%', height:'100vh',backgroundColor:'red'}}></div>*/}
            <SectionForm />
            <SectionFooter />
        </div>
    )
}