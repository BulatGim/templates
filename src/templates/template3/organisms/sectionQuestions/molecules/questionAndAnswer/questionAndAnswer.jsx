import React, {useState} from 'react';
import close from "./imgs/Vector.svg"
import "./questionAndAnswer.scss"

const QuestionAndAnswer = (props) => {
    const [isOpened, setIsOpened] = useState(false)
    return (
        <div className="questionAndAnswer">
            <div className="questionHeader" onClick={()=>isOpened?setIsOpened(false):setIsOpened(true)}>
                <h3 className="questionHeader__title">{props.title}</h3>
                <img src={close} alt="" className={isOpened?("questionHeader__closeBtn questionHeader__closeBtn_opened"):("questionHeader__closeBtn")}/>
            </div>
            <h4 className={isOpened?("questionAndAnswer__answer questionAndAnswer__answer_opened"):("questionAndAnswer__answer")}>{props.description}</h4>
        </div>
    );
};

export default QuestionAndAnswer;