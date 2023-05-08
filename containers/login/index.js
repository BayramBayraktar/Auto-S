import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'

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
    Button
} from './style'

const Register = () => {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

    const [LoginResponse, setLoginResponse] = useState("")


    const instance = axios.create({
        withCredentials: true,
        baseURL: process.env.NEXT_PUBLIC_ANALYTICS_ID,
    })


    const handlelogin = async () => {
        await instance.post('/login', { email: email, password: password }).then((result) => {
            if (result.data) {
                result.data.success == true && router.push('/create')
                setLoginResponse(result.data)
            }
        })

    }

    return (

        <Wrapper>
            <Section>
                <BannerCar src='https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='bgCar' />
            </Section>
            <Section>
                <Container>
                    <Title>Login</Title>

                    <span>{LoginResponse?.message}</span>

                    <İnputContainer>
                        <Label htmlFor='email'>Email</Label>
                        <İnput type="email" id='email' onChange={(e) => setEmail(e.target.value)} required={email.length >= 1 && true} placeholder='Email..' name='email' />
                    </İnputContainer>

                    <İnputContainer>
                        <Label id='password'>Password</Label>
                        <İnput type="password" id='password' onChange={(e) => setpassword(e.target.value)} minLength="3" required={password.length >= 1 && true} placeholder='password..' inputMode='numeric' name='password' />
                    </İnputContainer>

                    <ButtonContainer>
                        <Button onClick={() => handlelogin()}>Login</Button>
                        <Link href="/register">
                            <Button className='login'>
                                {'Sign up   >'}
                            </Button>
                        </Link>
                    </ButtonContainer>

                </Container>
            </Section>
        </Wrapper>



    )

}

export default Register