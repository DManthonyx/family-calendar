import styled from 'styled-components'

export const Table = styled.section`
    width: 500px;
    height: 360px;
    box-shadow: 0px 0px 37px #C4C4C4;
    border-radius: 17px;
`
export const Thead = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 60px;
    align-items: center;
    background: linear-gradient(180deg, #93E8BE 0%, #115AAD 100%);
    border-radius: 16px 16px 0px 0px;
`
export const Tbody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 12px;
`
export const Tr = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 39px;
`
export const Td = styled.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    &.update {
        background: #93E8BE;
        border-radius: 50%;
    }
`
export const H1 = styled.h1`
    text-align: center;
    color: white;
`
export const Button = styled.button`
    width: 35px;
    height: 35px;
    border: 3px solid white;
    border-radius: 25px;
    &.prev {
        background: url('https://i.imgur.com/j4CTk2y.png');
        background-repeat: no-repeat;
        background-position: center;
    }
    &.next {
        background: url('https://i.imgur.com/8W0DaMM.png');
        background-repeat: no-repeat;
        background-position: center;
    }
`

export const Main = styled.div`

`

export const Div = styled.div`
    margin-top: 26px;
    box-shadow: 0px 0px 37px #93E8BE;
    border: 2px solid #93E8BE;
    border-radius: 17px;
    height: 200px;
    &.event-picked {
        margin: 0px;
        box-shadow: none;
        border: 0px;
        height: auto;
        display: flex;
        justify-content: space-between;
        padding: 10px 30px;
        font-size: 23px;
        font-weight: bold;
    }
    }
    &.event-picked2 {
        margin: 0px;
        box-shadow: none;
        border: 0px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        & p:nth-child(1) {
            margin: 10px 0px;
            font-size: 25px;
        }
        & p:nth-child(2) {
            
        }
        & p:nth-child(4) {
            margin: 20px 0px 10px 0px;
            font-size: 21px;
        }
    }
`

export const P = styled.p`

`