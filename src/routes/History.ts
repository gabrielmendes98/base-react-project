import { NavigateOptions, NavigateFunction } from 'react-router-dom';

const History: {
  navigate: null | NavigateFunction;
  push: (page: string, options?: NavigateOptions) => void;
} = {
  navigate: null,
  push: (page, options) => History.navigate && History.navigate(page, options),
};

export default History;
