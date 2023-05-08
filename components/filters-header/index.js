import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { FilterContext } from '../../context/filtercontext.js'
import TopMakes from '../data/cars/tops.json'
import {
    Wrapper,
    HeaderTop,
    SearchResult,
    SortFilter,
    FilterSelected,
    SelectLable,
    Plus,
    BlueText
} from './style.js'

const Header = () => {

    const { SelectedAllFilter, headerLabelRemove, handleTopMakesSelect , setMobilMenu } = useContext(FilterContext)
    const [ScrollActive, setScrollActive] = useState(false)

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', () => {
            window.scrollY > 100 ? setScrollActive(true) : setScrollActive(false)
        })
    }
    

    return (
        <Wrapper className={ScrollActive && 'Active'} >
            <HeaderTop>
                <SearchResult><b>1.6555 Offers</b> for <span onClick={() => setScrollActive(false)} className={ScrollActive && 'Active'}>{SelectedAllFilter.SelectCar ? SelectedAllFilter.SelectCar + ' ' + SelectedAllFilter.SelectModel : "your search"}</span></SearchResult>
                {
                    ScrollActive ?
                        <BlueText>
                            <Link to='UpAction' smooth={true}>To the top ↑</Link>
                        </BlueText>
                        :
                        <SortFilter>Sort:</SortFilter>
                }
            </HeaderTop>

            <FilterSelected className={ScrollActive && 'Active'}>

                {
                    SelectedAllFilter.SelectCar === "" &
                        SelectedAllFilter.SelectModel === "" &
                        SelectedAllFilter.SelectedBody == "" &
                        SelectedAllFilter.FirstFrom === "" &
                        SelectedAllFilter.FirstTo === "" &
                        SelectedAllFilter.PriceFrom === "" &
                        SelectedAllFilter.PriceTo === "" &
                        SelectedAllFilter.SelectedCountry === "" &
                        SelectedAllFilter.selectedFueltype === "" &
                        SelectedAllFilter.selectedGear === "" ||
                        SelectedAllFilter.SelectCar === undefined
                        ?
                        "No filter select"
                        :
                        <>
                            {SelectedAllFilter.SelectCar && <SelectLable onClick={() => headerLabelRemove("SelectCar")}>{SelectedAllFilter.SelectCar + ' ' + SelectedAllFilter.SelectModel}<Plus src="/plus.png" /> </SelectLable>}
                            {SelectedAllFilter.SelectedBody && <SelectLable onClick={() => headerLabelRemove("SelectedBody")}>{SelectedAllFilter.SelectedBody}<Plus src="/plus.png" /> </SelectLable>}
                            {SelectedAllFilter.FirstFrom && <SelectLable onClick={() => headerLabelRemove("FirstFrom")}> First registration from {SelectedAllFilter.FirstFrom}<Plus src="/plus.png" /> </SelectLable>}
                            {SelectedAllFilter.FirstTo && <SelectLable onClick={() => headerLabelRemove("FirstTo")}> First registration to {SelectedAllFilter.FirstTo}<Plus src="/plus.png" /> </SelectLable>}
                            {SelectedAllFilter.PriceFrom && <SelectLable onClick={() => headerLabelRemove("PriceFrom")}>From {SelectedAllFilter.PriceFrom}<Plus src="/plus.png" /> </SelectLable>}
                            {SelectedAllFilter.PriceTo && <SelectLable onClick={() => headerLabelRemove("PriceTo")}>To {SelectedAllFilter.PriceTo}<Plus src="/plus.png" /> </SelectLable>}
                            {SelectedAllFilter.SelectedCountry && <SelectLable onClick={() => headerLabelRemove("SelectedCountry")}>{SelectedAllFilter.SelectedCountry.Country}<Plus src="/plus.png" /> </SelectLable>}
                            {SelectedAllFilter.selectedFueltype && <SelectLable onClick={() => headerLabelRemove("selectedFueltype")}>{SelectedAllFilter.selectedFueltype}<Plus src="/plus.png" /> </SelectLable>}
                            {SelectedAllFilter.selectedGear && <SelectLable onClick={() => headerLabelRemove("selectedGear")}>{SelectedAllFilter.selectedGear}<Plus src="/plus.png" /> </SelectLable>}
                        </>

                }

                <button onClick={()=> setMobilMenu(true)} className='MonbileMenu'>Filters</button>

            </FilterSelected>

            {!SelectedAllFilter.SelectCar &&
                <FilterSelected className={ScrollActive && 'Active'}>
                    <span>Top Makes</span>
                    {TopMakes.map(make => (
                        <SelectLable onClick={() => handleTopMakesSelect(make.brand, make.models)} >{make.brand} <Plus src='/plus.png' /></SelectLable>
                    ))}
                </FilterSelected>
            }


        </Wrapper>
    )
}

export default Header