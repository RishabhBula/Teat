// import { pronouns } from '../../data/pronouns'
import './index.scss'

const TextArea = ({words,setWords, setWordsLength, setCharLength, setSentLength, setParaLength, setlongestWord}:any) => {

  return <textarea className="text-area" value={words} onChange={(e:any) => {
    setWords(e.target.value)
    setWordsLength(e.target.value.split(' ').length)
    setCharLength(e.target.value.length)
    const sent = e.target.value.split('.')
    const para = e.target.value.split('\n')
    const wordsLength  = e.target.value.split(' ')
    // const pronounsLength = pronouns
    // const res = pronounsLength.map((el1:any) => ({
    //   name: el1,
    //   match: wordsLength.some((el2:any) => (el2).toLowerCase() == (el1).toLowerCase()),
    // }))
    var longestWord = wordsLength.sort(function(a:any, b:any) { 
      return b.length - a.length;
    });
    setlongestWord(longestWord[0])
    setSentLength(sent.length)
    setParaLength(para.length)
    
  }} placeholder="Paste your text here..." />
}

export default TextArea
