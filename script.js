const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
//update some key to query id
let srcContent = params.some_key;
console.log(srcContent);
let windowInnerHeight = window.innerHeight;
let windowInnerWidth = window.innerWidth;

function setSectionElementHeight() {
  let sectionEle = document.getElementById('video-conent-section');
  sectionEle.style.height = `${windowInnerHeight - 72}px`;
  console.log(sectionEle.style.height);
}

function updateWindowHeightAndWidth() {
  windowInnerHeight = window.innerHeight;
  windowInnerWidth = window.innerWidth;
  setSectionElementHeight();
}

function addEventListeners() {
  window.addEventListener('resize', () => {
    updateWindowHeightAndWidth();
  });
}

var options = {
  plugins: {
    httpSourceSelector: {
      default: 'auto',
    },
  },
};

var player = window.videojs('my-video', options);
player.qualityLevels();
player.ready(onReadyVideoPlayer);
player.seekButtons({
  forward: 30,
  back: 10,
});
function onReadyVideoPlayer() {}

//height settings
updateWindowHeightAndWidth();
// player.httpSourceSelector();
