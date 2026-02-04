import { useState } from "react";
import { ThemeProvider, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

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
const bounceEmo = keyframes`
    0%, 100% {transform: translateY(0);}
    50% {transform: translateY(-15px);}
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
const BaseButton = styled.button`
    border: 1px solid ${({theme}) => theme.border};
    color: ${({theme}) => theme.buttonText};
    background: transparent;
    padding: 10px 24px;
    margin: 12px;
    font-weight: bold;
    cursor: pointer;
`;
const Title = styled.h2`
    color: #996bd1;
`;
const BounceButton = styled(BaseButton)`
    animation: ${bounceEmo} 1s infinite;
`;

export default function EmotionTheme(){
    const [dark, setDark] = useState(false);
    const theme = dark ? darkTheme : lightTheme;

    return(
        <ThemeProvider theme={theme}>
            <Page>
                <Title>Selamat Datang di Materi JayJay</Title>
                <Title>Ini adalah Emotion Theme</Title>
                <BaseButton onClick={() => setDark(!dark)}>Ganti Tema</BaseButton>
                <BounceButton>Ayo Belajat Animasi</BounceButton>
            </Page>
        </ThemeProvider>
    );
}
