import { page_size, total_page } from 'Config/config'
import { useHistory, useParams } from 'react-router-dom'

export const useGetPagedYTList = (yt_list = []) => {
  const { page } = useParams()
  const history = useHistory()
  const next_page = Number(page) + 1
  const prev_page = Number(page) - 1

  const go_to_next_page = () => {
    if (next_page > total_page) {
      alert('最後一頁囉!')
      return
    }
    history.push(`/ajtaiwan/list/${next_page}`)
  }

  const go_to_prev_page = () => {
    if (prev_page < 1) {
      alert('已經在第一頁囉!')
      return
    }
    history.push(`/ajtaiwan/list/${prev_page}`)
  }

  return [
    yt_list.slice(page_size * (page - 1), page_size * page),
    go_to_next_page,
    go_to_prev_page,
  ]
}
