import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LayoutMain from '../../layouts'
import ListPage from '../../containers/lst/index'
import Breadcrumb from '../../components/breadcrumbs'


export const getServerSideProps = async (contex) => {

    var lstData
    const [make, model] = contex.params.lst

    if (contex.query) {
        if (make) {
            // make and model &&
            if (model) {
                if (contex.query.pricefrom) {
                    if (contex.query.priceto) {
                        const data = await fetch(`${process.env.NEXT_PUBLIC_ANALYTICS_ID}/lst/${make}/${model}?pricefrom=${contex.query.pricefrom}&priceto=${contex.query.priceto}&page=${contex.query.page}`)
                        lstData = await data.json()
                    } else {
                        const data = await fetch(`${process.env.NEXT_PUBLIC_ANALYTICS_ID}/lst/${make}/${model}?pricefrom=${contex.query.pricefrom}&page=${contex.query.page}`)
                        lstData = await data.json()
                    }
                } else {
                    const data = await fetch(`${process.env.NEXT_PUBLIC_ANALYTICS_ID}/lst/${make}/${model}?&priceto=${contex.query.priceto}&page=${contex.query.page}`)
                    lstData = await data.json()
                }
            } else {
                // make && 
                if (contex.query.pricefrom) {
                    if (contex.query.priceto) {
                        const data = await fetch(`${process.env.NEXT_PUBLIC_ANALYTICS_ID}/lst/${make}?pricefrom=${contex.query.pricefrom}&priceto=${contex.query.priceto}&page=${contex.query.page}`)
                        lstData = await data.json()
                    } else {
                        const data = await fetch(`${process.env.NEXT_PUBLIC_ANALYTICS_ID}/lst/${make}?pricefrom=${contex.query.pricefrom}&page=${contex.query.page}`)
                        lstData = await data.json()
                    }
                } else {
                    const data = await fetch(`${process.env.NEXT_PUBLIC_ANALYTICS_ID}/lst/${make}?&priceto=${contex.query.priceto}&page=${contex.query.page}`)
                    lstData = await data.json()
                }
            }

        }
        if (!make && !model) {
            if (contex.query.pricefrom) {
                if (contex.query.priceto) {
                    const data = await fetch(`${process.env.NEXT_PUBLIC_ANALYTICS_ID}/lst?priceform${contex.query.pricefrom}&priceto=${contex.query.priceto}&page=${contex.query.page}`)
                    lstData = await data.json()
                } else {
                    const data = await fetch(`${process.env.NEXT_PUBLIC_ANALYTICS_ID}/lst?priceform${contex.query.pricefrom}&page=${contex.query.page}`)
                    lstData = await data.json()
                }
            }
        }

    }

    return {
        props: {
            ...(await serverSideTranslations(contex.locale, ['home'])),
            lstData,
        }
    }
}

const Lst = props => {

    return (
        <LayoutMain title="Used cars for sale - AutoScout24">
            <Breadcrumb />
            <ListPage data={props?.lstData} />
        </LayoutMain>
    )
}


export default Lst




