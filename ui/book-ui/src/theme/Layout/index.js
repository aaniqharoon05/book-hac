import React from 'react';
import Layout from '@theme-original/Layout';
import DifficultySwitcher, { DifficultyProvider } from '@site/src/components/DifficultySwitcher';
import LanguageSwitcher from '@site/src/components/LanguageSwitcher';

export default function LayoutWrapper(props) {
  return (
    <DifficultyProvider>
      <Layout {...props}>
        <div style={{display: 'flex', justifyContent: 'flex-end', gap: '1rem', padding: '1rem'}}>
          <DifficultySwitcher />
          <LanguageSwitcher />
        </div>
      {props.children}
    </Layout>
  );
}
