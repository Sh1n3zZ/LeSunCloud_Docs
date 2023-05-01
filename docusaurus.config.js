// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '⭐️晞云⭐️',
  tagline: '保持热爱，共赴山海.',
  url: 'https://messiahhh.github.io/',
  baseUrl: '/', 
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Sh1n3zZ', // Usually your GitHub org/user name.
  projectName: 'LeSunCloud_Docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  plugins: ['@docusaurus/theme-live-codeblock'],
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Sh1n3zZ/LeSunCloud_Docs/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Sh1n3zZ/LeSunCloud_Docs/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true
        }
      },
      announcementBar: {
        id: 'support_us',
        content: '⭐️ 同时你也可以前往 <a target="_blank" rel="noopener noreferrer" href="https://github.com/Sh1n3zZ/LeSunCloud_Docs">GitHub</a> 给咱来一个 Star 噢 ヾ⁠(⁠･⁠ω⁠･⁠*⁠)⁠ﾉ',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      }, 
      navbar: {
        title: '✨ 晞 · Docs',
        hideOnScroll: true,
        items: [
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'Start',
            position: 'right',
            label: '正文',
          },
          {to: 'blog/面经', label: '面经', position: 'right'},
          {
            href: 'https://github.com/messiahhh/blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      }, 
      prism: { 
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'javascript',
        additionalLanguages: ['rust'],
      }, 
      colorMode: {
        respectPrefersColorScheme: true
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'BWG0DEIDEP',
    
        // Public API key: it is safe to commit it
        apiKey: 'd3f9fff64e1510e7299229fb32996203',
    
        indexName: 'messiahhh',
      }
    }),
};

module.exports = config;
