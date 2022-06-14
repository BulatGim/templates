import "./templateReviewsFormQA.scss"

const TemplateReviewsFormQa = (props) => {
    return (
        <div>
            <section className="templateReviewsFormQa">
                <h2 className="templateReviewsFormQa__title">{props.title}</h2>
                <div className="templateReviewsFormQa__rightBLock">
                    {props.component}
                </div>
            </section>
        </div>
    );
};

export default TemplateReviewsFormQa;