import { styled } from "styled-components";
import { BackIcon } from "./back-icon";
import { useRouter } from "next/navigation";

interface BtnProps {
    navigate: string;
}


const Button = styled.button`
    display: flex;
    align-items: center;
    justfify-content: center;
    gap: 8px;
    background: transparent;    
    border: none;
    cursor: pointer;

    font-weight: 500;
    font-size: 14px;
    line-height: 150%;

    color: var(--secondary-text)
`


export function BackBtn({ navigate } : BtnProps){
    const router = useRouter();
    const handleNavigate = () => {
        router.push(navigate)
    }

    return(
        <Button onClick = {handleNavigate}>
        <BackIcon></BackIcon> 
            Voltar
        </Button>
    )
}