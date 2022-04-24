import React from "react";
import classes from './Post.module.css'

const Post = (props) => {
    return (
            <div className={classes.item}>
                <img alt={''} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU'} />
                {props.message}
                <div>
                    <span>like {props.likesCount}</span>
                </div>
            </div>
    )
}

export default Post