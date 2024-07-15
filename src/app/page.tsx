import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/bdb320e2-faa9-4f05-9877-fb31a36d3954-1zbfv.jpg",
  "https://utfs.io/f/0a082062-c41b-4382-aca5-de63f48426be-yycoah.png",
  "https://utfs.io/f/99a6ebbe-ffd5-4b62-b38c-867b7242461a-jaw8pu.png"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1, 
  url
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        [, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))
      }
      </div>
    </main>
  );
}
