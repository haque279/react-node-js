import React from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

import {Tenantinfos} from'../api/tenantinfos';

import Menu from '../inc/Menu';
import Sidebar from '../inc/Sidebar';

export default class TenantRecommendation extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            error: '',
            message: ''
        };
    }
  
    onSubmit(e) {
        this.setState({error: ''});
        this.setState({message: ''});
        
        const note = this.refs.note.value.trim();
        const pre_flat_id = parseInt(this.refs.pre_flat_id.value.trim());
        const re_date = this.refs.re_date.value.trim();
    
        console.log(typeof(property_id));
    
        e.preventDefault();
    
        
          Meteor.call('tenantinfos.recommendation',  note, pre_flat_id, re_date,    (err, res) => {
              if(err){
                  this.setState({error: err.reason});
                //   console.log(this.state.error);
              }else { 
                  this.setState({message: 'Successfully added!!!'});
                  
                  this.refs.note.value = '';
                  this.refs.pre_flat_id.value = '';
                  this.refs.re_date.value = '';
    
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
                                    <h4>Tenant Recommendation</h4>
                                    <form  onSubmit={this.onSubmit.bind(this)}>
                                        <div className="row">
                                             
                                            
                                            <div className="col-md-6">
                                                <label>Note:</label>
                                                <input type="text" ref="note" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>Pre Flat Id:</label>
                                                <input type="text" ref="pre_flat_id" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>Date:</label>
                                                <input type="date" ref="re_date" />
                                            </div>
                                            
                                            
                                            <div className="col-lg-12 col-md-12"></div>
                                            <div className="col-lg-4 col-md-4">
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
