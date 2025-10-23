import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { cn } from '@/lib/utils';

interface IconProps {
  icon: IconDefinition | string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Icon: React.FC<IconProps> = ({ icon, className, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  };

  // Handle undefined icons gracefully
  if (icon === undefined || icon === null) {
    return null;
  }

  if (typeof icon === 'string') {
    // Fallback for string icons (like CSS classes)
    return (
      <i 
        className={cn(icon, sizeClasses[size], className)} 
        aria-hidden="true"
      />
    );
  }

  return (
    <FontAwesomeIcon 
      icon={icon} 
      className={cn(sizeClasses[size], className)}
      aria-hidden="true"
    />
  );
};

export default Icon;
