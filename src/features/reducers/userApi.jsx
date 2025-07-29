import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
	reducerPath: 'apiUsers',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://store-api.softclub.tj/',
		prepareHeaders: headers => {
			const token = localStorage.getItem('access_token')
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}
			return headers
		},
	}),
	endpoints: builder => ({
		registerUser: builder.mutation({
			query: newUser => ({
				url: 'Account/register',
				method: 'POST',
				body: newUser,
				headers: {
					'Content-Type': 'application/json',
				},
			}),
		}),
		loginUser: builder.mutation({
			query: user => ({
				url: 'Account/login',
				method: 'POST',
				body: user,
			}),
		}),
		getProducts: builder.query({
			query: () => ({
				url: 'Product/get-products',
				method: 'GET',
			}),
		}),
		getByIdProduct: builder.query({
			query: id => ({
				url: `https://store-api.softclub.tj/Product/get-product-by-id?id=${id}`,
			}),
		}),
		cartGet: builder.query({
			query: () => ({
				url: 'Cart/get-products-from-cart',
			}),
		}),
		categoryGet: builder.query({
			query: () => ({
				url: `Category/get-categories`,
			}),
		}),
		addToCart: builder.mutation({
			query: id => ({
				url: `Cart/add-product-to-cart?id=${id}`,
				method: 'POST',
			}),
		}),
		deleteFromCart: builder.mutation({
			query: id => ({
				url: `Cart/delete-product-from-cart?id=${id}`,
				method: 'DELETE',
			}),
		}),
		removeAllCart: builder.mutation({
			query: () => ({
				url: `Cart/clear-cart`,
				method: 'DELETE',
			}),
		}),
		IncreasFromCart: builder.mutation({
			query: id => ({
				url: `Cart/increase-product-in-cart?id=${id}`,
				method: 'PUT',
			}),
		}),
		DicreamentFromCart: builder.mutation({
			query: id => ({
				url: `Cart/reduce-product-in-cart?id=${id}`,
				method: 'PUT',
			}),
		}),
		getUserInfo: builder.query({
			query: id => `UserProfile/get-user-profile-by-id?id=${id}`,
		}),
		putUserProfil: builder.mutation({
			query: newUser => ({
				url: 'UserProfile/update-user-profile',
				method: 'PUT',
				body: newUser,
			}),
		}),
	}),
})

export const {
	useRegisterUserMutation,
	useLoginUserMutation,
	useGetProductsQuery,
	useAddToCartMutation,
	useCartGetQuery,
	useDeleteFromCartMutation,
	useIncreasFromCartMutation,
	useDicreamentFromCartMutation,
	useRemoveAllCartMutation,
	useCategoryGetQuery,
	useGetUserInfoQuery,
	useGetByIdProductQuery,
	usePutUserProfilMutation,
} = userApi
