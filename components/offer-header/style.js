import style from 'styled-components';

const Container = style.div`
    width: 100%;
    margin-top: 10px; 
    padding: 16px;
    background: #fff;
    display: flex;
    flex-direction:column;
    border-bottom:1px solid rgba(0,0,0,0.2);

    &.Active {
        position: sticky;
        top: 0px;
        left: 0px;
        box-shadow: 0px 4px 8px -4px rgb(0 0 0 );
    }

`;

const Title = style.div`
    padding: 0 0  15px 0;

    &> span {
        color: #000;
        font-size:18px;
        font-weight:500;
    }
`;

const List = style.div`
    display: flex;
`;


const İtem = style.li`
    font-size:16px;
    margin-right: 8px; 
    color: rgba(0,0,0,0.6);
    font-weight:500;

    &>.active{
        color: #1a72e8;
    }
   
`;


export {
    Container,
    Title,
    List,
    İtem
}