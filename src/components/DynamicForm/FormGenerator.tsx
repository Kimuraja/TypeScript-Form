import React from 'react';
import { Form, Button } from 'antd';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ConfigArray from '../../config/Interfaces';
import InputForm from '../FormInputs/InputForm';
import SelectForm from '../FormInputs/Select';
import CheckboxInput from '../FormInputs/Checkbox';


interface Render {
  config: ConfigArray[];
}
interface BaseConfig {
  key: ConfigArray;
}


const DynamicForm: React.FC<Render> = ({ config }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const onFormSubmit = (values: ConfigArray[]) => {
    console.log("Form values:", values);
    form.resetFields();
  };

  const generateForm = (key: keyof BaseConfig, configField: ConfigArray) => {
    switch (configField.type) {
      case 'string':
        return (
          <InputForm
            placeholder={t(configField.label)}
            label={t(configField.label)}
            name={key.toString()}
            key={key}
            type={configField.type}
          />
        );
      case 'number':
        return (
          <InputForm
            placeholder={t(configField.label)}
            label={t(configField.label)}
            name={key.toString()}
            key={key}
            type={configField.type}
          />
        );
      case 'choice':
        return (
          <SelectForm
            placeholder={t(configField.label)}
            label={t(configField.label)}
            name={configField.label}
            options={configField.options?.map(option => option)}
            key={key}
          />
        );
      case 'bool':
        return (
          <CheckboxInput
            label={t(configField.label)}
            name={key.toString()}
            key={key}
          />
        );
      default:
        return null;
    }
  };

  
  return (
    <>
      <Form form={form} onFinish={onFormSubmit} className="form">
        {config.map((configField, index) => {
          return generateForm(index.toString() as keyof BaseConfig, configField);
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
