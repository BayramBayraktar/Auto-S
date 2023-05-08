import React, { useState } from 'react';
import Link from 'next/link'
import TurnBack from '../../components/turnback';
import List from '../../components/filters-list'
import Header from '../../components/filters-header'
import Pagination from '../../components/Pagination'
import Card from '../../components/filters-card'
import { FilterContext } from '../../context/filtercontext.js'


import {
    Container,
    ResultSectionWrapper

} from './style';

const ListPage = (props) => {
    const { data } = props


    const [SelectedAllFilter, setSelectedAllFilter] = useState([])
    const [FilterRemoveType, setFilterRemoveType] = useState("")
    const [TopMakesSelect, setTopMakesSelect] = useState("")

    const [MobileMenu, setMobilMenu] = useState(false)


    const handleFilterSelectedChange = async (
        SelectCar,
        SelectModel,
        SelectedBody,
        FirstTo,
        FirstFrom,
        PriceFrom,
        PriceTo,
        SelectedCountry,
        selectedFueltype,
        selectedGear
    ) => {
        const All = {
            SelectCar,
            SelectModel,
            SelectedBody,
            FirstTo,
            FirstFrom,
            PriceFrom,
            PriceTo,
            SelectedCountry,
            selectedFueltype,
            selectedGear
        }
        setSelectedAllFilter(All)
    }
    const handleTopMakesSelect = (Make, model) => {
        const all = {
            Make,
            model
        }
        setTopMakesSelect(all)
    }

    const headerLabelRemove = (type) => {
        setFilterRemoveType(type)
    }

    const handleMobileMenu = () => {

    }

    const ProviderData = {
        handleFilterSelectedChange,
        SelectedAllFilter,
        headerLabelRemove,
        setFilterRemoveType,
        FilterRemoveType,
        handleTopMakesSelect,
        TopMakesSelect,
        handleMobileMenu,
        setMobilMenu,
        MobileMenu,

    }

    return (
        <FilterContext.Provider value={ProviderData}>
            <TurnBack />
            <Container>
                <List />
                <ResultSectionWrapper>
                    <Header />
                    {data.result.map((car) => (
                        <Link key={car._id} href={`/offers/${car.make}/${car.model}?id=${car._id}`} >
                            <a>
                                <Card data={car} />
                            </a>
                        </Link>
                    ))}
                </ResultSectionWrapper>
            </Container>
            <Pagination data={props.data} />
        </FilterContext.Provider>
    )
}

export default ListPage;