angular.module("App", []).controller("Ctrol", function ($scope) {
    $scope.firstname = "";
    $scope.lastname = "";
    $scope.pass1 = "";
    $scope.pass2 = "";
    $scope.Users = [{
            id: 1,
            firstname: 'Hege',
            lastname: "Pege"
                },
        {
            id: 2,
            firstname: 'Kim',
            lastname: "Pim"
                },
        {
            id: 3,
            firstname: 'Sal',
            lastname: "Smith"
                },
        {
            id: 4,
            firstname: 'Jack',
            lastname: "Jones"
                },
        {
            id: 5,
            firstname: 'John',
            lastname: "Doe"
                },
        {
            id: 6,
            firstname: 'Peter',
            lastname: "Pan"
                }
            ];
    //开始有错是因为单词拼写错误，一定要注意！！！！
    $scope.add = function () {
        var firstname = $scope.firstname.trim();
        var lastname = $scope.lastname.trim();
        if (firstname) {
            $scope.Users.push({
                id: $scope.Users.length + 1,
                firstname: firstname,
                lastname: lastname
            });
            $scope.firstname = '';
            $scope.lastname = '';

        };

    }
    $scope.e = true;
    $scope.edit = function (id) {
        if (id == 'new') {
            $scope.firstname = '';
            $scope.lastname = '';
        } else {
            $scope.e = false;
            $scope.firstname = $scope.Users[id - 1].firstname;
            $scope.lastname = $scope.Users[id - 1].lastname;
        }
    };
});
