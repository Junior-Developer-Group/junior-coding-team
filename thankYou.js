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
