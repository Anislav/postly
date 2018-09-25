import React from 'react';
import Comment from './Comment';

const Post = (props) => {
    const { title, authorName, numberOfLikes, comments } = props.post;

    return (
        <div>
            <h4>{title}</h4>
            <ul>
                {comments.map(comment => <li><Comment text={comment} /></li>)}
            </ul>
            <div>
                <span>{authorName}, {numberOfLikes}</span>
            </div>
        </div>
    );
}

export default Post;