import { useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'

const App = () => {
  const [words, setWords] = useState()
  const [wordsLength, setWordsLength] = useState(0)
  const [charLength, setCharLength] = useState(0)
  const [sentLength, setSentLength] = useState(0)
  const [paraLength, setParaLength] = useState(0)
  const [longestWord, setlongestWord] = useState()
  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox wordsLength={wordsLength} charLength={charLength} sentLength={sentLength} paraLength={paraLength} longestWord={longestWord} />
          <TextArea words={words} setWords={setWords} setWordsLength={setWordsLength} setCharLength={setCharLength}
          setlongestWord={setlongestWord} setParaLength={setParaLength} setSentLength={setSentLength} />
          <BottomResultBox longestWord={longestWord}/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App