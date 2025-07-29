import { configureStore } from '@reduxjs/toolkit'
import { userApi } from '../../features/reducers/userApi'

export const store = configureStore({
	reducer: {
		[userApi.reducerPath]: userApi.reducer,
	},
	middleware: getDefoultMiddleware => {
		return getDefoultMiddleware().concat(userApi.middleware)
	},
})
