import  { useState } from 'react';
import { Box, ChevronDownIcon, Input, Modal, Pressable, VStack, IInputProps, FormControl } from 'native-base';

import { THEME } from '@theme/index';

type Option = {
  label: string;
  value: string;
};

type InputSelectProps = IInputProps & {
  placeholder: string;
  color: keyof typeof THEME.colors | string;
  options: Option[];
  errorMessage?: string | null;
}

export const InputSelect = (
  { 
    placeholder, 
    color, 
    options, 
    isInvalid, 
    errorMessage = null,
    value,
    onChangeText,
    ...rest 
  }: InputSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const invalid = !!errorMessage || isInvalid;

  return (
    <Box>
      <Pressable onPress={() => setIsOpen(true)}>
        <FormControl isInvalid={invalid}>
          <Input
            placeholder={placeholder}
            placeholderTextColor="gray.300"
            value={value}
            h={14}
            borderColor="gray.600" 
            color="gray.600"
            rounded="lg"
            fontFamily="body"
            fontSize="sm"
            isReadOnly
            isInvalid={invalid}
            _invalid={{
              borderWidth: 1,
              borderColor: 'red.500'
            }}
            {...rest} 
            InputRightElement={
              <Pressable onPress={() => setIsOpen(true)} borderColor="gray.600" color="gray.600">
                <Box p={2}>
                  <ChevronDownIcon size="4" color={color} />
                </Box>
              </Pressable>
            }
          />
          <FormControl.ErrorMessage>
            {errorMessage}
          </FormControl.ErrorMessage>
        </FormControl>
      </Pressable>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>{placeholder}</Modal.Header>
          <Modal.Body>
            <VStack space={2}>
              {options.map((option) => (
                <Pressable
                  color="gray.600"
                  key={option.value}
                  onPress={() => {
                    onChangeText?.(option.value);
                    setIsOpen(false);
                  }}
                >
                  <Box p={2}>{option.label}</Box>
                </Pressable>
              ))}
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Box>
  );
};
