const fetch = require("node-fetch");

function getGoogleResult(searchString) {
  try {
    let url = `https://www.googleapis.com/customsearch/v1?key=${process.env.GG_API_KEY}&cx=${process.env.CUS_SEARCH_ID}&q=${searchString}`;

    console.log(url);
    return fetch(url)
      .then(res => res.json())
      .then(body => {
        // let dataToSend = [];

        // console.log(body);

        // for (let i = 0; i < body.items; i++) {
        //   dataToSend.push(body.items[i].title);
        // }
        // console.log(dataToSend);
        return body;
      });
  } catch (e) {
    console.log(e);
  }
}

module.exports = getGoogleResult;
