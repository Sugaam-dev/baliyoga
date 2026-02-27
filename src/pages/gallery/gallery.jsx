import GalleryHero from "./galleryHero";
import PhotoGallery from "./photoGallery";
import VideoGallery from "./videoGallery";

// Import some existing images (you can add unlimited later)
import bali1 from "../home/images/bali1.jpg";
import bali2 from "../home/images/bali2.jpg";
import bali3 from "../home/images/bali3.jpg";
import yoga0 from "../../assets/yoga0.jpg";
import yoga1 from "../../assets/yoga1.jpg";

export default function Gallery() {
  const photoSections = [
    {
      title: "Campus Photos",
      images: [
        { src: bali1, caption: "Peaceful campus garden" },
        { src: bali2, caption: "Open meditation space" },
        { src: bali3, caption: "Sunrise yoga hall" },
      ],
    },
    {
      title: "Classes in Action",
      images: [
        { src: yoga0, caption: "Morning Hatha session" },
        { src: yoga1, caption: "Alignment-focused practice" },
        { src: bali1, caption: "Breathwork circle" },
      ],
    },
    {
      title: "Retreats & Events",
      images: [
        { src: bali2, caption: "Retreat sunset flow" },
        { src: bali3, caption: "Community gathering" },
        { src: yoga0, caption: "Outdoor meditation" },
      ],
    },
  ];

  const videoSections = [
    {
      title: "Student Testimonials",
      videos: [
        { id: "VaoV1PrYft4", title: "Student Experience" },
        { id: "v7AYKMP6rOE", title: "Yoga Journey Story" },
      ],
    },
    {
      title: "Yoga Practices",
      videos: [
        { id: "4pKly2JojMw", title: "Gentle Flow Practice" },
        { id: "inpok4MKVLM", title: "Morning Stretch Routine" },
      ],
    },
  ];

  return (
    <main className="bg-stone-50 text-stone-800">
      <GalleryHero />

      <PhotoGallery sections={photoSections} />

      <VideoGallery sections={videoSections} />
    </main>
  );
}