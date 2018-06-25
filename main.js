function initMap() {

    var uluru = {
        lat: 32.7809569,
        lng: -96.8024838
    };

    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15,
            center: uluru
        });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
