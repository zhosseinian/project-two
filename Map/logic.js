// An array of cities and their locations
var cities = [
  {
    name: "Rush Copely Hospital",
    location: [41.729, -88.2706],
    address: "1653 W Congress Pkwy, Chicago, IL 60612",
    percentage: "18% IUD and Implant placement in 2018"
  },
  {
    name: "University of Chicago Hospital",
    location: [41.7888, -87.6043],
    address: "5758 S Maryland Ave, Chicago, IL 60637",
    percentage: "58.5% IUD and 78.5% Implant placement in 2018"
  },
  {
    name: "NW Mermorial",
    location: [41.8947, -87.6215],
    address:"251 E Huron St, Chicago, IL 60611",
    percentage:"100% IUD and 69% Implant in 2018"
  },
  {
    name: "John H. Stroger Cook County Health",
    location: [41.8728, -87.6737],
    address:"1969 Ogden Ave, Chicago, IL 60612",
    percentage: "90.63% IUD and 96.875% Implant in 2018"
  },
  // {
  //   name: "UI Health",
  //   location: [41.8696 -87.6716],
  //   address: "",
  //   percentage: "85% IUD and 84.375% Implant in 2018"
  // },
  {
    name: "St. Anthony's",
    location: [41.8644, -87.6884],
    address:"2875 W 19th St, Chicago, IL 60623",
    percentage:"60.625% IUD and 71.875% Implant in 2018"
  },
  {
    name: "Mt. Sinai Hospital",
    location: [41.8612, -87.6947],
    address:"2653 Ogden Ave, Chicago, IL 60608",
    percentage: "40% IUD and Implant in 2018"
  },
  {
    name: "Northshore University",
    location: [42.0656, -87.6842],
    address:"2650 Ridge Ave, Evanston, IL 60201",
    percentage:"65.29% IUD and 31.76% Implant in 2018"
  },
  {
    name: "Vista Medical Center",
    location: [42.3782, -87.8325],
    address:"1324 N Sheridan Rd, Waukegan, IL 60085",
    percentage: "72.2% IUD and 57.7% Implant in 2018"
  },
  {
    name: "Advocate Lutheran",
    location: [42.0385, -87.8476],
    address:"1775 Dempster Street, Park Ridge, IL 60068",
    percentage: "18.125% IUD and 100% Implant in 2018"
  },
  {
    name: "Advocate IL",
    location: [41.937, -87.652],
    address:"836 W Wellington Ave, Chicago, IL 60657",
    percentage: "74.5% IUD and 83% Implant in 2018"
  },
  {
    name: "Carle Foundation",
    location: [40.117, -88.2156],
    address:"611 W Park St, Urbana, IL 61801",
    percentage:"40.67% IUD and 40% Implant in 2018"
  },
  {
    name: "Norwegian Medical",
    location: [41.9008, -87.7000],
    address:"1044 N Francisco Ave, Chicago, IL 60622",
    percentage:"63.5% iud AND 100% Implant in 2018"
  },
  {
    name: "Memorial Medical Center",
    location: [39.8097, -89.6568],
    address:"1802 W Chicago Ave, Chicago, IL 60622",
    percentage: "52.5% IUD and 55% Implant in 2018"
  },
  {
    name: "Memorial Carbondale",
    location: [37.7274, -89.2207],
    address:"405 W Jackson St, Carbondale, IL 62901",
    percentage:"10% IUD and 100% Implant in 2018"
  },
  {
    name: "Advocate Christ Memorial",
    location: [41.9753, -87.6995],
    address:"4440 W 95th St, Oak Lawn, IL 60453",
    percentage: "32.7% IUD and 33.3% Implant in 2018"
  },  
  {name: "Rush University",
  location: [41.8746, -87.6687],
  address:"1653 W Congress Pkwy, Chicago, IL 60610",
  percentage:"21.25% IUD and 21.25% Implant in 2018"
},

{
  name: "Advocate Trinity",
  location: [41.7265, -87.5679],
  address:"4440 W 95th St, Oak Lawn, IL 60453",
  percentage: "0% IUD and 0% Implant in 2018"
},
{
  name: "Abraham Lincoln Memorial",
  location: [40.1538, -89.3898],
  address:"200 Stahlhut Dr, Lincoln, IL 62656",
  percentage: "44.29% IUD and 42.86% Implant in 2018"
},
{
  name: "Barne's Jewish",
  location: [38.6369, -90.2645],
  address:"1 Barnes Jewish Hospital Plaza, St. Louis, MO 63110",
  percentage: "84.5% IUD and 84.5% Implant in 2018"
},
{
  name: "Anderson Hospital",
  location: [38.7367, -89.9462],
  address:"6800 State Route 162, IL-162, Maryville, IL 62062",
  percentage: "0% for IUD and Implant in 2018"
},
{
  name: "Gibson Area",
  location: [40.4653, -88.3758875],
  address:"1120 N Melvin St, Gibson City, IL 60936",
  percentage: "17.14% IUD and 100% Implant in 2018"
},
{
  name: "NW Medicine Centeral Du Page",
  location: [41.8731, -88.15747833],
  address:"25 N Winfield Rd, Winfield, IL 60190",
  percentage: "0% for IUD and Implant in 2018"
},
{
  name: "Silvercross Hospital",
  location: [41.5458, -87.98079],
  address: "1900 Silver Cross Blvd, New Lenox, IL 60451",
  percentage: "0% for IUD and Implant in 2018"
},
{
  name: "West Suburban",
  location: [41.8914, -87.7761],
  address:"3 Erie St, Oak Park, IL 60302",
  percentage: "47.14% IUD and 34.29% Implant in 2018"
},
{
  name: "Passavant Area Hospital",
  location: [39.7466, -90.2596],
  address:"1600 W Walnut St, Jacksonville, IL 62650",
  percentage: "10% for IUD and 10% for Implant in 2018"
}
];

// An array which will be used to store created cityMarkers
var cityMarkers = [];

for (var i = 0; i < cities.length; i++) {
// loop through the cities array, create a new marker, push it to the cityMarkers array
  // console.log(cities[i].name)
  cityMarkers.push(
    L.marker(cities[i].location).bindPopup("<h2>" + cities[i].name + "</h2>" + "<p>" + cities[i].address + "<br>" + cities[i].percentage + "</p>")
  );
}

// Add all the cityMarkers to a new layer group.
// Now we can handle them as one group instead of referencing each individually
var cityLayer = L.layerGroup(cityMarkers);

// Define variables for our tile layers
var light = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.comic",
  accessToken: API_KEY
});

var dark = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.outdoors",
  accessToken: API_KEY
});

// Only one base layer can be shown at a time
var baseMaps = {
  Comic: light,
  Outdoor: dark
};

// Overlays that may be toggled on or off
var overlayMaps = {
  Cities: cityLayer
};

// Create map object and set default layers
var myMap = L.map("map", {
  center: [41.8781, -87.6298],
  zoom: 5,
  layers: [light, cityLayer]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps).addTo(myMap);
