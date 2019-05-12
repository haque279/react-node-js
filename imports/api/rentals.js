import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Rentals = new Mongo.Collection('properties');

if (Meteor.isServer) {
  Meteor.publish('properties', function () {
    return Rentals.find({ userId: this.userId });
  });
}

Meteor.methods({
  
  'rentals.insert'(flat_id, flat_status, date_from, date_to) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      flat_id: {
        type: Number,
        min: 0,
        label: 'Flat id'
      },
      flat_status: {
        type: String,
        label: 'Flat Status',
        optional: true
      },
      date_from: {
        type: String,
        label: 'Date from 0000',
        optional: true
      },
      date_to: {
        type: String,
        label: 'Date To',
        optional: true
      }
    }).validate({flat_id, flat_status, date_from, date_to});

    Rentals.update({'_id':'aDk3TDCHjddydRaip'}, {$push: {'properties.rental_information': {flat_id, flat_status, date_from, date_to}}});
  }
});

