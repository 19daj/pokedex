$("document").ready(function () {
    var minName;
    var pokemonContainer = $("#pokemon-cont");
    var zeros = "00";
    var zero = "0";
    var template = `<div class="container-pokemon">
                        <img class="responsive-image pok" src=__imagen__/>
                        <p>__namePokemon__</p>
                    </div>`;

    $('.modal').modal();

    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/?limit=806`,
        type: 'GET',
        datatype: 'json',
        crossDomain: true
    }).done(pokemon).fail(fail);

    function pokemon(data) {
        var newCard = "";
        var namePokem = "";
        var urlImage = "";

        for (var i = 1; i < 807; i++) {
            if (i < 10) {
                urlImage = `"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zeros}${i}.png"`;
                namePokem = data.results[i - 1].name
                newCard = template.replace("__imagen__", urlImage).replace("__namePokemon__", namePokem);
                pokemonContainer.append(newCard);
            } else if (i <= 99) {
                urlImage = `"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zero}${i}.png"`;
                namePokem = data.results[i - 1].name
                newCard = template.replace("__imagen__", urlImage).replace("__namePokemon__", namePokem);
                pokemonContainer.append(newCard);
            } else {
                urlImage = `"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${i}.png"`;
                namePokem = data.results[i - 1].name
                newCard = template.replace("__imagen__", urlImage).replace("__namePokemon__", namePokem);
                pokemonContainer.append(newCard);
            }
        }
    }

    function fail() {
        console.log("Error");
    }

    $('#poke-bttn').click(function (e) {
        e.preventDefault();
        var pokemonName = $('#name-pokemon').val();
        $('#name-pokemon').val("");
        minName = pokemonName.toLowerCase();
        getPokemon();
    })

    function getPokemon() {
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${minName}`,
            type: 'GET',
            datatype: 'json',
            crossDomain: true
        }).done(response).fail(error);
    }

    function response(data) {
        //console.log(data);
        var name = data.name;
        //console.log(name);

        var url = data.sprites.front_default;
        //console.log(url);

        var image = "<img src='" + url + "'/>";

        var type = "type: " + data.types[0].type.name;
        //console.log(type);

        var abilities = "ability: " + data.abilities[0].ability.name;
        //console.log(abilities);

        var abilitiesTwo = "ability: " + data.abilities[1].ability.name;
        //console.log(abilitiesTwo);

        var speed = data.stats[0].stat.name + ': ' + data.stats[0].base_stat;
        //console.log(speed);

        var specialDefense = data.stats[1].stat.name + ': ' + data.stats[1].base_stat;
        //console.log(specialDefense);

        var specialAttack = data.stats[2].stat.name + ': ' + data.stats[2].base_stat;
        //console.log(specialAttack);

        var defense = data.stats[3].stat.name + ': ' + data.stats[3].base_stat;
        //console.log(defense);

        var attack = data.stats[4].stat.name + ': ' + data.stats[4].base_stat;
        //console.log(attack);

        var hp = data.stats[5].stat.name + ': ' + data.stats[5].base_stat;
        //console.log(hp);

        var weight = "weight: " + data.weight;
        //console.log(weight / 10 + "kg");

        var height = "height: " + data.height;
        //console.log(height / 10 + "m");

        var identificator = "Id: " + data.id;
        //console.log(identificator);

        var $pname = $('<p/>').addClass('infoPoke').attr("id", "namePoke").text(name);
        var $ptype = $('<p/>').addClass('infoPoke').text(type);
        var $pabilities = $('<p/>').addClass('infoPoke').text(abilities);
        var $pabilities2 = $('<p/>').addClass('infoPoke').text(abilitiesTwo);
        var $pspeed = $('<p/>').addClass('infoPoke').text(speed);
        var $pspecialDefense = $('<p/>').addClass('infoPoke').text(specialDefense);
        var $pspecialAttack = $('<p/>').addClass('infoPoke').text(specialAttack);
        var $pdefense = $('<p/>').addClass('infoPoke').text(defense);
        var $pattack = $('<p/>').addClass('infoPoke').text(attack);
        var $php = $('<p/>').addClass('infoPoke').text(hp);
        var $pweight = $('<p/>').addClass('infoPoke').text(weight);
        var $pheight = $('<p/>').addClass('infoPoke').text(height);
        var $pidentificator = $('<p/>').addClass('infoPoke').text(identificator);

        $("#namePok").html($pname);
        $("#image").html(image);
        $("#type").html($ptype);
        $("#ability1").html($pabilities);
        $("#ability2").html($pabilities2);
        $("#speed").html($pspeed);
        $("#specialDefend").html($pspecialDefense);
        $("#specialAttack").html($pspecialAttack);
        $("#attack").html($pattack);
        $("#defense").html($pdefense);
        $("#hp").html($php);
        $("#weight").html($pweight);
        $("#height").html($pheight);
        $("#identificator").html($pidentificator);

        $('#poke-bttn').click(function (e) {
            if (minName.length === 0) {
                $("#namePok").html("");
                $("#image").html("");
                $("#type").html("Por favor escribe el nombre de un pokemon");
                $("#ability1").html("");
                $("#ability2").html("");
                $("#speed").html("");
                $("#specialDefend").html("");
                $("#specialAttack").html("");
                $("#attack").html("");
                $("#defense").html("");
                $("#hp").html("");
                $("#weight").html("");
                $("#height").html("");
                $("#identificator").html("");
            }
        });
    }

    function error() {
        console.log('error');
    }
});













