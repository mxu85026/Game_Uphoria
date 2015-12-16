var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var ProductService = (function () {
            function ProductService($resource) {
                this.ProductResource = $resource('/api/products/:id');
            }
            ProductService.prototype.listItem = function () {
                return this.ProductResource.query();
            };
            ProductService.prototype.get = function (id) {
                return this.ProductResource.get({ id: id });
            };
            ProductService.prototype.save = function (item) {
                return this.ProductResource.save(item).$promise;
            };
            ProductService.prototype.delete = function (id) {
                return this.ProductResource.delete({ id: id }).$promise;
            };
            return ProductService;
        })();
        Services.ProductService = ProductService;
        angular.module('MyApp').service('productService', ProductService);
        var UserService = (function () {
            function UserService($resource) {
                this.UserResource = $resource('/api/user/:id');
            }
            UserService.prototype.listUser = function () {
                return this.UserResource.query();
            };
            UserService.prototype.get = function (id) {
                return this.UserResource.get({ id: id });
            };
            UserService.prototype.save = function (user) {
                return this.UserResource.save(user).$promise;
            };
            UserService.prototype.delete = function (user) {
                return this.UserResource.delete({ id: user.id }).$promise;
            };
            return UserService;
        })();
        Services.UserService = UserService;
        angular.module('MyApp').service('userService', UserService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=services.js.map