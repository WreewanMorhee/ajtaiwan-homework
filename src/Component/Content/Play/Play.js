import * as React from 'react'
import Hls from 'hls.js'
import styles from './player.module.scss'
import classNames from 'classnames'
import { AppStore } from 'App'
import { Redirect, useHistory, useParams } from 'react-router'
import ad from './ad.jpg'

let pause_timer = null
function Play() {
  const history = useHistory()
  const hls = new Hls()
  const videoEl = React.useRef(null)
  const {
    ytList: { yt_list, loading },
  } = React.useContext(AppStore)
  const { id: cur_id } = useParams()
  const target_video = yt_list.filter(({ id }) => id === cur_id)[0]
  const cur_index = yt_list.findIndex(({ id }) => id === cur_id)
  const next_id = yt_list[cur_index + 1]?.id
  const prev_id = yt_list[cur_index - 1]?.id

  React.useEffect(() => {
    if (videoEl.current) {
      hls.attachMedia(videoEl.current)
      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource(
          'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
        )
      })
    }
  }, [cur_id])

  const [show_ad, set_show_ad] = React.useState(false)
  const toggleAD = shoul_show_ad => {
    set_show_ad(shoul_show_ad)
  }

  const pauseToToggleAD = () => {
    pause_timer = setTimeout(() => {
      toggleAD(true)
    }, 500)
  }
  const playToToggleAD = () => {
    toggleAD(false)
    clearTimeout(pause_timer)
    pause_timer = null
  }
  const clickToToggleAD = () => {
    toggleAD(false)
  }

  const to_certain_video = id => {
    history.push(`/ajtaiwan/play/${id}`)
  }
  const clickToPrev = () => {
    if (prev_id) {
      to_certain_video(prev_id)
    } else {
      alert('這是第一部影片喔!')
    }
  }
  const clickToNext = () => {
    if (next_id) {
      to_certain_video(next_id)
    } else {
      alert('這是最後一部影片喔!')
    }
  }

  if (loading || !yt_list.length)
    return (
      <div className={classNames(styles['loading-box'])}>拿取資料中...</div>
    )

  if (!target_video) {
    alert('沒有這部影片喔')
    return <Redirect to="/ajtaiwan/list/1" />
  }

  return (
    <div className={classNames(styles['video-box'])}>
      <div className={classNames(styles['video'])}>
        <video
          onPause={pauseToToggleAD}
          onPlay={playToToggleAD}
          ref={videoEl}
          autoPlay
          muted
          loop
          playsInline
          controls
        />
        <div
          className={classNames(styles['ad-box'], {
            [styles['active']]: show_ad,
          })}
        >
          <a
            href={
              'https://www.pinkoi.com/product/W6VrGiks?_currency=TWD&utm_source=Google-TW-MKT&utm_medium=p-con-shopping-na&utm_campaign=gsa&gclid=Cj0KCQiA7YyCBhD_ARIsALkj54rE6bwrTij5lPjgwU5F8VL9gB4DT2EIkdEMJhUZPLJn6ksWXksdfEYaAlS7EALw_wcB'
            }
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <img src={ad} alt="pinkoi ad img" />
          </a>
          <div
            onClick={clickToToggleAD}
            className={classNames(styles['close'])}
          >
            <i className="far fa-times-circle"></i>
          </div>
        </div>

        <div
          onClick={clickToPrev}
          className={classNames(styles['arrow-video'], styles['prev-video'])}
        >
          <i className="fas fa-arrow-left"></i>
        </div>

        <div
          onClick={clickToNext}
          className={classNames(styles['arrow-video'], styles['next-video'])}
        >
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>

      <div className={classNames(styles['title'])}>
        {target_video.snippet.title}
      </div>
      <div className={classNames(styles['description'])}>
        {target_video.snippet.description}
      </div>
    </div>
  )
}

export default Play
