import './index.css'

const MultiLanguage = props => {
  const {isSelected, buttonTxt, changeLanguage} = props
  const selectedCss = isSelected ? 'selected' : ''

  const onChangeLanguage = () => {
    changeLanguage(buttonTxt)
  }

  return (
    <li className="list-item">
      <button
        onClick={onChangeLanguage}
        className={`button ${selectedCss}`}
        type="button"
      >
        {' '}
        {buttonTxt}{' '}
      </button>
    </li>
  )
}

export default MultiLanguage
