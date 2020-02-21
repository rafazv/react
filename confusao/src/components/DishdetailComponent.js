import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'})
        .format(new Date(Date.parse(date)));
}

function RenderDish({dish}) {
    if (dish) {
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <RenderComments comments={dish.comments} />
                </div>
            </div>
        );
    } else {
        return(
            <div></div>
        );
    }
}

function RenderComments({comments}) {
    if(comments) {
        const commentsElement = comments.map((c) => {
            return (
                <div key={c.id}>
                    <p>{c.comment}</p>
                    <p>-- {c.author}, {formatDate(c.date)}</p>
                </div>
            );
        })
        return commentsElement;
    } else {
        return(
            <div></div>
        );
    }
}

const Dishdetail = (props) => {
    return (
        <div className="container">
            <RenderDish dish={props.dish} />
        </div>
    );
}

export default Dishdetail;