// Initialize the map first
var map = L.map('map', {
  center: [-7.76512, 110.37070],
  zoom: 14.5
});

// Initialize OpenStreetMap (brown theme)
var osmBrown = L.tileLayer('https://tile.jawg.io/5cae44b4-28df-481a-a2d9-9b261d78a039/{z}/{x}/{y}{r}.png?access-token=L4Kh1ENETghHg0LTVRBLUNWZ4KWkXciY6fI0V47U8VlNgTdUNQkj2bLIy0ovMB8X', {});

// Add attribution for OpenStreetMap
osmBrown.addTo(map);
map.attributionControl.addAttribution("<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors");

// Initialize Google Satellite basemap
var googleSat = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  attribution: '© Google Satellite'
});

// Tambahkan geoJSON ke peta
L.geoJSON(longsorjson, {
  onEachFeature: onEachFeature
}).addTo(map);


// Add GeoJSON data from the external JS variable to the map
function onEachFeature(feature, layer) {
  // Cek apakah photo360 adalah iframe (dari URL momento360) atau gambar biasa
  let isIframe = feature.properties.photo360.includes("momento360");
  let popupContent = `
      <h5>${feature.properties.name}</h5>
      <div style="text-align: center;">`;

  if (isIframe) {
      // Jika iframe (untuk momento360), masukkan URL ke dalam iframe tag
      popupContent += `
          <iframe src="${feature.properties.photo360}" 
                  width="300" height="250" 
                  style="border:none; display:block; margin:0 auto;"></iframe>`;
  } else {
      // Jika img (URL gambar biasa), tampilkan sebagai gambar
      popupContent += `
          <img src="${feature.properties.photo360}" 
               width="100%" height="300" 
               style="object-fit:cover; display:block; margin:0 auto; max-width:300px;">`;
  }

  popupContent += `</div>
      <br>
      <div style="text-align:center;">
          <img class="next-point-arrow" data-next="${feature.properties.next_id}" 
              src="https://raw.githubusercontent.com/sintaalfirm/WebServiceSungaiCode/refs/heads/main/icons8-upward-arrow-64.png" 
              style="width: 40px; cursor: pointer;" alt="Next">
      </div>
  `;

  layer.bindPopup(popupContent, {maxWidth: "auto", maxHeight: 400});

  // Update side panel ketika titik diklik
  layer.on('click', function () {
      $('#location-info').html(`
          <h6><strong>Titik Tanah Longsor ${feature.properties.name}</strong></h6>
          <p>${feature.properties.description}</p>
      `);
  });
}

// Event listener untuk navigasi ke titik berikutnya
$(document).on('mouseenter', '.next-point-arrow', function () {
    var nextId = $(this).data('next'); // Mengambil data-next dari elemen img
    var nextFeature = longsorjson.features.find(f => f.properties.id == nextId);
    if (nextFeature) {
        // Tampilkan tooltip dengan nama titik berikutnya
        $(this).attr('title', `Menuju ke titik ${nextFeature.properties.name}`);
    }
}).on('mouseleave', '.next-point-arrow', function () {
    // Hapus tooltip saat mouse keluar
    $(this).removeAttr('title');
});

// Event listener untuk klik
$(document).on('click', '.next-point-arrow', function (e) {
    e.preventDefault();
    var nextId = $(this).data('next'); // Mengambil data-next dari elemen img
    var nextFeature = longsorjson.features.find(f => f.properties.id == nextId);

    if (nextFeature) {
        // Render popup baru untuk titik berikutnya
        var isIframe = nextFeature.properties.photo360.includes("momento360");
        var nextPopup = `
            <h5>${nextFeature.properties.name}</h5>
            <div style="text-align: center;">`;

        if (isIframe) {
            nextPopup += `
                <iframe src="${nextFeature.properties.photo360}" 
                        width="300" height="250" 
                        style="border:none; display:block; margin:0 auto;"></iframe>`;
        } else {
            nextPopup += `
                <img src="${nextFeature.properties.photo360}" 
                     width="300" height="250" 
                     style="object-fit:cover; display:block; margin:0 auto; max-width:300px;">`;
        }

        nextPopup += `
            </div>
            <br>
            <div style="text-align:center;">
                <img class="next-point-arrow" data-next="${nextFeature.properties.next_id}" 
                     src="https://raw.githubusercontent.com/sintaalfirm/WebServiceSungaiCode/refs/heads/main/icons8-upward-arrow-64.png" 
                     style="width: 40px; cursor: pointer;" alt="Next">
            </div>
        `;

        // Set map view to the next feature's coordinates
        map.setView([nextFeature.geometry.coordinates[1], nextFeature.geometry.coordinates[0]], 18);

        // Open the popup for the next point
        L.popup()
            .setLatLng([nextFeature.geometry.coordinates[1], nextFeature.geometry.coordinates[0]])
            .setContent(nextPopup)
            .openOn(map);

        // Perbarui deskripsi di panel samping
        $('#location-info').html(`
            <h6><strong>Titik Longsor ${nextFeature.properties.name}</strong></h6>
            <p>${nextFeature.properties.description}</p>
        `);
    }
});




// Toggle between basemaps
var currentBasemap = 'osm';
document.getElementById('basemapButton').addEventListener('click', function () {
  if (currentBasemap === 'osm') {
      map.removeLayer(osmBrown);
      map.addLayer(googleSat);
      currentBasemap = 'google';
      this.textContent = 'Ganti ke OpenStreetMap';
  } else {
      map.removeLayer(googleSat);
      map.addLayer(osmBrown);
      currentBasemap = 'osm';
      this.textContent = 'Ganti ke Google Satellite';
  }
});