document.addEventListener("DOMContentLoaded", function () {
    const videoGrid = document.getElementById("videoGrid");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const videosPerPage = 4;
    const videosPerLoad = 4;
    let totalVideos = 12;
  
    function showVideos(startIndex, endIndex) {
      const videos = document.querySelectorAll(".shorts-video");
      for (let i = startIndex; i < endIndex; i++) {
        const video = videos[i];
        video.style.display = "block";
  
        // 비디오에 마우스가 올라갈 때 자동 재생
        video.addEventListener("mouseenter", function () {
          video.play();
        });
  
        // 비디오에서 마우스가 벗어날 때 일시 정지
        video.addEventListener("mouseleave", function () {
          video.pause();
        });
      }
    }
  
    function hideAllVideos() {
      const videos = document.querySelectorAll(".shorts-video");
      videos.forEach((video) => {
        video.style.display = "none";
      });
    }
  
    hideAllVideos();
    showVideos(0, videosPerPage);
  
    loadMoreBtn.addEventListener("click", function () {
      const visibleVideos = document.querySelectorAll(".shorts-video[style='display: block;']");
      const nextIndex = visibleVideos.length;
      const endIndex = nextIndex + videosPerLoad;
  
      if (nextIndex < totalVideos) {
        showVideos(nextIndex, endIndex);
      }
  
      if (endIndex >= totalVideos) {
        loadMoreBtn.style.display = "none";
      }
    });
  });
  