import { Link } from "react-router-dom";
import { CategoryConfig as category } from "../../config/CategoryConfig";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Button, Form, Input, InputNumber } from "antd";

export default function Category() {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    form.resetFields();
  };

  return (
    <>
      <div className="language"> 
        <LanguageSwitcher />
      </div>
      <section>
        <h1>{t('Category')}</h1>
        <Form form={form} onFinish={onFinish} className="form">
          <Form.Item label={t("Name")} name="name" className="form__item">
            <Input
              placeholder={t("Name")}
              type={category.name.type}
              required
              className="item--input"
            />
          </Form.Item>

          <Form.Item label={t("Order")} name="order" className="form__item">
            <InputNumber
              placeholder={t("Order")}
              type={category.order.type}
              required
              className="item--input"
            />
          </Form.Item>

          <Form.Item className="form__item">
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
}
