import Image from 'next/image';

export default function MenuIcon() {
  return (
    <span className="relative size-s-24 shrink-0">
      <span className="absolute inset-[37.5%_16.67%]">
        <span className="absolute inset-[-12.5%_-4.69%]">
          <Image src="/images/shared/menu.svg" alt="" fill />
        </span>
      </span>
    </span>
  );
}
