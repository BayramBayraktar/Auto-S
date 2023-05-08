import { useState } from 'react';
import { Link } from 'react-scroll'
import {
  Container,
  Title,
  List,
  İtem
} from './style.js';

const Header = ({ Data }) => {


  const [Active, setActive] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener('scroll', () => {
      scrollY > 730 ? setActive(true) : setActive(false)
    })
  }

  return (
    <Container className={Active && 'Active'}>
      {Active && <Title >
        <span>{Data.make} | {Data.model} | { '€' + Data.price.toLocaleString()} </span>

      </Title>}
      <List>
        <İtem>
          <Link to='detail' offset={-120} activeClass="active" smooth={true} spy={true} >Details</Link>
        </İtem>

        <İtem>
          <Link to='equipment' offset={-120} activeClass="active" smooth={true} spy={true} >Equipment</Link>
        </İtem>


        <İtem>
          <Link to='description' offset={-120} activeClass="active" smooth={true} spy={true} >Description</Link>
        </İtem>

        <İtem>
          <Link to='contact' offset={-120} activeClass="active" smooth={true} spy={true} >Contact</Link>
        </İtem>
      </List>
    </Container>
  )
}

export default Header