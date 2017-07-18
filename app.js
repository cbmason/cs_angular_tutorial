(function(){
        var app = angular.module( 'store', []);

        app.controller('StoreController', function(){
                this.products = gems;
        });
        var gems = [
        {
                name: 'Dodecahedron',
                price: 2.00,
                description: 'Gems are actually of little to no real value.  Something like horse manure will prove far more desirable in the post-apocalyptic wastes as fertilizer for delicious rad-shrooms',
                canPurchase: true,
                soldOut: false,
        },
        {
                name: "Penatagonal Gem",
                price: 5.95,
                description: "This is another gem that of course has no real value, but this one shares a shape name with a satanic symbol, which at least makes it more likely that the irradiated ghouls of the wastes will fear you for possessing it.",
                canPurchase: true,
                soldOut: false,
        },

        ];

})();


