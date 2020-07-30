import { StatelessComponent, useState } from 'react'
import { Waterpoint, DatasourceProps } from '../libs/data-types'
import ReactMapGL, { Source, Layer, LayerProps } from 'react-map-gl'
import { WaterpointPopup } from '../components/MapPopup'

const layerProps: LayerProps = {
  id: 'waterpoint',
  type: 'circle',
  paint: {
    'circle-color': '#11b4da',
    'circle-radius': 4,
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff',
  },
}

const UnclusteredMap: StatelessComponent<DatasourceProps> = ({
  source,
  latitude,
  longitude,
  zoom,
  width,
  height,
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
      width={width}
      height={height}
      mapStyle="mapbox://styles/mapbox/light-v10"
      mapboxApiAccessToken={mapboxToken}
      {...args}
      interactiveLayerIds={['waterpoint']}
      onViewportChange={(v) =>
        setViewport({
          latitude: v.latitude,
          longitude: v.longitude,
          zoom: v.zoom,
        })
      }
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
      <Source type="geojson" data={source}>
        <Layer {...layerProps} />
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

export default UnclusteredMap
