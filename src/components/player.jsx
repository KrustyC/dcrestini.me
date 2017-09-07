const Player = (props) => {
  const player = {
    name: 'dybala',
    number: '10',
    position: 'attacker',
  }
  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>{player.position}</h2>
    </div>
)

  export default Player