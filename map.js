function initMap() {

    /**37.77568680836996, -122.26332697937957 */
    var macc = {lat: 37.77568680836996, lng: -122.26332697937957};

    var map = new google.maps.Map(

        document.getElementById('map'), {zoom: 15, center: macc});

    var marker = new google.maps.Marker({position: macc, map: map});

  }