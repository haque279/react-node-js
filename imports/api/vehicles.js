import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Vehicles = new Mongo.Collection('vehicles');

if (Meteor.isServer) {
  Meteor.publish('vehicles', function () {
    return Vehicles.find({ userId: this.userId });
  });
}

Meteor.methods({
  
  'vehicles.insert'(flat_id, vehicle_type, registration_no, manufacturer, model_no) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      flat_id: {
        type: String,
        min: 1,
        label: 'Flat Id'
      },
      vehicle_type: {
        type: String,
        label: 'Vehicle Type'
      },
      registration_no: {
        type: String,
        label: 'Registration No'
      },
      manufacturer: {
        type: String,
        label: 'Manufacturer'
      },
      model_no: {
        type: String,
        label: 'Model No'
      }
    }).validate({flat_id, vehicle_type, registration_no, manufacturer, model_no});



    Vehicles.insert({ flat_id, vehicle_type, registration_no, manufacturer, model_no, status: 1  });
  }





});
