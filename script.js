function goToPage(pageNumber) {
    // 모든 페이지를 숨김
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');

    // 해당 페이지를 보이게 함
    document.getElementById(`page-${pageNumber}`).style.display = 'block';
}

function pickGift() {
    const giftImage = document.getElementById("gift-image-1");

    // 확률에 따른 선물 뽑기
    const randomNum = Math.random() * 100;
    let gift;
    if (randomNum < 50) {
        gift = 'gift1.png'; // 선물 1
    } else if (randomNum < 75) {
        gift = 'gift2.png'; // 선물 2
    } else if (randomNum < 90) {
        gift = 'gift3.png'; // 선물 3
    } else {
        gift = 'gift4.png'; // 선물 4
    }

    // 이미지 변경
    giftImage.src = gift;

    // 축하 메시지 표시
    document.getElementById("gift-message").style.display = 'block';

    // 다음 페이지로 이동
    goToPage(2);

    // 선물 이미지를 다음 페이지로 복사
    const finalGiftImage = document.getElementById("gift-image-2");
    finalGiftImage.src = gift;
}

function resetGame() {
    // 초기 페이지로 이동
    goToPage(1);
    
    // 초기 이미지로 변경
    document.getElementById("gift-image-1").src = "box1.png";
    document.getElementById("gift-image-2").src = "box1.png";

    // 축하 메시지 숨기기
    document.getElementById("gift-message").style.display = 'none';
}

// 초기 페이지 설정
goToPage(1);

