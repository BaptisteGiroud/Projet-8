import '../../styles/appartment.scss'
import Colaps from '../../components/Collapse/index.jsx'
import Error from '../Error/index.jsx'
import Carousel from '../../components/Carousel/index.jsx'
import { useParams } from 'react-router-dom'
import { AppartmentsList } from '../../datas/logements.js'
import star from '../../assets/star.png'
import starGrey from '../../assets/star-grey.png'

function Appartment() {
  const { id } = useParams()
  const appartmentData = AppartmentsList.find(
    (appartment) => appartment.id === id
  )

  /** Génération des stars */
  // let generateStarts = () => {
  //   let html = ''
  //   for (let i = 1; i <= 5; i++) {
  //     let rating = parseInt(appartmentData.rating)

  //     if (i <= rating) {
  //       html += `<li><img src="${star}" alt="Etoile pleine" /></li>`
  //     } else {
  //       html += `<li><img src="${starGrey}" alt="Etoile vide" /></li>`
  //     }
  //   }
  //   return (
  //     <ul
  //       className={'profil__rate'}
  //       dangerouslySetInnerHTML={{ __html: html }}
  //     />
  //   )
  // }

  let generateStarts = () => {
    let html = []
    let rating = parseInt(appartmentData.rating)

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        html.push(
          <li key={i}>
            <img src={star} alt="Etoile pleine" />
          </li>
        )
      } else {
        html.push(
          <li key={i}>
            <img src={starGrey} alt="Etoile vide" />
          </li>
        )
      }
    }

    return <ul className={'profil__rate'}>{html}</ul>
  }

  /** Recupération des data de l'appartement */

  if (!appartmentData) {
    return <Error />
  } else {
    return (
      <div className="section">
        <div className="band-appartment">
          <Carousel
            source={appartmentData.pictures}
            title={appartmentData.title}
          />
        </div>
        <div className="details">
          <div className="details__infos">
            <div>
              <h2>{appartmentData.title}</h2>
              <p>{appartmentData.location}</p>
              <div className="tag">
                <ul>
                  {appartmentData.tags.map((tags, index) => (
                    <li key={index}>{tags}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="profil">
              <div className="profil__host">
                <p>{appartmentData.host.name}</p>
                <img src={appartmentData.host.picture} alt="Profil de l'hôte" />
              </div>
              {generateStarts()}
            </div>
          </div>
          <div className="details__collapse">
            <div className="details__collapse__description">
              <Colaps
                title_collapse="Description"
                content_collapse={appartmentData.description}
              />
            </div>
            <div className="details__collapse__equipment">
              <Colaps
                title_collapse="Équipements"
                content_collapse={
                  <ul>
                    {appartmentData.equipments.map((equipment, index) => (
                      <li key={index}>{equipment}</li>
                    ))}
                  </ul>
                }
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Appartment
