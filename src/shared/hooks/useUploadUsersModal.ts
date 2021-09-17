import { useContext } from 'react';

import UploadUsersModalContext from '../providers/contexts/UploadUsersModal/context';
import { IUploadUsersModalContextData } from '../providers/contexts/UploadUsersModal/dto';

export default function useUploadUsersModal(): IUploadUsersModalContextData {
  const context = useContext(UploadUsersModalContext);

  if (!context) {
    throw new Error(
      'useUploadUsersModal must be used within an useUploadUsersModalProvider',
    );
  }

  return context;
}
