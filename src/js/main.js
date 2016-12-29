import angular from 'angular';

import { routerConfig } from './route'

import { LayoutController } from './controller/layout';

import 'angular-ui-router';

angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  .controller('LayoutController', LayoutController)