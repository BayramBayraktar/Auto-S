import styled from 'styled-components'

const Wrapper = styled.div`
margin: 40px 0;
padding: 16px;
background:#fff;

`;

const CardTop = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
`;

const CardTitle = styled.div`
    font-size:21px;
    font-weight:600;

`;

const CardButton = styled.button`
    border: none;
    background: #fff;
    outline: none;
    padding: 8px;
    color: #1166a8;
    font-size:18px;
`;

const CardCenter = styled.div`
    display: flex;
    padding: 50px 0px;
    border-bottom:1px solid #EAEAEA;

    @media(max-width:1000px) {
        flex-direction:column;
    }
`;


const CardSpan = styled.span`
`;

const Cardİmg = styled.img`
    width: 350px;
    @media(max-width:1000px) {
        width: 100%;
    }
`;

const CardInfoContainerWrapper = styled.div`
    display: flex;
    flex-direction:column;
    padding: 0 15px;
    width: 100%;

`;

const CardInfoContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    gap: 0px 15px;
    
    `;
    
    const CardInfo = styled.span`
    font-size: 20px;
    padding: 16px 0;
    width: 30%;
    border-bottom: solid 1px gray;
`;

const CardPrice = styled.span`
    font-size:30px;
    font-weight:600;
`;




const CardBottom = styled.div`
    display: flex;
    align-items:center;
    padding: 16px 0 0 0 ;
`;

const CardStoreWhereİnformationisShared = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 8px;
`;

const Storeİmg = styled.img`
    width: 100px;
    height: 30px;
`;

const SotreTitle = styled.span`
    font-size:18px;
`;

const ShowMoreVehicles = styled.a`
    color: #1166a8;
    font-size:20px;
    margin-left:auto;
`;


export {
    Wrapper,
    CardTitle,
    CardButton,
    CardCenter,
    CardSpan,
    Cardİmg,
    CardInfoContainerWrapper,
    CardInfoContainer,
    CardInfo,
    CardPrice,
    CardTop,
    CardBottom,
    CardStoreWhereİnformationisShared,
    Storeİmg,
    SotreTitle,
    ShowMoreVehicles

}