var nameArr = ["birdLa","birdSm","lime","lyft","spin"]

var apiArr = ["https://mds.bird.co/gbfs/los-angeles/free_bikes",
"https://mds.bird.co/gbfs/santamonica/free_bikes",
"https://data.lime.bike/api/partners/v1/gbfs/los_angeles/free_bike_status",
"https://s3.amazonaws.com/lyft-lastmile-production-iad/lbs/lax/free_bike_status.json",
"https://web.spin.pm/api/gbfs/v1/los_angeles/free_bike_status.json"
]

var bike_arr = []

var proxyUrl = "https://cors-anywhere.herokuapp.com/";

async function fetchApi(url = "", name) {
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        var blank_dict = {} // create a blank dictionary
        blank_dict.provider = name;
        blank_dict.count = parseInt(myJson.data.bikes.length.toString());
        blank_dict.time = time_start;
        bike_arr.push(blank_dict); // push dictionary to the array
        console.log(bike_arr);
    })
    .catch((error) => {
    console.error('There is a problem with the fetch operation', error);
    });
}

function arrFunc() {
    for(var i=0; i < nameArr.length; i++) {
        let name = nameArr[i];
        let apiUrl = apiArr[i];
        fetchApi(apiUrl, name); // passes the arguments into the function
        //break;
    };
    time_start += 10000;
}    

//arrFunc();
let time_start = 0
setInterval(arrFunc, 10000);

