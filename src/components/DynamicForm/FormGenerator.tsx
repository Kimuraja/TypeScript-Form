import React from 'react';
import { Form, Button } from 'antd';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FormConfig from '../../config/FormConfig';
import Input from '../Inputs/Input';
import Select from '../Inputs/Select';
import Checkbox from '../Inputs/Checkbox';


interface Render {
  config: FormConfig[];
}

const DynamicForm: React.FC<Render> = ({ config }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const onFormSubmit = (values: FormConfig[]) => {
    console.log("Form values:", values);
    form.resetFields();
  };


  const generateForm = (configField: FormConfig) => {
    switch (configField.type) {
      case 'string':
        return (
          <Input
            placeholder={t(configField.label)}
            label={t(configField.label)}
            name={configField.label}
            key={configField.label}
            type={configField.type}
          />
        );
      case 'number':
        return (
          <Input
            placeholder={t(configField.label)}
            label={t(configField.label)}
            name={configField.label}
            key={configField.label}
            type={configField.type}
          />
        );
      case 'choice':
        return (
          <Select
            placeholder={t(configField.label)}
            label={t(configField.label)}
            name={configField.label}
            options={configField.options?.map(option => option)}
            key={configField.label}
          />
        );
      case 'bool':
        return (
          <Checkbox
            label={t(configField.label)}
            name={configField.label}
            key={configField.label}
          />
        );
      default:
        return null;
    }
  };


  return (
    <>
      <Form form={form} onFinish={onFormSubmit} className="form">
        {config.map((configField) => {
          return generateForm(configField);
        })}
      <Form.Item>
        <Button type="primary" htmlType="submit">{t('save')}</Button>
      </Form.Item>
      </Form>
      <Link to="/">
        <Button>{t("home")}</Button>
      </Link>
    </>
  );
};

export default DynamicForm;