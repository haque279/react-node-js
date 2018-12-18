import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import { Links } from '../imports/api/links';
import {Properties} from'../imports/api/properties';
import { Members } from '../imports/api/members';
import { Tenantinfos } from '../imports/api/tenantinfos';
import { Vehicles } from '../imports/api/vehicles';
import { Employees } from '../imports/api/employees';

import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  WebApp.connectHandlers.use((req, res, next) => {
    const _id = req.url.slice(1);
    const link = Links.findOne({ _id });

    if (link) {
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.end();
    } else {
      next();
    }
  });
});
