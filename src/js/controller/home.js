import $ from 'jquery';

function HomeController ($state, $stateParams, allPortfolio) {

let vm = this;

vm.all = allPortfolio;
vm.scrollToTop = scrollToTop;
vm.id = $stateParams.id;

// console.log (vm.all)	


 	function scrollTo (className) {
 		$('body').animate({
	  		scrollTop: $(className).offset().top
	  	}, 900);
	  	console.log('clicked')

	  }

	function scrollToTop (className) {
	  	$('body').animate({
	  		scrollTop: $(className).offset().top
	  	}, 900);
	  	console.log('clicked')
	  }

}

HomeController.$inject = ['$state', '$stateParams', 'allPortfolio']  
export { HomeController };