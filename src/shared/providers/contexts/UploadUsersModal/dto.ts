/* eslint-disable no-unused-vars */
import React from 'react';

export interface IUploadUsersModalContextData {
  showUploadUsersModal: boolean;
  closeUploadUsersModal: () => void;
  openUploadUsersModal: () => void;
  onDrop: (files: any) => void;
  csvLot: string;
  csvMessage: string;
  csvIsLoading: boolean;
}

export interface IUploadUsersModalProvider {
  children: React.ReactNode;
}
