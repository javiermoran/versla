export default interface IAlert {
  visible: boolean;
  type: 'error' | 'info' | 'success' | 'warning';
  message: string;
}
