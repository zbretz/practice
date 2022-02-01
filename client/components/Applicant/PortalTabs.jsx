import React from 'react';
import { Tab } from 'react-bootstrap';

// Component that will render each tab
// props to pass in
// eventKey
// title
const PortalTabs = ({ eventKey, title}) => {
  return (
    <Tab eventKey={eventKey} title={title}>
      <div>
        <p>
          As fast as thou shalt wane, so fast thou grow'st, In one of thine, from that which thou departest; And that fresh blood which youngly thou bestow'st, Thou mayst call thine when thou from youth convertest, Herein lives wisdom, beauty, and increase; Without this folly, age, and cold decay: If all were minded so, the times should cease And threescore year would make the world away. Let those whom nature hath not made for store, Harsh, featureless, and rude, barrenly perish:
        </p>

      </div>
    </Tab>
  )
}

export default PortalTabs;