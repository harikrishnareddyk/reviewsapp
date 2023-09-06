import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  left = () => {
    const {count} = this.state
    if (count === 0) {
      this.setState({count: 3})
    } else {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  rigth = () => {
    const {count} = this.state
    if (count !== 3) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList
    return (
      <div className="container">
        <h1>Reviews</h1>
        <div className="mini-con">
          <button data-testid="leftArrow" className="button">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              onClick={this.left}
              alt="left arrow"
            />
          </button>
          <div className="review">
            <img
              src={reviewsList[count].imgUrl}
              alt={reviewsList[count].username}
              className="imageEl"
            />
            <p>{reviewsList[count].username}</p>
            <p>{reviewsList[count].companyName}</p>
            <p>{reviewsList[count].description}</p>
          </div>
          <button data-testid="rightArrow" className="button">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              onClick={this.rigth}
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
