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

        public delete(id) {
            
            this.$modal.open({
                templateUrl: '/ngApp/views/deleteProduct.html',
                controller: DeleteProductController,
                controllerAs: 'modal',
                resolve: {
                    id: ()=> id
                }
            }).result.then(() => { this.products = this.productService.listItem();});
        }
        constructor(
            private productService: MyApp.Services.ProductService,
            private $location: angular.ILocationService,
            private $modal: angular.ui.bootstrap.IModalService

        ) {
            this.products = productService.listItem();
        }
    }

    export class AddProductController {
        public newProduct;
        public file;

        public pickFile() {
            this.filepickerService.pick(
                {
                    mimetype: 'image/*'
                },
                this.fileUploaded.bind(this)
            );
        }

        public fileUploaded(file) {
            this.file = file;

            this.$scope.$apply();
        }

        public save() {
            this.newProduct.imageUrl = this.file.url;
            this.productService.save(this.newProduct).then(() => { this.$state.go('dashboard.adminDashboard.inventory') });
        }
        constructor(
            private productService: MyApp.Services.ProductService,
            private $state: angular.ui.IStateService,
            private filepickerService,
            private $scope: ng.IScope

        ) { }
    }


    export class EditProductController {
        public productToEdit;
        public file;

        public pickFile() {
            this.filepickerService.pick(
                {
                    mimetype: 'image/*'
                },
                this.fileUploaded.bind(this)
            );
        }

        public fileUploaded(file) {
            this.file = file;

            this.$scope.$apply();
        }
        public save() {
            this.productToEdit.imageUrl = this.file.url;
            this.productService.save(this.productToEdit).then(() => { this.$state.go('dashboard.adminDashboard.inventory') });
        }
        constructor(
            private productService: MyApp.Services.ProductService,
            private $state: angular.ui.IStateService,
            private $stateParams: ng.ui.IStateParamsService,
            private filepickerService,
            private $scope: ng.IScope
        ) {
            this.productToEdit = productService.get($stateParams['id']);
        }
    }

    export class DeleteProductController {
        public productToDelete;

        public delete() {
            
            this.productService.delete(this.id).then(() => { this.$modalInstance.close(); });
        }
        public cancel() {
            this.$modalInstance.dismiss('cancel');
        }
        constructor(
            
            private id,
            private productService: MyApp.Services.ProductService,
            private $state: angular.ui.IStateService,
            private $stateParams: ng.ui.IStateParamsService,
            private $modalInstance: angular.ui.bootstrap.IModalServiceInstance
        ) {
            
            this.productToDelete = productService.get(id);
        }
    }

    export class AddUserController {
        public newUser;
        public file;

        public pickFile() {
            this.filepickerService.pick(
                {
                    mimetype: 'image/*'
                },
                this.fileUploaded.bind(this)
            );
        }

        public fileUploaded(file) {
            this.file = file;

            this.$scope.$apply();
        }

        public save() {
            this.newUser.avatarUrl = this.file.url;
            this.userService.save(this.newUser).then(() => { this.$location.path('/userList') });
        }
        constructor(
            private userService: MyApp.Services.UserService,
            private $location: angular.ILocationService,
            private filepickerService,
            private $scope: ng.IScope
        ) { }
    }

    export class EditUserController {
        public userToEdit;
        public file;

        public pickFile() {
            this.filepickerService.pick(
                {
                    mimetype: 'image/*'
                },
                this.fileUploaded.bind(this)
            );
        }

        public fileUploaded(file) {
            this.file = file;

            this.$scope.$apply();
        }


        public edit() {
            this.userToEdit.avatarUrl = this.file.url;
            this.userService.save(this.userToEdit).then(() => { this.$state.go('dashboard.adminDashboard.accountDetail', { id: this.userToEdit.id }) });
        }
        constructor(
            private userService: MyApp.Services.UserService,
            private $state: angular.ui.IStateService,
            private $stateParams: ng.ui.IStateParamsService,
            private filepickerService,
            private $scope: ng.IScope
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
        public profileToEdit;
        public file;

        public pickFile() {
            this.filepickerService.pick(
                {
                    mimetype: 'image/*'
                },
                this.fileUploaded.bind(this)
            );
        }

        public fileUploaded(file) {
            this.file = file;

            this.$scope.$apply();
        }


        public edit() {
            this.profileToEdit.avatarUrl = this.file.url;
            this.userService.save(this.profileToEdit).then(() => { this.$state.go('dashboard.adminDashboard.accountDetail', { id: this.profileToEdit.id }) });
        }
        constructor(
            private userService: MyApp.Services.UserService,
            private $state: angular.ui.IStateService,
            private $stateParams: ng.ui.IStateParamsService,
            private filepickerService,
            private $scope: ng.IScope
        ) {

            this.profileToEdit = userService.get($stateParams['id']);
        }

    }
    export class UserOverviewController {
        public user;

        constructor(
            private userService: MyApp.Services.UserService,
            private $state: angular.ui.IStateService,
            private $stateParams: ng.ui.IStateParamsService
        ) {
            this.user = userService.get($stateParams['id']);
        }

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
        public user;

        public isAdmin() {
            return this.accountService.getClaim('IsAdmin');
                
                
            
        }

        public showView() {
            
            if (this.isAdmin()) {
                this.$state.go('dashboard.adminDashboard');
            }
            else {
                this.$state.go('dashboard.userDashboard.userOverview', { id: this.user.id })
            };
            debugger;
        }
        constructor(
            private userService: MyApp.Services.UserService,
            private $state: angular.ui.IStateService,
            private $stateParams: ng.ui.IStateParamsService,
            private accountService: MyApp.Services.AccountService
        ) {
            this.user = userService.get($stateParams['id']);
        }
    }

}