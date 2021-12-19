import {
    Stack,
    Modal,
    ModalOverlay,
    ModalContent,
    useDisclosure,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
  } from "@chakra-ui/react";

import { memo, ReactNode, VFC } from "react";
import { User } from "../../../types/api/user";

type Props = {
    user: User | null;
    isOpen: boolean;
    onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
 const { isOpen, onClose, user} = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay></ModalOverlay>
    <ModalContent pb={6} autoFocus={false} motionPreset="slideInBottom">
      <ModalHeader>ユーザー情報</ModalHeader>
      <ModalCloseButton />
      <ModalBody mx={4}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>名前</FormLabel>
            <Input value={user?.username} isReadOnly />
          </FormControl>
          <FormControl>
            <FormLabel>フルネーム</FormLabel>
            <Input value={user?.name} isReadOnly />
          </FormControl>
          <FormControl>
            <FormLabel>MAIL</FormLabel>
            <Input value={user?.email} isReadOnly />
          </FormControl>
          <FormControl>
            <FormLabel>Tel</FormLabel>
            <Input value={user?.phone} isReadOnly />
          </FormControl>
        </Stack>
      </ModalBody>
    </ModalContent>
  </Modal>
  );
});
