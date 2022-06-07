import './template1.scss'
import SectionHeader from "../../organisms/sectionHeader/sectionHeader";
import SectionMain from "../../organisms/sectionMain/sectionMain";
import SectionForm from "../../organisms/sectionForm/sectionForm"
import SectionFooter from "../../organisms/sectionFooter/sectionFooter"

export default function Template1() {
    return(
        <div className="template1">
            <SectionHeader />
            <SectionMain />
            <SectionForm/>
            <SectionFooter/>
        </div>
    )
}