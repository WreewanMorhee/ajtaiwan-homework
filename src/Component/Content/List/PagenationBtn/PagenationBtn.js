import classNames from 'classnames'
import { useHistory, useParams } from 'react-router'
import styles from './btn.module.scss'

const PagenationBtn = ({ page }) => {
  const { page: cur_page } = useParams()
  const history = useHistory()
  const clickToSetPage = () => {
    history.push(`/ajtaiwan/list/${page}`)
  }

  return (
    <li
      onClick={clickToSetPage}
      className={classNames(styles['page-btn'], {
        [styles['active']]: Number(cur_page) === Number(page),
      })}
    >
      {page}
    </li>
  )
}

export default PagenationBtn
