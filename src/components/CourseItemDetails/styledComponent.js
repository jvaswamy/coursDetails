import styled from 'styled-components'

// loader section

export const LoaderContainer = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CouresItemContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const CourseResponsiveContainer = styled.div`
  width: 90%;
`
export const CouresItemContentContainer = styled.div`
  display: flex;
  box-shadow: 1px 2px 8px 1px #e8e8e8;
  margin-top: 80px;
`
export const ItemImage = styled.img`
  width: 350px;
  height: 300px;
`
export const ItemTextContainer = styled.div`
  padding: 12px;
`
export const ItemHeading = styled.h1`
  font-size: 28px;
  color: #1e293b;
  font-family: 'Roboto';
`
export const ItemDescription = styled.p`
  font-size: 20px;
  margin: 0px;
  color: #475569;
  font-family: 'Roboto';
`
// failure section

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImg = styled.img`
  width: 80%;
  margin-bottom: 26px;
`
export const FailureHeading = styled.h1`
  font-size: 28px;
  color: #1e293b;
  font-family: 'Roboto';
`
export const FailureDescription = styled.p`
  font-size: 20px;
  margin: 0px;
  color: #475569;
  font-family: 'Roboto';
  text-align: center;
`
export const RetryButton = styled.button`
  border: none;
  border-radius: 5px;
  width: 80px;
  background-color: #4656a1;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  margin-top: 16px;
  height: 40px;
`
