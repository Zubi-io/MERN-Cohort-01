import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={() => props.click('Golu')}>I am {props.name}, and I am {props.age} years old</p>
            <input type="text" onChange={props.changed} defaultValue={props.name}/>
        </div>
    )
}

export default person;