import SectionAboutCompany from './organisms/sectionAboutCompany/sectionAboutCompany';
import SectionAdvantages from './organisms/sectionAdvantages/sectionAdvantages';
import SectionHeader from './organisms/sectionHeader/sectionHeader';
import SectionInfo from './organisms/sectionInfo/sectionInfo';
import SectionFooter from "./organisms/sectionFooter/sectionFooter";
import SectionReviews from "./organisms/sectionReviews/sectionReviews";
import './template2.scss';
import SectionForm from "./organisms/sectionForm/sectionForm";
import SectionCatalog from './organisms/sectionCatalog/sectionCatalog';
import SectionOurProjects from "./organisms/sectionOurProjects/sectionOurProjects";

export default function Template2(){
    return (
        <div className="template2">
            {/* <SectionHeader/> */}
            <SectionInfo/>
            <SectionAboutCompany/>
            <SectionAdvantages/>
            <SectionCatalog/>
            <SectionOurProjects />
            <SectionReviews />
            <SectionForm />
            <SectionFooter />
        </div>
    )
}