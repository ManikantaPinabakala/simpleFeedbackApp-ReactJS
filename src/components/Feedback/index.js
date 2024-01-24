import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackClicked: false,
  }

  onEmojiClick = () => {
    this.setState(prevState => ({
      isFeedbackClicked: !prevState.isFeedbackClicked,
    }))
  }

  render() {
    const {isFeedbackClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="main-bg-container">
        <div className="bg-container">
          {isFeedbackClicked ? (
            <>
              <img
                className="love-emoji-image"
                src={loveEmojiUrl}
                alt="love emoji"
              />
              <h1 className="thank-you-text">Thank You!</h1>
              <p className="feedback-response">
                We will use you feedback to improve our customer support
                performance
              </p>
            </>
          ) : (
            <>
              <h1 className="feedback-question">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emojis-list">
                {emojis.map(emoji => (
                  <li className="single-emoji-section" key={emoji.id}>
                    <img
                      className="emoji-image"
                      src={emoji.imageUrl}
                      alt={emoji.name}
                      onClick={this.onEmojiClick}
                    />
                    <p className="emoji-name">{emoji.name}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
