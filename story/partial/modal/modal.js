angular.module('story').controller('ModalCtrl',function($scope, $modalInstance, name, id){

    $scope.name = name;
    $scope.doDelete = function() {  // this is the function called when the user
        //  user clicks the "Yes Delete File" button
        $modalInstance.close({doDelete:true, id:id}); //this gets passed back to
                                                      // the code that created the popup
    };
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

});
