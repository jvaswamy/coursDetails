import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import {
  CouresItemContainer,
  CourseResponsiveContainer,
  CouresItemContentContainer,
  ItemImage,
  ItemTextContainer,
  ItemHeading,
  ItemDescription,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponent'

class CourseItemDetails extends Component {
  state = {
    inProgress: false,
    courseItem: {},
  }

  componentDidMount() {
    this.getCourseItem()
  }

  getCourseItem = async () => {
    this.setState({inProgress: true})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/te/courses/${id}`
    const response = await fetch(url)
    if (response.ok === true) {
      const responseDate = await response.json()
      const formatedData = {
        id: responseDate.course_details.id,
        name: responseDate.course_details.name,
        imageUrl: responseDate.course_details.image_url,
        description: responseDate.course_details.description,
      }
      this.setState({courseItem: formatedData, inProgress: false})
    }
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

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  renderItemDetailsView = () => {
    const {courseItem} = this.state
    const {name, description, imageUrl} = courseItem

    return (
      <CouresItemContentContainer>
        <ItemImage src={imageUrl} alt={name} />
        <ItemTextContainer>
          <ItemHeading>{name}</ItemHeading>
          <ItemDescription>{description}</ItemDescription>
        </ItemTextContainer>
      </CouresItemContentContainer>
    )
  }

  render() {
    const {inProgress} = this.state

    return (
      <>
        <Header />
        <CouresItemContainer>
          <CourseResponsiveContainer>
            {inProgress
              ? this.renderLoaderView()
              : this.renderItemDetailsView()}
          </CourseResponsiveContainer>
        </CouresItemContainer>
      </>
    )
  }
}

export default CourseItemDetails
