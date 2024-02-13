import '../../styles/carousel.scss'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

function Carousel({ source, title }) {
  let i = 0
  let indexMax = source.lenght
  let indexActive = source[i]
  console.log(indexMax)
  console.log(indexActive)

  return (
    <div className="carousel">
      {source.lenght !== 0 ? (
        <div className="carousel__nav">
          <img
            className="leftArrow"
            src={leftArrow}
            alt="Fleche de navigation de gauche"
          />
          <img
            className="rightArrow"
            src={rightArrow}
            alt="Fleche de navigation de droite"
          />
          <div className="index">
            <p>
              {indexActive}/{indexMax}
            </p>
          </div>
        </div>
      ) : (
        ''
      )}

      <img
        className="carousel__pictures"
        src={source}
        alt={`Bandeau pour ${title}`}
      />
    </div>
  )
}

export default Carousel
