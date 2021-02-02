const Member = [
  {
    about:
      "I’m a junior dev with a couple of years of experience. I’m currently working with Vue, blogging and running a junior developer community. ",
    name: "Likii",
    speciality: "Front-End Developer",
    image: "https://avatars1.githubusercontent.com/u/51357920?s=460&u=0c0ba2fa0b0f222dd9ceaf301a6e609ec6a6ca9a&v=4",
    social_links: {
      github: "https://github.com/mateahoward", instagram: "https://www.instagram.com/likiipedia/", twitter: "https://twitter.com/Likiipedia", linkedin: "https://linkedin.com/in/matea-howard"
    },
    contact: "https://likiipedia.com/"
  },
  {
    about:
      "I’m a CTO with experience working in, leading and managing development teams. I code primarily in Golang, and enjoy mentoring junior developers.",
    name: "David",
    speciality: "Long & short-term strategy, back-end development, mentorship",
    image: "https://i.imgur.com/WGve4Z7.jpg",
    social_links: "",
    contact: "https://maidment.dev",

  },
  {
    about:
      "I’m a junior developer who is particularly interested in making education and the arts more accessible through the use of technology.",
    name: "Lizard",
    speciality: "Front-end development, designing for accessibility",
    image: "https://idealkoala.files.wordpress.com/2021/01/img-1064-copy.jpg",
    social_links: { github: "https://github.com/onlyasmalllizard" },

  },
  {
    about:
      "I’m an aspiring Junior Dev, mainly self taught. Currently working on building my skills.",
    name: "Denice",
    speciality: "Junior developer",
    image: "https://github.com/Denice-S.png",
    social_links: { github: "https://github.com/Denice-S", linkedin: "https://linkedin.com/in/denice-soper" },
    contact: "",
  },
];

for (members of Member) {
  const team_member = `
    <div class="swiper-slide">
        <div class="card ">
            <div class="layer"></div>
                <div class="content">
                    <p>
                    ${members.about}
                    </p>
                    <div class="image-wrapper">
                    <img src=${members.image} />
                    </div>
                    <div class="details">
                    <h2>${members.name}<br /><span> ${members.speciality} </span></h2>
                    <div class="social_links">
                    ${members.social_links.github ? `<span><a href= "${members.social_links.github}"<i class="fab fa-github fa-2x"></i></a></span>` : ''}
                    ${members.social_links.instagram ? `<span><a href= "${members.social_links.instagram}"<i class="fab fa-instagram fa-2x"></i></a></span>` : ''}
                    ${members.social_links.twitter ? `<span><a href= "${members.social_links.twitter}"<i class="fab fa-twitter fa-2x"></i></a></span>` : ''}
                    ${members.social_links.linkedin ? `<span><a href= "${members.social_links.linkedin}"<i class="fab fa-linkedin fa-2x"></i></a></span>` : ''}
                    </div>
                  <div class="contact-team-member">
                  ${members.contact ? `<a href="${members.contact}"> Visit Website 🖱️ </a` : ''}
                  </div>
                </div>
            </div>
        </div>
    </div>
`;

  document.querySelector(".swiper-wrapper").innerHTML += team_member;
};

// Use scrollY effect
window.addEventListener("scroll", function () {
  var header = document.querySelector(".main-menu");
  header.classList.toggle("sticky", window.scrollY > 0);
});


//Swiper.js
window.onload = function () {
  var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // loop: true,
  });
};

//Form Submission Button
$(document).ready(function () {
  $("button").click(function () {
    $("#submit_btn").toggleClass("active");
  });
});


