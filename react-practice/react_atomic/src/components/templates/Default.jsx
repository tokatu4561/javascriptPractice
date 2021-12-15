import { Header } from "../atoms/layouts/Header";
import { Fotter } from "../atoms/layouts/Fotter";

export const Default = (props) => {
    const { children } = props;
    return (
        <>
        <Header />
        { children }
        <Fotter />
        </>
    )
}