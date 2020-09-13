const URL = "https://covid19.mathdro.id/api";

let app = angular.module('myApp', []);

app.controller("MyCtrl", ($scope, $http) => {

    $scope.title = "Stay Home";

    console.log("App Loaded SuccessFully");

    // // Calling API

    $http.get(URL).then((response) => {

        console.log(response.data);
        // success Code here
        $scope.all_data = response.data;

    }, (error) => {
        // Erro Code here
        console.log(error);
    })

    // Get Data By Country

    $scope.get_c_data = () => {
        let country = $scope.c;
        if (country == '') {
            $scope.c_data = undefined;
            return;
        }

        $http.get(`${URL}/countries/${country}`).then((response) => {
            console.log(response.data);
            $scope.c_data = response.data;
        }, (error) => {
            console.log(error);
        });
    };
});