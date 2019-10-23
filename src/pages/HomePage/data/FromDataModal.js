import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text
} from "@chakra-ui/core";

const FromDataModal = ({ isOpen, onClose, data }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>User Data</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="md">
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FromDataModal;
