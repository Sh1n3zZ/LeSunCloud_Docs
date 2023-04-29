// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "晞 · Docs",
  tagline: "-Per aspera ad astra.",
  url: "https://docs.lesun.cloud",
  baseUrl: "/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: '7wate', // Usually your GitHub org/user name.
  // projectName: 'wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Sh1n3zZ/LeSunCloud_Docs/edit/main/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: false,
        },
        blog: {
          blogTitle: "晞 · Docs",
          blogDescription: "晞云云计算产品文档 - Docs For LeSunCloud",
          blogSidebarCount: 7,
          blogSidebarTitle: "近期文章",
          showReadingTime: true,
          editUrl: "https://github.com/Sh1n3zZ/LeSunCloud_Docs/edit/main/",
          feedOptions: {
            title: "晞 · Docs",
            description: "晞云云计算产品文档 - Docs For LeSunCloud",
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} <a href="https://lesun.cloud">晞云</a> All Rights Reserved.<br><a href="https://beian.miit.gov.cn/">粤ICP备2023028108号-1</a>`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          filename: 'sitemap.xml',
        },
        googleAnalytics: {
          trackingID: "G-MHMEL0F832",
          anonymizeIP: true,
        },
        gtag: {
          trackingID: 'G-MHMEL0F832',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "getting-started",
        path: "docs/getting-started",
        routeBasePath: "getting-started",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/Sh1n3zZ/LeSunCloud_Docs/edit/main/",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "programming-language",
        path: "docs/programming-language",
        routeBasePath: "programming-language",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/Sh1n3zZ/LeSunCloud_Docs/edit/main/",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "structures-algorithms",
        path: "docs/structures-algorithms",
        routeBasePath: "structures-algorithms",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/Sh1n3zZ/LeSunCloud_Docs/edit/main/",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "computer-composition",
        path: "docs/computer-composition",
        routeBasePath: "computer-composition",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/Sh1n3zZ/LeSunCloud_Docs/edit/main/",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "computer-network",
        path: "docs/computer-network",
        routeBasePath: "computer-network",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/Sh1n3zZ/LeSunCloud_Docs/edit/main/",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "operating-system",
        path: "docs/operating-system",
        routeBasePath: "operating-system",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/Sh1n3zZ/LeSunCloud_Docs/edit/main/",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "database-system",
        path: "docs/database-system",
        routeBasePath: "database-system",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/Sh1n3zZ/LeSunCloud_Docs/edit/main/",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "computer-security",
        path: "docs/computer-security",
        routeBasePath: "computer-security",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/Sh1n3zZ/LeSunCloud_Docs/edit/main/",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "software-engineering",
        path: "docs/software-engineering",
        routeBasePath: "software-engineering",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/Sh1n3zZ/LeSunCloud_Docs/edit/main/",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "compilation-principle",
        path: "docs/compilation-principle",
        routeBasePath: "compilation-principle",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/Sh1n3zZ/LeSunCloud_Docs/edit/main/",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],

    "docusaurus-plugin-umami",
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'Always For Freedom. The site by 7Wate.',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      metadata: [
        {
          name: "keywords",
          content: "晞云, wiki, blog, c, c++, java, python, linux, 云计算",
        },
      ],
      navbar: {
        title: "📚 晞 · Docs",
        hideOnScroll: true,
        // logo: {
        //   alt: 'Site Logo',
        //   src: 'img/logo.svg',
        //   srcDark: 'img/logo_dark.svg',
        //   href: 'https://docusaurus.io/',
        //   target: '_self',
        //   width: 32,
        //   height: 32,
        // },
        items: [
          {
            position: "right",
            label: "👨🏻‍🎓 文档",
            items: [
              {
                label: "基础入门",
                to: "/getting-started",
              },
              {
                label: "程序设计语言",
                to: "/programming-language",
              },
              {
                label: "数据结构与算法",
                to: "/structures-algorithms",
              },
              {
                label: "计算机组成",
                to: "/computer-composition",
              },
              {
                label: "计算机网络",
                to: "/computer-network",
              },
              {
                label: "操作系统",
                to: "/operating-system",
              },
              {
                label: "数据库系统",
                to: "/database-system",
              },
              {
                label: "计算机系统安全",
                to: "/computer-security",
              },
              {
                label: "软件工程",
                to: "/software-engineering",
              },       
              {
                label: "编译原理",
                to: "/compilation-principle",
              },
            ],
          },
        ],
      },
      algolia: {
        apiKey: "b85039aa93c6387b97f0f14cebe76bea",
        appId: "LMJA03N982",
        indexName: "DocsSearch",
      },
      umami: {
        websiteid: "7efcd733-c232-43db-9f17-10a00c53b152",
        src: "https://umami.7wate.org/umami.js",
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://lesun.cloud">晞云</a> All Rights Reserved.<br><a href="https://beian.miit.gov.cn/">粤ICP备2023028108号-1</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: "markdown",
        additionalLanguages: ["java", "git","nginx","http"],
      },
    }),
};

module.exports = config;
