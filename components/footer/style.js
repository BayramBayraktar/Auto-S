import styled from "styled-components";

const Wrapper = styled.div`
width: 100%;
background: #f4f4f4;
`;

const TopSection = styled.div`
    width: 100%;
    display: flex;
    justify-content:flex-end;
    border-top:1px solid #dcdcdc;
`;

const TopScroll = styled.button`
    justify-content:flex-end;
    border: none;
    outline: none;
    padding: 16px;
    color: #1166A8;
    font-size: 19px;
    font-weight: 400;
    cursor: pointer; 
    background: transparent;
`;


const CenterSection = styled.div`
    padding: 16px;
    border-top:solid 1px #dcdcdc;

`;

const Title = styled.h1`
    font-size:1.2rem;
    padding: 16px 0;

    
    
`;

const ListContainer = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:flex-end;
`;

const ListSection = styled.div`
    display: flex;;
    flex-direction:column;
    align-items:flex-start;
    padding: 16px 0;
`;

const Listİtem = styled.li`
    font-size:18px;
    margin: 5px 0 ;
    font-weight:400;
`;


const BottomSection = styled.div`
    border-top:1px solid #dcdcdc;
    padding: 15px;
`;

const Copyright = styled.h1`
font-size:15px;
color: #626262;
padding: 16px 0 ;
`







export {
    Wrapper,
    TopSection,
    TopScroll,
    CenterSection,
    Title,
    ListContainer,
    ListSection,
    Listİtem,
    BottomSection,
    Copyright
}