// Write your code here

import {useState} from 'react'

import {
  AppContainer,
  ImageAndTextContainer,
  Image,
  Text,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(false)

  const imgUrl = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const altText = isUnlocked ? 'unlock' : 'lock'

  const lockParagraph = isUnlocked
    ? 'Your Device is Unlocked'
    : 'Your Device is Locked'

  const buttonText = isUnlocked ? 'Lock' : 'Unlock'

  const onChangeLockButton = () => {
    setIsUnlocked(prevState => !prevState)
  }

  return (
    <AppContainer>
      <ImageAndTextContainer>
        <Image src={imgUrl} alt={altText} />
        <Text>{lockParagraph}</Text>
      </ImageAndTextContainer>
      <Button type="button" onClick={onChangeLockButton}>
        {buttonText}
      </Button>
    </AppContainer>
  )
}

export default Unlock
