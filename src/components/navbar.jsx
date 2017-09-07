import { Link } from 'react-router-dom'

const Navbar = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
      </ul>
    </nav>
  </header>
)