// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchDetails
  const statusClass = matchStatus === 'Won' ? 'won-text' : 'lost-text'
  return (
    <li className="match-item">
      <div className="details-container">
        <img
          className="won-team-banner"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p className="team-name">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={` matchStatus ${statusClass}`}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
