import React from 'react';
import UserForm from './components/UserForm/UserForm';
import CommentForm from './components/CommentForm/CommentForm';
const App = () => {
    return (
        <div>
            <h2>Create User</h2>
            <UserForm />

            <h2>Create Comment</h2>
            <CommentForm />
        </div>
    );
};

export default App;