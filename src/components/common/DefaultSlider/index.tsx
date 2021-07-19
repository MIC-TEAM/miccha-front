import styled from '@emotion/styled'

const DefaultSlider = () => {
  return (
    <DefaultSliderContainer>
      <h1>Comming Soon..</h1>
    </DefaultSliderContainer>
  )
}

export default DefaultSlider

const DefaultSliderContainer = styled.div`
  width: 100%;
  height: 100%;

  h1 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5vw;
    font-weight: 700;
  }
`
