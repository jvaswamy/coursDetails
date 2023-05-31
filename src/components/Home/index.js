import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import CourseItemCart from '../CourseItemCart'

import {
  HomeContainer,
  LoaderContainer,
  CourseContainer,
  CourseHeading,
  CourseList,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponent'

class Home extends Component {
  state = {inProgress: false, courseList: []}

  componentDidMount() {
    this.getCourseData()
  }

  getCourseData = async () => {
    this.setState({inProgress: true})
    const url = 'https://apis.ccbp.in/te/courses'
    const response = await fetch(url)
    if (response.ok === true) {
      const responseData = await response.json()
      const updatedData = responseData.courses.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        logoUrl: eachItem.logo_url,
      }))

      this.setState({courseList: updatedData, inProgress: false})
    } else {
      this.renderFailureView()
      this.setState({inProgress: false})
    }
  }

  onClickRetry = () => {
    this.getCourseData()
  }

  renderFailureView = () => (
    <FailureContainer>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Page Not Found</FailureHeading>
      <FailureDescription>
        We are sorry, the page you requested could not be found
      </FailureDescription>
      <RetryButton type="button" onClick={this.onClickRetry}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderCoursesView = () => {
    const {courseList} = this.state
    return (
      <CourseContainer>
        <CourseHeading>Courses</CourseHeading>
        <CourseList>
          {courseList.map(eachCourse => (
            <CourseItemCart key={eachCourse.id} courseDetails={eachCourse} />
          ))}
        </CourseList>
      </CourseContainer>
    )
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  render() {
    const {inProgress} = this.state

    return (
      <>
        <Header />
        <HomeContainer>
          {inProgress ? this.renderLoaderView() : this.renderCoursesView()}
        </HomeContainer>
      </>
    )
  }
}

export default Home
