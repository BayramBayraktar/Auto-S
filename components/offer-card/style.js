import styled from 'styled-components';

const Card = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    background: #fff;
`;

const Cardtop = styled.div`
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding: 16px;

    @media(max-width:1000px) {
        display: none;
        padding: 16px 0px;

    }
    
`;

const CardTitle = styled.h1`
    font-size:1.5rem;
    font-weight:400;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    @media(max-width:1000px){
        font-size:1rem;

    }
    
`;


const CardButtonSection = styled.div`
`;

const Button = styled.button`
    padding: 8px;
    outline: none;
    border: none;
    font-size:16px;
    color: #1166a8;
    background: #fff;
    cursor: pointer;

    @media(max-width:1000px) {
        font-size:0.9rem;
        :last-child{
            display: none;
        }
    }

`;

const CardCenter = styled.div`
    width: 100%;
    display: flex;
    flex-wrap:wrap;
    padding: 16px;

    @media(max-width:1000px) {
        padding: 0px;
    }
 
`;

const SliderWrapper = styled.div`
    width: 60%;

    .slick-track {
        display: flex;
        align-items:center;
    }

    @media(max-width:1000px) {
        width: 100%;
        .slick-slider {
            background: #000;
        }
    
        .slick-list {
            max-width:650px;
            margin: 0 auto;

        }
    }


    
    @media(max-width:767px) {
        width: 100%;
        .slick-list {
            max-width:100%;
        }
    }

    .Arrow {
        position: absolute;
        display: flex;
        align-items:center;
        font-size: 30px;
        padding: 8px;
        top: 50%;
        height: 75px;
        -webkit-transform: translate(0,-50%);
        -ms-transform: translate(0,-50%);
        transform: translate(0,-50%);
        transition: .2s;
        cursor: pointer;
        color: #ffff;
        background-color: rgba(0, 0, 0, 0.4);
        border: none;
        outline: 0;
        z-index:9999;

        &:hover {
            background: rgba(0, 0, 0, 0.95);
            opacity: 0.8;
        }
    }

    .Right {
        right: 0px;
    }

    .Left {
        left: 0px;
    }
`;

const Sliderİmg = styled.img`
    width: 100%;
`;

const Discraption = styled.div`
    width: 40%;
    padding: 16px;

    .MobileActive {
        display: none;
        @media(max-width:1000px) {
            display: flex;
            border-bottom: 1px solid rgba(0,0,0,0.3);
        }
    }

    @media(max-width:1000px) {
        width: 100%;
    }
`;

const DiscraptionPrice = styled.h1`
    font-size:1.5rem;
    font-weight:500;
    padding-top: 16px;
    color: rgba(0,0,0,0.9)
`;

const CarInfoWrapper = styled.div`
    display: flex;
    flex-direction:column;
    margin:50px 0px 20px 0;;
    padding: 0 0 20px 0;
    border-top: solid 1px rgba(0,0,0,0.3);
    border-bottom: solid 1px rgba(0,0,0,0.3);
`;

const CarInfoContainer = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
    padding: 16px 0;
`;

const CarLabelContainer = styled.span`
    display: flex;
    flex-wrap:wrap;
    width: 100%;
`;

const CarInfo = styled.span`
    font-size:20px;
    padding: 8px 0 ;
`;


const CarInfoLabel = styled.span`
    font-size:11px;
    color: #000;
    padding: 4px 8px;
    margin: 2px 1px;

`;

const Seller = styled.span`
    font-size:15px;
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top:30px;

    @media(max-width:1000px) {
        position: fixed;
        justify-content:center;
        bottom: 40px;
        padding: 0 8px;
        left: 0;
    }


`;

const Contact = styled.a`
    width:100%;
    text-align:center;
    padding: 8px;
    background: yellow;
    color: #000;
    border-radius:4px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 50%);

    :nth-child(1) {
        margin-right:8px;
    }

    
    @media(max-width:1000px) {
        width: 280px;
    }


`;






export {
    Card,
    Cardtop,
    CardTitle,
    CardButtonSection,
    Button,
    CardCenter,
    SliderWrapper,
    Sliderİmg,
    Discraption,
    DiscraptionPrice,
    CarInfoWrapper,
    CarInfoContainer,
    CarLabelContainer,
    CarInfo,
    CarInfoLabel,
    Seller,
    ButtonContainer,
    Contact


}