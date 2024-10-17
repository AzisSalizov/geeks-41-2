import React from 'react';
import Button from "../button/Button";
import classes from "./pagination.module.scss";

const Pagination = ({prev, page, next}) => {
    return (
        <div className={classes.pagination}>
            <Button title={"prev"} action={prev}/>
            <div>{page}</div>
            <Button title={"next"} action={next}/>
        </div>
    );
};

export default Pagination;