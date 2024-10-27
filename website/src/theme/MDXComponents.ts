import type {ComponentType} from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import H5PLocalHTML from '@site/src/components/H5PLocalHTML';
import H5PLink from '@site/src/components/H5PLink';

const components: typeof MDXComponents & {
  H5PLocalHTML: ComponentType<any>;
  H5PLink: ComponentType<any>;
} = {
  ...MDXComponents,
  H5PLocalHTML,
  H5PLink,
};

export default components;