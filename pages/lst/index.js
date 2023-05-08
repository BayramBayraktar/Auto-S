import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LayoutMain from '../../layouts'
import ListPage from '../../containers/lst/index'




export const getServerSideProps = async (contex) => {

    var lstData


    if (contex.query) {
        if (contex.query.pricefrom) {
            if (contex.query.priceto) {
                const data = await fetch(`${process.env.NEXT_PUBLIC_ANALYTICS_ID}/lst?pricefrom=${contex.query.pricefrom}&priceto=${contex.query.priceto}&page=${contex.query.page}`)
                lstData = await data.json()
            } else {
                const data = await fetch(`${process.env.NEXT_PUBLIC_ANALYTICS_ID}/lst?pricefrom=${contex.query.pricefrom}&page=${contex.query.page}`)
                lstData = await data.json()
            }

        } else {
            if (contex.query.priceto) {
                const data = await fetch(`${process.env.NEXT_PUBLIC_ANALYTICS_ID}/lst?priceto=${contex.query.priceto}&page=${contex.query.page}`)
                lstData = await data.json()
            }
        }
    } else {
        const data = await fetch(`${process.env.NEXT_PUBLIC_ANALYTICS_ID}/lst?page=${contex.query.page}`)
        lstData = await data.json()
    }

    return {
        props: {
            ...(await serverSideTranslations(contex.locale, ['home'])),
            lstData
        }
    }
}

const Lst = (props) => {

    return (
        <LayoutMain title="Used cars for sale - AutoScout24">
            <ListPage data={props.lstData} />
        </LayoutMain>
    )
}

export default Lst




