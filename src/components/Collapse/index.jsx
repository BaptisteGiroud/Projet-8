import '../../styles/colaps.scss'
import React, { useState } from 'react'
import angleDown from '../../assets/angleDown.png'
import angleUp from '../../assets/angleUp.png'

function Colaps({ title_collapse, content_collapse }) {
  let [displayCollapse, setDisplay] = useState(false)
  let [buttonCollapse, setButton] = useState(angleUp)

  let toggleCollapse = () => {
    if (displayCollapse === false) {
      setDisplay(true)
      setButton(angleDown)
    } else {
      setDisplay(false)
      setButton(angleUp)
    }
  }

  let toogleAnimation = displayCollapse ? 'collapseExpend' : 'collapseHidden'

  return (
    <div className="collapse">
      <div className="collapse__title">
        <h3>{title_collapse}</h3>
        <img
          onClick={toggleCollapse}
          src={buttonCollapse}
          alt="Bouton ouvrir ou fermer"
        />
      </div>
      <div className={`collapse__content ${toogleAnimation}`}>
        {content_collapse}
      </div>
    </div>
  )
}

export default Colaps
