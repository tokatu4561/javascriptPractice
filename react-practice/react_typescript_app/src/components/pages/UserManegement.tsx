import {
  Wrap,
  WrapItem,
  Image,
  Spinner,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";

import { UserCard } from "../organisms/User/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUsers";
import { UserDetailModal } from "../organisms/User/UserDetailModal"

export const UserManegement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser} = useSelectUser();

  useEffect(() => {
    getUsers();
  }, []);

  const onClickUser = useCallback((id: number) => {
    onSelectUser({id, users, onOpen});
  }, [users, onSelectUser, onOpen]);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="space-around">
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} onClose={onClose} isOpen={isOpen}></UserDetailModal>
    </>
  );
});
