document.addEventListener("DOMContentLoaded", function () {
  const reviews = document.querySelectorAll(".review-flex .review-image");
  let currentIndex = 0;

  function showReview(index) {
    reviews.forEach((review, i) => {
      review.classList.remove("active");
      if (i === index) {
        review.classList.add("active");
      }
    });
  }

  function nextReview() {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
  }

  function prevReview() {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showReview(currentIndex);
  }

  // 초기 리뷰 표시
  showReview(currentIndex);

  // 몇 초마다 다음 리뷰로 자동 전환
  setInterval(nextReview, 5000);

  // 예시 버튼을 사용한 리뷰 탐색
  document
    .getElementById("nextReviewBtn")
    .addEventListener("click", nextReview);
  document
    .getElementById("prevReviewBtn")
    .addEventListener("click", prevReview);
});
