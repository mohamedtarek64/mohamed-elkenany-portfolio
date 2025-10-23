import { ReactNode, ChangeEvent, ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

// Button component types
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  children: ReactNode;
}

// Input component types
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: 'default' | 'filled' | 'outlined';
}

// Textarea component types
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'default' | 'filled' | 'outlined';
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

// Card component types
export interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

export interface CardHeaderProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  action?: ReactNode;
}

export interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

// Modal component types
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closable?: boolean;
  backdrop?: boolean;
}

// Tooltip component types
export interface TooltipProps {
  content: string;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  trigger?: 'hover' | 'click' | 'focus';
  delay?: number;
  disabled?: boolean;
}

// Badge component types
export interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  className?: string;
}

// Spinner component types
export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
}

// Icon component types
export interface IconProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
  spin?: boolean;
  pulse?: boolean;
}

// Loading component types
export interface LoadingProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  overlay?: boolean;
  className?: string;
}

// Progress component types
export interface ProgressProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  showValue?: boolean;
  animated?: boolean;
  className?: string;
}

// Alert component types
export interface AlertProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  closable?: boolean;
  onClose?: () => void;
  action?: ReactNode;
  className?: string;
}

// Tabs component types
export interface TabsProps {
  items: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
  variant?: 'default' | 'pills' | 'underline';
  className?: string;
}

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
}

// Accordion component types
export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
  disabled?: boolean;
  defaultOpen?: boolean;
}

// Dropdown component types
export interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
  placement?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export interface DropdownItem {
  id: string;
  label: string;
  icon?: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  divider?: boolean;
}

// Form component types
export interface FormProps {
  children: ReactNode;
  onSubmit: (data: any) => void;
  className?: string;
  validation?: any;
}

export interface FormFieldProps {
  name: string;
  label?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

// Layout component types
export interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export interface HeaderProps {
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  className?: string;
}

export interface SidebarProps {
  items: SidebarItem[];
  activeItem?: string;
  onItemClick?: (itemId: string) => void;
  className?: string;
}

export interface SidebarItem {
  id: string;
  label: string;
  icon?: ReactNode;
  href?: string;
  children?: SidebarItem[];
}

// Navigation component types
export interface NavigationProps {
  items: NavigationItem[];
  activeItem?: string;
  onItemClick?: (itemId: string) => void;
  variant?: 'horizontal' | 'vertical';
  className?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  icon?: ReactNode;
  children?: NavigationItem[];
  disabled?: boolean;
}

// Breadcrumb component types
export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  className?: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

// Pagination component types
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisible?: number;
  className?: string;
}

// Table component types
export interface TableProps<T = any> {
  data: T[];
  columns: TableColumn<T>[];
  loading?: boolean;
  emptyMessage?: string;
  className?: string;
}

export interface TableColumn<T = any> {
  key: string;
  title: string;
  dataIndex: string;
  render?: (value: any, record: T, index: number) => ReactNode;
  width?: number;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  filterable?: boolean;
}

// List component types
export interface ListProps<T = any> {
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;
  loading?: boolean;
  emptyMessage?: string;
  className?: string;
}

// Grid component types
export interface GridProps {
  children: ReactNode;
  columns?: number;
  gap?: number;
  className?: string;
}

// Container component types
export interface ContainerProps {
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}
