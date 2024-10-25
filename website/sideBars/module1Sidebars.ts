import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
module1Sidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

//   guidesSidebar: [
//     {
//       type: 'category',
//       label: 'moduleA',
//       items: ['moduleA/nestedFolder/nestedElement'],
//     },
//     {
//       type: 'category',
//       label: 'moduleB',
//       items: ['moduleB/littleBlackSubmarines'],
//     },
//   ],
};

export default sidebars;
