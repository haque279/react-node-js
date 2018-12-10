import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Router, Route, browserHistory, Link } from 'react-router';

export default class Sidebar extends React.Component {

    

    onSubmit(e) {
        e.preventDefault();
        const property_id = this.refs.property_id.value.trim();

        Meteor.call('properties.search', property_id,   (err, res) => {
            if(err){
                this.setState({error: err.reason});
            }else { 
                const has_property = res[0].property_id;
                if (has_property.length > 0){
                    localStorage.setItem('has_property_id', has_property);
                    console.log(localStorage.getItem('has_property_id'));
                    browserHistory.replace('/plot-owner');
                }
              }
        });
         
      }

      newProperty(e) {
        e.preventDefault();
        localStorage.setItem('has_property_id', '');
        browserHistory.replace('/property');
         
      }
  
  render() {
    return (
      <div>
        <div className="boxed boxed--lg boxed--border">
                                <div className="text-block text-center">
                                    <img alt="avatar" src="../img/avatar-round-3.png" className="image--sm" />
                                    { localStorage.getItem('has_property_id') ? 
                                    <span className="h5">
                                    Property id: { localStorage.getItem('has_property_id') } <br/><br/>
                                    <form  onSubmit={this.newProperty.bind(this)}><input type="submit" value="New Property" /></form>
                                    </span>
                                    :
                                    <span><form  onSubmit={this.onSubmit.bind(this)}><input type="text" ref='property_id' /><input type="submit" value="Search" /></form></span>
    }
                                    <span className="label">Property owner</span>
                                </div>
                                <hr />
                                <div className="text-block">
                                    <ul className="menu-vertical">
                                        <li>
                                            <Link to="/property">Property</Link>
                                        </li>
                                       
                                          
                                         { localStorage.getItem('has_property_id')? 

                                        <span>
                                        
                                        <li>
                                            <Link to="/plot-owner">Plot owner</Link>
                                        </li>
                                        <li>
                                            <Link to="/rental">Rental</Link>
                                        </li>
                                        <li>
                                            <Link to="/tenant">Tenant</Link>
                                        </li>
                                        <li>
                                            <Link to="/tenantinfo">tenantinfo</Link>
                                        </li>
                                        <li>
                                            <Link to="/tenant-member">tenant-member</Link>
                                        </li>
                                        <li>
                                            <Link to="/tenant-recommendation">tenant-recommendation</Link>
                                        </li>
                                        <li>
                                            <Link to="/tenant-member-info">tenant-member-info</Link>
                                        </li>
                                        </span>
                                          : 'nothing' }
                                        
                                    </ul>
                                </div>
                            </div>
      </div>
    );
  }
}
















