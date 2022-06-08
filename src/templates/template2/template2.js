import SectionAboutCompany from './organisms/sectionAboutCompany/sectionAboutCompany';
import SectionAdvantages from './organisms/sectionAdvantages/sectionAdvantages';
import SectionHeader from './organisms/sectionHeader/sectionHeader';
import SectionInfo from './organisms/sectionInfo/sectionInfo';
import './template2.scss';

export default function Template2(){
    return (
        <div className="template2">
            {/* <SectionHeader/> */}
            <SectionInfo/>
            <SectionAboutCompany/>
            <SectionAdvantages/>
        </div>
    )
}