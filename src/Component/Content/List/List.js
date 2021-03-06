import { useContext, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { total_page } from 'Config/config'
import YTCard from './YTCard/YTCard'
import PagenationBtn from './PagenationBtn/PagenationBtn'
import { useGetPagedYTList } from './useGetPagedYTList'
import styles from './list.module.scss'
import { Redirect, useHistory, useParams } from 'react-router'
import { AppStore } from 'App'
import { dummy_num } from 'Config/helper'

const List = () => {
  const { page } = useParams()
  const history = useHistory()
  const {
    ytList: { yt_list, loading },
  } = useContext(AppStore)
  const [paged_yt_list, go_to_next_page, go_to_prev_page] = useGetPagedYTList(
    yt_list
  )
  const boxRef = useRef(null)

  const changeToSetPage = e => {
    history.push(`/ajtaiwan/list/${e.target.value}`)
  }

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }, [page])

  if (loading)
    return <div className={classNames(styles['loading'])}>拿取資料中...</div>

  if (!paged_yt_list.length) {
    return <Redirect to="/ajtaiwan/list/1" />
  }
  return (
    <div ref={boxRef} className={classNames(styles['list-box'])}>
      <ul className={classNames(styles['yt-list'])}>
        {paged_yt_list.map(props => (
          <YTCard key={props.snippet.title} {...props} />
        ))}

        {window.innerWidth <= 1080 && window.innerWidth >= 768 ? (
          <>
            {Array(dummy_num(paged_yt_list))
              .fill()
              .map((_, index) => (
                <YTCard key={`index-${index + 1}`} hidden />
              ))}
          </>
        ) : null}
      </ul>

      <ul className={classNames(styles['pagenation-list'])}>
        <li onClick={go_to_prev_page} className={classNames(styles['prev'])}>
          <i className="fas fa-arrow-left"></i>
        </li>

        {window.innerWidth < 768 ? (
          <>
            {
              <select
                className={styles['select']}
                value={Number(page)}
                onChange={changeToSetPage}
              >
                {Array(total_page)
                  .fill()
                  .map((_, index) => (
                    <option key={`index-${index + 1}`} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
              </select>
            }
          </>
        ) : (
          <>
            {Array(total_page)
              .fill()
              .map((_, index) => (
                <PagenationBtn key={`index-${index + 1}`} page={index + 1} />
              ))}
          </>
        )}

        <li onClick={go_to_next_page} className={classNames(styles['next'])}>
          <i className="fas fa-arrow-right"></i>
        </li>
      </ul>
    </div>
  )
}

export default List
