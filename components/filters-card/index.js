import React from 'react'
import {
    Wrapper,
    CardTop,
    CardTitle,
    CardButton,
    CardSpan,
    CardCenter,
    Cardİmg,
    CardInfoContainerWrapper,
    CardInfoContainer,
    CardInfo,
    CardPrice,
    CardBottom,
    CardStoreWhereİnformationisShared,
    Storeİmg,
    SotreTitle,
    ShowMoreVehicles
} from './style';

const Card = ({ data }) => {

    return (

        <Wrapper>
            <CardTop>
                <CardTitle>{data.make}</CardTitle>
                <CardButton>
                    <CardSpan>Add to List</CardSpan>
                    <CardSpan>Share</CardSpan>
                </CardButton>
            </CardTop>
            <CardCenter>
                <Cardİmg src={`${process.env.NEXT_PUBLIC_ANALYTICS_ID}/Uploads/img/${data.photos[0]}`} alt='' />
                <CardInfoContainerWrapper>
                    <CardPrice>{data.price}</CardPrice>
                    <CardInfoContainer>
                        <CardInfo>{data.model}</CardInfo>
                        <CardInfo>{data.firstRegistration}</CardInfo>
                        <CardInfo>{data.firstRegistration}</CardInfo>
                        <CardInfo>{data.km}</CardInfo>

                    </CardInfoContainer>
                </CardInfoContainerWrapper>
            </CardCenter>
            <CardBottom>
                <>
                    <Storeİmg src="https://prod.pictures.autoscout24.net/dealer-info/5041468-original-99c19150-7fc8-4ca6-a58d-d9d77bfd51aa.PNG/resize/100x50%3E/quality/90" alt='' />
                    <CardStoreWhereİnformationisShared>
                        <SotreTitle>Autohaus WolteLüchow GmbH</SotreTitle>
                        <SotreTitle>Knut Gauster . De-29439 Lüchow</SotreTitle>
                    </CardStoreWhereİnformationisShared>
                </>

                <ShowMoreVehicles>+ Show More Vehicles</ShowMoreVehicles>
            </CardBottom>
        </Wrapper>
    )
}

export default Card