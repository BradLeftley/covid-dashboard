import Application from 'covid-dashboard/app';
import config from 'covid-dashboard/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
