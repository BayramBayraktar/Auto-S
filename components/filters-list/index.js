import React, { useEffect, useState, useContext } from 'react'
import { FilterContext } from '../../context/filtercontext.js'
import OutsideClickHandler from 'react-outside-click-handler'
import axios from 'axios';
import CarsTops from '../data/cars/tops.json'
import CarsOther from '../data/cars/outher.json'
import CarBody from '../data/carbody/index.json'
import Countrys from '../data/filtercountrys/index.json'
import Years from '../data/years/index.json'
import Prices from '../data/price/index.json'
import FuelTypes from '../data/fueltype/index.json'
import Gears from '../data/gear/index.json'
import {
    Wrapper,
    MobileWrapper,
    MobilFilterHeader,
    WrapperContainer,
    Container,
    Button,
    DropMenu,
    DropMenuItem,
    MenuTitle,
    InputWrapper,
    InputSection,
    DropArrow,
    SelectionInput,
    InputOptionsWrappre,
    OptionsTitle,
    InputOptions,
    Input,
    InputContainer,
    SpanChacked,
    InputChackbox,
    Label,
    ResultCar,
    BgDrop
} from './style'
const List = () => {

    //SelectedContext
    const { handleFilterSelectedChange, FilterRemoveType, setFilterRemoveType, TopMakesSelect, MobileMenu, setMobilMenu } = useContext(FilterContext)


    const [Visibility, setVisibility] = useState("")
    const [InputVisibility, setInputVisibility] = useState("")
    const [SelectCar, setSelectCar] = useState("")
    const [SelectModels, setSelectModels] = useState("")
    const [SelectModel, setSelectModel] = useState("")
    const [SelectedBody, setSelectedBody] = useState("")
    const [FirstTo, setFirstTo] = useState("")
    const [FirstFrom, setFirstFrom] = useState("")
    const [FirstToController, setFirstToController] = useState("")
    const [PriceFrom, setPriceFrom] = useState("")
    const [PriceTo, setPriceTo] = useState("")
    const [PriceToController, setPriceToController] = useState("")
    const [SelectedCountry, setSelectedCountry] = useState("")
    const [selectedFueltype, setselectedFueltype] = useState("")
    const [selectedGear, setselectedGear] = useState("")




    const handleSelectCarWithModels = (breand, model) => {
        setSelectCar(breand);
        setSelectModels(model);
        setInputVisibility("");
    }

    const handleSelectModel = (Model) => {
        setSelectModel(Model)
        setInputVisibility("")
    }

    const handleFirstFrom = (value, i) => {
        setFirstToController(i)
        setFirstFrom(value)
    }

    const handlePrice = (value, i) => {
        setPriceToController(i)
        setPriceFrom(value)
    }

    useEffect(() => {
        if (Visibility === "Location") {
            setVisibility('Location')
        }
        if (Visibility === 'Optinal') {
            setVisibility('Optinal')
        }

    }, [Visibility])





    //ıf the Selected Filter Change 
    useEffect(() => {
        handleFilterSelectedChange(
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
        )




    }, [SelectCar, SelectModel, SelectedBody, FirstTo, FirstFrom, PriceFrom, PriceTo, SelectedCountry, selectedFueltype, selectedGear])


    useEffect(() => {

        if (FilterRemoveType === 'SelectCar') {
            setSelectCar("")
            setSelectModel("")
            setFilterRemoveType("")
        }

        if (FilterRemoveType === 'SelectedBody') {
            setSelectedBody("")
            setFilterRemoveType("")
        }
        if (FilterRemoveType === 'FirstTo') {
            setFirstTo("")
            setFilterRemoveType("")
        }
        if (FilterRemoveType === 'FirstFrom') {
            setFirstFrom("")
            setFilterRemoveType("")
        }
        if (FilterRemoveType === 'PriceFrom') {
            setPriceFrom("")
            setFilterRemoveType("")
        }
        if (FilterRemoveType === 'PriceTo') {
            setPriceTo("")
            setFilterRemoveType("")
        }
        if (FilterRemoveType === 'SelectedCountry') {
            setSelectedCountry("")
            setFilterRemoveType("")
        }
        if (FilterRemoveType === 'selectedFueltype') {
            setselectedFueltype("")
            setFilterRemoveType("")
        }
        if (FilterRemoveType === 'selectedGear') {
            setselectedGear("")
            setFilterRemoveType("")
        }
    }, [FilterRemoveType])

    useEffect(() => {
        setSelectCar(TopMakesSelect.Make)
        setSelectModels(TopMakesSelect.model)
    }, [TopMakesSelect])


    useEffect(() => {
        if (MobileMenu) {
            document.querySelector('body').classList.add('fixed')
        } else {
            document.querySelector('body').classList.remove('fixed')
        }
    }, [MobileMenu])

    return (
        <Wrapper>
            <BgDrop onClick={() => setMobilMenu(false)} className={MobileMenu && 'Active'}></BgDrop>
            <MobileWrapper className={MobileMenu && 'Active'} >
                <MobilFilterHeader >
                    <span>Clear filters</span>
                    <span onClick={() => setMobilMenu(false)}>X</span>
                </MobilFilterHeader>
                <div className='Demo'>

                    <WrapperContainer>
                        <Container>
                            <Button onClick={() => Visibility === "specifications " ? setVisibility(false) : setVisibility("specifications ")}>
                                <h2>Basic specifications & Location</h2>
                                <img width="20px" src="/Drop.png" alt="dropArrow" />
                            </Button>
                            {Visibility === 'specifications ' && <DropMenu>

                                {/* //Make Section */}
                                <DropMenuItem>
                                    <MenuTitle>Make</MenuTitle>
                                    <InputWrapper className={InputVisibility == "Make" && 'Active'}>
                                        <InputSection onClick={() => setInputVisibility('Make')}>
                                            <SelectionInput type="text" alt='CarSelect' placeholder='All' value={SelectCar === '' ? "Make" : SelectCar} />
                                            <DropArrow src='/Drop.png' />
                                        </InputSection>

                                        {InputVisibility === 'Make' &&
                                            <InputOptionsWrappre >
                                                <OutsideClickHandler onOutsideClick={() => setInputVisibility("")}>
                                                    <OptionsTitle>TOP MAKES</OptionsTitle>
                                                    {CarsTops.map(car => (
                                                        <InputOptions onClick={() => handleSelectCarWithModels(car.brand, car.models)} >{car.brand}</InputOptions>
                                                    ))}
                                                    <OptionsTitle>OTHER MAKES</OptionsTitle>
                                                    {CarsOther.map(car => (
                                                        <InputOptions onClick={() => handleSelectCarWithModels(car.brand, car.models)} >{car.brand}</InputOptions>
                                                    ))}
                                                </OutsideClickHandler>
                                            </InputOptionsWrappre>
                                        }
                                    </InputWrapper>
                                </DropMenuItem>
                                {/* //Model Section */}
                                <DropMenuItem>
                                    <MenuTitle>Model</MenuTitle>
                                    <InputWrapper className={InputVisibility == 'Model' && 'Active'}>
                                        <InputSection>
                                            <SelectionInput onClick={() => setInputVisibility('Model')} type="text" alt='ModelSelect' value={SelectModel ? SelectModel : 'All'} disabled={SelectCar ? false : true} />
                                            <DropArrow src='/Drop.png' />
                                        </InputSection>

                                        {InputVisibility === 'Model' &&
                                            <InputOptionsWrappre >
                                                <OutsideClickHandler onOutsideClick={() => setInputVisibility("")}>
                                                    {SelectModels.map((Model) => (
                                                        <InputOptions onClick={() => handleSelectModel(Model)}>{Model}</InputOptions>
                                                    ))}
                                                </OutsideClickHandler>
                                            </InputOptionsWrappre>
                                        }
                                    </InputWrapper>
                                </DropMenuItem>
                                {/* //Variant Section */}
                                <DropMenuItem>
                                    <MenuTitle>Variant</MenuTitle>
                                    <InputWrapper >
                                        <Input placeholder='e.g. Plus, GTI, etc.' type="text" alt='variant' />
                                    </InputWrapper>
                                </DropMenuItem>
                                {/* //Body Type Section */}
                                <DropMenuItem>
                                    <MenuTitle>Body Type</MenuTitle>
                                    <InputWrapper className={InputVisibility == 'BodyType' && 'Active'}>
                                        <InputSection>
                                            <SelectionInput onClick={() => setInputVisibility('BodyType')} type="text" alt='BodyType' value={SelectedBody === '' ? 'All' : SelectedBody} />
                                            <DropArrow src='/Drop.png' />
                                        </InputSection>

                                        {InputVisibility === 'BodyType' &&
                                            <InputOptionsWrappre >
                                                <OutsideClickHandler onOutsideClick={() => setInputVisibility("")}>
                                                    {CarBody.map((body) => (
                                                        <InputContainer>
                                                            <Label for={body.name} onClick={() => setSelectedBody(body.name)} >
                                                                <InputChackbox id={body.name} type="checkbox" />
                                                                <SpanChacked></SpanChacked>
                                                                {body.name}
                                                            </Label>
                                                        </InputContainer>
                                                    ))}
                                                </OutsideClickHandler>
                                            </InputOptionsWrappre>
                                        }
                                    </InputWrapper>
                                </DropMenuItem>
                                {/*  //Registration Section */}
                                <DropMenuItem>
                                    <MenuTitle>First registration</MenuTitle>
                                    <div className='DoubleInput'>
                                        <>
                                            <InputWrapper className={InputVisibility == "From" && 'Active'}>
                                                <InputSection onClick={() => setInputVisibility('From')}>
                                                    <SelectionInput type="text" alt='From' value={FirstFrom} placeholder='From' />
                                                    <DropArrow src='/Drop.png' />
                                                </InputSection>
                                                {InputVisibility === 'From' &&
                                                    <InputOptionsWrappre >
                                                        <OutsideClickHandler onOutsideClick={() => setInputVisibility("")}>
                                                            {Years.map((year, i) => (
                                                                <InputOptions onClick={() => handleFirstFrom(year, i)} >{year}</InputOptions>
                                                            ))}
                                                        </OutsideClickHandler>
                                                    </InputOptionsWrappre>
                                                }
                                            </InputWrapper>
                                        </>
                                        <>
                                            <InputWrapper className={InputVisibility == "To" && 'Active'}>
                                                <InputSection onClick={() => setInputVisibility('To')}>
                                                    <SelectionInput type="text" alt='To' value={FirstTo} placeholder='To' />
                                                    <DropArrow src='/Drop.png' />
                                                </InputSection>

                                                {InputVisibility === 'To' &&
                                                    <InputOptionsWrappre >
                                                        <OutsideClickHandler onOutsideClick={() => setInputVisibility("")}>
                                                            {Years.slice(0, FirstToController === "" ? 100 : FirstToController).map(year => (
                                                                <InputOptions onClick={() => setFirstTo(year)}>{year}</InputOptions>
                                                            ))}
                                                        </OutsideClickHandler>
                                                    </InputOptionsWrappre>
                                                }
                                            </InputWrapper>
                                        </>
                                    </div>
                                </DropMenuItem>
                                {/*  //Price Section */}
                                <DropMenuItem>
                                    <MenuTitle>Price</MenuTitle>
                                    <div className='DoubleInput'>
                                        <>
                                            <InputWrapper className={InputVisibility == "FromPrice" && 'Active'}>
                                                <InputSection onClick={() => setInputVisibility('FromPrice')}>
                                                    <SelectionInput type="text" alt='FromPrice' value={PriceFrom} placeholder='FromPrice' />
                                                    <DropArrow src='/Drop.png' />
                                                </InputSection>

                                                {InputVisibility === 'FromPrice' &&
                                                    <InputOptionsWrappre >
                                                        <OutsideClickHandler onOutsideClick={() => setInputVisibility("")}>
                                                            {Prices.map((price, i) => (
                                                                <InputOptions onClick={() => handlePrice(price, i)}>{price}</InputOptions>
                                                            ))}
                                                        </OutsideClickHandler>
                                                    </InputOptionsWrappre>
                                                }
                                            </InputWrapper>
                                        </>

                                        <>
                                            <InputWrapper className={InputVisibility == "FromTo" && 'Active'}>
                                                <InputSection onClick={() => setInputVisibility('FromTo')}>
                                                    <SelectionInput type="text" alt='FromTo' value={PriceTo} placeholder='FromTo' />
                                                    <DropArrow src='/Drop.png' />
                                                </InputSection>

                                                {InputVisibility === 'FromTo' &&
                                                    <InputOptionsWrappre >
                                                        <OutsideClickHandler onOutsideClick={() => setInputVisibility("")}>
                                                            {Prices.slice(PriceToController === "" ? 0 : PriceToController, 100).map(price => (
                                                                <InputOptions onClick={() => setPriceTo(price)}>{price}</InputOptions>
                                                            ))}
                                                        </OutsideClickHandler>
                                                    </InputOptionsWrappre>
                                                }
                                            </InputWrapper>
                                        </>
                                    </div>
                                </DropMenuItem>
                                {/* //Countries Section */}
                                <DropMenuItem>
                                    <MenuTitle >Countries</MenuTitle>
                                    <InputWrapper className={InputVisibility == "Country" && 'Active'}>
                                        <InputSection onClick={() => setInputVisibility('Country')}>
                                            <SelectionInput className='Country' type="text" alt='Country' value={SelectedCountry === '' ? "Europe" : SelectedCountry.Country} imgUrl={SelectedCountry == "" ? "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" : SelectedCountry.Flag} />
                                            <DropArrow src='/Drop.png' />
                                        </InputSection>

                                        {InputVisibility === 'Country' &&
                                            <InputOptionsWrappre >
                                                <OutsideClickHandler onOutsideClick={() => setInputVisibility("")}>
                                                    {Countrys.map(Country => (
                                                        <InputOptions className='Country' onClick={() => setSelectedCountry(Country)} imgUrl={Country.Flag}>{Country.Country}</InputOptions>
                                                    ))}
                                                </OutsideClickHandler>
                                            </InputOptionsWrappre>
                                        }
                                    </InputWrapper>
                                </DropMenuItem>
                                {/* //Fuel Type */}
                                <DropMenuItem>
                                    <MenuTitle>Fuel Type</MenuTitle>
                                    <InputWrapper className={InputVisibility == 'FuelType' && 'Active'}>
                                        <InputSection>
                                            <SelectionInput onClick={() => setInputVisibility('FuelType')} type="text" alt='FuelType' value={selectedFueltype === '' ? 'All' : selectedFueltype} />
                                            <DropArrow src='/Drop.png' />
                                        </InputSection>

                                        {InputVisibility === 'FuelType' &&
                                            <InputOptionsWrappre >
                                                <OutsideClickHandler onOutsideClick={() => setInputVisibility("")}>
                                                    {FuelTypes.map((type) => (
                                                        <InputContainer>
                                                            <Label onClick={() => setselectedFueltype(type)} >
                                                                <InputChackbox type="checkbox" />
                                                                <SpanChacked></SpanChacked>
                                                                {type}
                                                            </Label>
                                                        </InputContainer>
                                                    ))}
                                                </OutsideClickHandler>
                                            </InputOptionsWrappre>
                                        }
                                    </InputWrapper>
                                </DropMenuItem>
                                {/* //Gear Type */}
                                <DropMenuItem>
                                    <MenuTitle>Gear Type</MenuTitle>
                                    <InputWrapper className={InputVisibility == 'GearType' && 'Active'}>
                                        <InputSection>
                                            <SelectionInput onClick={() => setInputVisibility('GearType')} type="text" alt='GearType' value={selectedGear === '' ? 'All' : selectedGear} />
                                            <DropArrow src='/Drop.png' />
                                        </InputSection>

                                        {InputVisibility === 'GearType' &&
                                            <InputOptionsWrappre >
                                                <OutsideClickHandler onOutsideClick={() => setInputVisibility("")}>
                                                    {Gears.map((type) => (
                                                        <InputContainer>
                                                            <Label onClick={() => setselectedGear(type)} >
                                                                <InputChackbox type="checkbox" />
                                                                <SpanChacked></SpanChacked>
                                                                {type}
                                                            </Label>
                                                        </InputContainer>
                                                    ))}
                                                </OutsideClickHandler>
                                            </InputOptionsWrappre>
                                        }
                                    </InputWrapper>
                                </DropMenuItem>


                            </DropMenu>}
                        </Container>

                    </WrapperContainer>
                    <ResultCar>1.644.55 Cars</ResultCar>
                </div>
            </MobileWrapper>

        </Wrapper>
    )
}

export default List