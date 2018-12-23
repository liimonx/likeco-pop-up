const lk = new likeCO('.like', {
  scrollContainer: '.post-container',
  title: `Like this post?`,
  msg: `Sign in to make your opinion count.`,
  suggestlink: {
      text: 'sign in',
      link: '#'
  }
}, true);

const ck = new likeCO('.comment', {
  scrollContainer: '.post-container',
  title: `comment this post?`,
  msg: `Sign in to make your opinion count.`,
  suggestlink: {
      text: 'sign in',
      link: '#'
  }
}, true);

const sh = new likeCO('.share', {
  scrollContainer: '.post-container',
  title: `comment this post?`,
  msg: `Sign in to make your opinion count.`,
  suggestlink: {
      text: 'sign in',
      link: '#'
  }
}, true);
