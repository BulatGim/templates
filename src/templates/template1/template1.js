import './template1.scss'
import SectionHeader from "../../organisms/sectionHeader/sectionHeader";
import SectionMain from "../../organisms/sectionMain/sectionMain";


export default function Template1() {
    return(
        <div className="template1">
            <SectionHeader />
            <SectionMain />
        </div>
    )
}