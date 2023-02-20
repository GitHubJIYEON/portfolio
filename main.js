'use strict';

// mail send btn

let emailSubject = document.getElementById('email_subject');
let emailBody = document.getElementById('email_body');
// let emailAddress = document.getElementById('email_address');

let sendAnchor = document.getElementById('send_anchor');

let sendBtn = document.getElementById('send_btn');
sendBtn.addEventListener('click', () => {
  sendAnchor.href = `mailto:jiyeon2954@gmail.com?subject=${emailSubject.value}&body=${emailBody.value}`;
  sendAnchor.click();
});
// main send btn end

// about card flip
let aboutCardList = document.querySelectorAll('.about-card');

let mouseStatus = '';

aboutCardList.forEach((aboutCard) => {
  aboutCard.addEventListener('mouseover', aboutCardMouseOverHandler);
  aboutCard.addEventListener('mouseleave', aboutCardMouseLeaveHandler);
});

let frontDiv = '';
let backDiv = '';

function aboutCardMouseOverHandler(event) {
  if (mouseStatus !== event.type) {
    mouseStatus = event.type;

    if (event.type === 'mouseover') {
      frontDiv = event.target.parentElement.parentElement.children[0];
      backDiv = event.target.parentElement.parentElement.children[1];

      let currentTarget = event.target.parentElement;

      //console.log(currentTarget);

      if (currentTarget.className === 'back') {
        if (currentTarget.style.transform === 'rotateY(180deg)') {
          frontDiv.style.transform = 'rotateY(180deg)';
          backDiv.style.transform = 'rotateY(0deg)';
        } else {
          frontDiv.style.transform = 'rotateY(0deg)';
          backDiv.style.transform = 'rotateY(180deg)';
        }
      }

      if (currentTarget.className === 'front') {
        if (currentTarget.style.transform === 'rotateY(180deg)') {
          frontDiv.style.transform = 'rotateY(0deg)';
          backDiv.style.transform = 'rotateY(180deg)';
        } else {
          frontDiv.style.transform = 'rotateY(180deg)';
          backDiv.style.transform = 'rotateY(0deg)';
        }
      }
    }
  }
}

function aboutCardMouseLeaveHandler(event) {
  if (mouseStatus !== event.type) {
    mouseStatus = event.type;

    if (event.type === 'mouseleave') {
      // console.log(frontDiv);
      // console.log(backDiv);
      if (frontDiv && backDiv) {
        if (frontDiv.style.transform === 'rotateY(0deg)') {
          frontDiv.style.transform = 'rotateY(180deg)';
          backDiv.style.transform = 'rotateY(0deg)';
        } else {
          frontDiv.style.transform = 'rotateY(0deg)';
          backDiv.style.transform = 'rotateY(180deg)';
        }
      }
    }
  }
}

// about card flip end

//Navbar section 선택하면 그 선택 위치로 이동
const navbarMenuList = document.querySelectorAll('.navbar_data');

navbarMenuList.forEach((navbarMenu) => {
  navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const targetElement = target.dataset.targetElement;
    if (targetElement == null) {
      return;
    }
    scrollIntoView(targetElement);
  });
});

// "contact me" button on home  contact 으로 이동
const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

//make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home_container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  // console.log(homeHeight)
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

// "arrow up" button 누르면 Home으로 이동
arrowUp.addEventListener('click', (event) => {
  scrollIntoView('#home');
});

