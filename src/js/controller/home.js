import $ from 'jquery';

function HomeController ($state, $stateParams, allPortfolio) {

let vm = this;

vm.all = allPortfolio;
vm.scrollToTop = scrollToTop;
vm.id = $stateParams.id;
vm.magnificPopup = magnificPopup;
// vm.top = top;

// console.log (vm.all)	


 	function scrollTo (className) {
 		$('body').animate({
	  		scrollTop: $(className).offset()
	  	}, 900);
	  	console.log('clicked')

	  }

	function scrollToTop (className) {
	  	$('body').animate({
	  		scrollTop: $(className).offset()
	  	}, 900);
	  	console.log('clicked')
	  }

	  function magnificPopup() {
	  	
	  	 $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });
	  }
	

}

HomeController.$inject = ['$state', '$stateParams', 'allPortfolio']  
export { HomeController };