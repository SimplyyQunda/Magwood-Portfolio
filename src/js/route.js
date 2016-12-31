function routerConfig ($stateProvider, $urlRouterProvider){
	$stateProvider
	    .state('root', {
	      abstract: true,
	      templateUrl: 'templates/layout.tpl.html',
	      controller: 'LayoutController as layout'
	    })

	    // .state('root.home', {
	    //   url: '/home',
	    //   templateUrl: 'templates/home.tpl.html',
	    //   controller: 'HomeController as home'
	    // })

	    // .state('root.about', {
	    // 	url:'/about',
	    // 	templateUrl: 'templates/about.tpl.html',
	    // 	controller: 'AboutController as about'
	    // })

	    // .state('root.portfolio', {
	    // 	url:'/portfolio',
	    // 	templateUrl: 'templates/portfolio.tpl.html',
	    // 	controller: 'PortfolioController as portfolio'
	    // })

	    // .state('root.contact', {
	    // 	url:'/contact',
	    // 	templateUrl: 'templates/contact.tpl.html',
	    // 	controller: 'ContactController as contact'
	    // })


		.state('root.home', {
		    url: '/home',
		    views: {
		      '' : {
		        templateUrl: 'templates/home.tpl.html',
		        controller: 'HomeController as home'
		    }, 'about@root.home': {
		        templateUrl: 'templates/about.tpl.html',
		        controller: 'HomeController as home'
		      },
		      'portfolio@root.home': {
		        templateUrl: 'templates/portfolio.tpl.html',
		        controller: 'HomeController as home'
		      },
		      'contact@root.home': {
		        templateUrl: 'templates/contact.tpl.html',
		        controller: 'HomeController as home'
		      }
		    }
		})

		.state('root.resume', {
	    	url:'/resume',
	    	templateUrl: 'templates/resume.tpl.html',
	    	controller: 'HomeController as home'
	    })
	   

	    $urlRouterProvider.otherwise('/home');
	};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider']
export { routerConfig };