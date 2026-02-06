import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  to, 
  href, 
  onClick, 
  className = '',
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  loading = false,
  ...props 
}) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    dark: 'btn-dark',
    white: 'btn-white'
  }

  const sizes = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg'
  }

  const baseStyles = `${variants[variant]} ${sizes[size]} ${className}`
  
  const content = (
    <>
      {loading && (
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {Icon && iconPosition === 'left' && !loading && <Icon size={20} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && !loading && <Icon size={20} />}
    </>
  )

  const MotionComponent = motion.create ? motion.create('button') : motion.button

  if (to) {
    return (
      <Link to={to} className={baseStyles} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={baseStyles} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    )
  }

  return (
    <MotionComponent
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      {...props}
    >
      {content}
    </MotionComponent>
  )
}

export default Button