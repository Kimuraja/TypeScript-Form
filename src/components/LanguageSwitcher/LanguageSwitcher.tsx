import React from "react";
import { useTranslation } from "react-i18next";
import { Radio } from "antd";


const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };


  return (
    <Radio.Group>
      <Radio.Button value="start" onClick={() => changeLanguage("pl")}>
        Polski
      </Radio.Button>
      <Radio.Button value='' onClick={() => changeLanguage("en")}>
        English
      </Radio.Button>
      <Radio.Button value="end" onClick={() => changeLanguage("es")}>
        Español
      </Radio.Button>
    </Radio.Group>
  );
};

export default LanguageSwitcher;