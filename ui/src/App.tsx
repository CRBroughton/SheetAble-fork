import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {t('welcome')}
      <Icon icon="mdi:github" />
      <div>
        {i18n.language}
        <button type="button" onClick={() => changeLanguage('en-GB')}>English</button>
        <button type="button" onClick={() => changeLanguage('fr-FR')}>Français</button>
      </div>
    </>
  );
}

export default App;
