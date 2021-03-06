import classNames from 'classnames'
import { Switch, Route, Redirect } from 'react-router-dom'
import List from './List/List'
import styles from './content.module.scss'
import { useGetYTList } from './List/useGetYTList'
import SaveList from './SaveList/SaveList'
import Play from './Play/Play'

const Content = () => {
  useGetYTList()

  return (
    <div className={classNames(styles['box'])}>
      <Switch>
        <Route path="/ajtaiwan/save">
          <SaveList />
        </Route>
        <Route path="/ajtaiwan/play/:id">
          <Play />
        </Route>
        <Route path="/ajtaiwan/list/:page">
          <List />
        </Route>

        <Route path="*" render={() => <Redirect to="/ajtaiwan/list/1" />} />
      </Switch>
    </div>
  )
}

export default Content
