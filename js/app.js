window.onload = function() {
  window.splendid.init();
};

// splendid
;(window => {

  window.splendid = {};

  return window.splendid.init = _ => {

    // keep track of the clicks
    let bodyCount = 0;
    let body = document.querySelector('body');

    body.addEventListener('click', event => {
      if (bodyCount < 20) {
        return bodyCount++;
      } else {
        // get the party started
        getGiphyImage(getRandomTag(tagCollection));
      }
    })

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

        body.appendChild(imgElement);
      });

      req.open("GET", `https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${randomTag}`);
      return req.send();
    }

    function getRandomTag(tagCollection) {
      return encodeURI(tagCollection[Math.floor(Math.random() * tagCollection.length)])
    }

    // infinite scroll and flippy fun
    let flipCount = 0;
    let main = document.querySelector('.main');

    window.onscroll = function() {
      let offset = document.body.scrollTop + window.innerHeight + 300;
      let height = document.body.offsetHeight;

      if (offset >= height) {
        let mainClone = main.cloneNode(true);

        if (flipCount % 2 === 0) {
          let sectionElements = mainClone.querySelectorAll('.main > div');

          Array.prototype.forEach.call(sectionElements, section => {
            if (Math.floor(Math.random() * 2)) {
              section.style.transform = 'rotate(180deg)';
            }
            return section;
          });
        }

        main.appendChild(mainClone);
      }
    };
  }
})(window)

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