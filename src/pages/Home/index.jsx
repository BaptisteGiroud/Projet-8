import '../../styles/home.scss'
import HomeCover from '../../assets/home_cover.png'
import Card from '../../components/Card/index.jsx'
import { AppartmentsList } from '../../datas/logements.js'

function Home() {
  return (
    <div className="home-content">
      <div className="home-content__band-home">
        <h1 className="home-content__band-home__txt">
          Chez vous, partout et ailleurs
        </h1>
        <img src={HomeCover} alt="Paysage pour couverture d'accueil" />
      </div>
      <div className="home-content__appartments">
        {AppartmentsList.map(({ id, cover, title }) => (
          <Card key={id} cover={cover} title={title} id={id} />
        ))}
      </div>
    </div>
  )
}

export default Home
