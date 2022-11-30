import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import combinedReducer from '../rootReducers'
import rootSaga from '../rootSagas'
import reactotron from './reactotronConfig'

const sagaMonitor = reactotron.createSagaMonitor()

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
const logger:any = createLogger({
    predicate: () => process.env.NODE_ENV !== 'production',
})

const rootStore = createStore(combinedReducer, applyMiddleware(sagaMiddleware, logger))
export default rootStore

sagaMiddleware.run(rootSaga)
