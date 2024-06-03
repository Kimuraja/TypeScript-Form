import React from "react";
import { Link } from "react-router-dom";
import { ProductConfig as product } from "../../config/ProductConfig";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Button, Form, Input, InputNumber, Select, Switch } from "antd";

const Product: React.FC = () => {
  const { t } = useTranslation();
  const [formData] = Form.useForm();

  const onFormSubmit = (values: any) => {
    console.log("Form values:", values);
    formData.resetFields();
  };

  return (
    <>
      <div className="language">
        <LanguageSwitcher />
      </div>

      <section>
        <h1>{t('Product')}</h1>
        <Form form={formData} onFinish={onFormSubmit}>
          <Form.Item label={t("Name")} name="name">
            <Input placeholder={t("Name")} type={product.name.type} required />
          </Form.Item>
          <Form.Item label={t("Size")} name="size">
            <Select placeholder={t("Size")}>
              <Select.Option value="small" type={product.size.type}>
                {t("Small")}
              </Select.Option>
              <Select.Option value="medium" type={product.size.type}>
                {t("Medium")}
              </Select.Option>
              <Select.Option value="large" type={product.size.type}>
                {t("Large")}
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label={t("Price")} name="price">
            <InputNumber
              placeholder={t("Price")}
              type={product.price.type}
              required
            />
          </Form.Item>
          <Form.Item label={t("Available")} name="available" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {t("Save")}
            </Button>
          </Form.Item>
          <Link to="/">
            <Button>{t("Home")}</Button>
          </Link>
        </Form>
      </section>
    </>
  );
};

export default Product;
