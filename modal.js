// 모달 열기 함수
function openModal(imageSrc) {
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modalImage");

  modal.style.display = "flex";
  modalImage.src = imageSrc;

  // 모달이 열릴 때 지도를 감추도록 설정
  map.style.visibility = "hidden";
}

// 모달 닫기 함수
function closeModal() {
  var modal = document.getElementById("myModal");

  modal.style.display = "none";
}

// 모달 닫기 함수 (모달 바깥을 클릭할 경우 닫기)
document.addEventListener("click", function (event) {
  var modal = document.getElementById("myModal");
  var modalContent = document.getElementById("modalContent");

  if (event.target === modal || event.target === modalContent) {
    closeModal();
  }
});
