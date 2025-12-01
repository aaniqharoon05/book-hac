import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useHistory, useLocation } from '@docusaurus/router';
import {useActiveLocale} from '@docusaurus/plugin-content-docs/client';

function LanguageSwitcher() {
  const {i18n} = useDocusaurusContext();
  const {defaultLocale, locales} = i18n;
  const history = useHistory();
  const location = useLocation();

  const activeLocale = useActiveLocale();

  const changeLocale = (newLocale) => {
    const currentPath = location.pathname;
    const parts = currentPath.split('/').filter(Boolean);

    let newPath;
    if (newLocale === defaultLocale) {
      // Remove locale from path if it's the default locale
      newPath = '/' + parts.filter(part => part !== activeLocale.activeLocale).join('/');
    } else {
      // Add new locale to path if it's not the default
      if (parts[0] === activeLocale.activeLocale) {
        parts[0] = newLocale;
        newPath = '/' + parts.join('/');
      } else {
        newPath = `/${newLocale}/${parts.join('/')}`;
      }
    }
    history.push(newPath || '/');
  };

  return (
    <div className="dropdown dropdown--hoverable dropdown--right">
      <button className="button button--link navbar__item navbar__link">
        {activeLocale ? activeLocale.label : 'Language'}
      </button>
      <ul className="dropdown__menu">
        {locales.map((locale) => (
          <li key={locale}>
            <a
              className="dropdown__link"
              onClick={() => changeLocale(locale)}
              style={{cursor: 'pointer'}}
            >
              {i18n.localeConfigs[locale]?.label || locale}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageSwitcher;
