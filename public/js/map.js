/*mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: "mapbox://styles/mapbox/streets-v12",
        center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9, // starting zoom
        // 
});

const marker = new mapboxgl.Marker({ color: "black" })
.setLngLat( listing.geometry.coordinates)
.setPopup( new mapboxgl.Popup({offset: 25})
.setHTML(
        `<h4>${listing.title}</h4> <p> Exact Location provided after booking</p>`
        
        ))
.addTo(map);*/

mapboxgl.accessToken = mapToken;

const coordinates = listing.geometry?.coordinates;

console.log("Map coordinates:", coordinates);

if (
  !Array.isArray(coordinates) ||
  coordinates.length !== 2 ||
  !Number.isFinite(Number(coordinates[0])) ||
  !Number.isFinite(Number(coordinates[1]))
) {
  console.error("Invalid coordinates:", coordinates);
  throw new Error("Listing does not contain valid map coordinates");
}

const lng = Number(coordinates[0]);
const lat = Number(coordinates[1]);

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: [lng, lat],
  zoom: 9
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat([lng, lat])
  .setPopup(
    new mapboxgl.Popup({ offset: 25 })
      .setHTML(
        `<h4>${listing.title}</h4>
         <p>Exact Location provided after booking</p>`
      )
  )
  .addTo(map);
