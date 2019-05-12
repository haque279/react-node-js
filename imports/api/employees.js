import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Employees = new Mongo.Collection('employees');

if (Meteor.isServer) {
  Meteor.publish('vehicles', function () {
    return Vehicles.find({ userId: this.userId });
  });
}else { console.log('this is none'); }

Meteor.methods({
  
  'employees.insert'(flat_id, name,  designation, dob, nid, photo, blood_group, mobile_no) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      flat_id: {
        type: String,
        min: 1,
        label: 'Flat Id'
      },
      name: {
        type: String,
        label: 'Name'
      },
      designation: {
        type: String,
        label: 'Designation'
      },
      dob: {
        type: Number,
        label: 'Date of Birth'
      },
      nid: {
        type: String,
        label: 'NID',
        optional: true
      },
      photo: {
        type: String,
        label: 'Photo',
        optional: true
      },
      blood_group: {
        type: String,
        label: 'Blood Group',
        optional: true
      },
      mobile_no: {
        type: String,
        label: 'Mobile No',
        regEx: SimpleSchema.RegEx.Phone
      }
    }).validate({flat_id, name,  designation, dob, nid, photo, blood_group, mobile_no});



    Employees.insert({ flat_id, name,  designation, dob, nid, photo, blood_group, mobile_no, status: 1  });
  }





});
