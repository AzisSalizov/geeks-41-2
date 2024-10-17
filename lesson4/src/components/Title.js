import React from 'react';


export const Title = ({title}) => {
    return (
        <div>
            Название:
            {
                title
            }
        </div>
    );
};
export const Title2 = () => {
    return (
        <div>
            Title2
        </div>
    );
};

const person = {
    name: 'Bakyt',
    age: 10
};

const {age, name} = person