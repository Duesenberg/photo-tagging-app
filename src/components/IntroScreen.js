export default function IntroScreen ({ toggleGameStarted }) {
  return(
    <div className="intro-screen">
      <p>Hello from IntroScreen. OK to start</p>
      <button onClick={toggleGameStarted}>OK</button>
    </div>
  )
}