import { useState } from "react";
import { styled } from "@linaria/react";

const Page = styled.div`
min-height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: background 0.5s ease, color 0.5s ease;
`;
const BaseButton = styled.button`
border: 1px solid black;
background: transparent;
padding: 10px 24px;
margin: 12px;
font-weight: bold;
cursor: pointer;
`;
const BounceButton = styled(BaseButton)`
animation: bounce 1s infinite;
@keyframes bounce {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-10px); }
}
`;

export default function LinariaTheme() {
const [dark, setDark] = useState(false);
return (
<Page style={{ background: dark ? "black" : "white", color:"magenta"}}>
<h2>Selamat Datang di Materi Jayjay!</h2>
<BaseButton onClick={() => setDark(!dark)} 
style={{ 
    color: dark ? "white" : "black",
    borderColor: dark ? "white" : "black",
 }}
>Ganti Tema</BaseButton>
<BounceButton 
style={{ 
    color: dark ? "red" : "blue",
    borderColor: dark ? "red" : "blue",
 }}>Ayo Belajar Animasi!</BounceButton>
</Page>
);
}