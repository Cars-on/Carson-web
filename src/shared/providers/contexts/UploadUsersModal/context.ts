import { createContext } from 'react';
import { IUploadUsersModalContextData } from './dto';

const UploadUsersModalContext = createContext(
  {} as IUploadUsersModalContextData,
);

export default UploadUsersModalContext;
