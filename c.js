$(document).ready(function () {
  // Set up carousel
  let currentIndex = 0;
  const items = $(".carousel img");
  const totalItems = items.length;

  // Function to show next slide
  function showNextSlide() {
    if (currentIndex < totalItems - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }

  // Function to show previous slide
  function showPrevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalItems - 1;
    }
    updateCarousel();
  }

  // Function to update carousel display
  function updateCarousel() {
    const newPosition = -currentIndex * 100 + "%";
    $(".carousel").css("transform", "translateX(" + newPosition + ")");
  }

  // Set interval for automatic sliding (optional)
  setInterval(showNextSlide, 3000);

  //   // Handle click events for next and previous buttons (optional)
  //   $("#main").append(
  //     '<button id="prevBtn">Prev</button><button id="nextBtn">Next</button>'
  //   );

  //   $("#prevBtn").click(function () {
  //     showPrevSlide();
  //   });

  //   $("#nextBtn").click(function () {
  //     showNextSlide();
  //   });
});
