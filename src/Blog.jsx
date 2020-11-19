// コンポーネントの基本学習2回目
import React from 'react';
// Article.jsxのimport
import Article from "./Article";

class Blog extends React.Component {
    // コンストラクターの初期化
    constructor(props){
        super(props);
        this.state = {
            isPublished: false,
            count: 0
        }
    }

    // 公開チェックボックスを反映させる関数
    togglePublished = () => {
        this.setState({
            isPublished: !this.state.isPublished
        })
    };

    render(){
        const authorName = "Naoto"
        return(
            <React.Fragment>
                {/* Articleコンポーネントを呼び出す */}
                <Article 
                    title={"Reactのpropsの受け渡し"} 
                    isPublished={this.state.isPublished} 
                    toggle={() => this.togglePublished()} 
                    count={this.state.count}
                />
            </React.Fragment>
        )
    }
}

export default Blog