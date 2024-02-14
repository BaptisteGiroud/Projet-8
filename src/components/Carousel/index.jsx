import '../../styles/carousel.scss'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { useState } from 'react'

function Carousel({ source, title }) {
  let indexMax = source.length
  let [activeIndex, setActiveIndex] = useState(0)

  let movedLeft = () => {
    setActiveIndex((index) => (index === 0 ? source.length - 1 : index - 1))
  }
  let movedRight = () => {
    setActiveIndex((index) => (index === source.length - 1 ? 0 : index + 1))
  }

  return (
    <div className="carousel">
      {source.length > 1 ? (
        <div className="carousel__nav">
          <img
            onClick={movedLeft}
            className="leftArrow"
            src={leftArrow}
            alt="Fleche de navigation de gauche"
          />
          <img
            onClick={movedRight}
            className="rightArrow"
            src={rightArrow}
            alt="Fleche de navigation de droite"
          />
          <div className="index">
            <p>
              {parseInt(activeIndex + 1)}/{indexMax}
            </p>
          </div>
        </div>
      ) : (
        ''
      )}

      <img
        className="carousel__pictures"
        src={source[activeIndex]}
        alt={`Bandeau pour ${title}`}
      />
    </div>
  )
}

export default Carousel
