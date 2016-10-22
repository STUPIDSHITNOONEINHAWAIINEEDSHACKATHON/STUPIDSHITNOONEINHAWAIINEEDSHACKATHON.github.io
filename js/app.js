window.onload = function() {
  window.splendid.init();
};

// splendid
;(window => {
  window.splendid = {};
  return window.splendid.init = _ => {
    let bodyCount = 0; //
    let body = document.querySelector('body');
    let main = document.querySelector('.main');

    body.addEventListener('click', event => {
      if (bodyCount < 20) {
        return bodyCount++;
      } else {
        getGiphyImage(getRandomTag(tagCollection));
      }
    })

    function getGiphyImage(randomTag) {
      let req = new XMLHttpRequest();
      req.addEventListener("load", function(){
        let img_url = JSON.parse(this.responseText).data.fixed_width_downsampled_url;
        let imgElement = document.createElement('img');

        imgElement.src = img_url;
        imgElement.classList.add('splendid');

        let pageYOffset = window.pageYOffset;
        console.log('pageYOffset', pageYOffset);

        let windowHeight = window.innerHeight;
        console.log('windowHeight: ', windowHeight);

        console.log('top spawn: ', Math.floor(Math.random() * windowHeight) + pageYOffset);

        let windowWidth = window.innerWidth;
        console.log('windowWidth: ', windowWidth);

        console.log('left spawn: ', Math.floor(Math.random() * windowWidth));

        imgElement.setAttribute('alt', randomTag);
        imgElement.style.position = 'absolute';
        imgElement.onload = _ => {
        //   console.log(imgElement.height)
        //   console.log(imgElement.width)
          imgElement.style.top = `${Math.floor(Math.random() * windowHeight) + (pageYOffset - imgElement.height + 50)}px`;
          imgElement.style.left = `${Math.floor(Math.random() * (windowWidth - imgElement.width))}px`;
        };

        body.appendChild(imgElement);
      });

      req.open("GET", `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${randomTag}`);
      return req.send();
    }

    function getRandomTag(tagCollection) {
      return encodeURI(tagCollection[Math.floor(Math.random() * tagCollection.length)])
    }

    window.onscroll = function() {
      var d = document.body;
      var offset = d.scrollTop + window.innerHeight + 300;
      var height = d.offsetHeight;

      console.log('offset = ' + offset);
      console.log('height = ' + height);

      if (offset >= height) {
        console.log('At the bottom');
        let mainClone = main.cloneNode(true);
        main.appendChild(mainClone)
      }
    };
  }
})(window)

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