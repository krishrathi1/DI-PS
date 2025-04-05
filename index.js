// Initialize the map
const map = L.map('map').setView([0, 0], 2); // Default view is set to the global view

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Handle map click event
map.on('click', function(e) {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;

    document.getElementById('latitude').textContent = lat.toFixed(6);
    document.getElementById('longitude').textContent = lng.toFixed(6);

    // Optionally, add a marker to the map
    L.marker([lat, lng]).addTo(map)
        .bindPopup(`Selected location: ${lat.toFixed(6)}, ${lng.toFixed(6)}`)
        .openPopup();

    // Redirect to the details page with location parameters
    window.location.href = `details.html?lat=${lat.toFixed(6)}&lng=${lng.toFixed(6)}`;
});