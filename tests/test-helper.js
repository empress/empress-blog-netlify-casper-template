import Application from 'empress-blog-casper/app';
import config from 'empress-blog-casper/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
