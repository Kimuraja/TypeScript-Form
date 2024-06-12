import React from "react";
import { Form, Input as AntdInput } from "antd";


type InputFormProps = {
  placeholder: string;
  label: string;
  name: string | number;
  type: string
}


const Input: React.FC<InputFormProps> = ({ placeholder, label, name, type}) => {
  return (
    <Form.Item label={label} name={name} key={name}>
      <AntdInput placeholder={placeholder} type={type}/>
    </Form.Item>
  );
};

export default Input;