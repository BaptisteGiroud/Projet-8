import '../../styles/about.scss'
import HomeCover from '../../assets/about_cover.png'
import Colaps from '../../components/Collapse'

const fiability = {
  title: 'Fiabilité',
  content:
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
}
const respect = {
  title: 'Respect',
  content:
    'La bienveillance fait partie des valeurs fondatrices de Kase. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une explusion de notre plateforme.',
}
const service = {
  title: 'Service',
  content:
    'La bienveillance fait partie des valeurs fondatrices de Kase. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une explusion de notre plateforme.',
}
const security = {
  title: 'Sécurité',
  content:
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
}

function Apropos() {
  return (
    <div className="about-content">
      <div className="band-about">
        <img src={HomeCover} alt="Paysage pour couverture de à propos"></img>
      </div>
      <div className="colaps__box">
        <Colaps
          title_collapse={fiability.title}
          content_collapse={<p>{fiability.content}</p>}
        />
        <Colaps
          title_collapse={respect.title}
          content_collapse={<p>{respect.content}</p>}
        />
        <Colaps
          title_collapse={service.title}
          content_collapse={<p>{service.content}</p>}
        />
        <Colaps
          title_collapse={security.title}
          content_collapse={<p>{security.content}</p>}
        />
      </div>
    </div>
  )
}

export default Apropos
