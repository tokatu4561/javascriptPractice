import { memo, ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/button";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

type Props = {
    id: number;
    imageUrl: string;
    userName: string;
    fullName: string;
    onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
 const {imageUrl,userName,fullName, onClick,id} = props;
  return (
    <Box
      p={4}
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      <Stack textAligh="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={imageUrl}
          alt="プロフィール編集"
          m="auto"
        ></Image>
        <Text fontSize="lg" fontWeight="bold">
          { userName }
        </Text>
        <Text fontSize="sm" color="gray">
          { fullName }
        </Text>
      </Stack>
    </Box>
  );
});
