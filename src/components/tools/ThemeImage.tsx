import Image, { type ImageProps } from 'next/image';
import { cn } from '@/utils/cn';

type ThemeImageProps = Omit<ImageProps, 'src'> & {
  dark: ImageProps['src'];
  light: ImageProps['src'];
};

export default function ThemeImage({ dark, light, className, alt, ...props }: ThemeImageProps) {
  return (
    <>
      <Image {...props} src={dark} alt={alt} className={cn(className, 'light:hidden')} />
      <Image {...props} src={light} alt={alt} className={cn(className, 'hidden light:block')} />
    </>
  );
}
