import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Taming DataSaurus',
  tagline: 'A dino-mite Open Access Course for Research Data Management',
  favicon: 'img/favicon.ico',

  url: 'https://async-course-poc.com',
  baseUrl: '/',

  organizationName: 'OICR',
  projectName: 'Async Course POC',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },

  plugins: [
    './docsPlugin.ts',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'course',
        path: 'course',
        routeBasePath: 'course',
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
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Workshop POC',
      logo: {
        alt: 'OICR logo',
        src: 'img/logo.png',
      },
      items: [
        {to: '/course/overview', label: 'Course', position: 'left'},
        {to: '/community/support', label: 'Community', position: 'left'},
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