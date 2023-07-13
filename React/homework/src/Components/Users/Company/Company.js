import React from 'react';

const Company = ({ company }) => {
    return (
        <div>
            <h4>Company</h4>
            <p>Name: {company.name}</p>
            <p>Catch Phrase: {company.catchPhrase}</p>
            <p>BS: {company.bs}</p>
        </div>
    );
};

export default Company;
