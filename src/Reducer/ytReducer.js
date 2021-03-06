export const ytState = {
  loading: false,
  yt_list: [],
  save_str: '',
}

export function ytReducer(state, action) {
  const { payload: { loading, yt_list = [], save_str } = {} } = action

  switch (action.type) {
    case 'Set_YT_Loading':
      return {
        ...state,
        loading,
      }

    case 'Set_YT_List':
      return {
        ...state,
        yt_list: [...state.yt_list, ...yt_list],
      }

    case 'Set_Save_Str':
      return {
        ...state,
        save_str: save_str,
      }

    case 'Reset_Tab_Content':
      return ytState

    default:
      return state
  }
}
