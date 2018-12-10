import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Properties = new Mongo.Collection('properties');

if (Meteor.isServer) {
  Meteor.publish('properties', function () {
    return Properties.find({ userId: this.userId });
  });
}

Meteor.methods({
  
  'properties.insert'(property_id, property_type, plot_no, road, avenue, latitude, longitude, total_flat, sold, rent, name, relation, mobile_no, address, total_family_members, dependent) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      property_id: {
        type: String,
        min: 0,
        index: true,
        unique: true,
        label: 'Property Id'
      },
      property_type: {
        type: String,
        label: 'Property Type',
        optional: true
      },
      plot_no: {
        type: Number,
        label: 'Plot No',
        min: 1,
        optional: true
      },
      road: {
        type: Number,
        label: 'Road',
        min: 0,
        optional: true
      },
      avenue: {
        type: Number,
        label: 'Avenue',
        min: 0,
        optional: true
      },
      latitude: {
        type: String,
        label: 'latitude',
        optional: true
      },
      longitude: {
        type: String,
        label: 'longitude',
        optional: true
      },
      total_flat: {
        type: Number,
        label: 'Total Flat',
        min: 0,
        optional: true
      },
      sold: {
        type: Number,
        label: 'Sold',
        min: 0,
        optional: true
      },
      rent: {
        type: Number,
        label: 'Rent',
        min: 0,
        optional: true
      },
      name: {
        type: String,
        label: 'Imergency Contact Name',
        optional: true
      },
      relation: {
        type: String,
        label: 'Relation',
        optional: true
      },
      mobile_no: {
        type: String,
        label: 'Moile No',
        regEx: SimpleSchema.RegEx.Phone,
        optional: true
      },
      address: {
        type: String,
        label: 'Address',
        optional: true
      },
      total_family_members: {
        type: Number,
        label: 'Total family Members',
        min: 0,
        optional: true
      },
      dependent: {
        type: Number,
        label: 'Dependent',
        min: 0,
        optional: true
      }
    }).validate({property_id, property_type, plot_no, road, avenue, latitude, longitude, total_flat, sold, rent, name, relation, mobile_no, address, total_family_members, dependent});

    Properties.insert({ property_id, property_type, plot_no, road, avenue, latitude, longitude, total_flat, sold, rent, name, relation, mobile_no, address, total_family_members, dependent,
      userId: this.userId
    });
  },





  'rentals.insert'(flat_id, flat_status, date_from, date_to, property_id) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      flat_id: {
        type: String,
        min: 0,
        label: 'Flat id'
      },
      flat_status: {
        type: String,
        label: 'Flat Status',
        optional: true
      },
      date_from: {
        type: Number,
        label: 'Date from',
        optional: true
      },
      date_to: {
        type: Number,
        label: 'Date To',
        optional: true
      }
    }).validate({flat_id, flat_status, date_from, date_to});

    Properties.update({'property_id': property_id}, {$push: {'rental_information': {flat_id, flat_status, date_from, date_to}}});
  },

  'properties.search'(property_id) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    return Properties.find({ property_id: property_id }).fetch();
  },

  


});
