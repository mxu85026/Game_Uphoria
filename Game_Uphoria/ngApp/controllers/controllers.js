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
        var AddProductController = (function () {
            function AddProductController() {
            }
            return AddProductController;
        })();
        Controllers.AddProductController = AddProductController;
        var EditProductController = (function () {
            function EditProductController() {
            }
            return EditProductController;
        })();
        Controllers.EditProductController = EditProductController;
        var DeleteProductController = (function () {
            function DeleteProductController() {
            }
            return DeleteProductController;
        })();
        Controllers.DeleteProductController = DeleteProductController;
        var AddUserController = (function () {
            function AddUserController() {
            }
            return AddUserController;
        })();
        Controllers.AddUserController = AddUserController;
        var EditUserController = (function () {
            function EditUserController() {
            }
            return EditUserController;
        })();
        Controllers.EditUserController = EditUserController;
        var DeleteUserController = (function () {
            function DeleteUserController() {
            }
            return DeleteUserController;
        })();
        Controllers.DeleteUserController = DeleteUserController;
        var UserDashboardController = (function () {
            function UserDashboardController() {
            }
            return UserDashboardController;
        })();
        Controllers.UserDashboardController = UserDashboardController;
        var EditProfileController = (function () {
            function EditProfileController() {
            }
            return EditProfileController;
        })();
        Controllers.EditProfileController = EditProfileController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
