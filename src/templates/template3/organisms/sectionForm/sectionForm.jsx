import React from 'react';
import TemplateReviewsFormQa from "../../templates/templateReviewsFormQA/templateReviewsFormQA";
import Form from "./molecules/form/form";

const SectionForm = () => {
    const forms = [{
        id: 1,
        placeholder: "Имя"
    },{
        id: 2,
        placeholder: "Электронная почта"
    },{
        id: 3,
        placeholder: "Текст"
    },
    ]
    return (
        <section className="sectionForm">
            <TemplateReviewsFormQa title="Заказать товар" array={forms} component={<Form/>}/>
        </section>
    );
};

export default SectionForm;