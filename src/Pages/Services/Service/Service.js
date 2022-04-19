import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateCheckout = () => {
        navigate('/checkout');
    }
    return (
        <div className='service' >
            <Card style={{ height: '620px', width: '20rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body >
                    <Card.Title className='text-center'>{name}</Card.Title>
                    <Card.Text>
                        <p>Photography Description : {description}</p>
                    </Card.Text>
                    <Card.Text>
                        <p>Subscription Fee : {price}</p>
                    </Card.Text>
                    <Button onClick={navigateCheckout} className='Buy-btn' variant="primary">Booking Now</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;