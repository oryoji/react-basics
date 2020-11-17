// コンポーネントの基本学習2回目
import React from 'react';
// Article.jsxのimport
import Article from "./Article";

class Blog extends React.Component {
    // コンストラクターの初期化
    constructor(props){
        super(props);
    }
    render(){
        const authorName = "Naoto"
        return(
            <React.Fragment>
                {/* Articleコンポーネントを呼び出す */}
                <Article title={"Reactのpropsの受け渡し"} />
                <Article title={"JSXの使い方"} />
                <Article title={"環境構築してみよう"} />
            </React.Fragment>
        )
    }
}

export default Blog