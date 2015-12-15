namespace MyApp.Controllers {

    export class HomeController {
        public slides;

        constructor() {
            this.slides = [
                {
                    image: '/Content/img/banner-top-rt.jpg',
                    text: 'banner1'

                },
                {
                    image: '/Content/img/Planeswalkers-Pantheon.jpg',
                    text: 'banner2'
                }];
        }
         
    }


    export class OnlineStoreController {
        public product;

        constructor(
            private productService: MyApp.Services.ProductService,
            private $location: angular.ILocaleService
        ) {
            this.product = this.productService.listItem();
        }

    }

    export class EventsController {

    }

    export class ContactController {

    }

    export class AdminDashboardController {

    }

    export class InventoryController {
        public products;

        constructor(
            private productService: MyApp.Services.ProductService,
            private $location: angular.ILocationService
            
        ) {
            this.products = productService.listItem();
        }
    }

    export class AddProductController {
        public newProduct;

      
        public save() {
            this.productService.save(this.newProduct).then(() => { this.$state.go('dashboard.adminDashboard.inventory') });
        }
        constructor(
            private productService: MyApp.Services.ProductService,
            private $state: angular.ui.IStateService,
            
        ) { }
    }


    export class EditProductController {
        public productToEdit;
        public save() {
            this.productService.save(this.productToEdit).then(() => { this.$location.path('/inventory') });
        }
        constructor(
            private productService: MyApp.Services.ProductService,
            private $location: angular.ILocationService,
            private $routeParams: ng.route.IRouteParamsService
        ) {
            this.productToEdit = productService.get($routeParams['id']);
        }
    }

    export class DeleteProductController {
        public productToDelete;

        public delete() {
            this.productService.delete(this.productToDelete).then(() => { this.$location.path('/inventory') });
        }
        constructor(
            private productService: MyApp.Services.ProductService,
            private $location: angular.ILocationService,
            private $routeParams: ng.route.IRouteParamsService
        ) {
            this.productToDelete = productService.get($routeParams['id']);
        }
        }

    export class AddUserController {
        public newUser;

        public save() {
            this.userService.save(this.newUser).then(() => { this.$location.path('/userList')});
        }
        constructor(
            private userService: MyApp.Services.UserService,
            private $location: angular.ILocationService
        ) { }
    }

    export class EditUserController {
        public userToEdit;

        public edit() {
            this.userService.save(this.userToEdit).then(() => { this.$state.go('dashboard.adminDashboard.accountDetail', { id: this.userToEdit.id }) });
        }
        constructor(
            private userService: MyApp.Services.UserService,
            private $state: angular.ui.IStateService,
            private $stateParams: ng.ui.IStateService
        ) {
           
            this.userToEdit = userService.get($stateParams['id']);
        }

    }

    export class DeleteUserController {
        public userToDelete;

        public delete() {
            this.userService.delete(this.userToDelete).then(() => { this.$location.path('/userList') });
        }
        constructor(
            private userService: MyApp.Services.UserService,
            private $location: angular.ILocationService,
            private $routeParams: ng.route.IRouteParamsService
        ) {
            this.userToDelete = userService.get($routeParams['id']);
        }
    }

    export class UserDashboardController {
        
    }

    export class UserListController {
        public users;

        constructor(
            private userService: MyApp.Services.UserService,
            private $location: angular.ILocationService
        ) {
            this.users = this.userService.listUser();
        }
    }

    export class EditProfileController {
        public userProfile;

        constructor(
            
            private $location: angular.ILocationService,
            private $routeParams: ng.route.IRouteParamsService,
            private userService: MyApp.Services.UserService
        ) {
            this.userProfile = userService.get($routeParams['id']);
        }
    }
    export class UserOverviewController {
        
    }
    export class AccountDetailController {
        public user;

        constructor(
            private userService: MyApp.Services.UserService,
            private $state: angular.ui.IStateService,
            private $stateParams: ng.ui.IStateParamsService
        ) {
            this.user = userService.get($stateParams['id']);
        }

    }
    export class MyEventsController {

    }
    export class HelpController {

    }
    export class AdminOverviewController {

    }
    export class SupplierListController {

    }
    export class AddSupplierController {

    }
    export class EditSupplierController {

    }
    export class DeleteSupplierController {

    }
    export class PanelDefaultController {

    }
    export class DashboardController {

    }
}