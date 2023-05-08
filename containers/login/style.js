import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
`;


const Section = styled.div`
   height: 100vh;
   overflow: hidden;

   
   :nth-child(2) {
       overflow-Y: scroll; 
   }
`;

const Container = styled.div`
    padding: 30px 16px;
`;

const BannerCar = styled.img`
   width: 100%;
   height: 100%;    
`;


const Title = styled.h1`

`;



const İnputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:20px;

    &>span {
        color: red;
    }
`;

const Label = styled.label`
    cursor: pointer;

`;

const ValidAnimation = keyframes`
0% , 100% {transform: translateX(0);}
25% {transform: translateX(8px);}
75% {transform: translateX(-8px);}
`;

const İnput = styled.input`
    padding: 10px 0;
    border:  none;
    outline: none;
    background: transparent;
    border-bottom: 1px solid grey;
    cursor: pointer;

    &:invalid {color: red; border:1px solid red; animation: ${ValidAnimation} 0.1634s 0s 2;}
    &:valid {color:black ;}

    :


`;

const ButtonContainer = styled.div`
   display: flex;
   margin: 20px 0 0;
`;

const Button = styled.button`
   width: 100%;
   padding: 10px;
   background: yellow;
   color: #000;
   border: none;
   outline: none;
   border-radius:20px;
   margin: 0 10px;
   cursor: pointer;
   border: solid 1px transparent;
   transition: 0.5s ease;
   &:hover {
       background: #fff;
   }

 
   &.login {
       background: #fff;

        &:hover {
            border: solid 1px yellow;
        }
   }

`;





export {
    Wrapper,
    Section,
    BannerCar,
    Container,
    Title,
    İnputContainer,
    Label,
    İnput,
    ButtonContainer,
    Button
}