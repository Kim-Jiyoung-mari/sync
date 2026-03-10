//토글 스위치 투명 오버레이 색변환
// 스위치(체크박스)와 부모 카드를 선택
const homeSwitch = document.querySelector('.card input[type="checkbox"]');
const homeCard = homeSwitch.closest('.card'); // 가장 가까운 부모 .card를 찾음
console.log(homeCard,homeSwitch)

// 2. 스위치 값이 변할 때마다 실행
homeSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
        // 스위치가 켜졌을 때
        homeCard.classList.add('active');
    } else {
        // 스위치가 꺼졌을 때
        homeCard.classList.remove('active');
    }
});

const themeBtn = document.querySelector('.theme_btn');
const body = document.body;

// 1. 페이지 로드 시 기존 설정 불러오기
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    // 아이콘도 해 모양으로 바꿔주는 로직이 필요하면 여기에 추가!
}

// 2. 버튼 클릭 시 테마 전환
themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // 현재 상태 저장
    let theme = 'dark';
    if (body.classList.contains('light-mode')) {
        theme = 'light';
    }
    localStorage.setItem('theme', theme);
});
