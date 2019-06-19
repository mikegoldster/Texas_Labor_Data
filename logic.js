// Creating map object
var map = L.map("map", {
  center: [31, -97],
  zoom: 6
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(map);

var link = "https://raw.githubusercontent.com/mikegoldster/Texas_Labor_Data/master/tx_counties.geojson";

// Function that will determine the color of a neighborhood based on the borough it belongs to
function chooseColor(REGION) {
  switch (REGION) {

//Urban Regions
    case "Brownsville":
      return "darkred";
    case "McAllen":
      return "lightblue";
    case "El Paso":
      return "orange";
    case "Abilene":
      return "red";
    case "San Angelo":
      return "royalblue";
    case "Midland":
      return "chartreuse";
    case "Odessa":
      return "yellow";
    case "Lubbock":
      return "lightgreen";
    case "Amarillo":
      return "darkgreen";
    case "Laredo":
      return "red";
    case "Corpus Christi":
      return "orange";
    case "Victoria":
      return "pink";
    case "Texarkana":
      return "pink";
    case "Tyler":
      return "brown";
    case "Sherman":
      return "darkgrey";
    case "Wichita Falls":
      return "orange";
    case "Longview":
      return "lightgreen";
    case "Beaumont":
      return "darkblue";
    case "College Station":
      return "orange";
    case "Waco":
      return "green";
    case "Killeen-Temple":
      return "darkred";
    case "Austin":
      return "chartreuse";
    case "San Antonio":
      return "yellow";
    case "Houston":
      return "red";
    case "Dallas":
      return "blue";

//Rural Regions

case "Big Thicket":
return "chartreuse";
case "Border":
return "darkgreen";
case "Coastal Plains":
return "royalblue";
case "Hill Country":
return "purple";
case "North Texas":
return "gold";
case "West Texas":
return "hotpink";

  default:
    return "black";
  }
}

// Grabbing our GeoJSON data..
d3.json(link, function(data) {
  // Creating a geoJSON layer with the retrieved data
  L.geoJson(data, {
    style: function(feature) {
      return {
        color: "white",
        fillColor: chooseColor(feature.properties.REGION),
        fillOpacity: .5,
        weight: 1.5
      };
    },

    // Called on each feature
    onEachFeature: function(feature, layer) {
      // Set mouse events to change map styling
      layer.on({
        // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
        mouseover: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.9
          });
        },
        // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
        mouseout: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.5
          });
        },
        // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
        click: function(event) {
          map.fitBounds(event.target.getBounds());
        }
      });
      // Giving each feature a pop-up with information pertinent to it
      layer.bindPopup("<h1>" + feature.properties.COUNTY + "</h1> <hr> <h2>" + feature.properties.REGION + "</h2>");

    }
    }).addTo(map);
    });
