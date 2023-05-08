import styled from "styled-components";



const Container = styled.div`
    display: flex;
    justify-content:space-between;
`;

const ResultSectionWrapper = styled.div`
    width: 100%;
    margin: 0 0 16px 16px;
    transition: .4s ease;
    @media(max-width:1100px) {
        width: 100% !important;
        margin: 0;
        transition: .4s ease;
    }
`;


export {
    Container,
    ResultSectionWrapper

}