import { jwtDecode } from 'jwt-decode'

export const useUserId = () => {
	const token = localStorage.getItem('access_token')
	if (!token) return null

	try {
		const decoded = jwtDecode(token)
		console.log(decoded);
		
		return decoded?.sid || null
	} catch (error) {
		console.error(error)
		return null
	}
}
