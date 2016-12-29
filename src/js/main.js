import angular from 'angular';

import { routerConfig } from './route'

import { LayoutController } from './controller/layout';
import { ContactController } from './controller/contact';
import { FolioDetailsController } from './controller/folioDetails';
import { HomeController } from './controller/home';
import { PortfolioController } from './controller/portfolio';
import { ResumeController } from './controller/resume';


import 'angular-ui-router';

angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  .controller('LayoutController', LayoutController)
  .controller('ContactController', ContactController)
  .controller('FolioDetailsController', FolioDetailsController)
  .controller('HomeController', HomeController)
  .controller('PortfolioController', PortfolioController)
  .controller('ResumeController', ResumeController)