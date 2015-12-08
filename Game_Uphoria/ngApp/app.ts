namespace MyApp {

    angular.module('MyApp', ['ngRoute', 'ngResource','ui.bootstrap']).config(($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) => {
        $routeProvider
            .when('/', {
                templateUrl: '/ngApp/views/home.html',
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .when('/events', {
                templateUrl: '/ngApp/views/events.html',
                controller: MyApp.Controllers.EventsController,
                controllerAs: 'controller'
            })
            .when('/store', {
                templateUrl: '/ngApp/views/store.html',
                controller: MyApp.Controllers.OnlineStoreController,
                controllerAs: 'controller'
            })
            .when('/contact', {
                templateUrl: 'ngApp/views/events.html',
                controller: MyApp.Controllers.ContactController,
                controllerAs: 'controller'
            })
            .when('/adminDashboard', {
                templateUrl: 'ngApp/views/adminDashboard.html',
                controller: MyApp.Controllers.AdminDashboardController,
                controllerAs: 'controller'
            })
            .when('/addProduct', {
                templateUrl: 'ngApp/views/addProduct.html',
                controller: MyApp.Controllers.AddProductController,
                controllerAs: 'controller'
            })
            .when('/editProduct/:id', {
                templateUrl: 'ngApp/views/editProduct.html',
                controller: MyApp.Controllers.EditProductController,
                controllerAs: 'controller'
            })
            .when('/deleteProduct/:id', {
                templateUrl: 'ngApp/views/deleteProduct.html',
                controller: MyApp.Controllers.DeleteProductController,
                controllerAs: 'controller'
            })
            .when('/addUser', {
                templateUrl: 'ngApp/views/addUser.html',
                controller: MyApp.Controllers.AddUserController,
                controllerAs: 'controller'
            })
            .when('/editUser/:id', {
                templateUrl: 'ngApp/views/editUser.html',
                controller: MyApp.Controllers.EditUserController,
                controllerAs: 'controller'
            })
            .when('/deleteUser/:id', {
                templateUrl: 'ngApp/views/deleteUser.html',
                controller: MyApp.Controllers.DeleteUserController,
                controllerAs: 'controller'
            })
            .when('/userDashboard', {
                templateUrl: 'ngApp/views/userDashboard.html',
                controller: MyApp.Controllers.UserDashboardController,
                controllerAs: 'controller'
            })
            .when('/editProfile/:id', {
                templateUrl: 'ngApp/views/editProfile.html',
                controller: MyApp.Controllers.EditProfileController,
                controllerAs: 'controller'
            })
            .when('/login', {
                templateUrl: '/ngApp/views/login.html',
                controller: MyApp.Controllers.LoginController,
                controllerAs: 'controller'
            })
            .when('/register', {
                templateUrl: '/ngApp/views/register.html',
                controller: MyApp.Controllers.RegisterController,
                controllerAs: 'controller'
            })
            .when('/externalLogin', {
                templateUrl: '/ngApp/views/externalLogin.html',
                controller: MyApp.Controllers.ExternalLoginController,
                controllerAs: 'controller'
            })
            .when('/externalRegister', {
                templateUrl: '/ngApp/views/externalRegister.html',
                controller: MyApp.Controllers.ExternalRegisterController,
                controllerAs: 'controller'
            })
            .when('/confirmEmail', {
                templateUrl: '/ngApp/views/confirmEmail.html',
                controller: MyApp.Controllers.ConfirmEmailController,
                controllerAs: 'controller'
            })
            .otherwise({
                redirectTo: '/ngApp/views/notFound.html'
            });

        $locationProvider.html5Mode(true);
    });

    angular.module('MyApp').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                let token = $window.sessionStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            },
            response: function (response) {
                if (response.status === 401) {
                    $location.path('/login');
                }
                return response || $q.when(response);
            }
        })
    );


    angular.module('MyApp').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });

}