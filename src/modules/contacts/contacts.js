import LazyLoad from 'vanilla-lazyload';
import scriptLoader from '../../js/scriptLoader';

function createMap() {
  var $el = $("#map");
  var zoom = $el.data('zoom') || 7;
  var coords = [$el.data('lat'), $el.data('lng')];
  var markerImage = $el.data('marker');

  var map = new ymaps.Map('map', {
    center:   coords,
    zoom:     zoom,
    controls: ['zoomControl', 'fullscreenControl']
  });
  map.behaviors.disable('scrollZoom');

  var marker = new Image();
  marker.onload = function(){
    var placemark = new ymaps.Placemark(coords, {}, {
      iconLayout: 'default#image',
      iconImageHref: markerImage,
      iconImageSize: [marker.naturalWidth, marker.naturalHeight],
      iconImageOffset: [-Math.ceil(marker.naturalWidth/2), -marker.naturalHeight]
    });
    map.geoObjects.add(placemark);
  };
  marker.src = markerImage;
}

new LazyLoad({
  elements_selector:  '#map',
  callback_processed: function () {
    scriptLoader('//api-maps.yandex.ru/2.1/?lang=ru_RU', function () {
      ymaps.ready(createMap);
    });
  }
});