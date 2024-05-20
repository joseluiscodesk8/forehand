import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicLogo = dynamic(() => import('../../components/Logo'));
const DynamicSlider = dynamic(() => import('../../components/Slider'));
const DynamicFooter = dynamic(() => import('../../components/Footer'));

export default function Home() {
  return (
    <main>
      <DynamicLogo />
      <DynamicSlider />
      <DynamicFooter />
    </main>
  );
}
