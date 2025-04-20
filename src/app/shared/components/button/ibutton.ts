export interface IButton {
  label: string;
  icon?: string;
  iconPos?: 'left' | 'right';
  styleClass?: string;
  severity?: | "success" | "info" | "warn" | "danger" | "help" | "primary" | "secondary" | "contrast"
  onClick?: () => void;
}
