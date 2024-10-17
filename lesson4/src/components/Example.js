import React from 'react';


const Example = ({children, name, email}) => {
    return (
        <div>
            {children}
            ______________________________________________
            <p>name: {name}</p>
            <p>email: {email}</p>
        </div>
    );
};

export default Example;