'use strict';

//navbar 를 투명 & 엘로우
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // console.log(`window.scrollY: ${window.scrollY}`);
    // console.log(`navbarHeight: ${navbarHeight}`);

    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar-dark');
    } else {
        navbar.classList.remove('navbar-dark')
    }
})

//Handle scrolling when tapping on the navbar menu
//section선택하면 그 위치로 이동!
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    // console.log(event.target.dataset.link);
    navbarMenu.classList.remove('open')
    scrollIntoView(link)
    // const scrollTo = document.querySelector(link);
    // scrollTo.scrollIntoView({ behavior: 'smooth'});
});

// navbar toggle button for small screen 
const navbarToggleBtn = document.querySelector('.navbar_toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});


//Handle click on "contact me" button on home
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
const arrowUp = document.querySelector(".arrow-up")
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible')
    }
});

//Handle Click on the "arrow up" button
arrowUp.addEventListener('click', (event) => {
    scrollIntoView('#home')
    
})

// Projects
const workBtnContainer = document.querySelector('.work_categories');
const projectContainer = document.querySelector('.work_projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }


    //선택된 아이템 select 없애고 새로 클릭된 아이템에 active 붙이기
    const active = document.querySelector('.category_btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected')

    // console.log(filter);
    projectContainer.classList.add('anim-out')
    setTimeout(() => {
        projects.forEach((project) => {
            console.log(project.dataset.type);
            if (filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
            });    
        projectContainer.classList.remove('anim-out')
    }, 300);
})

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth'});
}

//Testimonials - p
let billComent = `팀의 일원으로 목표를 이루기 위해 과제를 성실히 수행했습니다.
배려와 존중을 바탕으로 상호작용하고 팀원들의 생각을 수용하고 통합하여 결과물을 만들어냈습니다.
주어진 상황에 만족하지 않고 좋은 성과를 창출하려고 노력하는 태도를 보였습니다.
좋은 피드백은 강점으로 더 강하게 다듬어 나가고, 아쉬운 피드백은 용감하게 받아들이고
조금씩 개선해나가며 꾸준히 성장하고 발전하는 개발자가 되시길 응원하겠습니다.
고생하셨습니다.`;

let bangComent = `안녕하세요, 지연님! 함께 props&state 공부했던 방*린입니다!
제가 함께 페어활동 하면서 느낀 지연님의 강점은 밝고, 끈기있으시고, 주변에 도움을 청하는 것을 어려워하지않는다는 점이에요!! 
지연님께서 밝고 긍정적인 에너지로 페어활동을 잘 이끌어주셔서 저도 즐겁게 과제를 함께할 수 있었던 것 같아요!!
그리고 저희 둘 다 코딩을 처음 접해서 어려움이 많았지만, 검색도 열심히 해보고 주변에 도움을 청해가며 끈기있게 어드밴스 과제까지 해내기 위해 노력한 것도 정말 칭찬해주고 싶은 점이에요!! 
모르는 것을 부끄러워하지 않고 배우려고 노력하는 의지가 학습에서 가장 중요한 자세인데, 지연님은 이미 좋은 학습 자세를 지니고 계신 것 같습니다!ㅎㅎ 
앞으로도 지금처럼 밝고 끈기있는 모습으로 학습을 이어나가신다면 분명 좋은 성과가 있을거라 믿어요. 
우리 둘 다 화이팅해서 부트캠프 잘 마무리하고 좋은 곳에 취업해요!!ㅎㅎ 마지막으로 전문지식 영역은 저를 포함해서 우리 모두가 노력해야 하는 부분인 것 같아요! 
지연님과 페어 너무 즐거웠어서 끝난게 너무 아쉽습니다ㅠㅠ 혹시 앞으로도 어렵거나 궁금한 점이 생기면 언제든지 연락주세요!! 물론 저도 지연님께 SOS 치러 많이 갈게요!ㅎㅎ`;

document.getElementById('billComent').innerHTML = billComent;
document.getElementById('bangComent').innerHTML = bangComent;
// 이미지 3개
  /* Demo purposes only */
//   $(".hover").mouseleave(
//     function () {
//       $(this).removeClass("hover");
//     }
//   );
  