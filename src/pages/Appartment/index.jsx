import '../../styles/appartment.scss'
import Colaps from '../../components/Collapse/index.jsx'
import Error from '../Error/index.jsx'
import Carousel from '../../components/Carousel/index.jsx'
import { useParams } from 'react-router-dom'
import { AppartmentsList } from '../../datas/logements.js'

function Appartment() {
  const { id } = useParams()
  const appartmentData = AppartmentsList.find(
    (appartment) => appartment.id === id
  )
  console.log(appartmentData.pictures[0])
  console.log(appartmentData.title)

  if (!appartmentData) {
    return <Error />
  } else {
    return (
      <div className="section">
        <div className="band-appartment">
          <Carousel
            source={appartmentData.pictures[0]}
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
              <div className="profil__rate">Stars</div>
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
