import { memo, VFC } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Button,IconButton } from "@chakra-ui/button";

type Props = {
    onOpen: () => void; 
}

export const MenuIconButton:VFC<Props> = memo((props) => {
    const { onOpen } = props;
    return (
        <IconButton
        aria-label="メニューボタン"
        icon={<HamburgerIcon />}
        size="sm"
        variant="unstyled"
        display={{ base:'block', md: "none"}}
        onClick={onOpen}
      ></IconButton>
    )
});