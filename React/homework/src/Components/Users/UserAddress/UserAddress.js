import React from 'react';

const UserAddress = ({address}) => {
    return (
        <div>
            <h4>Address</h4>
            <p>Street: {address.street}</p>
            <p>Suite: {address.suite}</p>
            <p>City: {address.city}</p>
        </div>
    );
};

export default UserAddress;