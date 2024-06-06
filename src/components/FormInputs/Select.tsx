import React from "react";
import { Form, Select } from "antd";
import { useTranslation } from "react-i18next";


interface SelectFormProps {
  placeholder: string;
  label: string;
  name: string;
  options?: string[];
}


const SelectForm: React.FC<SelectFormProps> = ({ placeholder, label, name, options }) => {
  const { t } = useTranslation();
  return (
    <Form.Item label={label} name={name}>
      <Select placeholder={placeholder}>
        {options ? options.map((value: string) => (
          <Select.Option value={value} key={value}>
            {t(value)}
          </Select.Option>
        )) : null}
      </Select>
    </Form.Item>
  );
};

export default SelectForm;
