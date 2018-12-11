import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { browserHistory } from 'react-router';

// import { Links } from '../api/links';
// import LinksList from './LinksList';

import {Properties} from'../api/properties';
import {Members} from'../api/members';

import Menu from '../inc/Menu';
import Sidebar from '../inc/Sidebar';

export default class Property extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            error: '',
            message: '',
            propertys: [],
            rentals: [],
            members: []
        };
        Meteor.call('properties.search', localStorage.getItem('has_property_id'),   (err, res) => {
            if(err){
                this.setState({error: err.reason});
                console.log(this.state.error);
            } else { 
                this.setState({ propertys: res });
                this.state.propertys.map((property) => {
                    this.setState({ rentals: property.rental_information });
                });
              }
        });

        Meteor.call('members.lists', localStorage.getItem('has_property_id'),   (err, res) => {
            if(err){
                this.setState({error: err.reason});
            } else { 
                this.setState({ members: res });
              }
        });
        console.log(localStorage.getItem('property_id'));
    }

   

    
  
  
  renderItems() {
    return this.state.propertys.map((property) => {
      return <table key={property._id}>
        <tbody>
          <tr>
              <td>Property id</td>
              <td>{property.property_id}</td>
              <td>type</td>
              <td>{property.property_type}</td>
          </tr>
          <tr>
              <td>plot_no</td>
              <td>{property.plot_no}</td>
              <td>road</td>
              <td>{property.road}</td>
          </tr>
          <tr>
              <td>avenue</td>
              <td>{property.avenue}</td>
              <td>latitude</td>
              <td>{property.latitude}</td>
          </tr>
          <tr>
              <td>longitude</td>
              <td>{property.longitude}</td>
              <td>total_flat</td>
              <td>{property.total_flat}</td>
          </tr>
          <tr>
              <td>sold</td>
              <td>{property.sold}</td>
              <td>rent</td>
              <td>{property.rent}</td>
          </tr>
          <tr>
              <td>name</td>
              <td>{property.name}</td>
              <td>relation</td>
              <td>{property.relation}</td>
          </tr>
          <tr>
              <td>mobile_no</td>
              <td>{property.mobile_no}</td>
              <td>address</td>
              <td>{property.address}</td>
          </tr>
          <tr>
              <td>total_family_members</td>
              <td>{property.total_family_members}</td>
              <td>dependent</td>
              <td>{property.dependent}</td>
          </tr>
          </tbody>
      </table>
    });
  }

    
  
  
  renderRental() {
    return this.state.rentals.map((rental) => {
        
      return <table key={rental.flat_id}>
          <tbody>
          <tr>
              <td>Flat id</td>
              <td>{rental.flat_id}</td>
              <td>Flat Status</td>
              <td>{rental.flat_status}</td>
          </tr>
          </tbody>
          
      </table>
    });
  }
  
  
  renderMember() {
    return this.state.members.map((member) => {
        
      return <tr key={member._id}>
          <td>{member._id}</td>
          <td>{member.name}</td>
          <td>{member.flat_id}</td>
          <td>{member.member_type}</td>
          </tr>
    });
  }
  

  

  onSubmit(e) {
    this.setState({error: ''});
    this.setState({message: ''});
    function leftPad(number, targetLength) {
        var output = number + '';
        while (output.length < targetLength) {
            output = '0' + output;
        }
        return output;browserHistory.push('/plot-owner');
    }
    const property_type = this.refs.property_type.value.trim();
    const plot_no = parseInt(this.refs.plot_no.value.trim());
    const road = parseInt(this.refs.road.value.trim());
    const avenue = parseInt(this.refs.avenue.value.trim());
    const property_id = leftPad(this.refs.avenue.value.trim(),2) + 
    leftPad(this.refs.road.value.trim(),2) + 
    leftPad(this.refs.plot_no.value.trim(),3) ;
    const latitude = this.refs.latitude.value.trim();
    const longitude = this.refs.longitude.value.trim();
    const total_flat = parseInt(this.refs.total_flat.value.trim());
    const sold = parseInt(this.refs.sold.value.trim());
    const rent = parseInt(this.refs.rent.value.trim());
    const name = this.refs.name.value.trim();
    const relation = this.refs.relation.value.trim();
    const mobile_no = this.refs.mobile_no.value.trim();
    const address = this.refs.address.value.trim();
    const total_family_members = parseInt(this.refs.total_family_members.value.trim());
    const dependent = parseInt(this.refs.dependent.value.trim());

    localStorage.setItem('property_id', property_id );

    e.preventDefault();

    
      Meteor.call('properties.insert', property_id, property_type, plot_no, road, avenue, latitude, longitude, total_flat, sold, rent, name, relation, mobile_no, address, total_family_members, dependent,     (err, res) => {
          if(err){
              this.setState({error: err.reason});
              
          } else { 
            localStorage.setItem('has_property_id', property_id);
            browserHistory.push('/plot-owner');
            
            //   this.refs.property_id.value = '';
            //   this.refs.property_type.value = '';
            //   this.refs.plot_no.value = '';
            //   this.refs.road.value = '';
            //   this.refs.avenue.value = '';
            //   this.refs.latitude.value = '';
            //   this.refs.longitude.value = '';
            //   this.refs.total_flat.value = '';
            //   this.refs.sold.value = '';
            //   this.refs.rent.value = '';
            //   this.refs.name.value = '';
            //   this.refs.relation.value = '';
            //   this.refs.mobile_no.value = '';
            //   this.refs.address.value = '';
            //   this.refs.total_family_members.value = '';
            //   this.refs.dependent.value = '';

            // //   this.setState({message: 'Successfully added!!!'});
            //     console.log("this is gooo");
            
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
                                    <h4>Property</h4>
                                    { localStorage.getItem('has_property_id')  ?
                                    <div>
                                        { this.renderItems()} 
                                        <hr/>
                                        <h4>Rental Info</h4>
                                        { this.renderRental() }
                                        <hr/>
                                        <h4>Member</h4>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th>Flat Id</th>
                                                <th>Member Type</th>
                                            </tr>
                                            { this.renderMember() }
                                            </tbody>
                                        </table>
                                        
                                    </div>
                                : <div>
                                    <form  onSubmit={this.onSubmit.bind(this)}>
                                    <div className="row">
                                       
                                        <div className="col-md-6">
                                            <label>Property Type:</label>
                                            <select ref="property_type" id="">
                                                <option value="one">One</option>
                                                <option value="two">Two</option>
                                                <option value="three">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Plot No:</label>
                                            <input type="text" ref="plot_no" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Road:</label>
                                            <input type="text" ref="road" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Avenue:</label>
                                            <input type="text" ref="avenue" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Latitude:</label>
                                            <input type="text" ref="latitude" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Longitude:</label>
                                            <input type="text" ref="longitude" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Total Flat:</label>
                                            <input type="text" ref="total_flat" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Sold:</label>
                                            <input type="text" ref="sold" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Rent:</label>
                                            <input type="text" ref="rent" />
                                        </div>

                                        <div className="col-md-12">
                                            <h4 className="text-center">Plot owner's information</h4>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Total family members:</label>
                                            <input type="text" ref="total_family_members" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Dependent:</label>
                                            <input type="text" ref="dependent" />
                                        </div>

                                       


                                        <div className="col-md-12">
                                            <h5 className="text-center">Emergency Contact</h5>
                                        </div>
                                        <div className="col-md-12">
                                            <label>Name:</label>
                                            <input type="text" ref="name" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Relation:</label>
                                            <input type="text" ref="relation" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Mobile No:</label>
                                            <input type="text" ref="mobile_no" />
                                        </div>
                                        <div className="col-md-12">
                                            <label>Address:</label>
                                            <input type="text" ref="address" />
                                        </div>
                                        <hr/>

                                        
                                        <div className="col-lg-3 col-md-4">
                                            <button type="submit" className="btn btn--primary type--uppercase">Save Property</button>
                                        </div>
                                    </div>
                                </form>
                                </div>

                                    }
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
                                        <span className="type--fine-print">info@somansis.com</span>
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
