import { Link, useLocation } from 'react-router-dom'
import styles from './navbar.module.scss'
import classNames from 'classnames'
import { useContext } from 'react'
import { AppStore } from 'App'

const Navbar = () => {
  const { pathname } = useLocation()
  const { ytList: { yt_list = [] } = {} } = useContext(AppStore)
  const play_default_route = `/ajtaiwan/play/${yt_list[0]?.id}`

  return (
    <div className={classNames(styles['nav-box'])}>
      <Link
        className={classNames({
          [styles['active']]: pathname.includes('list'),
        })}
        to="/ajtaiwan/list/1"
      >
        <i className="fas fa-list"></i> 主頁
      </Link>

      <Link
        className={classNames({
          [styles['active']]: pathname.includes('save'),
        })}
        to="/ajtaiwan/save"
      >
        <i className="far fa-bookmark"></i> 收藏
      </Link>

      <Link
        className={classNames({
          [styles['active']]: pathname.includes('play'),
        })}
        to={play_default_route}
      >
        <i className="far fa-play-circle"></i> 播放
      </Link>
    </div>
  )
}

export default Navbar
