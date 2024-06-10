import React from "react";
import { Form, Select as AntdSelect} from "antd";
import { useTranslation } from "react-i18next";

interface SelectFormProps {
  placeholder: string;
  label: string;
  name: string;
  options?: string[];
}

const Select: React.FC<SelectFormProps> = ({ placeholder, label, name, options }) => {
  const { t } = useTranslation();
  return (
    <Form.Item label={label} name={name}>
      <AntdSelect placeholder={placeholder}>
        {options ? options.map((value: string) => (
          <AntdSelect.Option value={value} key={value}>
            {t(value)}
          </AntdSelect.Option>
        )) : null}
      </AntdSelect>
    </Form.Item>
  );
};

export default Select;
