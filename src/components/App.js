import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import MainContent from './MainContent';
import Results from './Results';
import NotFoundPage from './NotFoundPage';
import Footer from './Footer';
import '../css/App.css';

/* I'm using class components instead of function components with hooks 
  because I'm learning Redux for this challenge, and I've only just learned hooks.
  So, it seemed safer and more expedient to hold one of the variables still
  (i.e., use class components with Redux). */


  const staticData = {
    "data":
    {
        "type": "gif",
        "id": "mwe7Mjq4m3O1O",
        "url": "https://giphy.com/gifs/theboxtrolls-the-boxtrolls-time-to-send-evil-packing-mwe7Mjq4m3O1O",
        "slug": "theboxtrolls-the-boxtrolls-time-to-send-evil-packing-mwe7Mjq4m3O1O",
        "bitly_gif_url": "https://gph.is/1qcjcVg",
        "bitly_url": "https://gph.is/1qcjcVg",
        "embed_url": "https://giphy.com/embed/mwe7Mjq4m3O1O",
        "username": "theboxtrolls",
        "source": "https://www.boxtrollsbegone.com/post/93918692184/special-delivery-did-someone-order-some-justice",
        "title": "stop-motion animation GIF by The Boxtrolls",
        "rating": "pg",
        "content_url": "",
        "source_tld": "www.boxtrollsbegone.com",
        "source_post_url": "https://www.boxtrollsbegone.com/post/93918692184/special-delivery-did-someone-order-some-justice",
        "is_sticker": 0,
        "import_datetime": "2014-08-05 23:56:48",
        "trending_datetime": "1970-01-01 00:00:00",
        "images":
        {
            "downsized_large":
            {
                "height": "305",
                "size": "1953103",
                "url": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/giphy.gif?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=giphy.gif",
                "width": "500"
            },
            "fixed_height_small_still":
            {
                "height": "100",
                "size": "9420",
                "url": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/100_s.gif?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=100_s.gif",
                "width": "164"
            },
            "original":
            {
                "frames": "33",
                "hash": "71120343b227dea2d93fb191e2102a1a",
                "height": "305",
                "mp4": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/giphy.mp4?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=giphy.mp4",
                "mp4_size": "228852",
                "size": "1953103",
                "url": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/giphy.gif?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=giphy.gif",
                "webp": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/giphy.webp?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=giphy.webp",
                "webp_size": "484898",
                "width": "500"
            },
            "fixed_height_downsampled":
            {
                "height": "200",
                "size": "152325",
                "url": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/200_d.gif?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=200_d.gif",
                "webp": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/200_d.webp?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=200_d.webp",
                "webp_size": "86740",
                "width": "328"
            },
            "downsized_still":
            {
                "height": "305",
                "size": "30907",
                "url": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/giphy-downsized_s.gif?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=giphy-downsized_s.gif",
                "width": "500"
            },
            "fixed_height_still":
            {
                "height": "200",
                "size": "28510",
                "url": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/200_s.gif?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=200_s.gif",
                "width": "328"
            },
            "downsized_medium":
            {
                "height": "305",
                "size": "1953103",
                "url": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/giphy.gif?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=giphy.gif",
                "width": "500"
            },
            "downsized":
            {
                "height": "305",
                "size": "960590",
                "url": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/giphy-downsized.gif?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=giphy-downsized.gif",
                "width": "500"
            },
            "preview_webp":
            {
                "height": "100",
                "size": "31064",
                "url": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/giphy-preview.webp?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=giphy-preview.webp",
                "width": "164"
            },
            "original_mp4":
            {
                "height": "292",
                "mp4": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/giphy.mp4?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=giphy.mp4",
                "mp4_size": "228852",
                "width": "480"
            },
            "fixed_height_small":
            {
                "height": "100",
                "mp4": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/100.mp4?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=100.mp4",
                "mp4_size": "24444",
                "size": "218374",
                "url": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/100.gif?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=100.gif",
                "webp": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/100.webp?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=100.webp",
                "webp_size": "62392",
                "width": "164"
            },
            "fixed_height":
            {
                "height": "200",
                "mp4": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/200.mp4?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=200.mp4",
                "mp4_size": "79785",
                "size": "792374",
                "url": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/200.gif?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=200.gif",
                "webp": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/200.webp?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=200.webp",
                "webp_size": "182368",
                "width": "328"
            },
            "downsized_small":
            {
                "height": "256",
                "mp4": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/giphy-downsized-small.mp4?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=giphy-downsized-small.mp4",
                "mp4_size": "56882",
                "width": "421"
            },
            "preview":
            {
                "height": "128",
                "mp4": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/giphy-preview.mp4?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=giphy-preview.mp4",
                "mp4_size": "17582",
                "width": "210"
            },
            "fixed_width_downsampled":
            {
                "height": "122",
                "size": "58247",
                "url": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/200w_d.gif?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=200w_d.gif",
                "webp": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/200w_d.webp?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=200w_d.webp",
                "webp_size": "35448",
                "width": "200"
            },
            "fixed_width_small_still":
            {
                "height": "61",
                "size": "3814",
                "url": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/100w_s.gif?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=100w_s.gif",
                "width": "100"
            },
            "fixed_width_small":
            {
                "height": "61",
                "mp4": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/100w.mp4?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=100w.mp4",
                "mp4_size": "10664",
                "size": "100567",
                "url": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/100w.gif?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=100w.gif",
                "webp": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/100w.webp?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=100w.webp",
                "webp_size": "29292",
                "width": "100"
            },
            "original_still":
            {
                "height": "305",
                "size": "77936",
                "url": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/giphy_s.gif?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=giphy_s.gif",
                "width": "500"
            },
            "fixed_width_still":
            {
                "height": "122",
                "size": "14957",
                "url": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/200w_s.gif?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=200w_s.gif",
                "width": "200"
            },
            "looping":
            {
                "mp4": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/giphy-loop.mp4?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=giphy-loop.mp4",
                "mp4_size": "1853771"
            },
            "fixed_width":
            {
                "height": "122",
                "mp4": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/200w.mp4?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=200w.mp4",
                "mp4_size": "32762",
                "size": "314710",
                "url": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/200w.gif?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=200w.gif",
                "webp": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/200w.webp?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=200w.webp",
                "webp_size": "83258",
                "width": "200"
            },
            "preview_gif":
            {
                "height": "51",
                "size": "46188",
                "url": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/giphy-preview.gif?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=giphy-preview.gif",
                "width": "84"
            },
            "480w_still":
            {
                "url": "https://media2.giphy.com/media/mwe7Mjq4m3O1O/480w_s.jpg?cid=407373953d23bbcd565dab6b56e756f8e3b8ad188ca72447&rid=480w_s.jpg",
                "width": "480",
                "height": "293"
            }
        },
        "user":
        {
            "avatar_url": "https://media4.giphy.com/avatars/theboxtrolls/Mv2ZAYmV4Yfs.jpg",
            "banner_image": "https://media4.giphy.com/headers/theboxtrolls/RsHfOMe7xJTl.jpg",
            "banner_url": "https://media4.giphy.com/headers/theboxtrolls/RsHfOMe7xJTl.jpg",
            "profile_url": "https://giphy.com/theboxtrolls/",
            "username": "theboxtrolls",
            "display_name": "The Boxtrolls",
            "is_verified": true
        }
    },
    "meta":
    {
        "status": 200,
        "msg": "OK",
        "response_id": "3d23bbcd565dab6b56e756f8e3b8ad188ca72447"
    }
  };

  //staticData = JSON.parse(staticData);

  // Getting original and fixed width webp for desktop apps using Chrome 
  // browsers as recommended by Giphy: https://developers.giphy.com/docs/optional-settings#rendition-guide
  // Original size will be used in the GiphyResult component and fixed_width will be 
  // used in the Favorites and ResultsFavorites components.
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

  const tempData = processData(staticData);

  const emptyData = {
    "data":
    [
    ],
    "meta":
    {
        "status": 200,
        "msg": "OK",
        "response_id": "466be7a7c83e5979bb5e7cfcbb9fcea8b75b3fae"
    }
 };

 
 const tempFavorite = {
   ...tempData,
   weirdness: 3
 };

