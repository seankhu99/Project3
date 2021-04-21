var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.75804020976093, lng: -88.214985292258522 },
    zoom: 18,
  });

  const IOInfo = '<div class="googleMapsInfo"><h2>Round 1</h2><p>Round 1 is an entertainment franchise originally from Japan. If you love Japanese arcade games, Round 1 is unrivaled in its offerings!</p></div>';

  const mask = {
    url: "images/arcade.jpg",
    scaledSize: new google.maps.Size(36, 36)
  };

  const round1 = new google.maps.Marker ({
    position: {lat: 41.759341307668706, lng: -88.2115829918256},
    map,
    icon: arcade,
    animation: google.maps.Animation.DROP,
    title: "Round 1",
  });

  const round1Window = new google.maps.InfoWindow ({
    content: IOInfo,
  })

  round1.addListener("click", () => {
    round1Window.open(map, round1);
  })
}