function scrollIntoView(elementName) {
  //console.log('scrollIntoView: ', elementName);
  const scrollTo = document.querySelector(elementName);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

//menu open & close
const menuToggleBtn = document.querySelector('#menu_toggle_btn'); //menu아이콘
const menuSideContent = document.querySelector('#menu-side-content'); //menu

menuToggleBtn.addEventListener('click', () => {
  // console.log(getComputedStyle(menuSideContent).left);
  // console.log(menuSideContent.style.left);
  if (
    getComputedStyle(menuSideContent).left === '0px' ||
    menuSideContent.style.left === '0px'
  ) {
    menuSideContent.style.left = '-100%';
    menuSideContent.style.opacity = 0;
  } else {
    menuSideContent.style.left = '0';
    menuSideContent.style.opacity = 100;
  }
});

//contact open & close
const contactToggleBtn = document.querySelector('#contact_toggle_btn'); //user아이콘
const contactContainer = document.querySelector('.contact'); //user 눌렀을 때 정보

contactToggleBtn.addEventListener('click', () => {
  if (
    getComputedStyle(contactContainer).right === '0px' ||
    contactContainer.style.left === '0px'
  ) {
    contactContainer.style.right = `-${
      getComputedStyle(contactContainer).width
    }`;
    contactContainer.style.opacity = 0;
  } else {
    contactContainer.style.right = '0px';
    contactContainer.style.opacity = 100;
  }
});

//work web img hover animation
const downAnimationList = document.querySelectorAll('.down-animation');
//console.log('downAnimationList: ', downAnimationList);

let isMouseOverEvent = false;
let backgroundPositionY = 0;
let mouseLeaveTimer = '';
let mouseOverTimer = '';

downAnimationList.forEach((downAnimationItem) => {
  //console.log('downAnimationItem: ', downAnimationItem);

  downAnimationItem.addEventListener('mouseover', () => {
    if (mouseLeaveTimer) {
      clearTimeout(mouseLeaveTimer);
    }
    if (!isMouseOverEvent) {
      isMouseOverEvent = true;
      //console.log('downAnimationItem mouseover');
      mouseOverTimer = setInterval(() => {
        if (backgroundPositionY < 100) {
          backgroundPositionY += 0.1;
        }
        if (backgroundPositionY >= 100) {
          clearTimeout(mouseOverTimer);
        }
        downAnimationItem.children[0].style.backgroundPositionY = `${backgroundPositionY}%`;
      }, 1);
    }
  });

  downAnimationItem.addEventListener('mouseleave', () => {
    if (mouseOverTimer) {
      clearTimeout(mouseOverTimer);
    }
    if (isMouseOverEvent) {
      isMouseOverEvent = false;
      //console.log('downAnimationItem mouseleave');
      mouseLeaveTimer = setInterval(() => {
        if (backgroundPositionY > 0) {
          backgroundPositionY -= 0.2;
        }
        if (backgroundPositionY <= 0) {
          clearTimeout(mouseLeaveTimer);
        }
        downAnimationItem.children[0].style.backgroundPositionY = `${backgroundPositionY}%`;
      }, 1);
    }
  });
});

//About - slick
$(function () {
  $('#slider-div').slick({
    slide: 'div', //슬라이드 되어야 할 태그 ex) div, li
    infinite: true, //무한 반복 옵션
    slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    speed: 1000, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: true, // 옆으로 이동하는 화살표 표시 여부
    dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay: true, // 자동 스크롤 사용 여부
    autoplaySpeed: 4000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false, // 세로 방향 슬라이드 옵션
    prevArrow: "<button type='button' class='slick-prev'></button>", // 이전 화살표 모양 설정
    nextArrow: "<button type='button' class='slick-next'></button>", // 다음 화살표 모양 설정
    dotsClass: 'slick-dots', //아래 나오는 페이지네이션(점) css class 지정
    draggable: true, //드래그 가능 여부
    customPaging: function (slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a class="dot"></a>';
    },

    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 960, //화면 사이즈 960px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, //화면 사이즈 768px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 1,
        },
      },
    ],
  });
});

//Testimonials - p태그

let billComent = `팀의 일원으로 목표를 이루기 위해 과제를 성실히 수행했습니다.
배려와 존중을 바탕으로 상호작용하며 팀원들의 생각을 수용하고 통합하여 결과물을 만들어냈습니다.
주어진 상황에 만족하지 않고 좋은 성과를 창출하려고 노력하는 태도를 보였습니다.
좋은 피드백은 강점으로 더 강하게 다듬어 나가고, 아쉬운 피드백은 용감하게 받아들여 개선해나가며 
꾸준히 성장하고 발전하는 개발자가 되시길 응원하겠습니다.

고생하셨습니다.`;

