import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

export default class Example extends Component {
    render() {
        return (
            <div>
            <div  id="wrapper">
            <Sidebar/>
            <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
            <Header/>
            <Content/>
            </div>
            <a className="scroll-to-top rounded" href="#page-top">
             <i className="fas fa-angle-up"></i>
            </a>
            <Footer/>
            </div>
            </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
