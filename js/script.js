$(document).ready(function(){

/*    getData();

    function getData(){
        //---- Variable pour la recherche dans l'api ----//
        var titre = $('.rechercher').val();

        const settings = {
            type: "GET",
            url: "https://www.cheapshark.com/api/1.0/games?title=v"
        };

        //---- variable pour les elements du tableau ----//
        var block = '';

        $.ajax(settings).done((response) => {
            console.log(response);
            //---- Stockage du bloc game dans une variable pour pouvoir la réutiliser ----//
            var $res = $('.game');

            //---- ----//
            for(var i= 0; i < Object.keys(response).length; i++){
                block += `<tr >` +
                    `<td><img src="${response[i]['thumb']}" alt="${response[i]['internalName']}"></td>` +
                    `<td><h2>${response[i]['external']}</h2></td>` +
                    `<td><p>${response[i]['cheapest']}</p></td>` +
                    `<td><a href="https://www.cheapshark.com/redirect?dealID=${response[i]['cheapestDealID']}">
                                Voir</a></td>` +
                    `<td><img class="trash" src="/img/trash.svg" alt="trash" width="50%"></td>` +
                    `</tr>`;


                //---- Supprimer une ligne du tableau ----//
                $('table').on('click', '.trash', function (e){
                    e.preventDefault();
                    $(this).parents('tr').remove();
                });

                $res.html(block);
            }
        })
    }*/


    $('.search').on('click', () =>{
        //---- Variable pour la recherche dans l'api ----//
        var titre = $('.rechercher').val();

        const settings = {
            type: "GET",
            url: "https://www.cheapshark.com/api/1.0/games?title=" + titre
        };

        //---- variable pour les elements du tableau ----//
        var block = '';

        $.ajax(settings).done((response) => {
            console.log(response);
            //---- Stockage du bloc game dans une variable pour pouvoir la réutiliser ----//
            var $res = $('.game');

            //---- ----//
            for(var i= 0; i < Object.keys(response).length; i++){
                 block += `<tr >` +
                                `<td><img src="${response[i]['thumb']}" alt="${response[i]['internalName']}"></td>` +
                                `<td><h2>${response[i]['external']}</h2></td>` +
                                `<td><p>${response[i]['cheapest']}</p></td>` +
                                `<td><a href="https://www.cheapshark.com/redirect?dealID=${response[i]['cheapestDealID']}">
                                Voir</a></td>` +
                                `<td><img class="trash" src="/img/trash.svg" alt="trash" width="50%"></td>` +
                    `</tr>`;


                //---- Supprimer une ligne du tableau ----//
               $('table').on('click', '.trash', function (e){
                  e.preventDefault();
                  $(this).parents('tr').remove();
               });

                $res.html(block);
            }
        })

    });



})




