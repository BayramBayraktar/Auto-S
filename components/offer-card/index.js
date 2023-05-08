import React from 'react';
import Slider from 'react-slick';
import {
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
    CarInfoLabel,
    CarInfo,
    ButtonContainer,
    Seller,
    Contact
} from './style';




const index = ({ Data, User }) => {

    function Prev(props) {
        const { className, style, onClick } = props;
        return (
            <span
                className="Arrow Left"
                onClick={onClick}
            >
                {'<'}
            </span>
        )
    }


    function Next(props) {
        const { className, style, onClick } = props;
        return (
            <span
                className='Arrow Right'
                onClick={onClick}
            >{'>'}</span>
        )
    }

    const DataMask = (data) => {
        return data.replace('-', '/').slice(0, 7)
    }


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Next />,
        prevArrow: <Prev />
    };
    return (
        <Card>
            <Cardtop>
                <CardTitle>{Data.make} - {Data.model}</CardTitle>
                <CardButtonSection>
                    <Button>Add to list</Button>
                    <Button>Share</Button>
                    <Button>Print</Button>
                </CardButtonSection>
            </Cardtop>
            <CardCenter>
                <SliderWrapper>
                    <Slider {...settings}>
                        {Data.photos.map(img => (
                            <Sliderİmg src={`${process.env.NEXT_PUBLIC_ANALYTICS_ID}/Uploads/img/${img}`} alt="" />

                        ))}
                    </Slider>

                </SliderWrapper>

                <Discraption>
                    <Cardtop className='MobileActive'>
                        <CardTitle>{Data.make} - {Data.model} - { }</CardTitle>
                        <CardButtonSection>
                            <Button>Add to list</Button>
                            <Button>Share</Button>
                            <Button>Print</Button>
                        </CardButtonSection>
                    </Cardtop>
                    <DiscraptionPrice>€ {Data.price.toLocaleString()}</DiscraptionPrice>
                    <CarInfoWrapper>
                        <CarInfoContainer>
                            <CarInfo>{Data.km}</CarInfo>
                            <CarInfo>{DataMask(Data.firstRegistration)}</CarInfo>
                            <CarInfo>80 Kw 109 hp</CarInfo>
                        </CarInfoContainer>

                        <CarLabelContainer>
                            <CarInfoLabel>side airbag</CarInfoLabel>
                            <CarInfoLabel>Navigation system</CarInfoLabel>
                            <CarInfoLabel>Tire pressure monitoring system</CarInfoLabel>
                            <CarInfoLabel>Automatic climate control</CarInfoLabel>
                            <CarInfoLabel>Bluetooth</CarInfoLabel>
                            <CarInfoLabel>On-board compoter</CarInfoLabel>
                            <CarInfoLabel>Leather steering wheel</CarInfoLabel>
                            <CarInfoLabel>Electrical side mirrors</CarInfoLabel>
                        </CarLabelContainer>
                    </CarInfoWrapper>
                    <Seller><b>Saont-Nicolas,</b> Private seller</Seller>
                    <ButtonContainer>
                        <Contact href={`mailto:${User.email}`} > Send E-mail </Contact>
                        <Contact href={`tel:${User.phoneNumber}`} >  { User.phoneNumber}</Contact>
                    </ButtonContainer>
                </Discraption>
            </CardCenter>
        </Card>


    )
}

export default index