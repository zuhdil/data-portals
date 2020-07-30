import { StatelessComponent } from 'react'
import { Popup } from 'react-map-gl'
import { Waterpoint } from '../libs/data-types'

export type WaterpointPopupProps = Waterpoint & { onClose: () => void }

export const WaterpointPopup: StatelessComponent<WaterpointPopupProps> = /* istanbul ignore next */ (
  props
) => {
  return (
    <Popup
      latitude={props.latitude}
      longitude={props.longitude}
      onClose={props.onClose}
    >
      <img width="200px" src={props.photo} />
      <dl>
        <dt>
          <h4>Region</h4>
        </dt>
        <dd>{props.region}</dd>
        <dt>
          <h4>Cercle</h4>
        </dt>
        <dd>{props.cercle}</dd>
        <dt>
          <h4>Commune</h4>
        </dt>
        <dd>{props.commune}</dd>
        <dt>
          <h4>Village</h4>
        </dt>
        <dd>{props.village}</dd>
      </dl>
    </Popup>
  )
}
