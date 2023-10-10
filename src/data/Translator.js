import axios from 'axios'

 
const Translator = async ({ q, source, target }) => {
  const url = 'https://libretranslate.de/translate';
  const body = {
   q:q,
   source: source,
   target: target
  };

  try {
   const response = await axios.post(url, body);

   if (response.status !== 200) {
    throw new Error(`HTTP error! status: ${response.status}`);
   }

   return response.data;
  } catch (error) {
   console.error('Error:', error);
  }
 };



export default Translator