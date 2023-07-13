import React, { useState } from 'react';
import UserDetails from '../UserDetails/UserDetails';
import UserAddress from '../UserAddress/UserAddress';
import Company from '../Company/Company';

const User = ({ user }) => {
    const [showDetails, setShowDetails] = useState(false);

    const Details = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div>
            <h2>{user.name}</h2>
            <button onClick={Details}>
                {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
            {showDetails && (
                < >
                    <UserDetails user={user} />
                    <UserAddress address={user.address} />
                    <Company company={user.company} />
                < />
            )}
        </div>
    );
};

export default User;
