import React from 'react'
import { useRouter } from 'next/router'
import { Breadcrumbs, Link, Typography } from '@mui/material'

const Breadcrumb = () => {


    const router = useRouter()


    const { query } = router;
    const { lst } = query



    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit"onClick={() => router.push(`/`)}>
                Home
            </Link>
            <Link underline="hover" color="inherit" onClick={() => router.push(`/lst?pricefrom=${query.pricefrom}&page=${query.page}`)}   >
                lst
            </Link>
            {
                lst.map((name, index) => {
                    
                    var roTo
                    const isLast = index === lst.length - 1;

                    if (query.pricefrom) {

                        if (query.priceto) {
                            //priceto and pricefrom
                            roTo = `/${lst.slice(0, index + 1).join('/')}?pricefrom=${query.pricefrom}&priceto=${query.priceto}&page=${query.page}`;
                        } else {
                            //pricefrom
                            roTo = `/${lst.slice(0, index + 1).join('/')}?pricefrom=${query.pricefrom}&page=${query.page}`;
                        }
                    } else {
                        //priceto
                        roTo = `/${lst.slice(0, index + 1).join('/')}?priceto=${query.priceto}&page=${query.page}`;
                    }

                    return (
                        isLast ?
                            <Typography color="text.primary">{name}</Typography>
                            :
                            <Link underline="hover" onClick={() => router.push('/lst' + roTo)} color="inherit">{name}</Link>
                    )
                })
            }


        </Breadcrumbs>
    )
}

export default Breadcrumb