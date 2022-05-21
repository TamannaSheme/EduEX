// Bolg js 

import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h2> Ans to  the Question  No.1 </h2>
            <p> Authentication is the process of identifying a user to provide access to a system. In this, the user or client and server are verified. It is usually performed before the authorization. It requires the login details of the user, such as user name & password, etc. Example: Entering Login details is necessary for the employees to authenticate themselves to access the organizational emails or software.
                Authorization is the process of giving permission to access the resources.
                In this, it is verified that if the user is allowed through the defined policies and rules. It is usually done once the user is successfully authenticated. It requires the user's privilege or security level. Example: After employees successfully authenticate themselves, they can access and work on certain functions only as per their roles and profiles.
            </p>
            <h2>  Ans to  the Question  No. 2 </h2>
            <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. There are many options to implement authentications such as:
                Parse: Parse is an open source alternative that many people use instead of Firebase because it offers many of the same features and additional benefits.
                Supabase: Supabase is another open source alternative to Firebase, and the main difference is
                Kuzzle: Like Supabase and Parse, Kuzzle is also an open source Firebase alternative that offers a real-time database.
                Back4App: Back4App calls itself the "Low-code backend to build modern apps". It's based on the Parse Platform, and users say it is an excellent alternative to the original Parse hosting service that Facebook killed.

            </p>
            <h2> Ans to  the Question  No. 03 </h2>
            <p> 	Firebase is originally developed by Firebase inc. and later acquired by Google. It provides different kinds of services that help you to develop high-quality mobile and web applications to grow your business. It is compatible with Web, iOS, Android clients. With Firebase, developers don’t need to worry about the backend programming, Authentication, API development, database, File storage, etc. Firebase provides all the services with very efficient and fast performance. There are many services which Firebase provides, most useful of them are:
                •	Cloud Firestore
                •	Cloud Functions
                •	Authentication
                •	Hosting
                •	Cloud Storage
                •	Google Analytics
                •	Predictions
                •	Cloud Messaging
                •	Dynamic Links
                •	Remote Config
            </p>
        </div>
    );
};

export default Blog;