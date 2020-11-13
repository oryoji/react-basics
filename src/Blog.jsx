import React from 'react';
import Article from "./Article"

class Blog extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const authorName = "Oryojinaoto,gitブランチ6"
        return(
            <>
                <Article
                    title={"Reactの使い方"} 
                    order={3}
                    isPublished={true}
                    author={authorName}
                    
                />
            </>
        )
    }
}

export default Blog