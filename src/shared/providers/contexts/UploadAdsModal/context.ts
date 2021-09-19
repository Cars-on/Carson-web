import { createContext } from 'react';
import { IUploadAdsModalContextData } from './dto';

const UploadAdsModalContext = createContext({} as IUploadAdsModalContextData);

export default UploadAdsModalContext;
