export type TChatPerson = {
  name: string;
  message: string;
  time: string;
  logo?: string;
  logoIcon?: string;
  logoclass: string;
  unreadCount?: number;
  showStatusIcon?: boolean;
};

export interface ChatInputProps {
  chatData: TChatPerson;
  onSendMessage: (message: string) => void;
  onBack?: () => void;
}

export interface ChatHeaderProps {
  modalRef: React.RefObject<HTMLDivElement | null>;
  chatData: TChatPerson;
  onBack?: () => void;
  modalcard: boolean;
  setModalcard: (value: boolean) => void;
}

export interface ChatListProps {
  personDetail: TChatPerson | null;
  setPersonDetail: (value: TChatPerson | null) => void;
}
