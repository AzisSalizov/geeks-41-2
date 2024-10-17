import React from 'react';


const List = ({list}) => {
    return (
        <div>
            {
                list.map(item=> <div>{item.title}</div>)
            }
        </div>
    );
};

export default List;