let bangComent = `안녕하세요, 지연님! 함께 props&state 공부했던 방*린입니다!
제가 함께 페어활동 하면서 느낀 지연님의 강점은 밝고, 끈기있으시고, 주변에 도움을 청하는 것을 어려워하지않는다는 점이에요!! 지연님께서 밝고 긍정적인 에너지로 페어활동을 잘 이끌어주셔서 저도 즐겁게 과제를 할 수 있었습니다!!

그리고 저희 둘 다 코딩을 처음 접해서 어려움이 많았지만, 검색도 열심히 해보고 주변에 도움을 청해가며 끈기있게 어드밴스 과제까지 해내기 위해 노력한 것도 정말 칭찬해주고 싶은 점이에요!! 
모르는 것을 부끄러워하지 않고 배우려고 노력하는 의지가 학습에서 가장 중요한 자세인데, 지연님은 이미 좋은 학습 자세를 지니고 계신 것 같습니다!ㅎㅎ 
앞으로도 지금처럼 밝고 끈기있는 모습으로 학습을 이어나가신다면 분명 좋은 성과가 있을거라 믿어요. 
함께 화이팅해서 부트캠프 잘 마무리하고 좋은 곳에 취업해요!!ㅎㅎ 마지막으로 전문지식 영역은 저를 포함해서 우리 모두가 노력해야 하는 부분인 것 같아요! 

지연님과 페어 너무 즐거웠어서 끝난게 너무 아쉽습니다ㅠㅠ 혹시 앞으로도 어렵거나 궁금한 점이 생기면 언제든지 연락주세요!! 물론 저도 지연님께 SOS 치러 많이 갈게요!`;

let choiComent = `지연님 이틀간 너무 수고 많으셨어요!!! 진짜 부담없이 과제 즐길 수 있었던 페어 활동 시간이라서 너무 좋았고!! 그런 분위기를 만들어주셔서 너무 감사했어요!! 

지연님께서 과제 방향성이랑 좋은 레퍼런스도 많이 알려주시고 먼저 적극적으로 제안해주셔서 모든 걸 구현해볼 수 있었던 시간이었어요!! 
제가 CS50강의 다 끝난 뒤에 뭐 해야 되는지 정말 고민 많았는데 강의 추천해주셔서 정말 감사했습니다!!! 주말동안 열심히 공부해봐야겠어요!! 
개선하실 부분은 코스 진행하면서 배울게 많기에 전문 지식 영역을 선택했습니다~

지연님 아이디어가 너무 좋으셨어서 나중에 프로젝트도 정말 궁금해요!! 다음에 또 다시 페어로 만나거나 프로젝트 팀원 혹은 회사 동기로 만나뵐 수 있었으면 좋겠어요!!! `;

document.getElementById('billComent').innerHTML = billComent;
document.getElementById('bangComent').innerHTML = bangComent;
document.getElementById('choiComent').innerHTML = choiComent;

//Testimonials - View more btn
const viewMorebtn = document.querySelectorAll('.testimonial_display_btn');

//console.log('viewMorebtn: ', viewMorebtn);

const testimonialCommentBox = document.querySelectorAll(
  '.testimonial-comment-box'
);

viewMorebtn.forEach((button) => {
  button.addEventListener('click', (event) => {
    // console.log('view more button click !!!');

    // console.log(event.target);
    // console.log(event.target.children);
    // console.log(event.target.children[0].classList);
    // console.log(event.target.children[0].classList.contains('fa-arrow-down'));

    // console.log(event.target);
    // console.log(event.target.parentElement);
    // console.log(event.target.parentElement.classList);

    if (event.target.children[0].classList.contains('fa-arrow-down')) {
      // 더보기 닫혔을 때 열기
      event.target.children[0].classList.replace(
        'fa-arrow-down',
        'fa-arrow-up'
      );
      event.target.parentElement.classList.remove('view-more-before');
    } else {
      // 더보기 열렸을 때 닫기
      event.target.children[0].classList.replace(
        'fa-arrow-up',
        'fa-arrow-down'
      );
      event.target.parentElement.classList.add('view-more-before');
    }
  });
});
