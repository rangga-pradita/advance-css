import { useState } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";

const lightTheme = {
    bg: "#ffffff",
    buttonText: "#000000",
    border: "#000000",
};
const darkTheme = {
    bg: "#121212",
    buttonText: "#ffffff",
    border: "#ffffff",
};
const bounce = keyframes`
    0%, 100% {transform: translateY(0);}
    50% {transform: translateY(-10px);}
`;
const Page = styled.div`
    min-height: 100vh;
    width: 100vw;
    background: ${({theme}) => theme.bg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
`;
const Title = styled.h2`
    color: #d16ba5;
`;
const BaseButton = styled.button`
    border: 1px solid ${({theme}) => theme.border};
    color: ${({theme}) => theme.buttonText};
    background: transparent;
    padding: 10px 24px;
    margin: 12px;
    font-weight: bold;
    cursor: pointer;
`;
const BounceButton = styled(BaseButton)`
    animation: ${bounce} 1s infinite;
`;

export default function StyledTheme(){
    const [dark, setDark] = useState(false);

    return(
        <ThemeProvider theme={dark ? darkTheme : lightTheme}>
            <Page>
                <Title>Selamat Datang di Materi Jayjay!</Title>
                <BaseButton onClick={() => setDark(!dark)}>Ganti Tema</BaseButton>
                <BounceButton>Ayo Belajar Animasi</BounceButton>
            </Page>
        </ThemeProvider>
    );
}