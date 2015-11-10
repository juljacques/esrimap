'use strict';

require(
  [
    'maptiks/maptiks-esri3', // remove 'esri/map', this is an extention of that class
    'esri/layers/WebTiledLayer',
    'esri/layers/WebTiledLayer',
    'esri/layers/WMSLayer',
    'esri/layers/WMSLayerInfo',
    'esri/geometry/Extent',
    'dojo/domReady!',
  ],
  function(
    EsriMap,
    WebTiledLayer,
    WMSLayer,
    WMSLayerInfo,
    Extent
  ) {
    var map = new EsriMap('map', {
      center: [0, 0],
      zoom: 3,
      basemap: 'streets',
      smartNavigation: false,
      maptiks_trackcode: '27185963-4a59-49bc-a80a-3c796a1b051b', // replace this with an actual tracking code
      maptiks_id: 'Esri 3 Map',
      maptiks_debug: true, // delete this line once you've enterd a valid tracking code above
    });

    var osmLayer = new WebTiledLayer('http://${subDomain}.tile.osm.org/${level}/${col}/${row}.png', {
      copyright: 'OpenStreetMap',
      subDomains: ['a', 'b', 'c'],
    });

    // map.addLayer(osmLayer); // optional xyz layer to track


    var cycleLayer = new WebTiledLayer('http://${subDomain}.tile.opencyclemap.org/cycle/${level}/${col}/${row}.png', {
      copyright: 'OpenCycleMap',
      id: 'OpenCycleMap',
      subDomains: ['a', 'b', 'c'],
    });

    // map.addLayer(cycleLayer); // optional xyz layer to track

    var layer1 = new WMSLayerInfo({});
    var resourceInfo = {
      extent: new Extent(-180, -90, 180, 90, {
        wkid: 4326,
      }),
      layerInfos: [layer1],
    };

    var wmsLayer = new WMSLayer('http://demo.opengeo.org/geoserver/wms?', {
      resourceInfo: resourceInfo,
      visibleLayers: ['ne:ne'],
    });

    wmsLayer.version = '1.1.1';
    wmsLayer.id = 'Natural Earth Base Map';
    // map.addLayer(wmsLayer); // optional wms layer to track
  }
);
