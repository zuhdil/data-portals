import { StatelessComponent, useState } from 'react'
import { Waterpoint, DatasourceProps } from '../libs/data-types'
import ReactMapGL, { Source, Layer, LayerProps } from 'react-map-gl'
import { WaterpointPopup } from '../components/MapPopup'

const clusterLayer: LayerProps = {
  id: 'clusters',
  type: 'circle',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': [
      'step',
      ['get', 'point_count'],
      '#51bbd6',
      100,
      '#f1f075',
      750,
      '#f28cb1',
    ],
    'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],
  },
}
const clusterCountLayer: LayerProps = {
  id: 'cluster-count',
  type: 'symbol',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    'text-size': 12,
  },
  paint: {},
}
const unclusteredPointLayer: LayerProps = {
  id: 'unclustered-point',
  type: 'circle',
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-color': '#11b4da',
    'circle-radius': 4,
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff',
  },
}

const ClusteredMap: StatelessComponent<DatasourceProps> = ({
  source,
  latitude,
  longitude,
  zoom,
  mapboxToken,
  ...args
}) => {
  const [viewport, setViewport] = useState({
    longitude,
    latitude,
    zoom,
  })
  const [waterpointInfo, setWaterpointInfo] = useState<Waterpoint | null>()

  return (
    <ReactMapGL
      {...viewport}
      width=""
      height=""
      mapboxApiAccessToken={mapboxToken}
      mapStyle="mapbox://styles/mapbox/light-v10"
      {...args}
      onViewportChange={(v) =>
        setViewport({
          latitude: v.latitude,
          longitude: v.longitude,
          zoom: v.zoom,
        })
      }
      interactiveLayerIds={['unclustered-point']}
      onClick={
        /* istanbul ignore next */ (event) => {
          if (!event.features.length) {
            setWaterpointInfo(null)
            return
          }
          const props = event.features[0].properties
          setWaterpointInfo({
            longitude: event.lngLat[0],
            latitude: event.lngLat[1],
            region: props.region,
            cercle: props.cercle,
            commune: props.commune,
            village: props.village,
            waterpointType: props.type_pe,
            isPublic: !!props.public,
            functionality: props.fonctionnalit_,
            date: props.date_collecte,
            photo: props.photo,
          })
        }
      }
    >
      <Source
        type="geojson"
        data={source}
        cluster={true}
        clusterMaxZoom={14}
        clusterRadius={50}
      >
        <Layer {...clusterLayer} />
        <Layer {...clusterCountLayer} />
        <Layer {...unclusteredPointLayer} />
      </Source>
      {
        /* istanbul ignore next */ waterpointInfo && (
          <WaterpointPopup
            {...waterpointInfo}
            onClose={() => setWaterpointInfo(null)}
          />
        )
      }
    </ReactMapGL>
  )
}

export default ClusteredMap
