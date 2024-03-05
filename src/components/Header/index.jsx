import { Link } from 'react-router-dom'

function Header() {
   return (
      <nav>
         <Link to="/">Accueil</Link>
         <Link to="/survey/10">Questionnaire</Link>
      </nav>
   )
}

export default Header
