import styled from 'styled-components/macro'

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:  #223a5f;
    height: 100vh;
    padding: 80px;
`

export const ScoreContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #ffffff;
    border-radius: 15px;
    padding: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 45%;
    margin-bottom: 40px;

`

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Header = styled.h1`
    color: #ffffff;
    font-size: 18px;
    font-family: Bree Serif;
    font-weight: 400;
    line-height: 1.5;

`
export const ScoreCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 12px;
    width: 20%;
    padding: 10px;
    padding-top: 0px;
    padding-bottom: 0px;
`
export const ScoreText = styled.p`
    color:  #223a5f;
    font-size: 18px;
    font-family: Bree Serif;
    font-weight: 500;
    margin-bottom: 0px;
    
`

export const ScoreValue = styled.p`
    color:  #223a5f;
    font-size: 30px;
    font-family: Roboto;
    font-weight: bold;
    margin-top: 0px;
`

export const ItemsImagesContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    height: 50%;
    padding: 0px;
`

export const CloseButton = styled.button`
    background-color: light-gray;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 25px;
    margin-bottom: 10px;
`

export const CloseIconContainer = styled.div`
    display: flex;
    align-self: flex-end;
`

export const PopupButton = styled.button`
    width: 100%;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    color: #223a5f;
    font-size: 14px;
    font-family: Bree Serif;
`

export const PopupContainer = styled.div`
   display: flex;
   align-self: flex-end;
`

export const RulesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
`

export const RulesPopupImage = styled.img`
    width: 100%;
    height: 100%;
`
