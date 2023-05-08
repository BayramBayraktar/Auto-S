import style from 'styled-components';

const Wrapper = style.div`
display: flex;
`;

const Container = style.div`
    width: 100%;
    padding:0 18px;
    display: flex;
    flex-direction:column;

    &>img {
        position:sticky;
        display: block;
        top: 25%;
        width: 100%;
        min-width: 384px;

        @media(max-width:825px) {
            display: none;
        }
    }
`;

const Title = style.h1`
    position: sticky;
    top: 0px;
    margin: 0px;
    padding: 20px;
    background: #fff;
    z-index:99;
`;

const İnputContainer = style.div`
    display: flex;
    flex-direction:column;
    width: 350px;
    margin: 10px 0 10px;
    `;

const İnputDropMenu = style.div`
    border: solid 2px black;
    margin: 8px 0 0;
    border-radius:6px;

    
    .Style {
        border: none;
        outline: none;
        width: 100%;
        padding: 10px;

    }
    
    `;

const İnput = style.input`
    width: 100%;
    position: relative;
    border-style:none;
    outline: none;
    background: #fff;
    padding: 10px;
    cursor: pointer;

    :disabled {
        cursor: not-allowed;
    }



    ::-webkit-calendar-picker-indicator {
        width: 100%;
        height: 100%;
        position: absolute;
        background:translate;
        opacity: 0;
    }

`;

const TextArea = style.textarea`
    border: none;
    outline: none;
    width: 100%;
    height: 100px;
    padding: 10px;
    resize: none;
`;

const Label = style.label`
`;

const Button = style.button`
    padding: 18px;
    border: none;
    outline: none;
    border-radius:5px;
    background: yellow;
    color: #000;
    cursor: pointer;
`;


const List = style.div`
overflow: hidden;  
    max-height:200px;
    overflow-y:scroll;
    padding: 10px;
`;

const İtem = style.li`
cursor: pointer;

`;




export {
    Wrapper,
    Container,
    Title,
    İnputContainer,
    İnputDropMenu,
    İnput,
    TextArea,
    Label,
    Button,
    List,
    İtem

}