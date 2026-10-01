import NetworkSection from '@/components/tools/NetworkSection';
import ThemeImage from '@/components/tools/ThemeImage';

const storeNetworkBackground = (
  <ThemeImage
    dark="/images/hardware-store/network-bg-dark.webp"
    light="/images/hardware-store/network-bg-light.webp"
    alt=""
    fill
    sizes="100vw"
    className="pointer-events-none object-cover max-lg:object-[18%_center]"
  />
);

export default function StoreNetworkSection() {
  return <NetworkSection background={storeNetworkBackground} />;
}
