import { LayoutPages } from 'kit/LayoutPages';

import dynamic from 'next/dynamic';

const ContentEditor = dynamic(() => import('components/ContentEditor' as string), {
  ssr: false,
});

const TestComponents = () => (
  <LayoutPages>
    <ContentEditor />
  </LayoutPages>
);

export default TestComponents;
