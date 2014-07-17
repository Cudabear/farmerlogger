var data;

initData = function(){
    data = {
        "potato": 0,
        "potato-count": 0,
        "onion": 0,
        "onion-count": 0,
        "cabbage": 0,
        "cabbage-count": 0,
        "tomato": 0,
        "tomato-count": 0,
        "sweetcorn": 0,
        "sweetcorn-count": 0,
        "strawberry": 0,
        "strawberry-count": 0,
        "watermelon": 0,
        "watermelon-count": 0,
        "barley": 0,
        "barley-count": 0,
        "hammerstone": 0,
        "hammerstone-count": 0,
        "asgarnian": 0,
        "asgarnian-count": 0,
        "jute": 0,
        "jute-count": 0,
        "yanillian": 0,
        "yanillian-count": 0,
        "krandorian": 0,
        "krandorian-count": 0,
        "wildblood": 0,
        "wildblood-count": 0,
        "redberry": 0,
        "redberry-count": 0,
        "cadavaberry": 0,
        "cadavaberry-count": 0,
        "dwellberry": 0,
        "dwellberry-count": 0,
        "jangerberry": 0,
        "jangerberry-count": 0,
        "whiteberry": 0,
        "whiteberry-count": 0,
        "poisonivy": 0,
        "poisonivy-count": 0,
        "marigold": 0,
        "marigold-count": 0,
        "rosemary": 0,
        "rosemary-count": 0,
        "nasturtium": 0,
        "nasturtium-count": 0,
        "woad": 0,
        "woad-count": 0,
        "limpwurt": 0,
        "limpwurt-count": 0,
        "guam": 0,
        "guam-count": 0,
        "marrentill": 0,
        "marrentill-count": 0,
        "tarromin": 0,
        "tarromin-count": 0,
        "harralander": 0,
        "harralander-count": 0,
        "ranarr": 0,
        "ranarr-count": 0,
        "toadflax": 0,
        "toadflax-count": 0,
        "irit": 0,
        "irit-count": 0,
        "avantoe": 0,
        "avantoe-count": 0,
        "lantadyme": 0,
        "lantadyme-count": 0,
        "kwuarm": 0,
        "kwuarm-count": 0,
        "snapdragon": 0,
        "snapdragon-count": 0,
        "cadantine": 0,
        "cadantine-count": 0,
        "dwarfweed": 0,
        "dwarfweed-count": 0,
        "torstol": 0,
        "torstol-count": 0,
        "bittercap": 0,
        "bittercap-count": 0,
        "belladonna": 0,
        "belladonna-count": 0,
        "morchella": 0,
        "morchella-count": 0,
        "cactus": 0,
        "cactus-count": 0,
        "total": 0,
        "total-count": 0,
    }
}



handleInput = function(type, qty){
    data[type+'-count'] += qty;
    data[type]++;
    data['total']++;
    data['total-count'] += qty;

   $('#'+type+'-count').html(data[type+'-count']);

   calculatePercentages();
}

setLabels = function(){
    var keys = Object.keys(data);
    var total = data['total'];

    for(var i = 0; i < keys.length; i++){
        var key = keys[i];

        var count = data[key+'-count'];

        $('#'+key+'-count').html(count);
    }
}

calculatePercentages = function(){
    var keys = Object.keys(data);
    var total = data['total'];

    for(var i = 0; i < keys.length; i++){
        var key = keys[i];

        var times = data[key];
        var percent = (times/total)*100;

        $('#'+key+'-percent').html(percent.toFixed(3)+'%');
    }
}

resetCookie = function(){
    $.removeCookie("master-farmer-data");

    window.location.reload();
}

setCookie = function(){
    var json = JSON.stringify(data);

    $.cookie("master-farmer-data", json);
}

readCookie = function(){
    if($.cookie("master-farmer-data")){
        var json = $.cookie("master-farmer-data");

        data = $.parseJSON(json);

        calculatePercentages();
        setLabels();
    }else{
        initData();
    }
}

//save the data in a cookie every second
setInterval(function(){
    setCookie();
}, 1000);

$(document).ready(function(){
    readCookie();
});