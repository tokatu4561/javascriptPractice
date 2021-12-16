import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UserProvider";

const users = [...Array(10).keys()].map((val)=>{
    return {
        id: val,
        name: "とかつ",
        image: "https://source.unsplash.com/brFsZ7qszSY",
        email: "1234@aaa.com",
        phone: "000-888-1111",
        company: {
          name:"テスト会社",
        }
    }
})

export const Users = () => {
    const { state } = useLocation();
    const isAdmin = state ? state.isAdmin : false;
    const { userInfo, setUserInfo} = useContext(UserContext);

    const onClickSwitch = () => {
        setUserInfo({isAdmin: !userInfo.isAdmin })
    }
    return(
        <SContainer>
            <SUserArea>
            <h2>ユーザー一覧</h2>
            <SearchInput></SearchInput>
            <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
            { users.map((user) => (
                <UserCard key={users.id} user={user} isAdmin={isAdmin} />
            )) } 
            </SUserArea>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`

const SUserArea = styled.div`
    padding-top: 48px;
    width: 100%;
    display: grid;
    grid-template-colums: repeat(auto-fit,minmax(200px, 1fr));
    grid-gap: 20px;
`