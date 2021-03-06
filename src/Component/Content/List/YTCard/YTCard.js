import classNames from 'classnames'
import { useHistory } from 'react-router-dom'
import styles from './card.module.scss'
import Save from './Save/Save'

const YTCard = ({
  id,
  snippet: {
    description,
    title,
    thumbnails: { standard: { url } = {} } = {},
  } = {},
  contentDetails: { duration } = {},
  hidden,
} = {}) => {
  const history = useHistory()
  const clickToPlay = () => {
    history.push(`/ajtaiwan/play/${id}`)
  }

  if (hidden)
    return (
      <li
        style={{
          opacity: 0,
          pointerEvents: 'none',
        }}
        className={classNames(styles['yt-card'])}
      />
    )

  return (
    <li onClick={clickToPlay} className={classNames(styles['yt-card'])}>
      <div className={styles['yt-img']}>
        <img alt={title} src={url} />
        <div className={styles['yt-length']}>{format_time(duration)}</div>
        <Save id={id} />
      </div>
      <div className={styles['yt-title']}>{title}</div>
      <div className={styles['yt-description']}>
        {cut_description(description)}
      </div>
    </li>
  )
}

const format_time_unit = (input, unit) => {
  var index = input.indexOf(unit)
  var output = '00'
  if (index < 0) {
    return output // unit isn't in the input
  }

  if (isNaN(input.charAt(index - 2))) {
    return '0' + input.charAt(index - 1)
  } else {
    return input.charAt(index - 2) + input.charAt(index - 1)
  }
}

const format_time = input => {
  var H = format_time_unit(input, 'H')
  var M = format_time_unit(input, 'M')
  var S = format_time_unit(input, 'S')

  if (H === '00') {
    H = ''
  } else {
    H += ':'
  }

  return H + M + ':' + S
}

const cut_description = description => `${description.slice(0, 60)}...`

export default YTCard
