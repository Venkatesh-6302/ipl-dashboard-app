// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    umpires,
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,

    result,
    secondInnings,
    venue,
  } = latestMatchData
  return (
    <div className="latest-match-container">
      <div className="competing-team-details">
        <p className="competing-team-name">{competingTeam}</p>
        <p className="date">{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="competing-logo"
      />
      <div className="innings-container">
        <h2>First Innings</h2>
        <p>{firstInnings}</p>
        <h2>Second Innings</h2>
        <p>{secondInnings}</p>
        <h2>Man Of The Match</h2>
        <p>{manOfTheMatch}</p>
        <h2>Umpires</h2>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
