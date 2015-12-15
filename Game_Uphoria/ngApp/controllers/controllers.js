var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
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
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
        var OnlineStoreController = (function () {
            function OnlineStoreController(productService, $location) {
                this.productService = productService;
                this.$location = $location;
                this.product = this.productService.listItem();
            }
            return OnlineStoreController;
        })();
        Controllers.OnlineStoreController = OnlineStoreController;
        var EventsController = (function () {
            function EventsController() {
            }
            return EventsController;
        })();
        Controllers.EventsController = EventsController;
        var ContactController = (function () {
            function ContactController() {
            }
            return ContactController;
        })();
        Controllers.ContactController = ContactController;
        var AdminDashboardController = (function () {
            function AdminDashboardController() {
            }
            return AdminDashboardController;
        })();
        Controllers.AdminDashboardController = AdminDashboardController;
        var InventoryController = (function () {
            function InventoryController(productService, $location) {
                this.productService = productService;
                this.$location = $location;
                this.products = productService.listItem();
            }
            return InventoryController;
        })();
        Controllers.InventoryController = InventoryController;
        var AddProductController = (function () {
            function AddProductController(productService, $state) {
                this.productService = productService;
                this.$state = $state;
            }
            AddProductController.prototype.save = function () {
                var _this = this;
                this.productService.save(this.newProduct).then(function () { _this.$state.go('dashboard.adminDashboard.inventory'); });
            };
            return AddProductController;
        })();
        Controllers.AddProductController = AddProductController;
        var EditProductController = (function () {
            function EditProductController(productService, $location, $routeParams) {
                this.productService = productService;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.productToEdit = productService.get($routeParams['id']);
            }
            EditProductController.prototype.save = function () {
                var _this = this;
                this.productService.save(this.productToEdit).then(function () { _this.$location.path('/inventory'); });
            };
            return EditProductController;
        })();
        Controllers.EditProductController = EditProductController;
        var DeleteProductController = (function () {
            function DeleteProductController(productService, $location, $routeParams) {
                this.productService = productService;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.productToDelete = productService.get($routeParams['id']);
            }
            DeleteProductController.prototype.delete = function () {
                var _this = this;
                this.productService.delete(this.productToDelete).then(function () { _this.$location.path('/inventory'); });
            };
            return DeleteProductController;
        })();
        Controllers.DeleteProductController = DeleteProductController;
        var AddUserController = (function () {
            function AddUserController(userService, $location) {
                this.userService = userService;
                this.$location = $location;
            }
            AddUserController.prototype.save = function () {
                var _this = this;
                this.userService.save(this.newUser).then(function () { _this.$location.path('/userList'); });
            };
            return AddUserController;
        })();
        Controllers.AddUserController = AddUserController;
        var EditUserController = (function () {
            function EditUserController(userService, $state, $stateParams) {
                this.userService = userService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.userToEdit = userService.get($stateParams['id']);
            }
            EditUserController.prototype.edit = function () {
                var _this = this;
                this.userService.save(this.userToEdit).then(function () { _this.$state.go('dashboard.adminDashboard.accountDetail', { id: _this.userToEdit.id }); });
            };
            return EditUserController;
        })();
        Controllers.EditUserController = EditUserController;
        var DeleteUserController = (function () {
            function DeleteUserController(userService, $location, $routeParams) {
                this.userService = userService;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.userToDelete = userService.get($routeParams['id']);
            }
            DeleteUserController.prototype.delete = function () {
                var _this = this;
                this.userService.delete(this.userToDelete).then(function () { _this.$location.path('/userList'); });
            };
            return DeleteUserController;
        })();
        Controllers.DeleteUserController = DeleteUserController;
        var UserDashboardController = (function () {
            function UserDashboardController() {
            }
            return UserDashboardController;
        })();
        Controllers.UserDashboardController = UserDashboardController;
        var UserListController = (function () {
            function UserListController(userService, $location) {
                this.userService = userService;
                this.$location = $location;
                this.users = this.userService.listUser();
            }
            return UserListController;
        })();
        Controllers.UserListController = UserListController;
        var EditProfileController = (function () {
            function EditProfileController($location, $routeParams, userService) {
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.userService = userService;
                this.userProfile = userService.get($routeParams['id']);
            }
            return EditProfileController;
        })();
        Controllers.EditProfileController = EditProfileController;
        var UserOverviewController = (function () {
            function UserOverviewController() {
            }
            return UserOverviewController;
        })();
        Controllers.UserOverviewController = UserOverviewController;
        var AccountDetailController = (function () {
            function AccountDetailController(userService, $state, $stateParams) {
                this.userService = userService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.user = userService.get($stateParams['id']);
            }
            return AccountDetailController;
        })();
        Controllers.AccountDetailController = AccountDetailController;
        var MyEventsController = (function () {
            function MyEventsController() {
            }
            return MyEventsController;
        })();
        Controllers.MyEventsController = MyEventsController;
        var HelpController = (function () {
            function HelpController() {
            }
            return HelpController;
        })();
        Controllers.HelpController = HelpController;
        var AdminOverviewController = (function () {
            function AdminOverviewController() {
            }
            return AdminOverviewController;
        })();
        Controllers.AdminOverviewController = AdminOverviewController;
        var SupplierListController = (function () {
            function SupplierListController() {
            }
            return SupplierListController;
        })();
        Controllers.SupplierListController = SupplierListController;
        var AddSupplierController = (function () {
            function AddSupplierController() {
            }
            return AddSupplierController;
        })();
        Controllers.AddSupplierController = AddSupplierController;
        var EditSupplierController = (function () {
            function EditSupplierController() {
            }
            return EditSupplierController;
        })();
        Controllers.EditSupplierController = EditSupplierController;
        var DeleteSupplierController = (function () {
            function DeleteSupplierController() {
            }
            return DeleteSupplierController;
        })();
        Controllers.DeleteSupplierController = DeleteSupplierController;
        var PanelDefaultController = (function () {
            function PanelDefaultController() {
            }
            return PanelDefaultController;
        })();
        Controllers.PanelDefaultController = PanelDefaultController;
        var DashboardController = (function () {
            function DashboardController() {
            }
            return DashboardController;
        })();
        Controllers.DashboardController = DashboardController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
