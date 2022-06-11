import SectionAbout from './organisms/sectionAbout/sectionAbout';
import SectionHeader from './organisms/sectionHeader/sectionHeader';
import SectionProduct from './organisms/sectionProduct/sectionProduct';
import SectionSlider from './organisms/sectionSlider/sectionSlider';
import './template3.scss';
export default function Template3(){
    return (
        <div className="template3">
            <SectionHeader/>
            <SectionAbout/>
            <SectionProduct/>
            <SectionSlider/>
        </div>
    )
}