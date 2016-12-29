function LayoutController ($rootScope) {

  let vm = this;

  vm.clickMe = clickMe;

  function clickMe () {
    console.log("its been clicked");
  };
};

LayoutController.$inject = ['$rootScope'];
export { LayoutController };