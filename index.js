let cofeMachine = {
    product: [
        {name : "expresso", price:"1.5", quantity: 10},
        {name : "cofe", price:"0.5", quantity: 10},
        {name : "chocolate", price:"2", quantity: 0},
        {name : "thé", price:"3.5", quantity: 0},
        {name : "soupe", price:"15", quantity: 0}
    ],
    total: 20,
    numberofSold: 20
}

Object.keys(cofeMachine).forEach(test => {
    //console.log(test)
})

//console.log(cofeMachine)

// function vente(NbVente, choix){

//     for (const key in cofeMachine) {
//         //console.log(cofeMachine[key])
//         let tot = 0;
//         let qty = 0;
//         if(key == "product"){
//             cofeMachine[key].forEach(value => {
//                 //console.log(value)
    
//                 if(value.name == choix){
//                     value.quantity = NbVente;
//                 }
//                 tot = tot + (value.price * value.quantity);
//                 qty = qty + value.quantity;
//                 //console.log(tot)
//             })
//             cofeMachine.total = tot;
//             cofeMachine.numberofSold = qty;
//         }
//     }
// }
// vente(28, "thé")
// vente(1, "soupe")


function uneVente(choix, e){
    for (const key in cofeMachine) {
        //console.log(cofeMachine[key])
        let tot = 0;
        let qty = 0;
        if(key == "product"){
            cofeMachine[key].forEach(value => {
                //console.log(value)
    
                if(value.name == choix){
                    value.quantity = value.quantity + 1
                    e.target.innerHTML = choix + value.quantity;
                }
                tot = tot + (value.price * value.quantity);
                qty = qty + value.quantity;
                //console.log(tot)
            })
            cofeMachine.total = tot;
            document.getElementById("total").innerHTML = "Total : " + cofeMachine.total 
            cofeMachine.numberofSold = qty;
            document.getElementById("sold").innerHTML = "sold : " + cofeMachine.numberofSold 
        }
    }
}


document.getElementById("Expresso").addEventListener("click", function(e){
    uneVente("expresso", e);

    console.log(cofeMachine)
})

document.getElementById("Chocolate").addEventListener("click", function(e){
    uneVente("chocolate", e);
    console.log(cofeMachine)
})

document.getElementById("The").addEventListener("click", function(e){
    uneVente("thé", e);
    console.log(cofeMachine)
})

document.getElementById("Soupe").addEventListener("click", function(e){
    uneVente("soupe", e);
    console.log(cofeMachine)
})

document.getElementById("Cofe").addEventListener("click", function(e){
    uneVente("cofe", e)
    console.log(cofeMachine)
})




//console.log(cofeMachine)





