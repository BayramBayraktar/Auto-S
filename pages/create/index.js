import React, { useState, useEffect } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import axios from 'axios'
import Create from '../../containers/create'


export const getServerSideProps = async (contex) => {
    return {
        props: {
            ...(await serverSideTranslations(contex.locale, ['home'])),

        }
    }
}


//Create Page
const CreatePage = (props) => {

    const route = useRouter()

    const [success, setsuccess] = useState(false)
    const instance = axios.create({
        withCredentials: true,
        baseURL: process.env.NEXT_PUBLIC_ANALYTICS_ID
    })

    useEffect(() => {
        (async () => {
            await instance.get('/create').then((response) => {

                if (response.data) {
                    setsuccess(response.data.success)
                    response.data.success == false && route.push('/login')
                }
            })
        })()
    }, [])

    return (
        success && <Create />
    )
}
export default CreatePage


