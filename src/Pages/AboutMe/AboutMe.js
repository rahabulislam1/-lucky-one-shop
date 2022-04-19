import React from 'react';
import { Card } from 'react-bootstrap';
import img from '../../Images/AboutMe/Rahabul.jpg';

const AboutMe = () => {
    return (
        <div>
            <Card className='w-50 mx-auto' style={{ width: '30rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> Name : Rahabul Islam</Card.Title>
                    <Card.Text>
                        <strong>My Goal </strong>:
                        I am a good photographer.It's my hobby to captured good image of wild animals.Now, i am taking and participate a course from programming hero which is based on web development.I am fully focused on this course.To rich my goal i need to be focused ,attentive and hardworking.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AboutMe;