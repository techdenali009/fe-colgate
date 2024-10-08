import { Image } from '@ui/atoms/Image';

interface AppSpinnerProps {
    containerClassName?: string,
    spinnerClassName?: string
}

export const AppSpinner: React.FC<AppSpinnerProps> = ({
  containerClassName = 'h-screen flex justify-center items-center',
  spinnerClassName = 'w-14 h-14'
}) => {
  return (
    <div className={`${containerClassName}`}>
      <Image src={'/assets/spinner.svg'} 
        className={`${spinnerClassName}`} 
        alt='loader' />
    </div>
  )
}