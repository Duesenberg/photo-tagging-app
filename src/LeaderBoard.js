import PlayersList from "./components/PlayersList";

export default function LeaderBoard ({ db }) {
  return(
    <div>
      Hello from LeaderBoard
      <PlayersList db={db} />
    </div>
  )
}
