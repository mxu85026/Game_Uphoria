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
            function InventoryController(productService, $location, $modal) {
                this.productService = productService;
                this.$location = $location;
                this.$modal = $modal;
                this.products = productService.listItem();
            }
            InventoryController.prototype.delete = function (id) {
                var _this = this;
                this.$modal.open({
                    templateUrl: '/ngApp/views/deleteProduct.html',
                    controller: DeleteProductController,
                    controllerAs: 'modal',
                    resolve: {
                        id: function () { return id; }
                    }
                }).result.then(function () { _this.products = _this.productService.listItem(); });
            };
            return InventoryController;
        })();
        Controllers.InventoryController = InventoryController;
        var AddProductController = (function () {
            function AddProductController(productService, $state, filepickerService, $scope) {
                this.productService = productService;
                this.$state = $state;
                this.filepickerService = filepickerService;
                this.$scope = $scope;
            }
            AddProductController.prototype.pickFile = function () {
                this.filepickerService.pick({
                    mimetype: 'image/*'
                }, this.fileUploaded.bind(this));
            };
            AddProductController.prototype.fileUploaded = function (file) {
                this.file = file;
                this.$scope.$apply();
            };
            AddProductController.prototype.save = function () {
                var _this = this;
                this.newProduct.imageUrl = this.file.url;
                this.productService.save(this.newProduct).then(function () { _this.$state.go('dashboard.adminDashboard.inventory'); });
            };
            return AddProductController;
        })();
        Controllers.AddProductController = AddProductController;
        var EditProductController = (function () {
            function EditProductController(productService, $state, $stateParams, filepickerService, $scope) {
                this.productService = productService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.filepickerService = filepickerService;
                this.$scope = $scope;
                this.productToEdit = productService.get($stateParams['id']);
            }
            EditProductController.prototype.pickFile = function () {
                this.filepickerService.pick({
                    mimetype: 'image/*'
                }, this.fileUploaded.bind(this));
            };
            EditProductController.prototype.fileUploaded = function (file) {
                this.file = file;
                this.$scope.$apply();
            };
            EditProductController.prototype.save = function () {
                var _this = this;
                this.productToEdit.imageUrl = this.file.url;
                this.productService.save(this.productToEdit).then(function () { _this.$state.go('dashboard.adminDashboard.inventory'); });
            };
            return EditProductController;
        })();
        Controllers.EditProductController = EditProductController;
        var DeleteProductController = (function () {
            function DeleteProductController(id, productService, $state, $stateParams, $modalInstance) {
                this.id = id;
                this.productService = productService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.$modalInstance = $modalInstance;
                this.productToDelete = productService.get(id);
            }
            DeleteProductController.prototype.delete = function () {
                var _this = this;
                this.productService.delete(this.id).then(function () { _this.$modalInstance.close(); });
            };
            DeleteProductController.prototype.cancel = function () {
                this.$modalInstance.dismiss('cancel');
            };
            return DeleteProductController;
        })();
        Controllers.DeleteProductController = DeleteProductController;
        var AddUserController = (function () {
            function AddUserController(userService, $location, filepickerService, $scope) {
                this.userService = userService;
                this.$location = $location;
                this.filepickerService = filepickerService;
                this.$scope = $scope;
            }
            AddUserController.prototype.pickFile = function () {
                this.filepickerService.pick({
                    mimetype: 'image/*'
                }, this.fileUploaded.bind(this));
            };
            AddUserController.prototype.fileUploaded = function (file) {
                this.file = file;
                this.$scope.$apply();
            };
            AddUserController.prototype.save = function () {
                var _this = this;
                this.newUser.avatarUrl = this.file.url;
                this.userService.save(this.newUser).then(function () { _this.$location.path('/userList'); });
            };
            return AddUserController;
        })();
        Controllers.AddUserController = AddUserController;
        var EditUserController = (function () {
            function EditUserController(userService, $state, $stateParams, filepickerService, $scope) {
                this.userService = userService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.filepickerService = filepickerService;
                this.$scope = $scope;
                this.userToEdit = userService.get($stateParams['id']);
            }
            EditUserController.prototype.pickFile = function () {
                this.filepickerService.pick({
                    mimetype: 'image/*'
                }, this.fileUploaded.bind(this));
            };
            EditUserController.prototype.fileUploaded = function (file) {
                this.file = file;
                this.$scope.$apply();
            };
            EditUserController.prototype.edit = function () {
                var _this = this;
                this.userToEdit.avatarUrl = this.file.url;
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
            function EditProfileController(userService, $state, $stateParams, filepickerService, $scope) {
                this.userService = userService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.filepickerService = filepickerService;
                this.$scope = $scope;
                this.profileToEdit = userService.get($stateParams['id']);
            }
            EditProfileController.prototype.pickFile = function () {
                this.filepickerService.pick({
                    mimetype: 'image/*'
                }, this.fileUploaded.bind(this));
            };
            EditProfileController.prototype.fileUploaded = function (file) {
                this.file = file;
                this.$scope.$apply();
            };
            EditProfileController.prototype.edit = function () {
                var _this = this;
                this.profileToEdit.avatarUrl = this.file.url;
                this.userService.save(this.profileToEdit).then(function () { _this.$state.go('dashboard.adminDashboard.accountDetail', { id: _this.profileToEdit.id }); });
            };
            return EditProfileController;
        })();
        Controllers.EditProfileController = EditProfileController;
        var UserOverviewController = (function () {
            function UserOverviewController(userService, $state, $stateParams) {
                this.userService = userService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.user = userService.get($stateParams['id']);
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
            function DashboardController(userService, $state, $stateParams, accountService) {
                this.userService = userService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.accountService = accountService;
                this.user = userService.get($stateParams['id']);
            }
            DashboardController.prototype.isAdmin = function () {
                return this.accountService.getClaim('IsAdmin');
            };
            DashboardController.prototype.showView = function () {
                if (this.isAdmin()) {
                    this.$state.go('dashboard.adminDashboard');
                }
                else {
                    this.$state.go('dashboard.userDashboard.userOverview', { id: this.user.id });
                }
                ;
                debugger;
            };
            return DashboardController;
        })();
        Controllers.DashboardController = DashboardController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=controllers.js.map