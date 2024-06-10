import React from "react";
import { Form, Checkbox } from "antd";


interface CheckboxProps {
  label: string | number;
  name: string;
}


const CheckboxInput: React.FC<CheckboxProps> = ({label, name}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      valuePropName="checked"
      initialValue={false} 
    >
      <Checkbox />
    </Form.Item>
  );
};

export default CheckboxInput;