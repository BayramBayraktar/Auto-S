import styled from "styled-components";

const Wrapper = styled.div`
    width: 330px;
    @media(max-width:1100px) {
        width: 0% !important;
        display: block;
        overflow: hidden;
        transition: .4s ease;
    }

`;

const MobileWrapper = styled.div`
    &.Active {
        position:fixed;
        width: 21.25rem;
        height: 100%;
        background: #fff;
        z-index : 99999;
        top: 0;
        left: 0;


        &>.Demo {
            height: 100%;
        }


        @media(max-width:700px) {
            width: 100%;
        }
    }
`;



const MobilFilterHeader = styled.div`
display: none;
@media(max-width:1100px) {
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding: 16px;
    border-bottom:1px solid #c4c4c4;
}
`;

const WrapperContainer = styled.div`
    height: 78%;
  
    @media(max-width:1100px) {
        overflow: hidden;
        overflow-y:scroll;      
    }
`;

const Container = styled.div`
    width: 100%;
    &:nth-child(2){
        margin-bottom:120px;
    }
`;

const Button = styled.button`
    width: 100%;
    display: flex;
    align-items:center;
    border: none;
    border-bottom: 1px solid #DCDCDC; 
    outline:none;
    background: #ffff;
    text-align:left;
    padding: 20px 16px;
    line-height:30px;
    font-weight:600;
    color: #626262;
    cursor: pointer;

    @media(max-width:700px) {
        padding: 15px 16px;
        font-size:11px;
    }
    
   

`;

const DropMenu = styled.div`
    background: #fff;
   
`;

const DropMenuItem = styled.div`
    padding: 20px 16px;

    & > .DoubleInput {
        display: flex;
    }
`;


const MenuTitle = styled.div`
    font-size:20px;
    margin-bottom: 5px; 
`;

const InputWrapper = styled.div`
position: relative;
border:solid 1px #ACACAC;
border-radius:4px;

&.Active {
    border: solid 3px #000;
    border-radius:6px;
}
`;


const InputSection = styled.div`
    display: flex;
    align-items:center;
    border:solid 1px #ACACAC;
    border-radius:4px;
    cursor: pointer;
`;


const DropArrow = styled.img`
    width: 20px;
    margin:  0 16px;

`;

const SelectionInput = styled.input`
    width: 100%;
    font-size:16px;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 16px;

    &.Country {
        background: url("${props => props.imgUrl}");
        background-size: 42px;
        background-repeat: no-repeat;
        background-position-y: center;
        background-position-x: left;
        padding: 16px 50px;
        margin: 0 10px;
    }

    &:disabled {
        cursor: not-allowed;
    } 
`;

const InputOptionsWrappre = styled.div`
    position: absolute;
    width:100%;
    max-height: 320px;
    overflow: hidden; 
    background: #fff;
    padding: 7px;
    overflow: scroll;
    overflow-x: hidden;
    transition: .2s ease;
    background: #fff;
    border:solid;
    border-top:none;
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

        &.Country {
            padding: 5px 46px;
            background: url("${props => props.imgUrl}");
            background-repeat: no-repeat;
            background-size: 40px;
            background-position-y: center;
        }
    }
`;

const InputContainer = styled.div`
    margin-bottom:7px;
`;

const SpanChacked = styled.span`
    position: relative;
    width: 25px;
    height: 25px;
    border: solid 1px #626262;
    padding: 15px;
    margin-right: 10px; 
    border-radius:4px;

    &:after {
        content: "";
        position: absolute;
        display: none;
    }
`;

const Input = styled.input`

    width: 100%;
    font-size:16px;
    border: none;
    outline: none;
    padding: 16px;
    border:solid 1px #ACACAC;

`;

const InputChackbox = styled.input`
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked +${SpanChacked} {
        background: transparent;
    }

    &:checked + ${SpanChacked}:after{
        display: block;
    }

    &:checked + ${SpanChacked}:after {
        left: 12px;
        top: 8px;
        width: 5px;
        height: 12px;
        border: solid black;
        border-width: 0 2px 2px 0;
        -webkit-transform : rotate(45deg);
        -ms-transform:rotate(45deg);
        transform: rotate(45deg);
    }


`;

const Label = styled.label`
    width: 100%;
    display: flex;
    align-items:center;
    cursor: pointer;
`;

const ResultCar = styled.button`
    position: static;
    display: none;
    width: 100%;
    bottom: 20px;
    border: none;
    outline: none;
    padding: 10px 16px;
    background: rgb(255, 251, 25);
    color: rgb(51, 51, 51);
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 3px 0px;
    z-index:99999;
    border-radius: 4px;

    @media(max-width:700px) {
        width: 100%
        display: block;
    }

    @media(max-width:1100px) {
        display: block;
    }

`;

const BgDrop = styled.div`
    &.Active {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index:999;
        height: 100%;
        opacity: 0.7;
        background: #000;
        transition: 0.4s;

    }
`;







export {
    Wrapper,
    MobileWrapper,
    MobilFilterHeader,
    WrapperContainer,
    Container,
    Button,
    DropMenu,
    DropMenuItem,
    MenuTitle,
    InputWrapper,
    InputSection,
    DropArrow,
    SelectionInput,
    InputOptionsWrappre,
    OptionsTitle,
    InputOptions,
    Input,
    SpanChacked,
    InputContainer,
    InputChackbox,
    Label,
    ResultCar,
    BgDrop

}