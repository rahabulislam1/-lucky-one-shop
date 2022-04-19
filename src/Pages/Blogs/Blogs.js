import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <h3 className='text-info mb-2 ms-3'>Q1) Different between Authorization and Authentication?</h3>
            <div className='question-1'>
                <div >
                    <h4>Authorization</h4>
                    <p>Authorization stands for process of specifying access rights/privileges to resources related to internet security.It's validates user's permission.Occurs after Authentication.</p>
                </div>
                <div>
                    <h4>Authentication</h4>
                    <p>Authentication stands for process of confirming the truth of an attribute of a single piece of data claimed true by an entity.It's verify user's credentials.Occurs before Authorization.</p>
                </div>
            </div>
            <h3 className='text-info mb-2 ms-3'>Q2) Why are you using Firebase? What other options do you have to implement Authentication?</h3>
            <div className='question-2'>
                <p>Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick.That's why i am using firebase. <br />
                    React-Firebase-Hooks is a complement to implement authentication.It is less complicated then firebase authentication.And very easy to use. </p>
            </div>
            <h3 className='text-info mb-2 ms-3'>Q3) What other services does firebase provide other than authentication?</h3>
            <div className='question-2'>
                <p> If one are looking to develop mobile apps such as live streaming, chat messaging, etc., then he/she can use Firebase.There are many services which Firebase provides, Most useful of them are:</p>
                <ul>
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>
                </ul>

            </div>
        </div>
    );
};

export default Blogs;