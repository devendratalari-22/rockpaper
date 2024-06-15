import {
  ShowResultContainer,
  ResultImageContainer,
  ResultTextImageContainer,
  ResultText,
  ResultImage,
  ResultButton,
  PlayAgainButton,
} from './styledComponents'

const GameResultview = props => {
  const {myChoice, opponentChoice, resultMessage, playAgain} = props

  const {id, image} = opponentChoice

  const onClickPlayAgainButton = () => {
    playAgain()
  }
  return (
    <ShowResultContainer>
      <ResultImageContainer>
        <ResultTextImageContainer>
          <ResultText>YOU</ResultText>
          <ResultImage src={myChoice[1]} alt="your choice" />
        </ResultTextImageContainer>

        <ResultTextImageContainer>
          <ResultText>OPPONENT</ResultText>
          <ResultImage src={image} alt="opponent choice" />
        </ResultTextImageContainer>
      </ResultImageContainer>
      <ResultText>{resultMessage}</ResultText>
      <ResultButton>
        <PlayAgainButton type="button" onClick={onClickPlayAgainButton}>
          Play Again
        </PlayAgainButton>
      </ResultButton>
    </ShowResultContainer>
  )
}

export default GameResultview
