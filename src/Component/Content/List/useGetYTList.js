import { useContext, useEffect } from 'react'
import { api_key, total_video, max_results_per_fetch } from 'Config/config'
import { AppStore } from 'App'

let _yt_list = []
const basic_url = `https://www.googleapis.com/youtube/v3/videos?key=${api_key}&chart=mostPopular&maxResults=${max_results_per_fetch}&part=snippet%2CcontentDetails`
const max_fetch_time = Math.ceil(total_video / max_results_per_fetch)
let fetch_time = 0
export const useGetYTList = () => {
  const { dispatch } = useContext(AppStore)

  const loop_fetch = fetch_url => {
    fetch(fetch_url)
      .then(res => res.json())
      .then(res => {
        _yt_list = [..._yt_list, ...res.items]
        fetch_time += 1

        if (fetch_time === max_fetch_time) {
          fetch_ending()
        } else {
          return loop_fetch(`${basic_url}&pageToken=${res.nextPageToken}`)
        }
      })
  }

  const fetch_ending = () => {
    dispatch({
      type: 'Set_YT_Loading',
      payload: {
        loading: false,
      },
    })
    dispatch({
      type: 'Set_YT_List',
      payload: {
        yt_list: _yt_list,
      },
    })
    dispatch({
      type: 'Set_Save_Str',
      payload: {
        save_str: localStorage.getItem('save_str') || '',
      },
    })
  }

  const get_yt_list = () => {
    dispatch({
      type: 'Set_YT_Loading',
      payload: {
        loading: true,
      },
    })
    loop_fetch(basic_url)
  }

  useEffect(get_yt_list, [])

  return null
}
