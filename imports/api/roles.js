import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

// if (Meteor.isServer) {
//   Meteor.publish('users', function () {
    
//   });
// }


Meteor.methods({
  
  'user.roles'(userId, roles) {
    
    new SimpleSchema({
      roles: {
        type: String,
        min: 1,
        label: 'Roles'
      },
      userId: {
        type: String,
        min: 1,
        label: 'user id'
      }
    }).validate({userId, roles});

    console.log('this is user');


    Roles.addUsersToRoles(userId, roles);
    console.log('role added');
    
  }





});
