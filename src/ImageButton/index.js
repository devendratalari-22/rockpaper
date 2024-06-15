import {ButtonContainer, ButtonImage, ImageItem} from './styledComponents'

const ImageButton = props => {
  const {buttonDetails, buttonId} = props

  const {id, image} = buttonDetails
  const lowerCaseId = id.toLowerCase()

  const onClickButton = () => {
    buttonId(id, image)
  }

  return (
    <ButtonContainer>
      <ButtonImage
        data-testid={`${lowerCaseId}Button`}
        type="button"
        onClick={onClickButton}
      >
        <ImageItem src={image} alt={id} />
      </ButtonImage>
    </ButtonContainer>
  )
}

export default ImageButton
