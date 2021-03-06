import React, { useReducer, useEffect } from 'react'
import classNames from 'classnames'
import './reset.scss'
import Navbar from './Component/NavBar/Navbar'
import Content from './Component/Content/Content'
import styles from './app.module.scss'
import { ytState, ytReducer } from './Reducer/ytReducer'

export const AppStore = React.createContext({})
function combineDispatchs(dispatchs) {
  return function (obj) {
    for (let i = 0; i < dispatchs.length; i++) {
      dispatchs[i](obj)
    }
  }
}

let remove_timer
let detect_time = 0
const max_redetect_time = 20
function App() {
  const [ytListState, ytListDispatch] = useReducer(ytReducer, ytState)

  useEffect(() => {
    const stop_detect = () => {
      clearInterval(remove_timer)
      remove_timer = null
    }

    remove_timer = setInterval(() => {
      detect_time += 1
      if (detect_time > max_redetect_time) {
        stop_detect()
      }
      const host_img = document.querySelector('img[alt="www.000webhost.com"]')
      if (host_img) {
        stop_detect()
        host_img.remove()
      }
    }, 300)
  }, [])

  return (
    <AppStore.Provider
      value={{
        ytList: ytListState,
        dispatch: combineDispatchs([ytListDispatch]),
      }}
    >
      <div className={classNames(styles['app'])}>
        <Navbar />
        <Content />
      </div>
    </AppStore.Provider>
  )
}

export default App
