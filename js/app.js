window.onload = function() {
  window.splendid.gifs();
  window.splendid.infiniteScroll();
};

// splendid
;(window => {
  let body = document.querySelector('body');

  let infiniteScrollDocumentFragment = document.createDocumentFragment();
  body.appendChild(infiniteScrollDocumentFragment);

  window.splendid = {};

  window.splendid.gifs = _ => {
    let bodyCount = 0;

    body.addEventListener('click', event => {
      if (event.target.nodeName !== 'A') {
        return getGiphyImage(getRandomTag(tagCollection));
      }
    });

    // xhr to giphy and preps image for appearance
    function getGiphyImage(randomTag) {
      let req = new XMLHttpRequest();
      req.addEventListener("load", function(){
        let img_url = JSON.parse(this.responseText).data.fixed_width_downsampled_url;

        let imgElement = document.createElement('img');
        imgElement.src = img_url;
        imgElement.classList.add('splendid');

        let pageYOffset = window.pageYOffset;
        let windowHeight = window.innerHeight;
        let windowWidth = window.innerWidth;

        imgElement.setAttribute('alt', randomTag);
        imgElement.style.position = 'absolute';

        imgElement.onload = _ => {
          imgElement.style.top = `${Math.floor(Math.random() * windowHeight) + (pageYOffset - imgElement.height + 50)}px`;
          imgElement.style.left = `${Math.floor(Math.random() * (windowWidth - imgElement.width))}px`;
        };

        return infiniteScrollDocumentFragment.appendChild(imgElement);
      });

      req.open("GET", `https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${randomTag}`);
      return req.send();
    }

    function getRandomTag(tagCollection) {
      return encodeURI(tagCollection[Math.floor(Math.random() * tagCollection.length)]);
    }
  };

  window.splendid.infiniteScroll = _ => {
    let main = document.querySelector('.main');
    let infiniteCount = 0;
    let baseProbability = 0.3;
    let rollingProbability = 0;

    window.onscroll = function() {
      let offset = (window.pageYOffset || document.documentElement.scrollTop) + window.innerHeight + 300;
      let height = document.body.offsetHeight;

      if (offset >= height) {
        infiniteCount += 0.1;
        rollingProbability += infiniteCount;

        let mainClone = main.cloneNode(true);
        let sectionElements = mainClone.querySelectorAll('.main > div');

        Array.prototype.forEach.call(sectionElements, section => {
          if (maybe(baseProbability * rollingProbability)) {
            section.style.transform = `rotate(${randomBetween(-360, 360)}deg) translate(${randomBetween(-50, 50)}px, ${randomBetween(-50, 50)}px)`;
            section.style.webkitTransform = `rotate(${randomBetween(-360, 360)}deg) translate(${randomBetween(-50, 50)}px, ${randomBetween(-50, 50)}px)`;
          }
          return section;
        });

        if (maybe(baseProbability)) {
          mainClone.style.transform = 'rotate(180deg)';
        }

        mainClone.classList.add('fuck-infinite-scroll');
        return body.appendChild(mainClone);
      }
    };
  };

  function maybe(probability) {
   return !!probability && Math.random() <= probability;
  }

  function randomBetween(min, max) {
    return min + Math.random() * ( max + 1 - min);
  }

})(window);

// https://github.com/GomaGames/BizDev-Meeting
const tagCollection = [
  'social',
  '4G',
  'Aggregator',
  'Agile',
  'Ajax',
  'Algorithm',
  'Benchmarking',
  'Back-end',
  'Beta',
  'Big data',
  'Bleeding edge',
  'Blog',
  'Bring your own Device',
  'Bricks-and-clicks',
  'Clickthrough',
  'Cloud',
  'CloudOps',
  'Collaboration',
  'Content management',
  'Content Management System',
  'Convergence',
  'Cross-platform',
  'Cyber-physical Systems',
  'Datafication',
  'Data mining',
  'large data sets',
  'Data science',
  'Deep dive',
  'Deep web',
  'Design pattern',
  'DevOps',
  'Digital divide',
  'Digital Remastering',
  'Digital Rights Management',
  'Digital signage',
  'Disruptive Technologies',
  'Document management',
  'Dot-bomb',
  'Test-Driven Development',
  'Behavior-Driven Development',
  'Fuck-Driven Development',
  'E-learning',
  'End-to-End',
  'Engine',
  'Enterprise Content Management',
  'Enterprise Service Bus',
  'Evolution',
  'Darwinism',
  'Framework',
  'Folksonomy',
  'Fuzzy logic',
  'Growth Hacking',
  'HTML5',
  'Immersion',
  'Information superhighway',
  'Internet of Things',
  'Innovation',
  'Machine Learning',
  'Mashup',
  'Microservices',
  'Mobile',
  'Modularity',
  'Nanotechnology',
  'Netiquette',
  'Network Function virtualization',
  'Next Generation',
  'Object-Oriented Programming',
  'Omnichannel',
  'Pandering',
  'Parsing',
  'PaaS',
  'Podcasting',
  'Portal',
  'Real-time',
  'Responsive Web Design',
  'Sensorization',
  'SaaS',
  'Scalability',
  'Skeuomorphic',
  'Social bookmarking',
  'Social software',
  'Software Defined',
  'Software Defined Networking',
  'Spam',
  'Sync-up',
  'Systems Development Life-Cycle',
  'Tagging',
  'Think outside the box',
  'Thought Leader',
  'Transmedia',
  'Unified Communications',
  'User generated content',
  'Viral',
  'Virtualization',
  'Vlogging',
  'Vortal',
  'Web 2.0',
  'Webinar',
  'Weblog',
  'Web services',
  'Wikiality',
  'Workflow'
];