/* eslint-disable import/no-named-as-default */
import { toast } from 'react-toastify';
import History from 'routes/History';
import { API_ERRORS } from 'common/constants';

export const handleError = (error: any, { displayToast = true }) => {
  const message = error.response?.data?.message;
  const status = error.response?.status;

  if (
    (status === 401 || status === 403) &&
    window.location.pathname !== '/login'
  ) {
    History.push(
      `/login?redirect=${window.location.pathname}${window.location.search}`,
    );
    toast.error('Você precisa estar logado para realizar essa ação');
  } else if (displayToast) {
    if (message) {
      toast.error(message);
    } else {
      toast.error(API_ERRORS.DEFAULT);
    }
  }

  return Promise.reject({ ...error, status, message });
};
