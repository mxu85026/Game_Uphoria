var MyApp;
(function (MyApp) {
    angular.module('MyApp', ['ngRoute', 'ngResource', 'ui.bootstrap', 'ui.router']).config(function ($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            controller: MyApp.Controllers.HomeController,
            templateUrl: '/ngApp/views/home.html',
            controllerAs: 'controller',
            abstract: true
        })
            .state('home.panelDefault', {
            url: '',
            controller: MyApp.Controllers.PanelDefaultController,
            templateUrl: '/ngApp/views/panelDefault.html',
            controllerAs: 'controller'
        })
            .state('events', {
            url: '/events',
            controller: MyApp.Controllers.EventsController,
            templateUrl: '/ngApp/views/events.html',
            controllerAs: 'controller'
        })
            .state('store', {
            url: '/store',
            controller: MyApp.Controllers.OnlineStoreController,
            templateUrl: '/ngApp/views/events.html',
            controllerAs: 'controller'
        })
            .state('contact', {
            url: '/contact',
            controller: MyApp.Controllers.ContactController,
            templateUrl: '/ngApp/views/contact.html',
            controllerAs: 'controller'
        })
            .state('dashboard', {
            url: '/dashboard',
            controller: MyApp.Controllers.DashboardController,
            templateUrl: '/ngApp/views/dashboard.html'
        })
            .state('dashboard.adminDashboard', {
            url: '/adminDashboard',
            controller: MyApp.Controllers.AdminDashboardController,
            templateUrl: '/ngApp/views/adminDashboard.html',
            controllerAs: 'controller',
            abstract: true
        })
            .state('dashboard.adminDashboard.addProduct', {
            url: '/addProduct',
            controller: MyApp.Controllers.AddProductController,
            templateUrl: '/ngApp/views/addProduct.html',
            controllerAs: 'controller'
        })
            .state('dashboard.adminDashboard.editProduct', {
            url: '/editProduct/:id',
            controller: MyApp.Controllers.EditProductController,
            templateUrl: '/ngApp/views/editProduct.html',
            controllerAs: 'controller'
        })
            .state('dashboard.adminDashboard.deleteProduct', {
            url: 'deleteProduct/:id',
            controller: MyApp.Controllers.DeleteProductController,
            templateUrl: '/ngApp/views/editProduct.html',
            controllerAs: 'controller'
        })
            .state('dashboard.adminDashboard.addUser', {
            url: '/addUser',
            controller: MyApp.Controllers.AddUserController,
            templateUrl: '/ngApp/views/addUser.html',
            controllerAs: 'controller'
        })
            .state('dashboard.adminDashboard.editUser', {
            url: '/editUser/:id',
            controller: MyApp.Controllers.EditUserController,
            templateUrl: '/ngApp/views/editUser.html',
            controllerAs: 'controller'
        })
            .state('dashboard.adminDashboard.deleteUser', {
            url: '/deleteUser/:id',
            controller: MyApp.Controllers.DeleteUserController,
            templateUrl: '/ngApp/views/deleteUser.html',
            controllerAs: 'controller'
        })
            .state('dashboard.userDashboard', {
            url: '/userDashboard',
            controller: MyApp.Controllers.UserDashboardController,
            templateUrl: '/ngApp/views/userDashboard.html',
            controllerAs: 'controller',
            abstract: true
        })
            .state('dashboard.adminDashboard.adminOverview', {
            url: '',
            controller: MyApp.Controllers.AdminOverviewController,
            templateUrl: '/ngApp/views/adminOverview.html',
            controllerAs: 'controller'
        })
            .state('dashboard.adminDashboard.supplierList', {
            url: '/supplierList',
            controller: MyApp.Controllers.SupplierListController,
            templateUrl: '/ngApp/views/supplierList.html',
            controllerAs: 'controller'
        })
            .state('dashboard.adminDashboard.addSupplier', {
            url: '/addSupplier',
            controller: MyApp.Controllers.AddSupplierController,
            templateUrl: '/ngApp/views/addSupplier.html',
            controllerAs: 'controller'
        })
            .state('dashboard.adminDashboard.editSupplier', {
            url: '/editSupplier/:id',
            controller: MyApp.Controllers.EditSupplierController,
            templateUrl: '/ngApp/views/editSupplier.html',
            controllerAs: 'controller'
        })
            .state('dashboard.adminDashboard.deleteSupplier', {
            url: '/deleteSupplier/:id',
            controller: MyApp.Controllers.DeleteSupplierController,
            templateUrl: '/ngApp/views/deleteSupplier.html',
            controllerAs: 'controller'
        })
            .state('dashboard.adminDashboard.userList', {
            url: '/userList',
            controller: MyApp.Controllers.UserListController,
            templateUrl: '/ngApp/views/userList.html',
            controllerAs: 'controller'
        })
            .state('dashboard.adminDashboard.accountDetail', {
            url: '/accountDetail/:id',
            controller: MyApp.Controllers.AccountDetailController,
            templateUrl: '/ngApp/views/accountDetail.html',
            controllerAs: 'controller'
        })
            .state('dashboard.userDashboard.accountDetail', {
            url: '/accountDetail/:id',
            controller: MyApp.Controllers.AccountDetailController,
            templateUrl: '/ngApp/views/accountDetail.html',
            controllerAs: 'controller'
        })
            .state('dashboard.adminDashboard.inventory', {
            url: '/inventory',
            controller: MyApp.Controllers.InventoryController,
            templateUrl: '/ngApp/views/inventory.html',
            controllerAs: 'controller'
        })
            .state('dashboard.userDashboard.userOverview', {
            url: '/:id',
            controller: MyApp.Controllers.UserOverviewController,
            templateUrl: '/ngApp/views/userOverview.html',
            controllerAs: 'controller'
        })
            .state('dashboard.userDashboard.myEvents', {
            url: '/myEvents/:id',
            controller: MyApp.Controllers.MyEventsController,
            templateUrl: '/ngApp/views/myEvents.html',
            controllerAs: 'controller'
        })
            .state('dashboard.userDashboard.help', {
            url: '/help',
            controller: MyApp.Controllers.HelpController,
            templateUrl: '/ngApp/views/help.html',
            controllerAs: 'controller'
        })
            .state('dashboard.userDashboard.editProfile', {
            url: '/editProfile/:id',
            controller: MyApp.Controllers.EditProfileController,
            templateUrl: '/ngApp/views/editProfile.html',
            controllerAs: 'controller'
        })
            .state('home.login', {
            url: 'login',
            controller: MyApp.Controllers.LoginController,
            templateUrl: '/ngApp/views/login.html',
            controllerAs: 'controller'
        })
            .state('home.register', {
            url: 'register',
            controller: MyApp.Controllers.RegisterController,
            templateUrl: '/ngApp/views/register.html',
            controllerAs: 'controller'
        })
            .state('home.externalLogin', {
            url: 'externalLogin',
            controller: MyApp.Controllers.ExternalLoginController,
            templateUrl: '/ngApp/views/externalLogin.html',
            controllerAs: 'controller'
        })
            .state('home.externalRegister', {
            url: 'externalRegister',
            controller: MyApp.Controllers.ExternalRegisterController,
            templateUrl: '/ngApp/views/externalRegister.html',
            controllerAs: 'controller'
        })
            .state('confirmEmail', {
            url: '/confirmEmail',
            controller: MyApp.Controllers.ConfirmEmailController,
            templateUrl: '/ngApp/views/confirmEmail.html',
            controllerAs: 'controller'
        });
        $urlRouterProvider
            .otherwise('/ngApp/views/notFound.html');
        $locationProvider.html5Mode(true);
    });
    angular.module('MyApp').factory('authInterceptor', function ($q, $window, $location) {
        return ({
            request: function (config) {
                config.headers = config.headers || {};
                var token = $window.sessionStorage.getItem('token');
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
        });
    });
    angular.module('MyApp').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });
})(MyApp || (MyApp = {}));
