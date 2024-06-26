import { createContext, ReactNode, useReducer } from "react";
import { ActivityActions, activityReducer, ActivityState, initialState } from "../reducers/activityReducer";
type ActivityProviderProps = {
  children: ReactNode
}

type ActivityContextProps = {
  state: ActivityState,
  dispatch: React.Dispatch<ActivityActions>
}

export const ActivityContext = createContext<ActivityContextProps>(null!)

export const ActivityProvider = ({ children }: ActivityProviderProps) => {

  const [state, dispatch] = useReducer(activityReducer, initialState)


  return (
    <ActivityContext.Provider value={{
      state,
      dispatch
    }}>
      { children }
    </ActivityContext.Provider>
  )
}