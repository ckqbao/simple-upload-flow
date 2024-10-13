import { ReactNode } from 'react';

export function generateMetadata() {
  return {
    title: 'Upload',
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
