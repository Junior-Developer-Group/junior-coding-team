const Member = [
    {
        about:
            "I’m a junior dev with a couple of years of experience. I’m currently working with Vue, blogging and running a junior developer community. ",
        name: "Likii",
        speciality: "Front-End Developer",
        image: "https://avatars1.githubusercontent.com/u/51357920?s=460&u=0c0ba2fa0b0f222dd9ceaf301a6e609ec6a6ca9a&v=4",
        social_links: {
            github: "https://github.com/mateahoward",
            instagram: "https://www.instagram.com/likiipedia/",
            twitter: "https://twitter.com/Likiipedia",
            linkedin: "https://linkedin.com/in/matea-howard"
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
            "I’m a Junior developer, working with Javascript, Node and Express",
        name: "Denice",
        speciality: "Junior developer",
        image: "https://github.com/Denice-S.png",
        social_links: { github: "https://github.com/Denice-S", linkedin: "https://linkedin.com/in/denice-soper" },
        contact: "",
    },
    {
        about:
            "I’m a junior fullstack dev from Israel. Currently working with Vue and Firebase.",
        name: "Uriel",
        speciality: "Front-End Developer",
        image: "https://avatars.githubusercontent.com/u/30144878",
        social_links: {
            github: "https://github.com/urielofir",
            facebook: "https://www.facebook.com/urielofir86/",
            linkedin: "https://www.linkedin.com/in/uriel-ofir/"
        }
    },
    {
        about:
            "I’m a junior developer currently working with JavaScript and React. I love making things look beautiful",
        name: "Francesca",
        speciality: "Front-End Developer",
        image: "https://avatars.githubusercontent.com/u/46782373?s=400&u=1bb0e2a85f9e2d60f252810b39ffc000671839cf&v=4",
        social_links: {
            github: "https://github.com/frannyfra",
            linkedin: "https://www.linkedin.com/in/frannyfra/"
        },
        contact: "http://francesca-de-laurentis.com/"
    },
    {
        about:
            "I’m a junior software dev, serving in a non-profit religious organisation coding with js, python and solidity. I run a local community (southern code) in Nigeria, teaching programming.",
        name: "Oghenekparobo",
        speciality: "Software Developer",
        image: "https://avatars.githubusercontent.com/u/68813273?v=4",
        social_links: {
            github: "https://github.com/Jaytru1997",
            instagram: "https://instagram.com/an_onosemuode?igshid=1r6teffyhnmdm",
            twitter: "https://twitter.com/IAM_JoelZamani?s=08",
            linkedin: "https://www.linkedin.com/in/oghenekparobo-o-997a6b17b",
            facebook: "https://www.facebook.com/oghenekparobo.onosemuode"
        },
        contact: "https://lesoustechnology.com/"
    },
    {
        about:
            "I’m a junior developer and blogger, currently working with CSS and being active in the developer community.",
        name: "Debra-Kaye",
        speciality: "Front End Developer",
        image: "https://avatars.githubusercontent.com/u/78452433?s=400&u=e43064cf61cc09e9c3e93a943373d35b4cd02bc1&v=4",
        social_links: {
            github: "https://github.com/debrakayeelliott",
            linkedin: "https://www.linkedin.com/in/debrakayeelliott/",
            twitter: "https://twitter.com/debrakayelliott",
        },
        contact: "https://bit.ly/debrakaye"
    }
];

for (members of Member) {
    const team_member = `
                <div class="team-card">
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
                    ${members.social_links.facebook ? `<span><a href= "${members.social_links.facebook}"<i class="fab fa-facebook fa-2x"></i></a></span>` : ''}                    
                    ${members.social_links.twitter ? `<span><a href= "${members.social_links.twitter}"<i class="fab fa-twitter fa-2x"></i></a></span>` : ''}
                    ${members.social_links.linkedin ? `<span><a href= "${members.social_links.linkedin}"<i class="fab fa-linkedin fa-2x"></i></a></span>` : ''}
                    </div>
                  <div class="contact-team-member">
                  ${members.contact ? `<a href="${members.contact}"> Visit Website 🖱️ </a` : ''}
                  </div>
    </div>
`;

    document.querySelector(".team-card-wrapper").innerHTML += team_member;
}
;

// Use scrollY effect
window.addEventListener("scroll", function () {
    var header = document.querySelector(".main-menu");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Responsive navbar
const responsiveNavbar = () => {
    const navBar = document.getElementById("main-menu");
    (navBar.className === "main-menu")
        ?
        navBar.className += " responsive"
        :
        navBar.className = "main-menu";
}
document.getElementById("icon").addEventListener("click", responsiveNavbar);


//"Join us" modal pop up open and close
let modal = document.querySelector(".modal")
document.getElementById("modal-link").addEventListener("click", () => {
    modal.style.display = "block"
})

document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none"
    }
});

