function routerConfig ($stateProvider, $urlRouterProvider){
	$stateProvider
	    .state('root', {
	      abstract: true,
	      templateUrl: 'templates/layout.tpl.html',
	      controller: 'LayoutController as layout'
	    })

		.state('root.home', {
		    url: '#!/home',
		    views: {
		      '' : {
		        templateUrl: 'templates/home.tpl.html',
		        controller: 'HomeController as home'
		    }, 'about@root.home': {
		        templateUrl: 'js/templates/about.tpl.html',
		        controller: 'AboutController as about'
		      },
		      'portfolio@root.home': {
		        templateUrl: 'js/templates/portfolio.tpl.html',
		        controller: 'PortfolioController as portfolio'
		      },
		      'contact@root.home': {
		        templateUrl: 'js/templates/contact.tpl.html',
		        controller: 'ContactController as contact'
		      }
		    }
		})

		.state('root.resume', {
	    	url:'/resume',
	    	templateUrl: 'templates/resume.tpl.html',
	    	controller: 'ResumeController as resume'
	    })
	   

	    $urlRouterProvider.otherwise('/home');
	};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider']
export { routerConfig };
