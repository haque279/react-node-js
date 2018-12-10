import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Tenantinfos = new Mongo.Collection('tenantinfos');

if (Meteor.isServer) {
  Meteor.publish('tenantinfos', function () {
    return Tenantinfos.find({ userId: this.userId });
  });
}

Meteor.methods({
  
  'tenantinfos.insert'(flat_id, user_id, total_tenant, tenant_type, ref_name, relation, address, police_station, district) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      flat_id: {
        type: String,
        min: 1,
        label: 'Flat Id'
      },
      user_id: {
        type: String,
        label: 'user id',
        optional: true
      },
      total_tenant: {
        type: Number,
        label: 'Total Tenant',
        min: 0,
        optional: true
      },
      tenant_type: {
        type: String,
        label: 'Tenant Type',
        optional: true
      },
      ref_name: {
        type: String,
        label: 'Ref Name',
        optional: true
      },
      relation: {
        type: String,
        label: 'Relation',
        optional: true
      },
      address: {
        type: String,
        label: 'Address',
        optional: true
      },
      police_station: {
        type: String,
        label: 'Police Statiion',
        optional: true
      },
      district: {
        type: String,
        label: 'District',
        optional: true
      }
    }).validate({flat_id, user_id, total_tenant, tenant_type, ref_name, relation, address, police_station, district});



    Tenantinfos.insert({ flat_id, user_id, total_tenant, tenant_type, ref_name, relation, address, police_station, district
    });
  },





  'tenantinfos.member_information'(member_user_id, member_relation) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      member_user_id: {
        type: String,
        label: 'Member user id'
      },
      member_relation: {
        type: String,
        label: 'Member Relation',
        optional: true
      }
    }).validate({member_user_id, member_relation});

    Tenantinfos.update({'_id':'3LrxFJd3B93v9rew7'}, {$push: {'member_information': {member_user_id, member_relation}}});
  },



  'tenantinfos.recommendation'(note, pre_flat_id, re_date) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      note: {
        type: String,
        label: 'Note'
      },
      pre_flat_id: {
        type: Number,
        label: 'Flat id',
        optional: true
      },
      re_date: {
        type: String,
        label: 'Date',
        optional: true
      }
    }).validate({note, pre_flat_id, re_date});

    Tenantinfos.update({'_id':'3LrxFJd3B93v9rew7'}, {$push: {'recommendation': {note, pre_flat_id, re_date}}});
  }


});
