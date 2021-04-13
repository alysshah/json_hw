let contentGridElement = document.getElementById("contentGrid");

let jsonDatabase = [
  {
    "artist": "The 1975",
    "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/PHHt9o11.jpg/440px-PHHt9o11.jpg",
    "spotify": "https://open.spotify.com/embed/artist/3mIj9lX2MWuHmhNCA7LSCW"
  },
  {
    "artist": "The Strokes",
    "pic": "https://static01.nyt.com/images/2020/04/16/arts/13strokes-review1/merlin_171550041_12023a17-177c-4ad3-9031-bee720c0f2c6-superJumbo.jpg",
    "spotify": "https://open.spotify.com/embed/artist/0epOFNiUfyON9EYx7Tpr6V"
  },
  {
    "artist": "The Neighborhood",
    "pic": "https://static.tumblr.com/wvzujvn/pAYqh4vpi/og-cc.jpg",
    "spotify": "https://open.spotify.com/embed/artist/77SW9BnxLY8rJ0RciFqkHh"
  },
  {
    "artist": "Chase Atlantic",
    "pic": "https://secretfangirls.files.wordpress.com/2017/01/16387931_722459221262505_4352724062642244753_n3.jpg?w=958&h=479&crop=1",
    "spotify": "https://open.spotify.com/embed/artist/7cYEt1pqMgXJdq00hAwVpT"
  },
  {
    "artist": "Waterparks",
    "pic": "https://www.nme.com/wp-content/uploads/2019/10/Photo-Apr-26-10-19-06-PM-1.jpg",
    "spotify": "https://open.spotify.com/embed/artist/3QaxveoTiMetZCMp1sftiu"
  },
  {
    "artist": "IDKHBTFM",
    "pic": "https://i.pinimg.com/originals/5b/c1/a2/5bc1a2978cb290d3678d387a33b5cfe5.jpg",
    "spotify": "https://open.spotify.com/embed/artist/0Raaw7kr1Vzat4ZvHzjsJR"
  },
  {
    "artist": "Cigarettes After Sex",
    "pic": "https://i.guim.co.uk/img/media/6b13ff9e08454de73a0e37bbadf5bc6f47526e9a/0_84_2500_1500/master/2500.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=df45adb93602665d8ab79b32d0595eb7",
    "spotify": "https://open.spotify.com/embed/artist/1QAJqy2dA3ihHBFIHRphZj"
  },
  {
    "artist": "Sir Sly",
    "pic": "https://musicexistence.s3.amazonaws.com/wp-content/uploads/2018/01/30022902/Sir-Sly-2017-press-2.jpg",
    "spotify": "https://open.spotify.com/embed/artist/3DFoVPonoAAt4EZ1FEI8ue"
  },
  {
    "artist": "All Time Low",
    "pic": "https://www.nme.com/wp-content/uploads/2020/05/GettyImages-1201733678-696x442.jpg",
    "spotify": "https://open.spotify.com/embed/artist/46gyXjRIvN1NL1eCB8GBxo"
  },
  {
    "artist": "Daughter",
    "pic": "https://direct.rhapsody.com/imageserver/images/Art.10115281/633x422.jpg",
    "spotify": "https://open.spotify.com/embed/artist/46CitWgnWrvF9t70C2p1Me"
  },
  {
    "artist": "The Marías",
    "pic": "https://images1.westword.com/imager/u/blog/11061792/2._the-marias-joe-perri.jpg",
    "spotify": "https://open.spotify.com/embed/artist/2sSGPbdZJkaSE2AbcGOACx"
  },
  {
    "artist": "M.A.G.S",
    "pic": "https://f4.bcbits.com/img/a0196529756_10.jpg",
    "spotify": "https://open.spotify.com/embed/artist/1EEbOYIZFHRuGEgL39cN3s"
  },
  {
    "artist": "Syd Matters",
    "pic": "https://www.francetoday.com/wp-content/uploads/2021/01/Screen-Shot-2018-03-26-at-15.24.38.jpg",
    "spotify": "https://open.spotify.com/embed/artist/4kDmwaDsfY9hcvz7K0otLJ"
  },
  {
    "artist": "YUNGBLUD",
    "pic": "https://images.ctfassets.net/lnhrh9gqejzl/aIYsOZNAuQQyirKlRIH81/b7b333ade5e95d809653000c80aa038c/Yungblud_Photo_by_Chris_Breslauer_Blog_Size.jpg",
    "spotify": "https://open.spotify.com/embed/artist/6Ad91Jof8Niiw0lGLLi3NW"
  },
  {
    "artist": "Palaye Royale",
    "pic": "https://www.upsetmagazine.com/images/article/Artist-Images/P/Palaye%20Royale/_crop1500x1000/Credit-Ashley-OsbornIMG_3161.jpg",
    "spotify": "https://open.spotify.com/embed/artist/0hAd6zwEgt9ILuMDY1prcI"
  },
  {
    "artist": "King Princess",
    "pic": "https://lyriquediscorde.files.wordpress.com/2020/01/king-princess-1950-top-5-music-obsessions.png?w=775&h=515&crop=1",
    "spotify": "https://open.spotify.com/embed/artist/6beUvFUlKliUYJdLOXNj9C"
  },
  {
    "artist": "Girl in Red",
    "pic": "https://i.insider.com/5ee90c02988ee33e3f580275?width=700",
    "spotify": "https://open.spotify.com/embed/artist/3uwAm6vQy7kWPS2bciKWx9"
  },
  {
    "artist": "Fall Out Boy",
    "pic": "https://www.nme.com/wp-content/uploads/2018/01/LEAD-PRESS-SHOT.jpeg",
    "spotify": "https://open.spotify.com/embed/artist/4UXqAaa6dQYAk18Lv7PEgX"
  },
  {
    "artist": "The Regrettes",
    "pic": "https://lastfm.freetls.fastly.net/i/u/ar0/6a9dfa48fb88f1347443d830b4d2e9d5.jpg",
    "spotify": "https://open.spotify.com/embed/artist/67WNUxmM7y4WzHPAVzBu3E"
  },
  // {
  //   "artist": "Weathers",
  //   "pic": "https://photos.bandsintown.com/large/10302366.jpeg",
  //   "spotify": "https://open.spotify.com/embed/artist/4OTFxPi5CtWyj1NThDe6z5"
  // },
  {
    "artist": "Set it Off",
    "pic": "https://www.allthingsloud.com/wp-content/uploads/2019/05/289d8273-set-it-off-2018.jpg",
    "spotify": "https://open.spotify.com/embed/artist/06bDwgCHeMAwhgI8il4Y5k"
  },
  {
    "artist": "Death Cab for Cutie",
    "pic": "https://www.muzplay.net/sites/default/files/styles/artista_quadrada/public/posts/artistas2/deathcabforcutie_55845.jpg?itok=cA_iimDk",
    "spotify": "https://open.spotify.com/embed/artist/0YrtvWJMgSdVrk3SfNjTbx"
  },
  // {
  //   "artist": "EDEN",
  //   "pic": "https://yt3.ggpht.com/ytc/AAUvwnghN-HgZY4Bz_or1zpBTsD4s_42k43A6yvgWZGqKg=s900-c-k-c0x00ffffff-no-rj",
  //   "spotify": "https://open.spotify.com/embed/artist/1t20wYnTiAT0Bs7H1hv9Wt"
  // },
  {
    "artist": "The Brobecks",
    "pic": "https://i.pinimg.com/originals/0c/cf/8e/0ccf8efeb791dc2e60ab15b970599d2b.jpg",
    "spotify": "https://open.spotify.com/embed/artist/29TCgxO6qzQx4O3pjUIMzn"
  },
  {
    "artist": "BETWEEN FRIENDS",
    "pic": "https://galoremag.com/wp-content/uploads/2018/09/betterfriendsfeautre-photos.jpg",
    "spotify": "https://open.spotify.com/embed/artist/2HkSsS8O2U2gPhnCGVN5vn"
  },
  {
    "artist": "Twenty One Pilots",
    "pic": "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2016/05/31/Style/Images/twentyonepilots.promo4-JabariJacobs2.jpg?t=20170517",
    "spotify": "https://open.spotify.com/embed/artist/3YQKmKGau1PzlVlkL1iodx"
  },
  {
    "artist": "Glass Animals",
    "pic": "https://i1.sndcdn.com/avatars-JeZfqirMgzo5m1TX-DuFvMQ-t500x500.jpg",
    "spotify": "https://open.spotify.com/embed/artist/4yvcSjfu4PC0CYQyLy4wSq"
  },
  // {
  //   "artist": "Sasha Sloan",
  //   "pic": "",
  //   "spotify": "https://open.spotify.com/embed/artist/4xnihxcoXWK3UqryOSnbw5"
  // },
  {
    "artist": "Foals",
    "pic": "https://guitar.com/wp-content/uploads/2019/09/foals-band-3@1400x1050.jpg",
    "spotify": "https://open.spotify.com/embed/artist/6FQqZYVfTNQ1pCqfkwVFEa"
  },
  {
    "artist": "Lykke Li",
    "pic": "https://media.npr.org/assets/img/2011/03/18/lykkeli_wide-361c2e3589ac30ad6e9cb9335256af763f18cd53-s800-c85.jpg",
    "spotify": "https://open.spotify.com/embed/artist/6oBm8HB0yfrIc9IHbxs6in"
  },
  // {
  //   "artist": "Vancouver Sleep Clinic",
  //   "pic": "",
  //   "spotify": "https://open.spotify.com/embed/artist/77BznF1Dr1k5KyEZ6Nn3jB"
  // },
  // {
  //   "artist": "FINNEAS",
  //   "pic": "",
  //   "spotify": "https://open.spotify.com/embed/artist/37M5pPGs6V1fchFJSgCguX"
  // },
  {
    "artist": "Summer Salt",
    "pic": "https://pmstudio.com/pmstudio/images/Summer-Salt1.jpg",
    "spotify": "https://open.spotify.com/embed/artist/3MATPJ9tYbcMhw5VOZrRU6"
  },
  {
    "artist": "MCR",
    "pic": "https://d.newsweek.com/en/full/1541765/mcr.jpg",
    "spotify": "https://open.spotify.com/embed/artist/7FBcuc1gsnv6Y1nwFtNRCb"
  },
  {
    "artist": "Modern Baseball",
    "pic": "http://i2.wp.com/musicandriots.com/wp-content/uploads/2016/05/holyghostpromo5-e1463751287257.jpg?resize=1431%2C1080",
    "spotify": "https://open.spotify.com/embed/artist/1HxXNvsraqrsgfmju1yKk8"
  },
  // {
  //   "artist": "Her's",
  //   "pic": "",
  //   "spotify": "https://open.spotify.com/embed/artist/77mJc3M7ZT5oOVM7gNdXim"
  // }
]

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}



function createElementProper(incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add("contentItem");

  let newContentNumber = document.createElement("p");
  newContentNumber.classList.add("contentItem");
  newContentNumber.innerText = i+1;
  newContentElement.appendChild(newContentNumber);

  let newContentTitle = document.createElement("H4");
  newContentTitle.classList.add("contentTitle");
  newContentTitle.innerText = incomingJSON["artist"];
  newContentElement.appendChild(newContentTitle);

  let newContentPic = document.createElement("IMG");
  newContentPic.classList.add("contentPic");
  newContentPic.src = incomingJSON["pic"];
  newContentElement.appendChild(newContentPic);

  let newContentSpotify = document.createElement("iframe");
  newContentSpotify.classList.add("contentSpotify");
  newContentSpotify.src = incomingJSON["spotify"];
  newContentElement.appendChild(newContentSpotify);

  contentGridElement.appendChild(newContentElement);

}
