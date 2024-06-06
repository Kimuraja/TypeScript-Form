import React from 'react';
import { CategoryConfig } from '../../config/ConfigArray';
import DynamicForm from '../DynamicForm/FormGenerator';
import { useTranslation } from "react-i18next";


const Category: React.FC = () => {
  const { t } = useTranslation();

  
  return (
    <section>
      <h1>{t('category')}</h1>
      <DynamicForm config={CategoryConfig} />
    </section>
  );
};

export default Category;
