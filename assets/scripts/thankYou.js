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
      url: 'data:image/jpeg;base64,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',
      alt: 'SVG Backgrounds'
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
        'data:image/jpeg;base64,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',
      alt: 'Font Awesome'
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
