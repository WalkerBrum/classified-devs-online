import  { useState } from 'react';
import { Box, ChevronDownIcon, Input, Modal, Pressable, VStack } from 'native-base';

import { THEME } from '@theme/index';
import { jobTitle } from '../../data/optionsToRegister';

type Option = {
  label: string;
  value: string;
};

type InputSelectProps = {
  placeholder: string;
  color: keyof typeof THEME.colors | string;
  options: Option[];
}

export const InputSelect = ({ placeholder, color, options }: InputSelectProps) => {
  const [service, setService] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box maxW="300">
      <Pressable onPress={() => setIsOpen(true)} borderColor="gray.600"
          color="gray.600">
        <Input
          placeholder={placeholder}
          placeholderTextColor="gray.600"
          value={service}
          h={14}
          borderColor="gray.600"
          color="gray.600"
          rounded="lg"
          fontFamily="body"
          isDisabled
          InputRightElement={
            <Pressable onPress={() => setIsOpen(true)} borderColor="gray.600"
            color="gray.600">
              <Box p={2}>
                <ChevronDownIcon size="4" color={color} />
              </Box>
            </Pressable>
          }
        />
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
                    setService(option.value);
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
