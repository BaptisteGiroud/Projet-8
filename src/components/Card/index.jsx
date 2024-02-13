import { Link } from 'react-router-dom'
import '../../styles/card.scss'

function Card({ cover, title, id }) {
  return (
    <Link to={`/appartement/${id}`}>
      <div className="card">
        <img src={cover} alt={`${title} couverture`} />
        <div className="card__text">
          <p>{title}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
