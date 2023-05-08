import React from 'react'
import {Link} from 'react-scroll'
import {
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
} from './style'
const Footer = () => {

   
    return (
        <Wrapper>
            <TopSection>
                <TopScroll>
                    <Link to='UpAction' smooth={true}>To the Top ↑</Link>
                </TopScroll>
            </TopSection>

            <CenterSection>
                <Title>AutoScout24: the largest pan-European online car market.</Title>
                <ListContainer>
                    <ListSection>
                        <Title >Company</Title>
                        <Listİtem>About AuthScout24</Listİtem>
                        <Listİtem>Career</Listİtem>
                        <Listİtem>Contact</Listİtem>
                        <Listİtem>Imprıt</Listİtem>
                        <Listİtem>Data Protection Information</Listİtem>
                    </ListSection>

                    <ListSection>
                        <Listİtem>AuthScout24 for İOS</Listİtem>
                        <Listİtem>AuthScout24 for Android</Listİtem>
                    </ListSection>
                </ListContainer>
            </CenterSection>

            <BottomSection>
                <Copyright>© Copyright 2022 by AutoScout24 GmbH. All Rights reserved.</Copyright>
            </BottomSection>
        </Wrapper>
    )
}

export default Footer