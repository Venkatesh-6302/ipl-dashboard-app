// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageURL} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="team-link">
      <li className="team-item-container">
        <img className="team-img" alt={name} src={teamImageURL} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
