import React from 'react';
import "./clientSaysReview.scss"

const ClientSaysReview = (props) => {
    return (
        <div className="templateReviewsFormQa-review">
            <h4 className="templateReviewsFormQa-review__description">{props.description}</h4>
            <p className="templateReviewsFormQa-review__author">{props.author}</p>
        </div>
    );
};

export default ClientSaysReview;