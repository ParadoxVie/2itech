// // let persons = [];
// // $('form').on('submit', function (e){
// //     e.preventDefault();
// //     let data = $('form').serializeArray()
// //     let person = { index : persons.length + 1, name: data[0].value, mail: data[1].value}
// //     persons.push(person)
// //     //$('table ').append("<tr><td>"+data[0].value+"</td><td>"+data[1].value+"</td><td class='delete'>🗑️</td><td class='edit'>🖊️</td></tr>")
// //     //console.log(data[0].value)
// //     //console.log(person)
// //     //$('table ').remove()
// //     render()

// //     $('.delete').on('click', function (e) {
// //         //e.target.parentElement.remove()
// //         console.log(e.target)
// //         // persons.forEach(person => {
// //         //     $('table ').append("<tr><td>"+person.index+"</td><td>"+person.name+"</td>><td>"+person.mail+"</td><td class='delete'>🗑️</td><td class='edit'>🖊️</td></tr>")
// //         // })
// //     })
// //     $('.edit').on('click', function (e) {
// //         console.log($('#name'))
// //         $('#name')[0].value = e.target.parentElement.childNodes[1].innerHTML
// //         $('#Email')[0].value = e.target.parentElement.childNodes[2].innerHTML

// //     })

    


// // })


// // function render(){
// //     persons.forEach(person => {
// //         $('table ').append("<tr><td>"+person.index+"</td><td>"+person.name+"</td>><td>"+person.mail+"</td><td class='delete' data-id="+person.index+">🗑️</td><td data-id="+person.index+" class='edit'>🖊️</td></tr>")
// //     })
// // }


// // $('#Email').on('click', function(e){
// //     e.target.value = "ouiouioui"
// // })


// let persons = [];

//  $('form').on('submit', function(event){
//     event.preventDefault();

//     let data = $('form').serializeArray();
//     let person = {index: persons.length + 1, name: data[0].value, email : data[1].value};

//     persons.push(person);
//     render()
//     console.log(person);
// })

// $('.delete-button').on('click', function() {
//     deleteItem($(this).data('id'));
// })


// let deleteItem = (id) => {
// persons = persons.filter(element => element.index !== id);
// render();

// let render = () => {

//     let tbodyContent = '';
//     persons.forEach(person =>{
//     tbodyContent += `<tr>
//         <td>${person.index}</td>
//         <td>${person.name}</td>
//         <td>${person.email}</td>
//         <td>
//             <button class="edit-button" data-id='${person.index}'>Modifier</button> 
//             <button class="delete-button"  data-id='${person.index}'>Supprimer</button>
//         </td>
//     </tr>`;
//     })

//     $('table ').append(tbodyContent);
// }




