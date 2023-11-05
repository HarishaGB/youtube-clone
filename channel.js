const url = "https://www.googleapis.com/youtube/v3";
let apiKey= 'AIzaSyDOd0ADUjmfRG1H7AhwDAs4cGugoW8kJk8';
let channelIdRetrieve = localStorage.getItem('channelId');
let endpoint = `${url}/channels?part=snippet,statistics&id=${channelIdRetrieve}&key=${apiKey}`;
let videoendpoint = `${url}/search?part=snippet&channelId=${channelIdRetrieve}&type=video&maxResults=15&key=${apiKey}`;
//  GET https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=CHANNEL_ID&key=YOUR_API_KEY
// GET https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=CHANNEL_ID&maxResults=10&key=YOUR_API_KEY
let searchicon = document.getElementById('searchicon');
let searchbox = document.getElementById('searchbox');


window.addEventListener("load", () =>{

 fetchChannelDetailsById();
 fetchChannelVideosById();

})

async function fetchChannelDetailsById(){
    try{
        let response = await fetch(endpoint);
        let result = await response.json();
        renderChannelDetailsonUI(result);
    }
    catch(e){
        console.log(e);
    }

}

function renderChannelDetailsonUI(channeldetails){
    
    let channelhandle = document.getElementById('channelhandle');
    let channeldetailshandle = document.createElement('div');
    channeldetailshandle.className = "channeldetailshandle d-flex";
    channeldetailshandle.innerHTML = `<div class="channelmain d-flex">
                                <div class="channelimage">
                                    <img id="mychannellogo" src="${channeldetails.items[0].snippet.thumbnails.default.url}" alt="Channel Logo" class="channellogo">
                                </div>
                                <div class="channelnme">
                                    <h5>${channeldetails.items[0].snippet.title}</h5>
                                    <p>${likeinUnit(channeldetails.items[0].statistics.subscriberCount)} Subscribers</p>
                                </div>
                            </div>
                            <button type="submit" class="subscribe-btn">
                                SUBSCRIBE
                            </button>
                        </div>`;
    let channelmenu = document.createElement('div');
    channelmenu.className = "channelmenu d-flex";
    channelmenu.innerHTML=`<div class="menu">
                                <button class="menuitems">Home</button>
                                <button class="menuitems">SHORTS</button>
                                <button class="menuitems">LIVE</button>
                                <button class="menuitems">PLAYLISTS</button>
                                <button class="menuitems">COMMUNITY</button>
                                <button class="menuitems">CHANNELS</button>
                                <button class="menuitems">ABOUT</button>
                            </div>
                            <div class="moremenu">
                                <p>&gt;</p>
                            </div>`;
    channelhandle.appendChild(channeldetailshandle);
    channelhandle.appendChild(channelmenu);
}

function likeinUnit(likecount){
    let num = parseInt(likecount);
    // if(num>999999999){
    //   return `${Math.floor((num/1e+8)*1)/1}B` ;
    // }else if(num>999999){
    //   return `${Math.floor((num/1e+7)*1)/1}M`;
    // }else if(num>999){
    //   return`${Math.floor((num/1e+6)*1)/1}K`; 
    // }else return num
    if (num >= 1e9) {
        return (num / 1e9).toFixed(1) + 'B';
    } else if (num >= 1e6) {
        return (num / 1e6).toFixed(1) + 'M';
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1) + 'K';
    } else {
        return num.toString();
    }
}


async function fetchChannelVideosById(){
    try {
        const response = await fetch(videoendpoint);
        const result = await response.json();
        for (let i = 0; i < result.items.length; i++) {
          let videoId = result.items[i].id.videoId;
          let channelId = result.items[i].snippet.channelId;
    
          let statistics = await getVideoStatistics(videoId);
          let channelLogo = await fetchChannelLogo(channelId);
            
          result.items[i].statistics = statistics;
          result.items[i].channelLogo = channelLogo;
        // }
        
      }
      renderVideosOntoUI(result.items);
  
      } catch (error) {
        console.log("Some error occured", error);
      }

}

async function fetchChannelLogo(channelId) {
    const logoendpoint = `${url}/channels?key=${apiKey}&id=${channelIdRetrieve}&part=snippet`;
  
    try {
      const response = await fetch(logoendpoint);
      const result = await response.json();
      return result.items[0].snippet.thumbnails.high.url;
    } catch (error) {
      console.log("Failed to load channel logo for ", channelId);
    }
}

async function getVideoStatistics(videoId) {
    // https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDvo2p4xMEI3GC-PWH02_0OAIN1h88k4rE&part=statistics
    const statendpoint = `${url}/videos?key=${apiKey}&part=statistics&id=${videoId}`;
    try {
      const response = await fetch(statendpoint);
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


function navigateToVideoDetails(videoId, videoobject) {
    localStorage.setItem("videoObject", JSON.stringify(videoobject));
  // document.cookie = `id=${videoId}; path=https://voidsoul-host.github.io/youtube-clone/play-video.html`;
  localStorage.setItem("id", videoId);
  window.location.href = "https://voidsoul-host.github.io/youtube-clone/play-video.html";
}

// function navigatetoChannelPage(videochannelid) {
//   console.log(videochannelid)
//   localStorage.setItem("channelid", videochannelid);
//   window.location.href="http://127.0.0.1:5500/channel.html"
// }
searchicon.addEventListener('click', (e) => {
  e.preventDefault();
  let searchvalue = searchbox.value;
  localStorage.setItem('lastSearch', searchbox.value);
  window.location.href = "https://voidsoul-host.github.io/youtube-clone/index.html"
})