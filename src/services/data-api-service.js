import config from '../components/config';


const fetchData = async (searchTerm, weirdness) => {
      
    const fetchURL = `${config.API_ENDPOINT}?api_key=${config.API_KEY}&s=${searchTerm}&weirdness=${weirdness}`;

    this.setState({
      isLoading: true
    });

    try {
      
      const response = await fetch(fetchURL);
      const json = await response.json();
      const data = await handle404Errors(json);
      this.setState({
        giphyObject: data,
        isLoading: false
        // add error: null here????
      });
    
    } catch (error) {
      this.setState({
        error
      });
    }
  } 



export { fetchData };