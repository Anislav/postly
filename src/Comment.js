import React from 'react';

const Comment = (props) => {
    const { text } = props;

    return (
        <span>{text}</span>
    );
}

export default Comment;