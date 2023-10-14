import {Component} from 'react'

import MultiLanguage from './components/MultiLanguage'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    defaultVal: 'English',
  }

  changeLanguage = language => {
    this.setState({
      defaultVal: language,
    })
  }

  render() {
    const {defaultVal} = this.state
    const imgUrl = languageGreetingsList.filter(
      each => each.buttonText === defaultVal,
    )

    return (
      <div className="app-container">
        <h1 className="heading"> Multilingual Greetings </h1>
        <ul className="button-container">
          {languageGreetingsList.map(each => (
            <MultiLanguage
              isSelected={each.buttonText === defaultVal}
              key={each.id}
              buttonTxt={each.buttonText}
              changeLanguage={this.changeLanguage}
            />
          ))}
        </ul>
        <div className="img-container">
          <img
            className="lag-img"
            src={imgUrl[0].imageUrl}
            alt={imgUrl[0].imageAltText}
          />
        </div>
      </div>
    )
  }
}

export default App
