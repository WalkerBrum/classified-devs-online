import React, { useState } from 'react';
import { Box, CheckIcon, Input, Modal, Pressable, VStack } from 'native-base';

export const InputSelect = () => {
  const [service, setService] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: "UX Research", value: "ux" },
    { label: "Web Development", value: "web" },
    { label: "Cross Platform Development", value: "cross" },
    { label: "UI Designing", value: "ui" },
    { label: "Backend Development", value: "backend" },
  ];

  return (
    <Box maxW="300">
      <Pressable onPress={() => setIsOpen(true)}>
        <Input
          placeholder="Choose Service"
          value={service}
          isDisabled
          _disabled={{
            cursor: 'pointer',
          }}
          InputRightElement={
            <Pressable onPress={() => setIsOpen(true)}>
              <Box p={2}>
                <CheckIcon size="5" color="teal.600" />
              </Box>
            </Pressable>
          }
        />
      </Pressable>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Choose Service</Modal.Header>
          <Modal.Body>
            <VStack space={2}>
              {options.map((option) => (
                <Pressable
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
