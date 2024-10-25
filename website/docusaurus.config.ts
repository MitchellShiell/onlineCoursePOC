import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Docusaurus Async Course POC',
  tagline: 'Proof of concept for an open access course using Docusaurus',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://async-course-poc.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OICR', // Usually your GitHub org/user name.
  projectName: 'Async Course POC', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },

  plugins: [
    './docsPlugin.ts',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'module1',
        path: 'module1',
        routeBasePath: 'module1',
        sidebarPath: require.resolve('./sideBars/module1Sidebars.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'module2',
        path: 'module2',
        routeBasePath: 'module2',
        sidebarPath: require.resolve('./sideBars/module2Sidebars.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'module3',
        path: 'module3',
        routeBasePath: 'module3',
        sidebarPath: require.resolve('./sideBars/module3Sidebars.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'Course',
        path: 'Course',
        routeBasePath: 'Course',
        sidebarPath: require.resolve('./sideBars/courseSidebars.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
    {
      id: 'community',
      path: 'community',
      routeBasePath: 'community',
      sidebarPath: require.resolve('./sideBars/communitySidebars.ts'),
    },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sideBars/sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MitchellShiell/onlineCoursePOC.git',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MitchellShiell/onlineCoursePOC/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Workshop POC',
      logo: {
        alt: 'OICR logo',
        src: 'img/logo.png',
      },
      items: [
        // {to: '/module1/intro', label: 'Module 1', position: 'left'},
        // {to: '/module2/intro', label: 'Module 2', position: 'left'},
        // {to: '/module3/intro', label: 'Module 3', position: 'left'},
        {to: '/course/overview', label: 'Course', position: 'left'},
        {to: '/community/support', label: 'Community', position: 'left'},
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/MitchellShiell/onlineCoursePOC',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Module 1',
              to: '/course/overview',
            },
            {
              label: 'Module 2',
              to: '/course/overview',
            },
            {
              label: 'Module 3',
              to: '/course/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Support',
              href: '/community/support',
            },
            {
              label: 'Contributing',
              href: '/community/contribution',
            },
            {
              label: 'Code of Conduct',
              href: '/community/code-of-conduct',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Team',
              href: '/community/contribution',
            },
            {
              label: 'Funding',
              href: '/community/code-of-conduct',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/MitchellShiell/onlineCoursePOC',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
