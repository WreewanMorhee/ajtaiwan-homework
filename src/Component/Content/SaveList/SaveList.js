import { useContext } from 'react'
import classNames from 'classnames'
import styles from './savelist.module.scss'
import { AppStore } from 'App'
import YTCard from '../List/YTCard/YTCard'
import { dummy_num } from 'Config/helper'

const SaveList = () => {
  const {
    ytList: { yt_list, save_str, loading },
  } = useContext(AppStore)

  const save_list = yt_list.filter(({ id }) => save_str.includes(id))

  if (loading)
    return <div className={classNames(styles['loading'])}>拿取資料中...</div>

  if (!save_list.length)
    return (
      <div className={classNames(styles['no-save'])}>尚未有任何收藏喔!</div>
    )

  return (
    <div className={classNames(styles['list-box'])}>
      <ul className={classNames(styles['yt-list'])}>
        {save_list.map(props => (
          <YTCard key={props.snippet.title} {...props} />
        ))}

        {window.innerWidth <= 1080 && window.innerWidth >= 768 ? (
          <>
            {Array(dummy_num(save_list))
              .fill()
              .map((_, index) => (
                <YTCard key={`index-${index + 1}`} hidden />
              ))}
          </>
        ) : null}
      </ul>
    </div>
  )
}

export default SaveList
