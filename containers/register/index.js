import React, { useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios';
import {
    Wrapper,
    Section,
    BannerCar,
    Container,
    Title,
    İnputContainer,
    Label,
    İnput,
    ButtonContainer,
    Button,

} from './style'

const Register = () => {

    const [name, setname] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [password, setpassword] = useState("")
    const [address, setaddress] = useState("")


    //SignRequestPost
    const handleSignup = async () => {

        const Obj = {
            name: name,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            password: password,
            address: address,
        }

        await axios.post(`${process.env.NEXT_PUBLIC_ANALYTICS_ID}/api/signup`, Obj, { withCredentials: true }).then((response => (
            response.data.redirect == true && Router.push('/login')
        )))

    }



    return (
        <Wrapper>
            <Section>
                <BannerCar src='https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80' alt='bgCar' />
            </Section>
            <Section>
                <Container>
                    <Title>Sign Up</Title>
                    <İnputContainer>
                        <Label htmlFor='name' >Name</Label>
                        <İnput onChange={(e) => setname(e.target.value)} type="text" required id='name' placeholder='Name..' name='name' />
                    </İnputContainer>

                    <İnputContainer>
                        <Label htmlFor='lastname' >Last Name</Label>
                        <İnput onChange={(e) => setlastName(e.target.value)} type="text" required id='lastname' placeholder='Last Name..' name='lastName' />
                    </İnputContainer>


                    <İnputContainer>
                        <Label htmlFor='email'>Email</Label>
                        <İnput onChange={(e) => setemail(e.target.value)} type="email" required id='email' placeholder='Email..' name='email' />
                    </İnputContainer>


                    <İnputContainer>
                        <Label htmlFor='phone'>Phone Number</Label>
                        <İnput onChange={(e) => setphoneNumber(e.target.value)} type="tel" placeholder="+1 (___) ___-____" pattern="[0-9]{11}" maxLength={11} required id='phone' name='phoneNumber' />
                    </İnputContainer>

                    <İnputContainer>
                        <Label id='password'>Password</Label>
                        <İnput onChange={(e) => setpassword(e.target.value)} type="password" required id='password' placeholder='password..' name='password' />
                    </İnputContainer>

                    <İnputContainer>
                        <Label htmlFor='address' >Address</Label>
                        <İnput onChange={(e) => setaddress(e.target.value)} type="text" id='address' placeholder='Address..' name='address' />
                    </İnputContainer>


                    <ButtonContainer>
                        <Button onClick={(e) => handleSignup(e)}>Sign Up</Button>
                        <Link href="/login">
                            <Button className='login'>
                                {'Login   >'}
                            </Button>
                        </Link>
                    </ButtonContainer>

                </Container>
            </Section>
        </Wrapper>
    )
}

export default Register