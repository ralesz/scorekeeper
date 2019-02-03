import React from 'react';
import './AddPlayer.css';

const AddPlayer = (props) => {
    let input;

    const onSubmit = (event) => {
        event.preventDefault();
        props.onPlayerAdd(input.value);
        input.value = '';
    };

    return (
        <form className="AddPlayer" onSubmit={onSubmit}>
            <input type="text" className="AddPlayer__input" ref={(node) => input = node} required />
            <input type="submit" className="AddPlayer__submit" calue="Add" />
        </form>
    )
};

export default AddPlayer;