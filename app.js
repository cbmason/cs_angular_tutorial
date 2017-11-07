(function(){
        var app = angular.module( 'store', []);

        app.controller('StoreController', function(){
                this.products = gems;
        });

        app.controller('TabController', function(){
                this.tab = 1;

                this.setTab = function(tab) {
                        this.tab = tab;
                };

                this.isSet = function(tab){
                        return this.tab === tab;
                };

        });

        app.controller("GalleryController", function(){
                this.current = 0;

                this.setCurrent = function(index){
                        this.current = index;
                };
        });

        app.controller("ReviewController", function(){
                this.review = {};
                this.addReview = function(product) {
                        this.review.createdOn = Date.now();
                        product.reviews.push(this.review);
                        this.review = {};
                };

        });

        app.directive('productTitle', function(){
                return {
                        restrict: 'E',
                        templateUrl: 'product-title.html'
                };
        });

        app.directive('productPanels', function() {
                return {
                        restrict: 'E',
                        templateUrl: 'product-panels.html',
                        controller:function(){
                        },
                        controllerAs: 'panels'

                };
        });

        var gems = [
        {
                name: 'Dodecahedron',
                price: 2.00,
                description: 'Gems are actually of little to no real value.  Something like horse manure will prove far more desirable in the post-apocalyptic wastes as fertilizer for delicious rad-shrooms',
                images: [ 
                        'resources/dodecahedron-01-full.jpg',
                        'resources/dodecahedron-01-thumb.jpg',
                        'resources/dodecahedron-02-thumb.jpg',
                ],
                reviews: [
                {
                        stars: 5,
                        body: "I love useless rocks!",
                        author: "joe@mama.com",
                        createdOn: "1502244623000"

                },
                {
                        stars: 1,
                        body: "This product sucks",
                        author: "w33dl0rd69@dbag.com",
                        createdOn: "1502244623000"
                },
                ]

        },
        {
                name: "Pentagonal Gem",
                price: 5.95,
                description: "This is another gem that of course has no real value, but this one shares a shape name with a satanic symbol, which at least makes it more likely that the irradiated ghouls of the wastes will fear you for possessing it.",
                images: [ 
                        'resources/pentagonal-01-full.jpg',
                        'resources/pentagonal-01-thumb.jpg',
                        'resources/pentagonal-02-thumb.jpg',
                ],
        },
        ];

})();


