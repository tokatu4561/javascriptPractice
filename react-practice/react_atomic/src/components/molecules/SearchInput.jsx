import { memo } from "react";
import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = memo(() => {
    return (
        <div>
            <SContainer>
            <Input placeholder="検索条件を入力"></Input>
            <SButtonWrapper>
            <PrimaryButton>検索</PrimaryButton>
            </SButtonWrapper>
            </SContainer>
        </div>
    )
});

const SContainer = styled.div`
    display: flex;
    aligin-items: center;
`

const SButtonWrapper = styled.div`
    padding-left: 8px;
`