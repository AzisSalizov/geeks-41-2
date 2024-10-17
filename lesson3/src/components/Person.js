import React from 'react';


const Person = ({name, age, email}) => {
    return (
        <div>
            <p>name: {name}</p>
            <p>age: {age}</p>
            <p>email: {email}</p>
        </div>
    );
};

export default Person;