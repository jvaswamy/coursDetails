import {Link} from 'react-router-dom'
import '../Home/index.css'
import {
  CourseItemContainer,
  CourseLogo,
  CourseTitle,
  CourseItemContext,
} from './styledComponent'

const CourseItemCart = props => {
  const {courseDetails} = props

  const {name, logoUrl, id} = courseDetails
  return (
    <CourseItemContainer>
      <Link to={`/courses/${id}`} className="link-item">
        <CourseItemContext>
          <CourseLogo src={logoUrl} alt={name} />
          <CourseTitle>{name}</CourseTitle>
        </CourseItemContext>
      </Link>
    </CourseItemContainer>
  )
}

export default CourseItemCart
