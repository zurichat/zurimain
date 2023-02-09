import hero0Image from "../assets/hero-0.png";
import hero1Image from "../assets/hero-1.png";
import hero2Image from "../assets/hero-2.png";
import hero3Image from "../assets/hero-3.png";
import hero4Image from "../assets/hero-4.png";
import hero5Image from "../assets/hero-5.png";
import hero6Image from "../assets/hero-6.png";
import hotelsNgImage from "../assets/hotels-ng.svg";
import i4gImage from "../assets/i4g.svg";
import nucleImage from "../assets/nucle.svg";
import camphouseImage from "../assets/camphouse.svg";
import zuriTrainingImage from "../assets/zuri-training.svg";

interface Image {
  src: string;
  alt: string;
}

type Keys = "hero0" | "hero1" | "hero2" | "hero3" | "hero4" | "hero5" | "hero6";

type Images = {
  [key in Keys]: Image;
} & Record<string, Image>;

export default function useImages(): Images {
  return {
    hero0: { src: hero0Image, alt: "ZuriChat active workspace UI" },
    hero1: { src: hero1Image, alt: "ZuriChat new workspace UI" },
    hero2: { src: hero2Image, alt: "ZuriChat workspace whiteboard UI" },
    hero3: { src: hero3Image, alt: "ZuriChat workspace notice board UI" },
    hero4: { src: hero4Image, alt: "ZuriChat workspace files view UI" },
    hero5: { src: hero5Image, alt: "ZuriChat active workspace UI cropped" },
    hero6: { src: hero6Image, alt: "Letter with green envelop" },
    hotelsNg: { src: hotelsNgImage, alt: "Hotels.ng logo" },
    i4g: { src: i4gImage, alt: "Ingressive for Good logo" },
    nucle: { src: nucleImage, alt: "Nucle.io logo" },
    camphouse: { src: camphouseImage, alt: "Camphouse logo" },
    zuriTraining: { src: zuriTrainingImage, alt: "Zuri Training logo" }
  };
}
