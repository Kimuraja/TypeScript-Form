import DynamicForm from '../DynamicForm/FormGenerator';
import { ProductConfig } from '../../config/ProductConfig/ProductConfig';
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