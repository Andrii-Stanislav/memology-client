import {AnyAction, combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import {Context, createWrapper, HYDRATE} from 'next-redux-wrapper'
import thunk, {ThunkDispatch} from 'redux-thunk'

import base from './base'

const rootReducer = combineReducers({
    base,
})

export type RootState = ReturnType<typeof rootReducer>

const reducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        if (state.count) nextState.count = state.count // preserve count value on client side navigation
        return nextState
    } else {
        return rootReducer(state, action)
    }
}
const makeStore = () => configureStore({reducer, middleware: [thunk]})

export const wrapper = createWrapper(makeStore, {debug: true})

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>
