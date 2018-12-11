import React from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

import {Properties} from'../api/properties';

import Menu from '../inc/Menu';
import Sidebar from '../inc/Sidebar';

export default class Rental extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            error: '',
            message: ''
        };

        console.log(localStorage.getItem('has_property_id'));
    }
  
    onSubmit(e) {
        this.setState({error: ''});
        this.setState({message: ''});
        const property_id = localStorage.getItem('has_property_id');
        var flat = this.refs.flat_id.value.trim();
        var flat_id =  property_id + flat;
        const flat_status = this.refs.flat_status.value.trim();
        var date_from = new Date(this.refs.date_from.value.trim());
        var date_from = date_from.getTime();
        var date_to =  new Date(this.refs.date_to.value.trim());
        var date_to = date_to.getTime();

    
    
    
        e.preventDefault();
    
        
          Meteor.call('rentals.insert', flat_id, flat_status, date_from, date_to, property_id,    (err, res) => {
              if(err){
                  this.setState({error: err.reason});
                //   console.log(this.state.error);
              }else { 
                  this.setState({message: 'Successfully added!!!'});
                  this.refs.flat_id.value = '';
                  this.refs.flat_status.value = '';
                  this.refs.date_from.value = '';
                  this.refs.date_to.value = '';
    
                // browserHistory.replace('plot-owner');
                }
          });
          
        
      }

  render() {
    return (
      <div>

<Menu />

        <div className="main-container">
            <section className="bg--secondary space--sm">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <Sidebar />
                        </div>
                        <div className="col-lg-8">
                            <div className="boxed boxed--lg boxed--border">
                                <div id="account-profile" className="account-tab">
                                {this.state.error ? <p className="alert bg--error">{this.state.error}</p> : undefined}
                                {this.state.message ? <p className="alert bg--success">{this.state.message}</p> : undefined}
                                    <h4>Rental</h4>
                                    <form  onSubmit={this.onSubmit.bind(this)}>
                                        <div className="row">
                                             
                                        <div className="col-md-6">
                                                <label>Flat No:</label>
                                                <input type="text" ref="flat_id" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>Flat Status:</label>
                                                <input type="text" ref="flat_status" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>From:</label>
                                                <input type="date" ref="date_from" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>To:</label>
                                                <input type="date" ref="date_to" />
                                            </div>
                                            
                                            
                                            <div className="col-lg-3 col-md-4">
                                                <button type="submit" className="btn btn--primary type--uppercase">Save</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer-3 text-center-xs space--xs ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img alt="Image" className="logo" src="../img/logo-dark.png" />
                            <ul className="list-inline list--hover">
                                <li className="list-inline-item">
                                    <a href="#">
                                        <span className="type--fine-print">Get Started</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <span className="type--fine-print">help@stack.io</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 text-right text-center-xs">
                            <ul className="social-list list-inline list--hover">
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="socicon socicon-google icon icon--xs"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="socicon socicon-twitter icon icon--xs"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="socicon socicon-facebook icon icon--xs"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="socicon socicon-instagram icon icon--xs"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p className="type--fine-print">
                                Supercharge your web workflow
                            </p>
                        </div>
                        <div className="col-md-6 text-right text-center-xs">
                            <span className="type--fine-print">&copy;
                                <span className="update-year"></span> Stack Inc.</span>
                            <a className="type--fine-print" href="#">Privacy Policy</a>
                            <a className="type--fine-print" href="#">Legal</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
      </div>
    );
  }
}
