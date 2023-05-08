import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    background: #fff;
    
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    border-bottom:1px solid rgba(0,0,0,0.2);

    


`;

const Button = styled.div`
    padding: 24px  16px;
    cursor: pointer;
`;


const Title = styled.h1`
    font-size:22px;
    font-weight:400;
    color: rgba(0,0,0,0.8);

`;

const DetailSection = styled.div`
    display: block;
    padding: 16px;
    &.Active {
        display: none;
    }
`;









export {
    Wrapper,
    Container,
    Button,
    Title,
    DetailSection
}