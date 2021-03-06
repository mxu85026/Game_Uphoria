﻿namespace MyApp.Services {

    export class ProductService {
        private ProductResource;

        public listItem() {
            return this.ProductResource.query();
        }

        public get(id: number) {
            
            return this.ProductResource.get({ id: id });
        }

        public save(item) {
            return this.ProductResource.save(item).$promise;
        }

        constructor($resource: angular.resource.IResourceService) {
            this.ProductResource = $resource('/api/products/:id');
        }

        public delete(id) {
            return this.ProductResource.delete({ id: id }).$promise;
        }
    }
    angular.module('MyApp').service('productService', ProductService);

    export class UserService {
        private UserResource;

        public listUser() {
            return this.UserResource.query();
        }

        public get(id: string) {

            return this.UserResource.get({ id: id });
        }

        public save(user) {
            return this.UserResource.save(user).$promise;
        }

        constructor($resource: angular.resource.IResourceService) {
            this.UserResource = $resource('/api/user/:id');
        }

        public delete(user) {
            return this.UserResource.delete({ id: user.id }).$promise;
        }
    }
    angular.module('MyApp').service('userService', UserService);
}