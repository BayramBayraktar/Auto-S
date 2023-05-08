import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction:column;
    padding: 16px;
    background: #fff;
    width: 100%;
    position: sticky;
    top: 0;
    
    &.Active {
        position: sticky;
        top: 0;
        box-shadow: rgb(0 0 0 / 40%) 0px 4px 8px;
        z-index:99;
    }
`;
const HeaderTop = styled.div`
    display: flex;
    justify-content : space-between;
`;

const SearchResult = styled.div`
    font-size:21px;
    span {
        &.Active {
            color: #1166A8;
            cursor: pointer;
        }
    }
`;
const SortFilter = styled.div`
    font-size:19px;
`;

const FilterSelected = styled.div`
    display: flex;
    align-items:center;
    flex-wrap:wrap;
    padding: 16px 0px;
    transition: 0.4s;

    &> span {
        margin: 0 7px 0 0 ;
        font-size:18px; 
    }

    &.Active {
        display: none;
    }
   
    &>.MonbileMenu {
        margin-left: auto;
        padding: 8px 12px;
        border: 3px solid #000;
        border-radius:4px;
        font-size:18px;
        outline: none;
        background: transparent;
        color: #000;
        cursor: pointer;
        display: none;

        @media(max-width:1100px) {
            display: block;
        }
    }

`;

const SelectLable = styled.div`
display: flex;
align-items:center;
color: #1166A8;
padding: 8px 12px;
margin:   5px; 3px;
border-radius:20px; 
border: solid #1166A8 1px;
background: #fff;
cursor: pointer;

`;

const Plus = styled.img`
    width: 15px;
    margin: 0 0 0 7px; 
`;

const BlueText = styled.span`
    color: #1166A8;
    font-size:19px;
    font-weight:400;
    cursor: pointer;
`;




export {
    Wrapper,
    HeaderTop,
    SearchResult,
    SortFilter,
    FilterSelected,
    SelectLable,
    Plus,
    BlueText


}