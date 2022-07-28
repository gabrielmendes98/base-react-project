import { baseApi } from 'api/apis';
import { AuthResponse, LoginData, SignUpData } from 'common/types/user';

const userEndpoints = {
  login: '/session',
  create: '/users',
};

const userService = {
  create: (data: SignUpData) =>
    baseApi.post<AuthResponse, AuthResponse>(userEndpoints.create, data),
  login: (data: LoginData) =>
    baseApi.post<AuthResponse, AuthResponse>(userEndpoints.login, data),
};

export { userEndpoints };
export default userService;
