export type ProfileTCardype = {
  imagesss: string;
  userName?: string;
  openModel: () => void;
  closeModel?: () => void;
  modalcard: boolean;
  ModalCardData3: { icon: React.ReactNode; text: string }[];
  modalRef: React.RefObject<HTMLDivElement | null>;
};

export interface ModalDataItem {
  icon: React.ReactNode;
  text: string;
}

export interface IconTextModalProps {
  Modaldata: ModalDataItem[];
  loginUserIcon?: boolean;
  userName?: string;
  userRole?: string;
}
