import React from "react";
import { Form, Input } from "antd";


interface InputFormProps {
  placeholder: string;
  label: string;
  name: string | number;
  type: string
}


const InputForm: React.FC<InputFormProps> = ({ placeholder, label, name, type}) => {
  return (
    <Form.Item label={label} name={name} key={name}>
      <Input placeholder={placeholder} type={type}/>
    </Form.Item>
  );
};

export default InputForm;