import { IconType } from 'react-icons/lib';

export type ProfileTCardype = {
  imagesss: string;
  userName?: string;
  openModel: () => void;
  closeModel?: () => void;
  modalcard: boolean;
  ModalCardData3: ModalDataItem[];
  modalRef: React.RefObject<HTMLDivElement | null>;
};

export interface ModalDataItem {
  icon: IconType;
  text: string;
}

export interface IconTextModalProps {
  Modaldata: ModalDataItem[];
  loginUserIcon?: boolean;
  userName?: string;
  userRole?: string;
}
