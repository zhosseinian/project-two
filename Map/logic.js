// An array of cities and their locations
var cities = [
  {
    name: "Rush Copely Hospital",
    location: [41.729, -88.2706]
  },
  {
    name: "University of Chicago Hospital",
    location: [41.7888, -87.6043]
  },
  {
    name: "NW Mermorial",
    location: [41.8947, -87.6215]
  },
  {
    name: "John H. Stroger Cook County Health",
    location: [41.8728, -87.6737]
  },
  {
    name: "UI Health",
    location: [41.8696 -87.6716]
  },
  {
    name: "St. Anthony's",
    location: [41.8644, -87.6884]
  },
  {
    name: "Mt. Siani Hospital",
    location: [40.79, -73.9527]
  },
  {
    name: "North Shore University",
    location: [40.7752, -73.7013]
  },
  {
    name: "Vista Medical Center",
    location: [42.3782, -87.8325]
  },
  {
    name: "Advocate Lutherin",
    location: [42.0385, -87.8476]
  },
  {
    name: "Advocate IL",
    location: [41.937, -87.652]
  },
  {
    name: "Carle Foundation",
    location: [40.117, -88.2156]
  },
  {
    name: "Norwegine Medical",
    location: [48.8934, -2.271539927]
  },
  {
    name: "Memorial Medical Center",
    location: [39.8097, -89.6568]
  },
  {
    name: "Memorial Carbondale",
    location: [37.7274, -89.2207]
  },
  {
    name: "Advocate Christ Memorial",
    location: [41.9753, -87.6995]
  },  
  {name: "Rush University",
  location: [41.8746, -87.6687]
},

{
  name: "Advocate Trenity",
  location: [41.7265, -87.5679]
},
{
  name: "Abraham Lincoln Memorial",
  location: [40.1538, -89.3898]
},
{
  name: "Barne's Jewish",
  location: [38.6369, -90.2645]
},
{
  name: "Anderson Hospital",
  location: [38.7367, -89.9462]
},
{
  name: "Gibson Area",
  location: [40.4653, --88.3758875]
},
{
  name: "NW Medicine Centeral Du Page",
  location: [41.8731, -88.15747833]
},
{
  name: "Silvercross Hospital",
  location: [41.5458, --87.98079]
},
{
  name: "West Suburban",
  location: [29.7095, -95.3981781]
},
{
  name: "Passavant Area Hospital",
  location: [47.274, -6.383059978]
}
];

// An array which will be used to store created cityMarkers
var cityMarkers = [];

for (var i = 0; i < cities.length; i++) {
  // loop through the cities array, create a new marker, push it to the cityMarkers array
  cityMarkers.push(
    L.marker(cities[i].location).bindPopup("<h1>" + cities[i].name + "</h1>")
  );
}

// Add all the cityMarkers to a new layer group.
// Now we can handle them as one group instead of referencing each individually
var cityLayer = L.layerGroup(cityMarkers);

// Define variables for our tile layers
var light = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
});

var dark = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

// Only one base layer can be shown at a time
var baseMaps = {
  Light: light,
  Dark: dark
};

// Overlays that may be toggled on or off
var overlayMaps = {
  Cities: cityLayer
};

// Create map object and set default layers
var myMap = L.map("map", {
  center: [46.2276, 2.2137],
  zoom: 6,
  layers: [light, cityLayer]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps).addTo(myMap);
