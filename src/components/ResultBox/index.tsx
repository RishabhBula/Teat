import './index.scss'

const ResultBox = ({ wordsLength, charLength, sentLength, paraLength }: any) => {
  const resultBar = [
    {
      title: 'Words',
      value: wordsLength ? wordsLength : 0,
    },
    {
      title: 'Characters',
      value: charLength ? charLength : 0,
    },
    {
      title: 'Sentences',
      value: sentLength ? sentLength : 0,
    },
    {
      title: 'Paragraphs ',
      value: paraLength ? paraLength : 0,
    },
    {
      title: 'Pronouns',
      value: 0,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
