import '../../styles/footer.scss'
import logo from '../../assets/logo_footer.svg'

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="Logo Kasa"></img>
      <p>© 2020 Kasa, All rights reserved</p>
    </div>
  )
}

export default Footer
