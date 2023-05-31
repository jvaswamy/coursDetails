import {Link} from 'react-router-dom'
import {HeaderContainer, ResponsiveHeader, HeaderImg} from './styledComponent'

const Header = () => (
  <HeaderContainer>
    <ResponsiveHeader>
      <Link to="/">
        <HeaderImg
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
        />
      </Link>
    </ResponsiveHeader>
  </HeaderContainer>
)

export default Header
