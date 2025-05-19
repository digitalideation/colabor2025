function getTextNodes(node) {
  const nodes = [];
  const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, {
    acceptNode: function(node) {
      if (
        node.parentNode &&
        ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(node.parentNode.tagName)
      ) {
        return NodeFilter.FILTER_REJECT;
      }
      if (node.nodeValue.trim()) {
        return NodeFilter.FILTER_ACCEPT;
      }
      return NodeFilter.FILTER_SKIP;
    }
  });
  let current;
  while ((current = walker.nextNode())) {
    nodes.push(current);
  }
  return nodes;
}

// Extract and store word positions from all text nodes
const originalNodes = getTextNodes(document.body);
const wordEntries = [];

originalNodes.forEach((node) => {
  const words = node.textContent.split(/(\s+)/); // keeps spaces
  if (words.length) {
    node._restWords = words; // store for reference
    words.forEach((word, i) => {
      if (!word.trim()) return; // skip spaces
      wordEntries.push({ node, index: i });
    });
  }
});

// Shuffle the words randomly
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(wordEntries);

let currentIndex = 0;
const totalTime = 120000; 
const rampUpTime = 20000; 
const startTime = Date.now();

function replaceNextWord() {
  if (currentIndex >= wordEntries.length) return;

  const now = Date.now() - startTime;
  let interval;

  if (now < rampUpTime) {
    const progress = now / rampUpTime;
    interval = 1000 - 700 * progress; 
  } else {
    interval = 100; 
  }

  const { node, index } = wordEntries[currentIndex];
  if (node._restWords && node._restWords[index]) {
    node._restWords[index] = 'rest';
    node.textContent = node._restWords.join('');
  }

  currentIndex++;
  setTimeout(replaceNextWord, interval);
}

replaceNextWord();


const imagePaths = [
  'img/stock-photo-asian-businesswoman-resting-at-desk-in-office-2547422509.jpg',
  'img/stock-photo-businessman-sitting-on-a-chair-to-take-a-rest-207841354.jpg',
  'img/stock-photo-human-palm-touching-lawn-grass-low-angle-view-2099901700.jpg',
  'img/stock-photo-relaxed-couple-resting-sitting-in-an-exterior-sofa-in-a-terrace-2533214039.jpg',
  'img/stock-photo-resting-peacefully.jpg',
  'img/stock-photo-side-view-profile-of-a-relaxed-woman-smelling-coffee-sitting-in-a-sofa-at-home-at-sunset-2522238619.jpg',
  'img/stock-photo-woman-in-a-field-with-flowers-freedom-active-happiness-concept-2188845833.jpg',
  'img/stock-photo-woman-sleeping-and-relax-in-bedroom-for-zen-calm-and-home-for-recovery.jpg'
];

// Convert to full URLs using Chrome's runtime API
const imageChange = imagePaths.map(path => chrome.runtime.getURL(path));

// Shuffle helper
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const imageElements = Array.from(document.querySelectorAll('img'));
shuffle(imageElements);

let currentImageIndex = 0;
const imageStartTime = Date.now();
const imageRampUpTime = 10000;

function getRandomImage() {
  const i = Math.floor(Math.random() * imageChange.length);
  return imageChange[i];
}

function replaceNextImage() {
  if (currentImageIndex >= imageElements.length) return;

  const now = Date.now() - imageStartTime;
  let interval;

  if (now < imageRampUpTime) {
    const progress = now / imageRampUpTime;
    interval = 1000 - 800 * progress;
  } else {
    interval = 200;
  }

  const img = imageElements[currentImageIndex];
  img.src = getRandomImage();

  currentImageIndex++;
  setTimeout(replaceNextImage, interval);
}

setTimeout(() => {
  replaceNextImage();
}, 30000)
