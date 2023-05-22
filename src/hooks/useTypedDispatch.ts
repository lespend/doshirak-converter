import { RootState } from "../store/reducers";
import { useDispatch } from 'react-redux'
import { Action, AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

export function useTypedDispatch<T>() {
    return useDispatch<ThunkDispatch<RootState, any, Action<T> | AnyAction>>()
}