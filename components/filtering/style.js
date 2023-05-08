import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    padding: 0 23px;
    align-items:center;
    background-image: url("/bgfilter.jpg");
    background-size: cover; 
    background-position:bottom;
`;

const Container = styled.div`
    width: 100%;
    max-width:540px;
`;


const Nav = styled.nav`
    width: 100%;
    display: flex;
    
`;

const VehicleButton = styled.button`
    background: #fff;
    color: #000;
    border: none;
    padding: 21px 0px;
    width: 100%;
    margin: 0 2px 2px 0px;
    font-size:20px;
    cursor: pointer;
    opacity: .9;

    &.Active {
        color: #1166a8;
        position: relative;
        opacity: 1;

        &::after {
            content: "";
            position: absolute;
            top: -5px;
            width: 100%;
            left: 0;
            height: 6px;
            background: #1166a8;
        };

        &::before{
            content: "";
            position: absolute;
            bottom: -5px;
            width: 100%;
            left: 0;
            height: 10px;
            background: #fff;
        }

    }

`;

const VehicleFilterArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;

`;

const SelectContainer = styled.div`
    width: 100%;
    display: flex;
    background: #fff;
    padding: 15px;
`;


const ChackedArea = styled.span`
    display: flex;
    align-items:center;
    margin: 0 15px 0 0; 
    padding: 7px;
    font-size:21px;

`;

const CheckBoxs = styled.input`
   position: relative;
   top: 0;
   width: 23px;
   height: 23px;
   -webkit-appearance: none;
   cursor: pointer;

   

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: solid 2px #000;
        border-radius:4px;
        margin:  0 -7px;
        background: url("${props => props.bgChacked}");
    }
    
`;

const CheckLable = styled.label`
    cursor: pointer;
`;


const InputWrapperSelection = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    padding: 10px;
`;

const InputSlecetSectıon = styled.div`
        display: flex;
        flex-wrap:wrap;
`;

const InputSection = styled.div`
        display: flex;
        align-items:center;
        width: 47.50%;
    
        margin: 0 5px 10px 5px; ;
        border: solid 1px black;
        border-radius: 4px; 
        position: relative;

        .loaderCenter {
            background: yellow;
            width: 100%;
            height: 100%;
            display: flex;
            align-items:center;
            justify-content:center;
        }

    @media (max-width:512px) {
        width: 100%;
    }
        
`;



const Input = styled.input`
    padding: 10px 5px;
    font-weight:500;
    border: none;
    outline: none;
    cursor: pointer;
    font-size:23px;
    width: 100%;

    &::placeholder {
        color: #000;
    }

    &:disabled {
        cursor: not-allowed;
    }

    background: url("${(props => props.imgUrl)}");
    
    &.result {
        background: yellow;
        color: #000;
    }

    &.Country {
        padding-right: 50px;
        background-repeat: no-repeat;
        background-position-y: center;
        background-position-x: 10px;
        background-size: 30px;
        &:hover {
            color: #1166a8;
        }
    }

`;

const Downİcon = styled.img`
    width: 15px;
    margin:  0px 7px 0px 0px ;
`;


const InputOptionsWrappre = styled.div`
    position: absolute;
    width:100%;
    max-height: 320px;
    overflow-y: scorll;
    overflow: hidden; 
    background: #fff;
    top: 55px;
    border: solid 1px #000;
    border-radius:4px;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    border-top:none; 
    padding: 7px;
    overflow: scroll;
    overflow-x: hidden;
    z-index:9;
`;

const OptionsTitle = styled.span`
    font-size:18px;
    letter-spacing : 2px;
    color:  #c4c4c4;
    padding: 7px;
`;


const InputOptions = styled.li`
    padding: 5px;
    width: 100%;
    display: block;
    cursor: pointer;
    background: url("${(props => props.imgUrl)}");

    &.Country {
        padding-left: 40px; 
        background-repeat: no-repeat;
        background-position-y: center;
        background-size: 30px; 
        &:hover {
            color: #1166a8;
        }
    }

  
`;




export {
    Wrapper,
    Container,
    Nav,
    VehicleButton,
    VehicleFilterArea,
    SelectContainer,
    ChackedArea,
    CheckBoxs,
    CheckLable,
    InputWrapperSelection,
    InputSlecetSectıon,
    InputSection,
    Input,
    Downİcon,
    InputOptionsWrappre,
    OptionsTitle,
    InputOptions,


}