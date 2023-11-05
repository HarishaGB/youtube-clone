const url = "https://www.googleapis.com/youtube/v3";
let apiKey= 'AIzaSyDOd0ADUjmfRG1H7AhwDAs4cGugoW8kJk8';
const geoapiKey = '086cac9d62524908aa71a16e6c940f15';
let maincontent= document.getElementById('maincontent');
let mycards= document.getElementById('mycards');
let searchicon = document.getElementById('searchicon');
let searchbox = document.getElementById('searchbox');
let menu = document.getElementById('menu');
// let searchStr;
let userState;

window.addEventListener("load", async function fetchSearchResults(searchString) {
    // searchString will the input entered by the user
    let searchStr = localStorage.getItem("lastSearch");
    const endpoint = `${url}/search?key=${apiKey}&q="${searchStr}"&type=video&part=snippet&maxResults=30`;
    try {
      const response = await fetch(endpoint);
      const result = await response.json();
      for (let i = 0; i < result.items.length; i++) {
        if(result.items[i].kind ==="youtube#searchResult"){
        let videoId = result.items[i].id.videoId;
        let channelId = result.items[i].snippet.channelId;
  
        let statistics = await getVideoStatistics(videoId);
        let channelLogo = await fetchChannelLogo(channelId);
  
        result.items[i].statistics = statistics;
        result.items[i].channelLogo = channelLogo;
      }
      
    }
    renderVideosOntoUI(result.items);

    } catch (error) {
      console.log("Some error occured", error);
    }
  })
  function navigateToVideoDetails(videoId, videoobject) {
    localStorage.setItem("videoObject", JSON.stringify(videoobject));
  // document.cookie = `id=${videoId}; path=https://voidsoul-host.github.io/youtube-clone/play-video.html`;
  localStorage.setItem("id", videoId);
  window.location.href = "https://voidsoul-host.github.io/youtube-clone/play-video.html";
}
function navigatetoChannelPage(videochannelid) {
  localStorage.setItem("channelid", videochannelid);
  window.location.href="https://voidsoul-host.github.io/youtube-clone/channel.html"
}
// function navigateToVideotitles(Content) {
//   document.cookie = `title=${Content}; path=/youtube-clone/play-video.html`;
// }
  function calculateTheTimeGap(publishTime) {
    let publishDate = new Date(publishTime);
    let currentDate = new Date();
  
    let secondsGap = (currentDate.getTime() - publishDate.getTime()) / 1000;
  
    const secondsPerDay = 24 * 60 * 60;
    const secondsPerWeek = 7 * secondsPerDay;
    const secondsPerMonth = 30 * secondsPerDay;
    const secondsPerYear = 365 * secondsPerDay;
  
    if (secondsGap < secondsPerDay) {
      return `${Math.ceil(secondsGap / (60 * 60))}hrs ago`;
    }
    if (secondsGap < secondsPerWeek) {
      return `${Math.ceil(secondsGap / secondsPerWeek)} weeks ago`;
    }
    if (secondsGap < secondsPerMonth) {
      return `${Math.ceil(secondsGap / secondsPerMonth)} months ago`;
    }
  
    return `${Math.ceil(secondsGap / secondsPerYear)} years ago`;
  }

  async function fetchChannelLogo(channelId) {
    const endpoint = `${url}/channels?key=${apiKey}&id=${channelId}&part=snippet`;
  
    try {
      const response = await fetch(endpoint);
      const result = await response.json();
      return result.items[0].snippet.thumbnails.high.url;
    } catch (error) {
      console.log("Failed to load channel logo for ", channelId);
    }
  }
  async function getVideoStatistics(videoId) {
    // https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDvo2p4xMEI3GC-PWH02_0OAIN1h88k4rE&part=statistics
    const endpoint = `${url}/videos?key=${apiKey}&part=statistics&id=${videoId}`;
    try {
      const response = await fetch(endpoint);
      const result = await response.json();
      return result.items[0].statistics;
    } catch (error) {
      console.log("Failed to fetch Statistics for ", videoId);
    }
  }

  
  function renderVideosOntoUI(videosList) {
    // videosList will be an array of video objects.
    // container.innerHTML = "";
    var titleContent =""
    videosList.forEach((video) => {
      const text = video.snippet.title.trim();
      const words = text.split(' ');

      if (words.length >= 10) {
        const limitedText = words.slice(0, 10).join(' ') + ' ...'; // Add ellipsis
        titleContent = limitedText;
      }
      const mycard = document.createElement("div");
      mycard.className = "mycard";
      mycard.innerHTML = `<span class="duration gray">15:35</span>
          <img src="${video.snippet.thumbnails.high.url}" alt="Video thumbnail"
                  class="thumbnail">
          <div class="titlebody d-flex">
              <div class="channellogo">
                  <img src="${video.channelLogo}" alt="Channel Logo" class="cardchannellogo">
              </div>
              <div class="titletexts">
                  <p>${titleContent}</p>
                  <p class="gray channelid" onclick="navigatetoChannelPage()">${video.snippet.channelTitle}</p>
                  <p class="gray">${video.statistics.viewCount} . ${calculateTheTimeGap(video.snippet.publishTime)}</p>
              </div>
          </div>`;
      
      mycard.addEventListener("click", () => {
        // navigateToVideotitles(video.snippet.title, video);
        // console.log(video.id.videoId);
        navigateToVideoDetails(video.id.videoId, video);
      });

      mycards.appendChild(mycard);
    });
  }
  
  

// myform.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     fetching();
// })
// let lastSearch2
// async function fetching(){
//     console.log("started")
//     let searchTerm = document.getElementById("searchbox").value;

//     const fetchedData = await fetch(`${url}?key=${apiKey}&q=${searchTerm}&part=snippet`);
//     var result = fetchedData.json();
//     console.log("collected");
//     console.log(result);
//     matchsearch()
//     console.log(`${url}?key=${apiKey}&q=${lastSearch2}&part=snippet`);
//     localStorage.setItem("lastSearch", searchTerm)
    
// }
    
//     function matchsearch(){
//         if(localStorage.getItem('lastSearch')!==null) return lastSearch2= localStorage.getItem('lastSearch');
//         else return lastSearch2 =null;
//     }

function ifLastSearch(userState){
  if (localStorage.getItem('lastSearch'!==null)){
    return localStorage.getItem('lastSearch');
  }else{
    return userState;
  }
}

function getStateFromLocation(latitude, longitude, callback) {
  // Make a request to the OpenCage Geocoding API
  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${geoapiKey}`)
      .then(response => response.json())
      .then(data => {
          if (data.results.length > 0) {
              // Extract the state name from the result
              const components = data.results[0].components;
              userState = components.state || components.state_code || null;
              callback(userState);
          } else {
              // No results found
              callback(null);
          }
      })
      .catch(error => {
          console.error('Error fetching geolocation data:', error);
          callback(null);
      });
}

// Example usage

// Get user's location and retrieve the state
navigator.geolocation.getCurrentPosition(function(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  getStateFromLocation(latitude, longitude, function(state) {
      if (state) {
          console.log('User is in state:', state);
      } else {
          console.log('State not found or error occurred.');
      }
  });
}, function(error) {
  console.error('Error getting location:', error);
});

searchicon.addEventListener('click', (e) => {
  e.preventDefault();
  let searchvalue = searchbox.value;
  localStorage.setItem('lastSearch', searchbox.value);
  window.location.href = "https://voidsoul-host.github.io/youtube-clone/index.html"
})