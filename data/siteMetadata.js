const siteMetadata = {
  title: 'Hoone\'s Den',
  author: 'Chihoon Song',
  headerTitle: 'Hoone\'s Den',
  description: '평소 학습한 지식들을 정리하는 곳',
  language: 'ko-KR',
  theme: 'system', // system, dark or light
  siteUrl: 'https://marhead-blog-marhead.vercel.app/',
  siteRepo: 'https://github.com/Marhead/blog',
  siteLogo: '/static/images/logo-2.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/blog-thumbnail.png',
  email: 'clgns0415@gmail.com',
  telegram: 'https://t.me/Marhead',
  github: 'https://github.com/Marhead',
  twitter: 'https://twitter.com/chihoon0415',
  facebook: 'https://www.facebook.com/profile.php?id=100003318164804',
  discord: 'Marhead#1482',
  // youtube: 'https://youtube.com',
  // linkedin: 'https://www.linkedin.com',
  locale: 'ko-KR',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    // umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      // umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    googleAnalytics: {
      googleAnalyticsId: 'G-2GJN3P7RBT', // e.g. G-XXXXXXX
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: false,
  },
  comment: {
    // If you want to use a commenting system other than giscus you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // Place the comment box above the comments. options: bottom, top
      inputPosition: 'bottom',
      // Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
      lang: 'ko',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    // utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      // repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      // issueTerm: '', // supported options: pathname, url, title
      // label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      // theme: '',
      // theme when dark mode
      // darkTheme: '',
    // },
    // disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      // shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    //},
  },
}

module.exports = siteMetadata
