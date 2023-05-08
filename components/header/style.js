import styled from 'styled-components'


const Wrapper = styled.div`
    background-color: #fff;
    border-bottom: 1px solid #dcdcdc;
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items:center; 
    padding: 16px 16px;
`;


const Logo = styled.div`
    width: 200px;

    a> svg {
        width: 145px;
    }

`;

const Navigation = styled.div`
    width: 100%;

    @media(max-width:1000px) {
        display: none;
    }
`;

const NavigationList = styled.ul`
    display: flex;
    align-items:center;
    margin: 0px;

    &.MobileVisible {
        display: block;
        height : 200px;
        transition: 0.5s;
        opacity: 1;
        
    }
    &.MobileinVisible {
        display: none;
        height: 0px;
        transition: 0.5s;
        opacity: 0;
    }
    
    @media(max-width:1000px) {
        display: block;
    }
`;

const NavigationListİtem = styled.li`

    margin: 0 30px; 
    &> a {
            font-size:16px;
    }
    &:hover {
        color: #1166a8;
        cursor: pointer;
    }


    @media(max-width:1000px) {
        padding: 15px;
        border-bottom: solid  1px #000;
    }
`;


const LanguageSection = styled.div`
@media(max-width:1000px) {
    display: none;
}
`;

const ButtonLanguage = styled.button`
    display: flex;  
    align-items:  center;
    border: none;
    background: #fff;
    font-size:15px;
    cursor: pointer;

    &:hover {
        color: #1166a8;
    }
`;

const DropDown = styled.img`
    width: 15px;
    margin: 0 10px;
`;

const LanguageList = styled.div`
    position: absolute; 
    right: 0px;
    width:250px;
    margin: 30px 0 0;
    box-shadow: 0px 0px 1px #000;
    background: #fff;
    padding: 25px;
    z-index:9;
`;


const LanguageListItem = styled.div`
    width: 100%;
    display: flex;
    margin: 12px 0 ;
    cursor: pointer;
    
    :hover {
        color: #1166a8;
    }
`;

const Flag = styled.img`
    width: 30px;
`;

const CountryTitle = styled.p`
    padding: 0 0 0 35px;
    width: 100%;
    font-size:16px;
    background: url("${(props => props.imgUrl)}");

    background-repeat: no-repeat;
    background-size: 26px;
    background-position-y: center;
    background-position-x: left;
    &.Active {
        color: red;
    }
`;
const MobileBar = styled.div`
    display: none;

    @media(max-width:1000px) {
        display: block;
        cursor: pointer;
        font-size:20px;
        line-height: 39px;

    }
`;

export {
    Wrapper,
    Container,
    Logo,
    Navigation,
    NavigationList,
    NavigationListİtem,
    LanguageSection,
    ButtonLanguage,
    DropDown,
    LanguageList,
    LanguageListItem,
    Flag,
    CountryTitle,
    MobileBar
}