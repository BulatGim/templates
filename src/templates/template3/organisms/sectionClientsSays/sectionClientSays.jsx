import React from 'react';
import "./sectionClientSays.scss"
import TemplateReviewsFormQa from "../../templates/templateReviewsFormQA/templateReviewsFormQA";
import ClientSaysReview from "./molecules/clientSaysReview/clientSaysReview";

const SectionClientSays = () => {
    const reviews = [{
        id: 1,
        description: "Вы профессионалы. При первой встрече я рассказала об идее проекта, а вы помогли доработать и трансформировать ее во что-то особое.",
        author: "Тамара Ларина",
    },{
        id: 2,
        description: "Работая в большой корпорации, сложнее все держать под контролем. Так что это идеальный сервис для нас. Мы общаемся и обсуждаем задачи в режиме реального времени.",
        author: "Саша Коротких",
    },{
        id: 3,
        description: "Мы узнали много нового и получили очень дельные советы. Очень рекомендуем Максима в качестве гида!",
        author: "Рита Кац",
    },]
    return (
        <section className="sectionClientSays">
            <TemplateReviewsFormQa title="Вот что говорят о нас наши клиенты" array={reviews} component={reviews.map(item => <ClientSaysReview description={item.description} author={item.author}/>)}/>
        </section>
    );
};

export default SectionClientSays;