const URL = 'https://api.openweathermap.org/data/2.5/weather?q='
const apikey = "e2095cea5b40a21c76f6608e9693d104"
// Configuring angular
let app = angular.module("MyApp", [])

app.controller('MyCtrl', ($scope, $http) => {

    //this is controller, scope variable helps allows to use associated vari with it.
    $scope.title = "Know Your Weather";
    // $scope.changeValue = () =>{
    //     $scope.title = "Home Time"
    // }
    console.log("App Loaded")



    //get city data

    $scope.get_c_data = () => {
        
        let city = $scope.c;
        if(city == ''){
            $scope.c_data = undefined;
            $scope.prompt = undefined;
            return;
        }

        $http.get(`${URL}${city}&units=metric&appid=${apikey}`).then( 
        (response) => {
            
            console.log(response.data);
            $scope.c_data = response.data;
            $scope.prompt = "Weather in " + response.data.name.toUpperCase();

            const { icon, description } = response.data.weather[0];
            document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
        }, 
        (error) => {
            console.log(error);
        })
        console.log($scope.c)
    };

});


