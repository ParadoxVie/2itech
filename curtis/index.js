let persons;

let getRemotePersons = async () => {
    fetch('persons.json')
        .then(async (response) => {
            await response.json().then(remotePersons => {
                localStorage.setItem('persons', JSON.stringify(remotePersons));
                initPersons();
            })
        })
}

let addPerson = function () {

    let data = $('form').serializeArray();

    let person = { index: new Date().getTime(), name: data[0].value, email: data[1].value }

    if ($('form input[type=hidden]').length) {
        let item = persons.find(item => {
            return item.index === parseInt($('input[type=hidden]').val())
        });
        item.name = person.name;
        item.email = person.email;
    } else {
        persons.push(person);
    }

    persist();
    render();

    $('form input[type=hidden]').remove();
}

let render = () => {
    let tbodyContent = '';
    persons.forEach(person => {
        tbodyContent += `<tr>
        <td>${person.index}</td>
        <td>${person.name}</td>
        <td>${person.email}</td>
        <td>
            <button class="edit-button" data-id='${person.index}'>Modifier</button>
            <button class="delete-button" data-id='${person.index}'>Supprimer</button>
        </td>
    </tr>`
    })
    $('tbody').html(tbodyContent);

    $(`.delete-button`).off().on('click', function () {
        deleteItem($(this).data('id'));
    })

    $(`.edit-button`).off().on('click', function () {
        editItem($(this).data('id'));
    })
}

let persist = () => {
    localStorage.setItem('persons', JSON.stringify(persons));
}


let deleteItem = (id) => {
    persons = persons.filter(person => person.index !== id)
    persist();
    render();
}

let editItem = (id) => {
    let person = persons.find(person => person.index === id);

    $('form input[name=name]').val(person.name);
    $('form input[name=email]').val(person.email);

    $('form input[type=hidden]').remove();
    $('form').append(`<input type="hidden" value="${person.index}">`);

    persist();

}


let displayFlash = function ({ status, message }) {
    $('.form').removeClass('error').removeClass('success');

    $('.form').addClass(status);
    $('.form').prepend(`<p class='flash-message'>${message}</p>`);

    window.setTimeout(function () { $('.flash-message').remove() }, 3000)
}

let initPersons = () => {
    if (!localStorage.getItem('persons')) {
        getRemotePersons();
        return;
    };

    persons = JSON.parse(localStorage.getItem('persons'));

    render();
};
initPersons();

$(document).on('PERSON_TO_CREATE', function () {
    addPerson()
})

const API_URL = 'https://2i-js.iknsa.xyz/create-user.php';
$.get(API_URL)
    .then(function (response) {
        $('.form').html(response);

        $('form').submit(function (event) {
            event.preventDefault();

            const data = $(this).serializeArray();

            $.post(API_URL, data)
                .then(function (response) {
                    displayFlash(
                        {
                            status: response.success ? 'success' : 'error',
                            message: response.message
                        }
                    );

                    if (response.success) $(document).trigger('PERSON_TO_CREATE');
                })
        })
    })

let handleStatusChange = () => {
    console.log("Online : " + navigator.onLine);

    $('.flash').text(navigator.onLine ? 'Connecté' : "Déconnecté")
}

window.addEventListener('online', handleStatusChange);
window.addEventListener('offline', handleStatusChange);

