(function(){
        var app = angular.module( 'store', []);

        app.controller('StoreController', function(){
                this.products = gems;
        });

        app.controller('PanelController', function(){
                this.tab = 1;

                this.selectTab = function(setTab) {
                        this.tab = setTab;
                };

                this.isSelected = function(checkTab){
                        return this.tab === checkTab;
                };

        });

        var gems = [
        {
                name: 'Dodecahedron',
                price: 2.00,
                description: 'Gems are actually of little to no real value.  Something like horse manure will prove far more desirable in the post-apocalyptic wastes as fertilizer for delicious rad-shrooms',
                images: [ 
                {
                        full: 'resources/dodecahedron-01-full.jpg',
                        thumb: 'resources/dodecahedron-01-thumb.jpg',
                },
                {
                        full: 'resources/dodecahedron-02-full.jpg',
                        thumb: 'resources/dodecahedron-02-thumb.jpg',
                }
                ]

        },
        {
                name: "Pentagonal Gem",
                price: 5.95,
                description: "This is another gem that of course has no real value, but this one shares a shape name with a satanic symbol, which at least makes it more likely that the irradiated ghouls of the wastes will fear you for possessing it.",
                images: [ 
                {
                        full: 'resources/pentagonal-01-full.jpg',
                        thumb: 'resources/pentagonal-01-thumb.jpg',
                },
                {
                        full: 'resources/pentagonal-02-full.jpg',
                        thumb: 'resources/pentagonal-02-thumb.jpg',
                }
                ]
        },
        ];

})();


