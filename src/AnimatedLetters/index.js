import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>{char}</span>
      ))}
    </span>
  )
}

export default AnimatedLetters