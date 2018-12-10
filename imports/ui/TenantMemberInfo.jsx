import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { browserHistory } from 'react-router';

import { Members } from '../api/members';
import Menu from '../inc/Menu';
import Sidebar from '../inc/Sidebar';

export default class TenantMemberInfo extends React.Component {

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
        var flat_id = localStorage.getItem('property_id') + flat;
        const name = this.refs.name.value.trim();
        const nid = this.refs.nid.value.trim();
        var dob = new Date(this.refs.dob.value);
        var dob = dob.getTime();
        const gender = this.refs.gender.value.trim();
        const photo = this.refs.photo.value.trim();
        const father_name = this.refs.father_name.value.trim();
        const mother_name = this.refs.mother_name.value.trim();
        const religion = this.refs.religion.value.trim();
        const marital_status = this.refs.marital_status.value.trim();
        const mobile_no = this.refs.mobile_no.value.trim();
        const email = this.refs.email.value.trim();
        const blood_group = this.refs.blood_group.value.trim();
        var last_donation = new Date(this.refs.last_donation.value.trim());
        var last_donation = last_donation.getTime()
        const member_type = this.refs.member_type.value.trim();
    

        e.preventDefault();
    
        
          Meteor.call('members.insert', property_id, flat_id, name, nid, dob, gender, photo, father_name, mother_name, religion, marital_status, mobile_no, email, blood_group, last_donation, member_type,   (err, res) => {
              if(err){
                  this.setState({error: err.reason});
                  console.log(this.state.error);
              }else { 
                  this.setState({message: 'Successfully added!!!'});

                  this.refs.flat_id.value = '';
                  this.refs.name.value = '';
                  this.refs.nid.value = '';
                  this.refs.dob.value = '';
                  this.refs.gender.value = '';
                  this.refs.photo.value = '';
                  this.refs.father_name.value = '';
                  this.refs.mother_name.value = '';
                  this.refs.religion.value = '';
                  this.refs.marital_status.value = '';
                  this.refs.mobile_no.value = '';
                  this.refs.email.value = '';
                  this.refs.blood_group.value = '';
                  this.refs.last_donation.value = '';
                  this.refs.member_type.value = '';
    
                // browserHistory.replace('rental');
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
                                    <h4>Tenant member info</h4>
                                    <form  onSubmit={this.onSubmit.bind(this)}>
                                        <div className="row">
                                        <input type="text" ref="member_type" value="tenant-member" hidden />
                                            <div className="col-md-6">
                                                <label>flat_id:</label>
                                                <input type="text" ref="flat_id" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>name:</label>
                                                <input type="text" ref="name" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>nid:</label>
                                                <input type="text" ref="nid" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>dob:</label>
                                                <input type="date" ref="dob" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>gender:</label>
                                                <input type="text" ref="gender" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>photo:</label>
                                                <input type="text" ref="photo" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>father_name:</label>
                                                <input type="text" ref="father_name" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>mother_name:</label>
                                                <input type="text" ref="mother_name" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>religion:</label>
                                                <input type="text" ref="religion" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>marital_status:</label>
                                                <input type="text" ref="marital_status" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>mobile_no:</label>
                                                <input type="text" ref="mobile_no" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>email:</label>
                                                <input type="text" ref="email" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>blood_group:</label>
                                                <input type="text" ref="blood_group" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>last_donation:</label>
                                                <input type="date" ref="last_donation" />
                                            </div>
                                            
                                            
                                            <div className="col-lg-3 col-md-4">
                                                <button type="submit" className="btn btn--primary type--uppercase">Save Profile</button>
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
