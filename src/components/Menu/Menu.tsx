import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import './Menu.css'


const Menu: React.FC = () => {
  const { t } = useTranslation();

  
  return (
    <div>
      <section className="container">
        <h1>{t('home')}</h1>
        <Link to="category">
          <Button type="primary" className='container-btn'>
            {t("category")}
          </Button>
        </Link>

        <Link to="product">
          <Button type="primary" className='container-btn'>
            {t("product")}
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Menu;
