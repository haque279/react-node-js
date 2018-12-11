import React from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

import {Tenantinfos} from'../api/tenantinfos';

import Menu from '../inc/Menu';
import Sidebar from '../inc/Sidebar';

export default class Tenantinfo extends React.Component {

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
        const property_id = localStorage.getItem('property_id');
        var flat = this.refs.flat_id.value.trim();
        var flat_id =  property_id + flat;
        const user_id = this.refs.user_id.value.trim();
        const total_tenant = parseInt(this.refs.total_tenant.value.trim());
        const tenant_type = this.refs.tenant_type.value.trim();
        const ref_name = this.refs.ref_name.value.trim();
        const relation = this.refs.relation.value.trim();
        const address = this.refs.address.value.trim();
        const police_station = this.refs.police_station.value.trim();
        const district = this.refs.district.value.trim();
    
        console.log(typeof(property_id));
    
        e.preventDefault();
    
        
          Meteor.call('tenantinfos.insert', flat_id, user_id, total_tenant, tenant_type, ref_name, relation, address, police_station, district,    (err, res) => {
              if(err){
                  this.setState({error: err.reason});
                //   console.log(this.state.error);
              }else { 
                  this.setState({message: 'Successfully added!!!'});
                  this.refs.flat_id.value = '';
                  this.refs.user_id.value = '';
                  this.refs.total_tenant.value = '';
                  this.refs.tenant_type.value = '';
                  this.refs.ref_name.value = '';
                  this.refs.relation.value = '';
                  this.refs.address.value = '';
                  this.refs.police_station.value = '';
                  this.refs.district.value = '';
    
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
                                    <h4>Tenant Info</h4>
                                    <form  onSubmit={this.onSubmit.bind(this)}>
                                        <div className="row">
                                             
                                            <div className="col-md-6">
                                                <label>Flat No:</label>
                                                <input type="text" ref="flat_id" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>User Id:</label>
                                                <input type="text" ref="user_id" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>Total Tenant:</label>
                                                <input type="text" ref="total_tenant" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>Tenant Type:</label>
                                                <select name="" id="" ref="tenant_type">
                                                    <option value="residential">residential</option>
                                                    <option value="commercial">commercial</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label>Reference Name:</label>
                                                <input type="text" ref="ref_name" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>Relation:</label>
                                                <input type="text" ref="relation" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>Address:</label>
                                                <input type="text" ref="address" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>Police Station:</label>
                                                <input type="text" ref="police_station" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>District:</label>
                                                <input type="text" ref="district" />
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
