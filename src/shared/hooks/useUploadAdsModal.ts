import { useContext } from 'react';

import UploadAdsModalContext from '../providers/contexts/UploadAdsModal/context';
import { IUploadAdsModalContextData } from '../providers/contexts/UploadAdsModal/dto';

export default function useUploadAdsModal(): IUploadAdsModalContextData {
  const context = useContext(UploadAdsModalContext);

  if (!context) {
    throw new Error(
      'useUploadAdsModal must be used within an useUploadAdsModalProvider',
    );
  }

  return context;
}
