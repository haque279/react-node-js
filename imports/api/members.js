import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Members = new Mongo.Collection('members');

if (Meteor.isServer) {
  Meteor.publish('members', function () {
    return Members.find({ userId: this.userId });
  });
}

Meteor.methods({
  
  'members.insert'(property_id,flat_id, name, nid, dob, gender, photo, father_name, mother_name, religion, marital_status, mobile_no, email, blood_group, last_donation, member_type) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
       
      property_id: {
        type: String,
        min: 7,
        label: 'Property Id'
      },
        flat_id: {
        type: String,
        min: 0,
        label: 'Flat Id'
      },
      name: {
        type: String,
        label: 'Name'
      },
      nid: {
        type: String,
        label: 'Nid',
        optional: true
      },
      dob: {
        type: Number,
        label: 'Date of birth'
      },
      gender: {
        type: String,
        label: 'Gender'
      },
      photo: {
        type: String,
        label: 'Photo',
        optional: true
      },
      father_name: {
        type: String,
        label: 'Father name'
      },
      mother_name: {
        type: String,
        label: 'Mother Name'
      },
      religion: {
        type: String,
        label: 'Religion'
      },
      marital_status: {
        type: String,
        label: 'Marital Status'
      },
      mobile_no: {
        type: String,
        label: 'Mobile No',
        optional: true,
        regEx: SimpleSchema.RegEx.Phone
      },
      email: {
        type: String,
        label: 'Email',
        optional: true,
        regEx: SimpleSchema.RegEx.Email
      },
      blood_group: {
        type: String,
        label: 'Blood Group',
        optional: true
      },
      last_donation: {
        type: Number,
        label: 'Last Donation Date',
        optional: true
      },
      member_type: {
        type: String,
        label: 'Member Type',
        optional: true
      },
      
    }).validate({property_id,flat_id, name, nid, dob, gender, photo, father_name, mother_name, religion, marital_status, mobile_no, email, blood_group, last_donation, member_type});



    Members.insert({ property_id, flat_id, name, nid, dob, gender, photo, father_name, mother_name, religion, marital_status, mobile_no, email, blood_group, last_donation, member_type,
      userId: this.userId
    });
  },

  'members.lists'(property_id) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    return Members.find({ property_id: property_id }).fetch().sort( { flat_id: -1 } );
  },


});
