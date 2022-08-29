import { createContext } from 'react';

const AlertsContext = createContext<any>({
  visible: false,
  type: 'success',
  message: '',
});

export default AlertsContext;
