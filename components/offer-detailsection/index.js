import React, { useState } from 'react'
import {
  Wrapper,
  Container,
  Button,
  Title,
  DetailSection
} from './style.js';

const index = ({ Data }) => {


  const [Detail, setDetail] = useState(false)
  const [Equipment, setEquipment] = useState(false)
  const [Description, setDescription] = useState(false)
  const [Contact, setContact] = useState(false)




  return (
    <Wrapper>
      {
        Data.map(data => (
          <>
            <Container id='detail'>
              <Button onClick={() => { setDetail(!Detail) }}>
                <Title >Details</Title>
              </Button>
              <DetailSection className={Detail && 'Active'}>
                this field will be shown and hidden
              </DetailSection>
            </Container>
            <Container id='equipment'>
              <Button onClick={() => { setEquipment(!Equipment) }}>
                <Title >Equipment</Title>
              </Button>
              <DetailSection className={Equipment && 'Active'}>
                this field will be shown and hidden
              </DetailSection>
            </Container>
            <Container id='description'>
              <Button onClick={() => { setDescription(!Description) }}>
                <Title >Description</Title>
              </Button>
              <DetailSection className={Description && 'Active'}>
                {data.PostedByDescraption}
              </DetailSection>
            </Container>
            <Container id='contact'>
              <Button onClick={() => { setContact(!Contact) }}>
                <Title>Contact</Title>
              </Button>
              <DetailSection className={Contact && 'Active'}>
                this field will be shown and hidden
              </DetailSection>
            </Container>
          </>
        ))
      }


    </Wrapper>
  )
}

export default index