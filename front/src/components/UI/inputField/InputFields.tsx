import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  BoxProps
} from "@chakra-ui/core";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  textarea?: boolean;
  hoverStyle?: BoxProps | undefined;
  focusStyle?: BoxProps | undefined;
  color?: string;
  backgroundColor?: string;
};

// '' => false
// 'error message stuff' => true

export const InputField: React.FC<InputFieldProps> = ({
  label,
  textarea,
  size: _,
  ...props
}) => {
  let InputOrTextarea = Input;
  if (textarea) {
    InputOrTextarea = Textarea;
  }
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error} w='100%'>
      <FormLabel htmlFor={field.name} alignSelf='center'>{label}</FormLabel>
      <InputOrTextarea {...field}
        {...props}
        id={field.name}
        color={props.color}
        backgroundColor={props.backgroundColor}
        _hover={props.hoverStyle}
        _focus={props.focusStyle} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};

InputField.defaultProps = {
  color: 'black',
  backgroundColor: 'white'
}