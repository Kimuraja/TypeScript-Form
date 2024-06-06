import { ProductConfig } from '../../config/ConfigArray';
import DynamicForm from '../DynamicForm/FormGenerator';
import { useTranslation } from "react-i18next";


const Product: React.FC = () => {
  const { t } = useTranslation();

  
  return (
    <section>
      <h1>{t('product')}</h1>
      <DynamicForm config={ProductConfig} />
    </section>
  );
};

export default Product;
