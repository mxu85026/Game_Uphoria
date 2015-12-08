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

    export class AddProductController {

    }

    export class EditProductController {

    }

    export class DeleteProductController {

    }

    export class AddUserController {

    }

    export class EditUserController {

    }

    export class DeleteUserController {

    }

    export class UserDashboardController {

    }

    export class EditProfileController {

    }
}