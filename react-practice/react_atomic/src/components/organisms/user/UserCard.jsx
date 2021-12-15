import styled from "styled-components"
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
    const { user , isAdmin} = props;
    return (
        <Card>
            <UserIconWithName image={user.image} name={user.name} isAdmin={isAdmin}></UserIconWithName> 
            <SDl>
                <dt>メール</dt>
                <dd>{user.email}</dd>
                <dt>電話番号</dt>
                <dd>{ user.phone }</dd>
                <dt>会社名</dt>
                <dd>{ user.company.name }</dd>
                <dt>webサイト</dt>
                <dd>www/damoda</dd>
            </SDl>
        </Card>
    )
}

const SDl = styled.dl`
    text-align: left;
    margin-bottom: 0;
    dt {
        float: left;
    }
    dd {
        padding-left: 32px;
        padding-bottom: 8px;
        overflow-warp: break-word;
    }
`