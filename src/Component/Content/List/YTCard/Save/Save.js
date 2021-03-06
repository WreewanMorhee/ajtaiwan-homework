import { AppStore } from 'App'
import classNames from 'classnames'
import { useContext, useState } from 'react'
import styles from './save.module.scss'

const Save = ({ id }) => {
  const { dispatch } = useContext(AppStore)
  const _save_str = localStorage.getItem('save_str') || ''
  const [active, set_active] = useState(_save_str.includes(id))

  const handle_save_str = () => {
    const final_save_str = active
      ? localStorage
          .getItem('save_str')
          .split(', ')
          .filter(save_id => !save_id.includes(id))
          .join(', ')
      : `${localStorage.getItem('save_str')}, ${id}`

    localStorage.setItem('save_str', final_save_str)
    dispatch({
      type: 'Set_Save_Str',
      payload: {
        save_str: final_save_str,
      },
    })
  }

  const clickToSave = e => {
    e.stopPropagation()

    handle_save_str()
    alert(active ? '已移除收藏' : '已收藏')
    set_active(prev => !prev)
  }

  return (
    <div
      onClick={clickToSave}
      className={classNames(styles['save'], {
        [styles['active']]: active,
      })}
    >
      <i className="fas fa-bookmark"></i>
    </div>
  )
}

export default Save
