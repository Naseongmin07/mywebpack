import React,{Component} from 'react'
import UserContext from '../Store/User'


class Button extends React.Component{
    name = "ㅎㅇ"
    static contextType = UserContext
    render(){
        console.log('asdfadsfasdf',context)
        return (
            <>
            <ul>
                <li>{this.context.userid}</li>
                <li>{this.context.name}</li>
                <li>{this.context.job}</li>
            </ul>
                <button onClick={()=>this.props.onClick(this.name)}>로그인</button>
                <button onClick={()=>alert('test')}>로그인2</button>
            </>
        )   
    }
}

export default Button