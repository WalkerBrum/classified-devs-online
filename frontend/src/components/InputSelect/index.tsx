import  { useState } from 'react';
import { Box, ChevronDownIcon, Input, Modal, Pressable, VStack } from 'native-base';

import { THEME } from '@theme/index';

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
    <Box>
      <Pressable onPress={() => setIsOpen(true)}>
        <Input
          placeholder={placeholder}
          placeholderTextColor="gray.300"
          value={service}
          h={14}
          borderColor="gray.600" // Change this line to set the border color
          color="gray.600"
          rounded="lg"
          fontFamily="body"
          fontSize="sm"
          isReadOnly // Use isReadOnly instead of isDisabled
          InputRightElement={
            <Pressable onPress={() => setIsOpen(true)} borderColor="gray.600" color="gray.600">
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
