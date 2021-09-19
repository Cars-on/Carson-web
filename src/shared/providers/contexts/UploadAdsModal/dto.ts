/* eslint-disable no-unused-vars */
import React from 'react';

export interface IUploadAdsModalContextData {
  showUploadAdsModal: boolean;
  closeUploadAdsModal: () => void;
  openUploadAdsModal: () => void;
  onDrop: (files: any) => void;
  csvLot: string;
  csvMessage: string;
  csvIsLoading: boolean;
}

export interface IUploadAdsModalProvider {
  children: React.ReactNode;
}
