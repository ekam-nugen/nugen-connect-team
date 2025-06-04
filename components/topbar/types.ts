export type ProfileTCardype = {
  imagesss: string;
  userName?: string;
  openModel: () => void;
  closeModel?: () => void;
  modalcard: boolean;
  ModalCardContent: ModalDataItem[];
  modalRef: React.RefObject<HTMLDivElement | null>;
};

export interface ModalDataItem {
  icon: string;
  text: string;
}

export interface IconTextModalProps {
  Modaldata: ModalDataItem[];
  loginUserIcon?: boolean;
  userName?: string;
  userRole?: string;
}
