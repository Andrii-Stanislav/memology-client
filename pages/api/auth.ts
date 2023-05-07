import ApiService from './ApiService'
import {LoginData} from '../../types/auth'

export const loginReq = (body: LoginData) => ApiService.post('/auth/login', body)
