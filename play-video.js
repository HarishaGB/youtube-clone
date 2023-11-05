const apiKey = "AIzaSyDOd0ADUjmfRG1H7AhwDAs4cGugoW8kJk8";
const url = "https://www.googleapis.com/youtube/v3";
const commentsContainer = document.getElementById("comments-container");
let mycards= document.getElementById('mycards');
let searchicon = document.getElementById('searchicon');
let searchbox = document.getElementById('searchbox');

const videoObj = JSON.parse(localStorage.getItem("videoObject") ?? "{}");
function suggestionSearch(){
  // localStorage.removeItem("videoObject")
  let word = videoObj.snippet.title.split(" ");
  if (word.length > 4) {
    const limitedText = word.slice(0, 4).join(' '); // Add ellipsis
    searchStr = limitedText;
    return searchStr;
  }
  return "Web Development"
}

window.addEventListener("load", () => {
  // let videoId = document.cookie.split("=")[1];
  let videod = localStorage.getItem("id");

  if (YT) {
    new YT.Player("video-placeholder", {
      height: "400",
      width: "900",
      videoId: videod
    });

  }
  loadVideoDetails();
  loadComments(videod);
  suggestionResults();
});
function loadVideoDetails(){
  let currVsect = document.createElement('div');
  currVsect.className = 'currVSect';
  currVsect.innerHTML = `
  <div class="titleInfo">
  <div class="videoTitle"><b>${videoObj.snippet.title}</b></div>
  <div class="subTitleDiv d-flex">
  <div class="viewandlike gray">${videoObj.statistics.viewCount} . ${calculateTheTimeGap(videoObj.snippet.publishTime)}</div>
  <div class="likeshare">
  <div class="likecombo d-flex">
  <div class="thumbs-up"><i class="far fa-thumbs-up"></i></div>
  <span class="liketext">${likeinUnit(videoObj.statistics.likeCount)}</span>
  </div>
  <div class="likecombo d-flex">
  <div class="thumbs-down"><i class="far fa-thumbs-down"></i></div>
  <span class="liketext">0</span>
  </div>
  <div class="likecombo d-flex">
  <img src="./share.svg" alt="like">
  <span class="liketext">SHARE</span>
  </div>
  <div class="likecombo d-flex">
  <img src="./save.svg" alt="like">
  <span class="liketext">SAVE</span>
  </div>
  <div class="likecombo d-flex">
  <img src="./threedot.svg" alt="like">
  </div>
  </div>
  </div>
  </div>
  <div class="titleInfos d-flex">
    <div class="currVCLogo">
      <img src=${videoObj.channelLogo} alt="channel Logo">
    </div>
    <div class="moreinfo">
      <div class="channelsub d-flex">
        <div class="channelName">
          <p class="channeltitle">${videoObj.snippet.channelTitle}</p>
          <p>1.2M Subscribers</p>
        </div>
        <button id="subscribe-btn">SUBSCRIBE</button>
      </div>
      <p>${videoObj.snippet.description}</p>
      <div class="gray">SHOW MORE</div>
    </div>`;
  commentsContainer.appendChild(currVsect);
  let channeNameRedirect = document.getElementsByClassName('channelName')[0];

channeNameRedirect.addEventListener('click', () =>{
  localStorage.setItem('channelId', videoObj.snippet.channelId);
  window.location.href = "https://voidsoul-host.github.io/youtube-clone/channel.html";  //redirect to the video page of that particular channel
})
}



function likeinUnit(likecount){
  let num = Number(likecount);
  if(num>999999999){
    return `${Math.floor((num/1e+8)*1)/1}B` ;
  }else if(num>99999999){
    return `${Math.floor((num/1e+7)*1)/1}M`;
  }else if(num>999){
    return`${Math.floor((num/1e+6)*1)/1}K`; 
  }else return num
}
async function loadComments(videoId) {
  let endpoint = `${url}/commentThreads?key=${apiKey}&videoId=${videoId}&maxResults=10&part=snippet`;

  const response = await fetch(endpoint);
  const result = await response.json();
  try{
  result.items.forEach((item) => {
    const repliesCount = item.snippet.totalReplyCount;
    const {
      authorDisplayName,
      textDisplay,
      likeCount,
      authorProfileImageUrl: profileUrl,
      publishedAt,
    } = item.snippet.topLevelComment.snippet;

    const div = document.createElement("div");
    div.className = "comment d-flex";
    div.innerHTML = `
    <div class="cmmntimg">
    <img src="${profileUrl}" class="author-profile" alt="author profile" />
    </div>
    <div class="cmmntbody">
    <b>${authorDisplayName}</b><span class="cmmnttime gray"><span>
    <p>${textDisplay}</p>
    <div class="like-unlike d-flex">
      <div class="like"><i class="far fa-thumbs-up"></i></div>
      <div class="like"><i class="far fa-thumbs-down"></i></div>
      <span class="gray">Reply</span>
    </div>`;

    commentsContainer.appendChild(div);
  });
  }
  catch(error) {
    console.log('Error', error);}
}
// window.addEventListener("load", suggestionSearch);
async function suggestionResults() {
  // searchString will the input entered by the use
  const endpoint = `${url}/search?key=${apiKey}&q=${suggestionSearch()}&part=snippet&maxResults=15`;
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
}
function navigateToVideoDetails(videoId, videoobject) {
  localStorage.setItem("videoObject", JSON.stringify(videoobject));
// document.cookie = `id=${videoId}; path=https://voidsoul-host.github.io/youtube-clone/play-video.html`;
localStorage.setItem("'id", videoId);
window.location.href = "https://voidsoul-host.github.io/youtube-clone/play-video.html";
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

    if (words.length >= 5) {
      const limitedText = words.slice(0, 5).join(' ') + ' ...'; // Add ellipsis
      titleContent = limitedText;
    }
    const mycardplay = document.createElement("div");
    mycardplay.className = "mycard-play";
    mycardplay.innerHTML = `<span class="duration gray">15:35</span>
        <img src="${video.snippet.thumbnails.high.url}" alt="Video thumbnail"
                class="thumbnail-play">
        <div class="titlebody d-flex">
            <div class="titletexts">
                <p>${titleContent}</p>
                <p class="gray">${video.snippet.channelTitle}</p>
                <p class="gray">${video.statistics.viewCount} . ${calculateTheTimeGap(video.snippet.publishTime)}</p>
            </div>
        </div>`;

    mycardplay.addEventListener("click", () => {
      // navigateToVideotitles(video.snippet.title, video);
      // console.log(video.id.videoId);
      
      navigateToVideoDetails(video.id.videoId, video);
    });

    mycards.appendChild(mycardplay);
  });
}

searchicon.addEventListener('click', (e) => {
  e.preventDefault();
  let searchvalue = searchbox.value;
  localStorage.setItem('lastSearch', searchbox.value);
  window.location.href = "https://voidsoul-host.github.io/youtube-clone/index.html"
})
