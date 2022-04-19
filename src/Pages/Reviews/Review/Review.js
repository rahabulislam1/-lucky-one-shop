import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css';

const Review = (props) => {
    const { name, img, review, Rating } = props.review;
    return (
        <div id='reviews' className='review'>
            <Card style={{ height: '500px', width: '20rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-center'>{name}</Card.Title>
                    <Card.Text>
                        <p>Review : {review}</p>
                    </Card.Text>
                    <Card.Text>
                        <p>Rating : {Rating}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;