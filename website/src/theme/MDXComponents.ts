import type {ComponentType} from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import H5P from '@site/src/components/H5P';
import H5PLink from '@site/src/components/H5PLink';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const components: typeof MDXComponents & {
  H5P: ComponentType<any>;
  H5PLink: ComponentType<any>;
} = {
  ...MDXComponents,
  H5P,
  H5PLink,
  Tabs,
  TabItem,
};

export default components;