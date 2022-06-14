import SectionHeader from './organisms/sectionHeader/sectionHeader';
import './template4.scss';
import { useState,useEffect } from 'react'
import SectionMainImg from './organisms/sectionMainImg/sectionMainImg';
import SectionAboutUs from './organisms/sectionAboutUs/sectionAboutUs';
import SectionOurProduction from './organisms/sectionOurProduction/sectionOurProduction';
import SectionExamples from './organisms/sectionExamples/sectionExamples';
import SectionExampleModal from './organisms/sectionExampleModal/sectionExampleModal';
import SectionOurAdvantages from './organisms/sectionOurAdvantages/sectionOurAdvantages';
import SectionFooter from './organisms/sectionFooter/sectionFooter';
import SectionModal from './organisms/sectionModal/sectionModal';
export default function Template4(){
    const [modalOpen, setModalOpen] = useState(false)
    const [pic, setPic] = useState('')
    const [visible, setVisible] = useState(false)
    
    useEffect(() => {
        visible ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
    }, [visible])
    function exampleOpen(item) {
        setPic(item.pic_col)
        setTimeout(()=>setVisible(true),250)
    }
    function handleClose(e) {
        if (e.target.getAttribute('data-modal') === 'hide'|| e.target.getAttribute('data-modal') === 'close') {
            setVisible(false)
        }
    }
    return (
        <div className="template4">
            <SectionHeader
            open={modalOpen}/>
            <SectionMainImg/>
            <SectionAboutUs/>
            <SectionOurProduction/>
            <SectionExamples
            open={exampleOpen}/>
            <SectionExampleModal
            visible={visible}
            pic={pic}
            close={handleClose}/>
            <SectionOurAdvantages
            open={setModalOpen}/>
            <SectionFooter/>
            <SectionModal
            close={setModalOpen}
            modalOpen={modalOpen}/>
        </div>
    )
}