import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import GameResultView from '../GameResultView'
import ImageButton from '../ImageButton'
import 'reactjs-popup/dist/index.css'

import {
  AppContainer,
  ScoreContainer,
  ItemsContainer,
  Header,
  ScoreCardContainer,
  ScoreText,
  ScoreValue,
  ItemsImagesContainer,
  PopupContainer,
  PopupButton,
  RulesContainer,
  CloseIconContainer,
  CloseButton,
  RulesPopupImage,
} from './styledComponents'

class Game extends Component {
  state = {
    showResult: false,
    score: 0,
    myChoice: {},
    resultMessage: '',
    opponentChoice: {},
  }

  onClickPlayAgain = () => this.setState({showResult: false})

  onGetResult = () => {
    const {myChoice, resultMessage, opponentChoice} = this.state

    const {id, image} = opponentChoice
    return (
      <GameResultView
        myChoice={myChoice}
        opponentChoice={opponentChoice}
        resultMessage={resultMessage}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  onGetButtonId = (id, image) => {
    const {choiceList} = this.props
    const number = Math.floor(Math.random() * choiceList.length)

    if (choiceList[number].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choiceList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choiceList[number].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choiceList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choiceList[number].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choiceList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    }
    if (choiceList[number].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choiceList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    }
    if (choiceList[number].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choiceList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    }
    if (choiceList[number].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choiceList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else {
      this.setState({
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choiceList[number],
        resultMessage: 'IT IS DRAW',
      })
    }
  }

  onGetImages = () => {
    const {choiceList} = this.props
    return (
      <ItemsImagesContainer>
        {choiceList.map(eachItem => (
          <ImageButton
            key={eachItem.id}
            buttonDetails={eachItem}
            buttonId={this.onGetButtonId}
          />
        ))}
      </ItemsImagesContainer>
    )
  }

  render() {
    const {score, showResult, myChoice, opponentChoice} = this.state
    return (
      <AppContainer>
        <ScoreContainer>
          <ItemsContainer>
            <Header>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </Header>
          </ItemsContainer>
          <ScoreCardContainer>
            <ScoreText>Score</ScoreText>
            <ScoreValue>{score}</ScoreValue>
          </ScoreCardContainer>
        </ScoreContainer>
        {showResult ? this.onGetResult() : this.onGetImages()}
        <PopupContainer>
          <Popup modal trigger={<PopupButton type="button">Rules</PopupButton>}>
            {close => (
              <RulesContainer>
                <CloseIconContainer>
                  <CloseButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </CloseButton>
                </CloseIconContainer>
                <RulesPopupImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesContainer>
            )}
          </Popup>
        </PopupContainer>
      </AppContainer>
    )
  }
}

export default Game
