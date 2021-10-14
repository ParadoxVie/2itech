let displayFlach = function({ statuts, message }){
    $('.form').removeClass('error').removeClass('success');
    $('.form').addClass(statuts);
    $('.form').prepend(`<p>${message}</p>`)

}

const API_URL = 'https://2i-js.iknsa.xyz/create-user.php';

$.get(API_URL)
    .then(function (response){
        $('.form').html(response);

        $('form').submit(function (event){
            event.preventDefault();

            const data = $(this).serializeArray();
            $.post(API_URL, data)
                .then(function(response){
                    displayFlach({
                        statuts: response.success ? 'success' : 'error', 
                        message: response.message
                    })
                console.log(response);
                
            })
        })
    })