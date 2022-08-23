import { UserInfo } from 'firebase/auth';
import IOrganization from './IOrganization';

export default interface IUser extends UserInfo {
  organizations?: IOrganization[];
}
