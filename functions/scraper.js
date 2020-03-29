import cheerio from 'cheerio';
import axios from 'axios';

export async function handler(event, context) {
  const url = decodeURIComponent(event.queryStringParameters.url);

  return axios.get(url).then((response) => {
    const $ = cheerio.load(response.data);

    return $("title").text(); 
  })
  .then(data => ({
    statusCode: 200,
    headers: {'Content-Type': 'text/html;charset=utf-8'},
    body: data
  }))
  .catch(error => ({ statusCode: 422, body: String(error) }));
}