import React, {useState} from 'react';

const CommentForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            headers: {'Content- type': 'application/json',
            },
            body: JSON.stringify({
            name,
            email,
            body,
            }),
            });

            if (response.ok){
            const data = await response.json();
            console.log('New comment:', data);
            } else {
            console.log('Failed');
            }
        } catch (error){
         console.log('Error', error);
        }
        };
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="body">Body:</label>
                <textarea
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
            </div>
            <button type="submit">Create Comment</button>
        </form>
    );
};

export default CommentForm;