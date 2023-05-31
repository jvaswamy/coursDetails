import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`

export const CourseContainer = styled.div`
  width: 90%;
`
export const CourseHeading = styled.h1`
  font-size: 24px;
  color: #1e293b;
  font-weight: 600;
  margin-top: 45px;
`
export const CourseList = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`
// loader section

export const LoaderContainer = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
