import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default (props) => {

    const router = useRouter()
    const { lst } = router.query
    const { data } = props

    const pages = []
    for (let index = 0; index < data.pages; index++) {
        pages.push(index)
    }

    const PaginationPrevious = () => {



        if (lst) {
            const Make = lst[0]
            const Model = lst[1]
            if (Make) {
                if (Model) {
                    if (router.query.pricefrom) {
                        if (router.query.priceto) {
                            router.push(`/lst/${Make}/${Model}?pricefrom=${router.query.pricefrom}&priceto=${router.query.priceto}&page=${Number(router.query.page >= 0 ? router.query.page - 1 : 0)}`)
                        } else {
                            router.push(`/lst/${Make}/${Model}?pricefrom=${router.query.pricefrom}&page=${Number(router.query.page >= 0 ? router.query.page - 1 : 0)}`)
                        }
                    } else {
                        if (router.query.priceto) {
                            router.push(`/lst/${Make}/${Model}?priceto=${router.query.priceto}&page=${Number(router.query.page >= 0 ? router.query.page - 1 : 0)}`)
                        }
                    }
                } else {
                    if (router.query.pricefrom) {
                        if (router.query.priceto) {
                            router.push(`/lst/${Make}?pricefrom=${router.query.pricefrom}&priceto=${router.query.priceto}&page=${Number(router.query.page >= 0 ? router.query.page - 1 : 0)}`)
                        } else {
                            router.push(`/lst/${Make}?pricefrom=${router.query.pricefrom}&page=${Number(router.query.page >= 0 ? router.query.page - 1 : 0)}`)
                        }
                    } else {
                        if (router.query.priceto) {
                            router.push(`/lst/${Make}?priceto=${router.query.priceto}&page=${Number(router.query.page >= 0 ? router.query.page - 1 : 0)}`)
                        }
                    }
                }
            } else {
                if (router.query) {
                    if (router.query.pricefrom) {
                        if (router.query.priceto) {
                            router.push(`/lst?pricefrom=${router.query.pricefrom}&priceto=${router.query.priceto}&page=${Number(router.query.page >= 0 ? router.query.page - 1 : 0)}`)
                        } else {
                            router.push(`/lst?pricefrom=${router.query.pricefrom}&page=${Number(router.query.page >= 0 ? router.query.page - 1 : 0)}`)
                        }
                    } else {
                        if (router.query.priceto) {
                            router.push(`/lst?priceto=${router.query.priceto}&page=${Number(router.query.page >= 0 ? router.query.page - 1 : 0)}`)
                        }
                    }

                }
            }
        } else {
            router.push(`/lst?pricefrom=${router.query.pricefrom}&page=${Number(router.query.page >= 0 ? router.query.page - 1 : 0)}`)
        }


    }

    const PaginationSelect = (selected) => {


        if (lst) {
            const Make = lst[0]
            const Model = lst[1]
            if (Make) {
                if (Model) {
                    if (router.query.pricefrom) {
                        if (router.query.priceto) {
                            router.push(`/lst/${Make}/${Model}?pricefrom=${router.query.pricefrom}&priceto=${router.query.priceto}&page=${Number(selected)}`)
                        } else {
                            router.push(`/lst/${Make}/${Model}?pricefrom=${router.query.pricefrom}&page=${Number(selected)}`)
                        }
                    } else {
                        if (router.query.priceto) {
                            router.push(`/lst/${Make}/${Model}?priceto=${router.query.priceto}&page=${Number(selected)}`)
                        }
                    }
                } else {
                    if (router.query.pricefrom) {
                        if (router.query.priceto) {
                            router.push(`/lst/${Make}?pricefrom=${router.query.pricefrom}&priceto=${router.query.priceto}&page=${Number(selected)}`)
                        } else {
                            router.push(`/lst/${Make}?pricefrom=${router.query.pricefrom}&page=${Number(selected)}`)
                        }
                    } else {
                        if (router.query.priceto) {
                            router.push(`/lst/${Make}?priceto=${router.query.priceto}&page=${Number(selected)}`)
                        }
                    }
                }

            } else {
                if (router.query) {
                    if (router.query.pricefrom) {
                        if (router.query.priceto) {
                            router.push(`/lst?pricefrom=${router.query.pricefrom}&priceto=${router.query.priceto}&page=${Number(selected)}}`)
                        } else {
                            router.push(`/lst?pricefrom=${router.query.pricefrom}&page=${Number(selected)}`)
                        }
                    } else {
                        if (router.query.priceto) {
                            router.push(`/lst?priceto=${router.query.priceto}&page=${Number(selected)}`)
                        }
                    }

                }
            }
        } else {
            router.push(`/lst?pricefrom=${router.query.pricefrom}&page=${Number(selected)}`)
        }


    }

    const PaginationNext = () => {

        if (lst) {
            const Make = lst[0]
            const Model = lst[1]
            if (Make) {
                if (Model) {
                    if (router.query.pricefrom) {
                        if (router.query.priceto) {
                            router.push(`/lst/${Make}/${Model}?pricefrom=${router.query.pricefrom}&priceto=${router.query.priceto}&page=${Number(router.query.page) + 1}`)
                        } else {
                            router.push(`/lst/${Make}/${Model}?pricefrom=${router.query.pricefrom}&page=${Number(router.query.page) + 1}`)
                        }
                    } else {
                        if (router.query.priceto) {
                            router.push(`/lst/${Make}/${Model}?priceto=${router.query.priceto}&page=${Number(router.query.page) + 1}`)
                        }
                    }
                } else {
                    if (router.query.pricefrom) {
                        if (router.query.priceto) {
                            router.push(`/lst/${Make}?pricefrom=${router.query.pricefrom}&priceto=${router.query.priceto}&page=${Number(router.query.page) + 1}`)
                        } else {
                            router.push(`/lst/${Make}?pricefrom=${router.query.pricefrom}&page=${Number(router.query.page) + 1}`)
                        }
                    } else {
                        router.push(`/lst/${Make}?priceto=${router.query.priceto}&page=${Number(router.query.page) + 1}`)
                    }
                }
            } else {
                if (router.query) {
                    if (router.query.pricefrom) {
                        if (router.query.priceto) {
                            router.push(`/lst?pricefrom=${router.query.pricefrom}&priceto=${router.query.priceto}&page=${Number(router.query.page) + 1}`)
                        } else {
                            router.push(`/lst?pricefrom=${router.query.pricefrom}&page=${Number(router.query.page) + 1}`)
                        }
                    } else {
                        if (router.query.priceto) {
                            router.push(`/lst?priceto=${router.query.priceto}&page=${Number(router.query.page) + 1}`)
                        }
                    }

                }
            }
        } else {
            router.push(`/lst?pricefrom=${router.query.pricefrom}&page=${Number(router.query.page) + 1}`)
        }
    }


    return (
        <Pagination aria-label="Page navigation example">

            <PaginationItem disabled={router.query.page <= 1}>
                <PaginationLink
                    previous
                    onClick={() => PaginationPrevious()}
                />
            </PaginationItem>

            {
                pages.map(i => (
                    <PaginationItem key={i} active={data.page == i + 1}>
                        <PaginationLink
                            onClick={() => PaginationSelect(i + 1)}
                        >
                            {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))
            }

            <PaginationItem disabled={router.query.page >= data.pages}  >
                <PaginationLink
                    next
                    onClick={() => PaginationNext()}

                />
            </PaginationItem>
        </Pagination >
    );
};