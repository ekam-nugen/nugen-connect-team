export interface VideoPlayerProps {
  src: string;
  type: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
  muted?: boolean;
  showTime?: boolean;
  currentTime?: string;
  caption?: string;
  popupMode?: boolean;
}
