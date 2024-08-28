import React, { Component } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { FaAlignJustify } from "react-icons/fa6";

export default class  extends Component {
    state ={
        isOpen:false
    }
    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }
  render() {
    return (
      <nav className='navbar'>
        <div className="nav-center">
            <div className="nav-header">
                <Link to="/">
                <img src="/logo512.png" className='logo'/>
                <button type='button' className='nav-btn' onClick={this.handleToggle}>
                    <FaAlignJustify className='nav-icon'/>
                </button>
                </Link>
            </div>
            <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Documentation">Documentation</Link>
                </li>
                <li>
                    <Link to="/Demo">Demo</Link>
                </li>
                <li>
                    <Link to="/Contactus">Contactus</Link>
                </li>
            </ul>
        </div>

      </nav>
    )
  }
}
