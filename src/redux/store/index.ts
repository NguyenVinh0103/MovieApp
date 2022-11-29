import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import combinedReducer from '../reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga'
import reactotron from './reactotronConfig'

const sagaMonitor = reactotron.createSagaMonitor()

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
const logger = createLogger({
    predicate: () => process.env.NODE_ENV !== 'production',
})

const rootStore = createStore(combinedReducer, applyMiddleware(sagaMiddleware, logger))
export default rootStore

sagaMiddleware.run(rootSaga)
