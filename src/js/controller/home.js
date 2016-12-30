function HomeController (allPortfolio) {

let vm = this;

vm.all = allPortfolio;

console.log (vm.all)	
}

HomeController.$inject = ['allPortfolio']  
export { HomeController };