export default class App extends React.Component {

  state = {
    inputValue: '',
    searchTerm: '',
    weirdness: 0,
    //giphyObject: {},
    favorites: [tempFavorite, tempFavorite, tempFavorite, tempFavorite, tempFavorite], 
    isLoading: false,
    error: null
  };

  

  handleSubmitSearch = (e) => {
    e.preventDefault();
    this.setState({
      searchTerm: this.state.inputValue
    });
  }

  handleChangeInputValue = (inputValue) => {
    this.setState({
      inputValue
    });
  }

  handleClickAddToFavorites = (giphyObject) => {
    console.log('handleClickAddToFavorites ran');
    
    // Add weirdness value from state to giphyObject
    const newFavorite = {
      ...giphyObject,
      weirdness: this.state.weirdness
    };

    
  
    
    // Add newFavorite to favorites list from state.
   /*  const newfavorites = [
      ...this.state.favorites,
      newFavorite
    ]; */
    
    // Add new favorite and update state with new favorites list.
 /*    this.setState({
      favorites: [
        ...this.state.favorites,
        newFavorite
      ]
    }); */
  }

  handleWeirdnessChange = (weirdness) => {
    this.setState({
      weirdness
    });
  }

  // TODO: componentDidMount() { add fetch async/await}
  // be sure to handle server errors from fetch, but also
  // handle 404 errors from giphy which are returned as status ok 200,
  // but with a blank array as the data { data: []}. Check for and handle 
  // empty arrary as no results found for a given search word. 
  
  render() {
    return (
      <div className="App">
        
        <Header />

        <Switch>
          <Route 
            exact
            path="/"
            render={ () => 
              <MainContent
                giphyObject={tempData}
                handleSubmitSearch={this.handleSubmitSearch}
                handleChangeInputValue={this.handleChangeInputValue}
                inputValue={this.state.inputValue}
                handleClickAddToFavorites={this.handleClickAddToFavorites}
                favorites={this.state.favorites}
                weirdness={this.state.weirdness}
                handleWeirdnessChange={this.handleWeirdnessChange}
                /*isLoading={this.state.isLoading}
                error={this.state.error} */
              />
            }
          />

          <Route 
            path="/results"
            render={ () => 
              <Results 
                favorites={this.state.favorites}
              />
            }
          />

          <Route component={NotFoundPage} />
        </Switch>

        <Footer />

      </div>
    );
  }
}

