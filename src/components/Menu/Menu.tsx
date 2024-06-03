import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import './Menu.css'

const Menu: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="language">
        <LanguageSwitcher />
      </div>
      <section className="container">
        <h1>{t('Home')}</h1>
        <Link to="category">
          <Button type="primary" className='container-btn'>
            {t("Category")}
          </Button>
        </Link>

        <Link to="product">
          <Button type="primary" className='container-btn'>
            {t("Product")}
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Menu;
