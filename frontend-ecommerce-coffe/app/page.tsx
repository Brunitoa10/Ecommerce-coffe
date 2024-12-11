import BannerDiscount from "@/components/bannerDiscount";
import CarrouselTextBanner from "@/components/carrouselTextBanner";
import ChooseCategory from "@/components/chooseCategory";
import FeatureProducts from "@/components/featuredProducts";

export default function Home() {
  return (
    <main>
     <CarrouselTextBanner/>
     <FeatureProducts/>
     <BannerDiscount/>
     <ChooseCategory/>
    </main>
  );
}
