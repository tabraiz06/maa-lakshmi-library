import { useState } from "react";
const images = [
  {
    src: "https://ideas.demco.com/wp-content/uploads/2022/10/blog_Children_1_024.jpg",
    text: "Welcome to StudySpace",
    description: "Your Perfect Learning Environment",
  },
  {
    src: "https://content.jdmagicbox.com/v2/comp/nashik/z9/0253px253.x253.170711110248.u4z9/catalogue/atal-dnyan-sankul-jail-road-nashik-libraries-ocdqbwwhj6-250.jpg",
    text: "Modern Facilities",
    description: "State-of-the-art Infrastructure",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkmNdBF7-pupGR3Idhz8O16_4PxFC7KFXH46rMGsu1iow2ttsCHih6iGXDjzh7lSQ-C8c&usqp=CAU",
    text: "Expert Guidance",
    description: "Learn from the Best",
  },
];
export default function MainSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
        <h2 className="text-4xl text-white font-bold">
          {images[currentIndex].text}
        </h2>
      </div>
      <img
        src={images[currentIndex].src}
        className="w-full h-full object-cover"
        alt="Library"
      />
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
      >
        ▶
      </button> */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
