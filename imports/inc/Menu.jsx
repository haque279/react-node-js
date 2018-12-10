import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Router, Route, browserHistory } from 'react-router';




export default class Menu extends React.Component {
  onLogout() {
    Accounts.logout();
    browserHistory.replace('/');
  }
  onSubmit(e) {
    const url = this.refs.url.value.trim();

    e.preventDefault();

    if (url) {
      Meteor.call('links.insert', url);
      this.refs.url.value = '';
    }
  }
  render() {
    return (
      <div>
        
        <div className="nav-container ">
        <div className="bar bar--sm visible-xs">
            <div className="container">
                <div className="row">
                    <div className="col-3 col-md-2">
                        <a href="index.html">
                            <img className="logo logo-dark" alt="logo" src="../img/logo-dark.png" />
                            <img className="logo logo-light" alt="logo" src="../img/logo-light.png" />
                        </a>
                    </div>
                    <div className="col-9 col-md-10 text-right">
                        <a href="#" className="hamburger-toggle" data-toggle-className="#menu2;hidden-xs hidden-sm">
                            <i className="icon icon--sm stack-interface stack-menu"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <nav id="menu2" className="bar bar-2 hidden-xs bar--transparent bar--absolute" data-scroll-className='90vh:pos-fixed'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 text-center text-left-sm hidden-xs order-lg-2">
                        <div className="bar__module">
                            <a href="index.html">
                                <img className="logo logo-dark" alt="logooo" src="../img/logo-dark.png" />
                                <img className="logo logo-light" alt="logooo" src="../img/logo-dark.png" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5 order-lg-1">
                        <div className="bar__module">
                            <ul className="menu-horizontal text-left">
                                <li>
                                    <a href="/">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="links">
                                        Accordions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5 text-right text-left-xs text-left-sm order-lg-3">
                        <div className="bar__module">
                            
                            <button onClick={this.onLogout.bind(this)} className="noborder" >
                            <span className="btn btn--sm type--uppercase mr15" href="account.html" >
                                <span className="btn__text">
                                   logout
                                    
                                </span>
                            </span>
                             </button>
                                   
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>



      </div>
    );
  }
}
