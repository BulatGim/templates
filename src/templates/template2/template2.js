import SectionHeader from './organisms/sectionHeader/sectionHeader';
import SectionInfo from './organisms/sectionInfo/sectionInfo';
import './template2.scss';

export default function Template2(){
    return (
        <div className="template2">
            <SectionHeader/>
            <SectionInfo/>
            <div style={{width:'100%', height:'100vh',backgroundColor:'red'}}></div>
        </div>
    )
}