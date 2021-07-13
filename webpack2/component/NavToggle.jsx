import React,{component} from 'react'
import '../css/NavToggle.css'


class NavToggle extends Component{
    render(){
        return (
        <>
            <input type="checkbox" id="nav-toggle" className = "nav-toggle"/>
            <label htmlFor="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </>
        )
    }
}


export default NavToggle