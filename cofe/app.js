// M'afficher une machine a caffée à l'écran avec les boutons pour chaque produit

//Quand je click sur un produit, on décrémente le sotck en fonction du contenu
//sur la machine à cofe, je veux connaitre le stock à tout moment
//je veux connaitre le total de vente en €
//je veux connaitre le produit le plus vendus

let products = [];

let vente = [
    {'Expresso' : 0,
    },
    {'Café au lait' : 0,
    },
    {'Chocolat' : 0,
    },
    {'Cappuccino' : 0,
    },
    {'TotalEuro' : 0}
]

let load = false;

fetch('product.json')
.then(async (response) => {
    response.json().then(product => {
        products = product
        load = true;

        $('p#cofe').html('Stock de café : '+products.stock.coffee)
        $('p#chocolate').html('Stock de chocolat : '+products.stock.chocolate)
        $('p#milk').html('Stock de lait : '+products.stock.milk)

    })
})

function uneVente(choix){

    for (const key in products.products) {
        if(choix == products.products[key]['name']){
            vente.forEach(unchoix => {
                if(unchoix[choix] != undefined){
                    unchoix[choix] = unchoix[choix] + 1
                }
            })
            vente[4]["TotalEuro"] = vente[4]["TotalEuro"] + products.products[key]['price']

            products.products[key]['content'].forEach(element => {
                
                if(element['coffe'] != undefined){
                    products.stock.coffee = products.stock.coffee - element['coffe'];
                }

                if(element['milk'] != undefined){
                    products.stock.milk = products.stock.milk - element['milk'];
                }

                if(element['chocolate'] != undefined){
                    products.stock.chocolate = products.stock.chocolate - element['chocolate'];
                }
            });

            $('p#cofe').html('Stock de café : '+products.stock.coffee)
            $('p#chocolate').html('Stock de chocolat : '+products.stock.chocolate)
            $('p#milk').html('Stock de lait : '+products.stock.milk)
            $('div#footer p.total').html('Total de ventes : ' + vente[4]["TotalEuro"] + " €")

            let val
            let max = Math.max(vente[0]['Expresso'], vente[1]['Café au lait'], vente[2]['Chocolat'], vente[3]['Cappuccino'])

            if(vente[0]['Expresso'] == max){
                val = "Expresso"
            }

            if(vente[1]['Café au lait'] == max){
                val = "Café au lait"
            }

            if(vente[2]['Chocolat'] == max){
                val = "Chocolat"
            }

            if(vente[3]['Cappuccino'] == max){
                val = "Cappuccino"
            }


            $('div#footer p.pref').html('Ils ont préférés :' + val)


            
        }
    }
}

$('div#expresso button').on('click', function(e){
    uneVente('Expresso')
    $('img.gif').animate({opacity: 1}, 500)
    $('img.gif').animate({opacity: 0}, 1500)
})

$('div#cofe button').on('click', function(e){
    uneVente('Café au lait')
})

$('div#chocolate button').on('click', function(e){
    uneVente('Chocolat')
})

$('div#capu button').on('click', function(e){
    uneVente('Cappuccino')
})








