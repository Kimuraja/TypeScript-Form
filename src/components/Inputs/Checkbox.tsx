import React from "react";
import { Form, Checkbox as AntdCheckbox } from "antd";


type CheckboxProps = {
  label: string | number;
  name: string;
}


const Checkbox: React.FC<CheckboxProps> = ({label, name}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      valuePropName="checked"
      initialValue={false} 
    >
      <AntdCheckbox />
    </Form.Item>
  );
};

export default Checkbox;