import React from 'react';


export const Title = ({title}) => {
    console.log(title);
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
console.log(name);
console.log(age);
console.log(person.name);
console.log(person.age);