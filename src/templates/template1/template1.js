import './template1.scss'
import SectionHeader from "../../organisms/sectionHeader/sectionHeader";
import SectionMain from "../../organisms/sectionMain/sectionMain";
import SectionForm from "../../organisms/sectionForm/sectionForm"
import SectionFooter from "../../organisms/sectionFooter/sectionFooter"
import SectionReviews from '../../organisms/sectionReviews/sectionReviews';

export default function Template1() {
    return(
        <div className="template1">
            <SectionHeader />
            <SectionMain />
            <SectionReviews/>
            <SectionForm/>
            <SectionFooter/>
        </div>
    )
}