import { processData } from './utilities';

const tempData = {
   "data":
   {
       "type": "gif",
       "id": "3ohze3pdoPu1xXSmmQ",
       "url": "https://giphy.com/gifs/lol-wtf-gun-3ohze3pdoPu1xXSmmQ",
       "slug": "lol-wtf-gun-3ohze3pdoPu1xXSmmQ",
       "bitly_gif_url": "https://gph.is/2o4b3vg",
       "bitly_url": "https://gph.is/2o4b3vg",
       "embed_url": "https://giphy.com/embed/3ohze3pdoPu1xXSmmQ",
       "username": "justingammon",
       "source": "justingammon.com",
       "title": "machine gun lol GIF by Justin Gammon",
       "rating": "g",
       "content_url": "",
       "source_tld": "",
       "source_post_url": "justingammon.com",
       "is_sticker": 0,
       "import_datetime": "2017-04-05 19:10:31",
       "trending_datetime": "0000-00-00 00:00:00",
       "images":
       {
           "downsized_large":
           {
               "height": "500",
               "size": "1359471",
               "url": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/giphy.gif?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=giphy.gif",
               "width": "500"
           },
           "fixed_height_small_still":
           {
               "height": "100",
               "size": "6054",
               "url": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/100_s.gif?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=100_s.gif",
               "width": "100"
           },
           "original":
           {
               "frames": "30",
               "hash": "d394875c134e1f317ff979f85dd258fa",
               "height": "500",
               "mp4": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/giphy.mp4?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=giphy.mp4",
               "mp4_size": "384829",
               "size": "1359471",
               "url": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/giphy.gif?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=giphy.gif",
               "webp": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/giphy.webp?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=giphy.webp",
               "webp_size": "466216",
               "width": "500"
           },
           "fixed_height_downsampled":
           {
               "height": "200",
               "size": "87033",
               "url": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/200_d.gif?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=200_d.gif",
               "webp": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/200_d.webp?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=200_d.webp",
               "webp_size": "52394",
               "width": "200"
           },
           "downsized_still":
           {
               "height": "500",
               "size": "71894",
               "url": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/giphy_s.gif?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=giphy_s.gif",
               "width": "500"
           },
           "fixed_height_still":
           {
               "height": "200",
               "size": "16866",
               "url": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/200_s.gif?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=200_s.gif",
               "width": "200"
           },
           "downsized_medium":
           {
               "height": "500",
               "size": "1359471",
               "url": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/giphy.gif?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=giphy.gif",
               "width": "500"
           },
           "downsized":
           {
               "height": "500",
               "size": "1359471",
               "url": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/giphy.gif?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=giphy.gif",
               "width": "500"
           },
           "preview_webp":
           {
               "height": "140",
               "size": "31274",
               "url": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/giphy-preview.webp?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=giphy-preview.webp",
               "width": "140"
           },
           "original_mp4":
           {
               "height": "480",
               "mp4": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/giphy.mp4?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=giphy.mp4",
               "mp4_size": "384829",
               "width": "480"
           },
           "fixed_height_small":
           {
               "height": "100",
               "mp4": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/100.mp4?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=100.mp4",
               "mp4_size": "21897",
               "size": "102314",
               "url": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/100.gif?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=100.gif",
               "webp": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/100.webp?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=100.webp",
               "webp_size": "38784",
               "width": "100"
           },
           "fixed_height":
           {
               "height": "200",
               "mp4": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/200.mp4?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=200.mp4",
               "mp4_size": "53555",
               "size": "304022",
               "url": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/200.gif?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=200.gif",
               "webp": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/200.webp?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=200.webp",
               "webp_size": "106632",
               "width": "200"
           },
           "downsized_small":
           {
               "height": "300",
               "mp4": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/giphy-downsized-small.mp4?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=giphy-downsized-small.mp4",
               "mp4_size": "46765",
               "width": "300"
           },
           "preview":
           {
               "height": "200",
               "mp4": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/giphy-preview.mp4?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=giphy-preview.mp4",
               "mp4_size": "21127",
               "width": "200"
           },
           "fixed_width_downsampled":
           {
               "height": "200",
               "size": "88727",
               "url": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/200w_d.gif?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=200w_d.gif",
               "webp": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/200w_d.webp?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=200w_d.webp",
               "webp_size": "52454",
               "width": "200"
           },
           "fixed_width_small_still":
           {
               "height": "100",
               "size": "6057",
               "url": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/100w_s.gif?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=100w_s.gif",
               "width": "100"
           },
           "fixed_width_small":
           {
               "height": "100",
               "mp4": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/100w.mp4?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=100w.mp4",
               "mp4_size": "21897",
               "size": "104534",
               "url": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/100w.gif?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=100w.gif",
               "webp": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/100w.webp?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=100w.webp",
               "webp_size": "38774",
               "width": "100"
           },
           "original_still":
           {
               "height": "500",
               "size": "71894",
               "url": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/giphy_s.gif?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=giphy_s.gif",
               "width": "500"
           },
           "fixed_width_still":
           {
               "height": "200",
               "size": "16883",
               "url": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/200w_s.gif?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=200w_s.gif",
               "width": "200"
           },
           "looping":
           {
               "mp4": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/giphy-loop.mp4?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=giphy-loop.mp4",
               "mp4_size": "4210561"
           },
           "fixed_width":
           {
               "height": "200",
               "mp4": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/200w.mp4?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=200w.mp4",
               "mp4_size": "53555",
               "size": "313352",
               "url": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/200w.gif?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=200w.gif",
               "webp": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/200w.webp?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=200w.webp",
               "webp_size": "106950",
               "width": "200"
           },
           "preview_gif":
           {
               "height": "133",
               "size": "49057",
               "url": "https://media3.giphy.com/media/3ohze3pdoPu1xXSmmQ/giphy-preview.gif?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=giphy-preview.gif",
               "width": "133"
           },
           "480w_still":
           {
               "url": "https://media0.giphy.com/media/3ohze3pdoPu1xXSmmQ/480w_s.jpg?cid=407373957995716f3358e4b0139f82e487c6b0a738765b49&rid=480w_s.jpg",
               "width": "480",
               "height": "480"
           }
       },
       "user":
       {
           "avatar_url": "https://media1.giphy.com/avatars/justingammon/nrzu32utGd40.gif",
           "banner_url": "https://media1.giphy.com/headers/justingammon/ZswkeJb1qaH3.jpg",
           "banner_image": "https://media1.giphy.com/headers/justingammon/ZswkeJb1qaH3.jpg",
           "profile_url": "https://giphy.com/justingammon/",
           "username": "justingammon",
           "display_name": "Justin Gammon",
           "is_verified": true
       }
   },
   "meta":
   {
       "status": 200,
       "msg": "OK",
       "response_id": "7995716f3358e4b0139f82e487c6b0a738765b49"
   }
};

const placeholderGIF = processData(tempData);

export { placeholderGIF };