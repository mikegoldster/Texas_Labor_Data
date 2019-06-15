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

var link = "https://raw.githubusercontent.com/TNRIS/tx.geojson/master/counties/tx_counties.geojson";

// Function that will determine the color of a neighborhood based on the borough it belongs to
function chooseColor(COUNTY) {
  switch (COUNTY) {

//Abilene
case "Callahan County":
  return "red";
case "Jones County":
  return "red";
case "Taylor County":
  return "red";

//Amarillo
case "Armstrong County":
  return "lightgreen";
case "Carson County":
  return "lightgreen";
case "Oldham County":
  return "lightgreen";
case "Potter County":
  return "lightgreen";
case "Randall County":
  return "lightgreen";

//Austin
  case "Bastrop County":
    return "chartreuse";
  case "Caldwell County":
    return "chartreuse";
  case "Hays County":
    return "chartreuse";
  case "Travis County":
    return "chartreuse";
  case "Williamson County":
    return "chartreuse";

//Beaumont
case "Hardin County":
  return "darkblue";
case "Jefferson County":
  return "darkblue";
case "Newton County":
  return "darkblue";
case "Orange County":
  return "darkblue";

//Brownsville
case "Cameron County":
  return "darkred";

//College Station
case "Brazos County":
  return "orange";
case "Burleson County":
  return "orange";
case "Robertson County":
  return "orange";

//Corpus Christi
case "Aransas County":
  return "darkorange";
case "Nueces County":
  return "darkorange";
case "San Patricio County":
  return "darkorange";

//Dallas
  case "Collin County":
    return "blue";
  case "Dallas County":
    return "blue";
  case "Denton County":
    return "blue";
  case "Ellis County":
    return "blue";
  case "Hood County":
    return "blue";
  case "Hunt County":
    return "blue";
  case "Johnson County":
    return "blue";
  case "Kaufman County":
    return "blue";
  case "Parker County":
    return "blue";
  case "Rockwall County":
    return "blue";
  case "Somervell County":
    return "blue";
  case "Tarrant County":
    return "blue";
  case "Wise County":
    return "blue";

//El Paso
case "El Paso County":
    return "orange";
case "Hudspeth County":
    return "orange";

//Houston
case "Austin County":
  return "red";
case "Brazoria County":
  return "red";
case "Chambers County":
  return "red";
case "Fort Bend County":
  return "red";
case "Galveston County":
  return "red";
case "Harris County":
  return "red";
case "Liberty County":
  return "red";
case "Montgomery County":
  return "red";
case "Waller County":
  return "red";

//Killeen-Temple
case "Bell County":
  return "darkred";
case "Coryell County":
  return "darkred";
case "Lampasas County":
  return "darkred";

//Laredo
case "Webb County":
  return "darkgrey";

//Longview
case "Gregg County":
  return "lightgreen";
case "Rusk County":
  return "lightgreen";
case "Upshur County":
  return "lightgreen";

//Lubbock
case "Crosby County":
  return "darkgreen";
case "Lubbock County":
  return "darkgreen";
case "Lynn County":
  return "darkgreen";

//McAllen
case "Hidalgo County":
  return "white";

//Midland
case "Martin County":
  return "chartreuse";
case "Midland County":
  return "chartreuse";

//Odessa
case "Ector County":
  return "yellow";

//San Angelo
case "Irion County":
    return "blue";
  case "Tom Green County":
    return "blue";

//San Antonio
case "Atascosa County":
  return "yellow";
case "Bandera County":
  return "yellow";
case "Bexar County":
  return "yellow";
case "Comal County":
  return "yellow";
case "Guadalupe County":
  return "yellow";
case "Kendall County":
  return "yellow";
case "Medina County":
  return "yellow";
case "Wilson County":
  return "yellow";

//Sherman
case "Grayson County":
  return "darkgrey";

//Texarkana (includes Arkansas)
case "Bowie County":
  return "hotpink";

//Tyler
case "Smith County":
  return "brown";

//Victoria
case "Goliad County":
  return "hotpink";
case "Victoria County":
  return "hotpink";

//Waco
case "Falls County":
  return "green";
case "McLennan County":
  return "green";

//Wichita Falls
case "Archer County":
  return "orange";
case "Clay County":
  return "orange";
case "Wichita County":
  return "orange";


//West Texas Nonmetropolitan
case "Andrews County":
  return "hotpink";
case "Bailey County":
  return "hotpink";
case "Baylor County":
  return "hotpink";
case "Borden County":
  return "hotpink";
case "Brewster County":
  return "hotpink";
case "Briscoe County":
  return "hotpink";
case "Castro County":
  return "hotpink";
case "Childress County":
  return "hotpink";
case "Cochran County":
  return "hotpink";
case "Collingsworth County":
  return "hotpink";
case "Cottle County":
  return "hotpink";
case "Crane County":
  return "hotpink";
case "Crockett County":
  return "hotpink";
case "Culberson County":
  return "hotpink";
case "Dallam County":
  return "hotpink";
case "Dawson County":
  return "hotpink";
case "Deaf Smith County":
  return "hotpink";
case "Dickens County":
  return "hotpink";
case "Donley County":
  return "hotpink";
case "Fisher County":
  return "hotpink";
case "Floyd County":
  return "hotpink";
case "Foard County":
  return "hotpink";
case "Gaines County":
  return "hotpink";
case "Garza County":
  return "hotpink";
case "Glasscock County":
  return "hotpink";
case "Gray County":
  return "hotpink";
case "Hale County":
  return "hotpink";
case "Hall County":
  return "hotpink";
case "Hansford County":
  return "hotpink";
case "Hardeman County":
  return "hotpink";
case "Hartley County":
  return "hotpink";
case "Haskell County":
  return "hotpink";
case "Hemphill County":
  return "hotpink";
case "Hockley County":
  return "hotpink";
case "Howard County":
  return "hotpink";
case "Hutchinson County":
  return "hotpink";
case "Jeff Davis County":
  return "hotpink";
case "Kent County":
  return "hotpink";
case "King County":
  return "hotpink";
case "Knox County":
  return "hotpink";
case "Lamb County":
  return "hotpink";
case "Lipscomb County":
  return "hotpink";
case "Loving County":
  return "hotpink";
case "Mitchell County":
  return "hotpink";
case "Moore County":
  return "hotpink";
case "Motley County":
  return "hotpink";
case "Nolan County":
  return "hotpink";
case "Ochiltree County":
  return "hotpink";
case "Parmer County":
  return "hotpink";
case "Pecos County":
  return "hotpink";
case "Presidio County":
  return "hotpink";
case "Reagan County":
  return "hotpink";
case "Reeves County":
  return "hotpink";
case "Roberts County":
  return "hotpink";
case "Scurry County":
  return "hotpink";
case "Shackelford County":
  return "hotpink";
case "Sherman County":
  return "hotpink";
case "Stonewall County":
  return "hotpink";
case "Swisher County":
  return "hotpink";
case "Terrell County":
  return "hotpink";
case "Terry County":
  return "hotpink";
case "Throckmorton County":
  return "hotpink";
case "Upton County":
  return "hotpink";
case "Ward County":
  return "hotpink";
case "Wheeler County":
  return "hotpink";
case "Wilbarger County":
  return "hotpink";
case "Winkler County":
  return "hotpink";
case "Yoakum County":
  return "hotpink";

//North Texas Nonmetropolitan
case "Anderson County":
  return "gold";
case "Camp County":
  return "gold";
case "Cass County":
  return "gold";
case "Cherokee County":
  return "gold";
case "Comanche County":
  return "gold";
case "Cooke County":
  return "gold";
case "Delta County":
  return "gold";
case "Eastland County":
  return "gold";
case "Erath County":
  return "gold";
case "Fannin County":
  return "gold";
case "Franklin County":
  return "gold";
case "Harrison County":
  return "gold";
case "Henderson County":
  return "gold";
case "Hopkins County":
  return "gold";
case "Jack County":
  return "gold";
case "Lamar County":
  return "gold";
case "Marion County":
  return "gold";
case "Montague County":
  return "gold";
case "Morris County":
  return "gold";
case "Navarro County":
  return "gold";
case "Palo Pinto County":
  return "gold";
case "Panola County":
  return "gold";
case "Rains County":
  return "gold";
case "Red River County":
  return "gold";
case "Stephens County":
  return "gold";
case "Titus County":
  return "gold";
case "Van Zandt County":
  return "gold";
case "Wood County":
  return "gold";
case "Young County":
  return "gold";

//Big Thicket NonMetropolitan
case "Angelina County":
  return "black";
case "Houston County":
  return "black";
case "Jasper County":
  return "black";
case "Nacogdoches County":
  return "black";
case "Polk County":
  return "black";
case "Sabine County":
  return "black";
case "San Augustine County":
  return "black";
case "San Jacinto County":
  return "black";
case "Shelby County":
  return "black";
case "Trinity County":
  return "black";
case "Tyler County":
  return "black";

//Hill Country NonMetropolitan
case "Blanco County":
  return "purple";
case "Bosque County":
  return "purple";
case "Brown County":
  return "purple";
case "Burnet County":
  return "purple";
case "Coke County":
  return "purple";
case "Coleman County":
  return "purple";
case "Concho County":
  return "purple";
case "Fayette County":
  return "purple";
case "Freestone County":
  return "purple";
case "Frio County":
  return "purple";
case "Gillespie County":
  return "purple";
case "Grimes County":
  return "purple";
case "Hamilton County":
  return "purple";
case "Hill County":
  return "purple";
case "Kerr County":
  return "purple";
case "Kimble County":
  return "purple";
case "Lee County":
  return "purple";
case "Leon County":
  return "purple";
case "Limestone County":
  return "purple";
case "Llano County":
  return "purple";
case "Madison County":
  return "purple";
case "Mason County":
  return "purple";
case "McCulloch County":
  return "purple";
case "Menard County":
  return "purple";
case "Milam County":
  return "purple";
case "Mills County":
  return "purple";
case "Runnels County":
  return "purple";
case "San Saba County":
  return "purple";
case "Schleicher County":
  return "purple";
case "Sterling County":
  return "purple";
case "Sutton County":
  return "purple";
case "Walker County":
  return "purple";
case "Washington County":
    return "purple";

//Border Nonmetropolitan
case "Dimmit County":
  return "lightblue";
case "Edwards County":
  return "lightblue";
case "Kinney County":
  return "lightblue";
case "La Salle County":
  return "lightblue";
case "Maverick County":
  return "lightblue";
case "Real County":
  return "lightblue";
case "Uvalde County":
  return "lightblue";
case "Val Verde County":
  return "lightblue";
case "Zavala County":
  return "lightblue";

//Cpastal Plains Nonmetropolitan
case "Bee County":
  return "lightgreen";
case "Brooks County":
  return "lightgreen";
case "Calhoun County":
  return "lightgreen";
case "Colorado County":
  return "lightgreen";
case "DeWitt County":
  return "lightgreen";
case "Duval County":
  return "lightgreen";
case "Gonzales County":
  return "lightgreen";
case "Jackson County":
  return "lightgreen";
case "Jim Hogg County":
  return "lightgreen";
case "Jim Wells County":
  return "lightgreen";
case "Karnes County":
  return "lightgreen";
case "Kenedy County":
  return "lightgreen";
case "Kleberg County":
  return "lightgreen";
case "Lavaca County":
  return "lightgreen";
case "Live Oak County":
  return "lightgreen";
case "Matagorda County":
  return "lightgreen";
case "McMullen County":
  return "lightgreen";
case "Refugio County":
  return "lightgreen";
case "Starr County":
  return "lightgreen";
case "Wharton County":
  return "lightgreen";
case "Willacy County":
  return "lightgreen";
case "Zapata County":
  return "lightgreen";

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
        fillColor: chooseColor(feature.properties.COUNTY),
        fillOpacity: 1,
        weight: 1.5
      };
    }
  }).addTo(map);
});
