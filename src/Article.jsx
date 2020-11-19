// コンポーネントの基本学習2回目
import React from 'react';

const Article = (props) => {
    return(
        <div>
            <h2>{props.title}</h2>
            <label htmlFor="check">公開状態</label>
            <input 
                id="check" 
                type="checkbox" 
                checked={props.isPublished} 
                onClick={() => props.toggle()} 
            />
            <likeButton />
        </div>
    )
};

export default Article

