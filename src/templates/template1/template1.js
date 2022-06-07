import './template1.scss'
import SectionHeader from "../../organisms/sectionHeader/sectionHeader";
import SectionMain from "../../organisms/sectionMain/sectionMain";
import SectionAboutUs from "../../organisms/sectionAboutUs/sectionAboutUs";
import SectionServices from "../../organisms/sectionServices/sectionServices";


export default function Template1() {
    return(
        <div className="template1">
            <SectionHeader />
            <SectionMain />
            <SectionAboutUs />
            <SectionServices />
        </div>
    )
}