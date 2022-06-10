import SectionAbout from './organisms/sectionAbout/sectionAbout';
import SectionHeader from './organisms/sectionHeader/sectionHeader';
import './template3.scss';
export default function Template3(){
    return (
        <div className="template3">
            <SectionHeader/>
            <SectionAbout/>
        </div>
    )
}