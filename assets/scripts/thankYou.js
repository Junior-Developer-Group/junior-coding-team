const sources = [
  {
    organisationName: 'Google Fonts',
    organisationSite: 'https://fonts.google.com/',
    description:
      'provides beautiful and varied fonts under an Open Font Licence.',
    image: {
      url:
        'https://www.gstatic.com/images/icons/material/apps/fonts/1x/opengraph_color_blue_1200dp.png',
      alt: 'The logo for Google Fonts'
    },
    resourcesUsed: [
      {
        resourceName: 'Poppins',
        resourceAuthor: 'Indian Type Foundry and Jonny Pinhorn',
        resourceLink: 'https://fonts.google.com/specimen/Poppins'
      }
    ]
  },
  {
    organisationName: 'SVG Backgrounds',
    organisationSite: 'https://svgbackgrounds.com/',
    description:
      'has a number of interesting SVG backgrounds available under a CC 4.0 license.',
    image: {
      url: '',
      alt: ''
    },
    resourcesUsed: [
      {
        resourceName: 'Pattern-Randomized',
        resourceAuthor: 'Matt Visiwig',
        resourceLink: 'https://www.svgbackgrounds.com/#pattern-randomized'
      }
    ]
  },
  {
    organisationName: 'Font Awesome',
    organisationSite: 'https://fontawesome.com/',
    description:
      'has a number of vector icons and social logos, under an Open source license  CC BY 4.0 ,SIL OFL 1.1, and MIT licenses.',
    image: {
      url:
        '',
      alt: ''
    },
    resourcesUsed: [
      {
        resourceName: 'Social Media logos and Free icons',
        resourceAuthor: 'FontAwesome',
        resourceLink: 'https://fontawesome.com/'
      }
    ]
  }
];

const thanksContainer = document.querySelector('#thanks-container');

// Build cards dynamically for each resource used and render to the page
sources.forEach((source) => {
  let article = document.createElement('article');
  article.classList.add('thanks-card');

  let image = document.createElement('img');
  image.src = source.image.url;
  image.alt = source.image.alt;
  article.appendChild(image);

  let thanksText = document.createElement('div');
  thanksText.classList.add('thanks-text');

  let orgName = document.createElement('h2');
  orgName.innerText = source.organisationName;
  thanksText.appendChild(orgName);

  let orgLink = document.createElement('a');
  orgLink.href = source.organisationSite;
  orgLink.innerText = source.organisationName;
  console.log(orgLink);

  let description = document.createElement('p');
  description.appendChild(orgLink);

  let descriptionText = document.createTextNode(` ${source.description}`);
  description.appendChild(descriptionText);
  thanksText.appendChild(description);

  //   If the source listed has elements used on the Team website,
  //   create a new card segment to list them
  if (source.resourcesUsed.length > 0) {
    let hr = document.createElement('hr');
    thanksText.appendChild(hr);

    let resourceHeader = document.createElement('h3');
    resourceHeader.innerText = 'Used on this site:';
    thanksText.appendChild(resourceHeader);

    source.resourcesUsed.forEach((resource) => {
      let credit = document.createElement('p');
      let link = document.createElement('a');
      link.href = resource.resourceLink;
      link.innerText = resource.resourceName;
      credit.appendChild(link);

      let author = document.createTextNode(` by ${resource.resourceAuthor}`);
      credit.appendChild(author);
      thanksText.appendChild(credit);
    });
  }

  article.appendChild(thanksText);
  thanksContainer.appendChild(article);
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


// Use scrollY effect
window.addEventListener('scroll', function () {
  var header = document.querySelector('.main-menu');
  header.classList.toggle('sticky', window.scrollY > 0);
});
