import config from './config';

/**
 * Build fetchUrl. (Limiting responses to PG-13 and under ratings
 * ...because I'm not sure who might see this...)
 * @param searchTerm, user entered search term.
 * @param weirdness, user entered weirdness value.
 * @return the composed url for Giphy's translate 
 * endpoint including query string and weirdness.
 */
const buildFetchURL = (searchTerm, weirdness) => {
    return `${config.API_ENDPOINT}?api_key=${config.API_KEY}&s=${searchTerm}&weirdness=${weirdness}&rating=pg-13`;
}

/**
 * Handle errors from api call.
 * @param response, response from api call
 * @return if response was resolved successfully, response
 * is returned; if response was rejected an error is thrown.
 */
const handleServerErrors = (response) => {
    if (!response.ok) {
      throw new Error (response.statusText)
    }
    return response; 
};

/**
 * Handle nothing found (404) from api call.
 * @param json, json object from api call
 * @return if jason.data is an empty array, there were no results,
 * so an erro is thrown; if the array has length (i.e. results) 
 * return the json object.
 */
const handle404Errors = (json) => {
    if (json.data.length === 0) {
        throw new Error ("No results. Please try another search term.")
    }
    return json;
}

/**
 * Getting original and fixed width webp for desktop apps using Chrome 
 * browsers as recommended by Giphy: https://developers.giphy.com/docs/optional-settings#rendition-guide 
 * Original size will be used in the GiphyResult component and fixed_width will be 
 * used in the Favorites and ResultsFavorites components.
 * @param data, json data from the api response
 * @return giphyObject, just the data needed for this app 
 */
  const processData = (data) => {
    return {
      title: data.data.title,
      largeUrl: data.data.images.original.webp,
      largeWidth: data.data.images.original.width,
      largeHeight: data.data.images.original.height,
      smallUrl: data.data.images.fixed_width.webp,
      smallWidth: data.data.images.fixed_width.width,
      smallHeight: data.data.images.fixed_width.height
    }
  }

/**
 * Convert uppercase title to title case.
 * @param title from book information
 * @return title in titlecase
 */
const toTitleCase = (title) => {
    let titleLowercase = title.toLowerCase();
    const titleCaseArray = titleLowercase.split(" ").map(word => 
            `${word[0].toUpperCase()}${word.slice(1)}`);
    return titleCaseArray.join(" ");
};



export { buildFetchURL, handleServerErrors, handle404Errors, processData, toTitleCase };
