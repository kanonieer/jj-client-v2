import {} from '@types/googlemaps';

export const mapStyles: google.maps.MapTypeStyle[] = [
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ff0000'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffffff'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#000000'
      }
    ]
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#000000'
      }
    ]
  },
  {
    featureType: 'administrative.province',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#292929'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#333f4b'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ff0000'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        color: '#333f4b'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffffff'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#3a3a3a'
      }
    ]
  },
  {
    featureType: 'poi.attraction',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2c333b'
      }
    ]
  },
  {
    featureType: 'poi.business',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ff0000'
      },
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi.government',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ff0000'
      },
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi.medical',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#25313d'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#434f5c'
      }
    ]
  },
  {
    featureType: 'poi.place_of_worship',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ff0000'
      },
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi.school',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ff0000'
      },
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi.sports_complex',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#263849'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        color: '#969da5'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffffff'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#303030'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        color: '#251e3a'
      },
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ff0000'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ff0000'
      }
    ]
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'labels.icon',
    stylers: [
      {
        color: '#ff0000'
      },
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffffff'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffffff'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'labels.icon',
    stylers: [
      {
        color: '#ff0000'
      }
    ]
  },
  {
    featureType: 'transit.station.airport',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2e353c'
      }
    ]
  },
  {
    featureType: 'transit.station.airport',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffffff'
      }
    ]
  },
  {
    featureType: 'transit.station.airport',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#000000'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#a8afb7'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#070707'
      }
    ]
  }
];
