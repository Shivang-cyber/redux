import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addStr } from '../actions/stringAction';
import Translator from "../data/Translator";

const Translate = () => {
  const { q, source, target } = useSelector(store => store.string)
  const [val, setvalue] = useState({})

  const dispatch = useDispatch()

  const handleChange = ({ target: { value } }) => {
    dispatch(addStr({ ...val, q: value }))
  }

  const handelvalue = ({ target: { value, id } }) => {
    setvalue({ ...val, [id]: value })
  }

  const translate = () => {
    Translator({ q, source, target }).then(data => setvalue({ ...val, translated: data.translatedText }))
  }

  return (<>
    <div>translate here</div>
    <hr />
    <div>
      <i>translate from language</i>
      <select name="lang" id="source" onChange={handelvalue}>
        <option value="auto">Auto Detect</option>
        <option value="en">English</option>
        <option value="ar">Arabic</option>
        <option value="zh">Chinese</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="hi">Hindi</option>
        <option value="id">Indonesian</option>
        <option value="ga">Irish</option>
        <option value="it">Italian</option>
        <option value="ja">Japanese</option>
        <option value="ko">Korean</option>
        <option value="pl">Polish</option>
        <option value="pt">Portugese</option>
        <option value="ru">Russian</option>
        <option value="es">Spanish</option>
        <option value="tr">Turkish</option>
        <option value="vi">Vietnamese</option>
      </select>
    </div>
    <hr />

    <div>
      <i>translate to language</i>
      <select name="lang" id="target" onChange={handelvalue}>
        <option value="auto">Auto Detect</option>
        <option value="en">English</option>
        <option value="ar">Arabic</option>
        <option value="zh">Chinese</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="hi">Hindi</option>
        <option value="id">Indonesian</option>
        <option value="ga">Irish</option>
        <option value="it">Italian</option>
        <option value="ja">Japanese</option>
        <option value="ko">Korean</option>
        <option value="pl">Polish</option>
        <option value="pt">Portugese</option>
        <option value="ru">Russian</option>
        <option value="es">Spanish</option>
        <option value="tr">Turkish</option>
        <option value="vi">Vietnamese</option>
      </select>
    </div>
    <hr />

    <div>
      <input type="text" placeholder="text to translate" onChange={handleChange} />
      <button onClick={translate}>Translate</button>
      <hr />

      <h1>{val.translated}</h1>
    </div>
  </>
  )
}

export default Translate