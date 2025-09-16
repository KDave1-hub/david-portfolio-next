import Layout from '../../components/Layout'
import Image from 'next/image'

const images = [
  "https://static.wixstatic.com/media/3c031c_e7db2f2b150f4dec8a645a0f5259e88f~mv2.jpg/v1/fill/w_361%2Ch_287%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_e7db2f2b150f4dec8a645a0f5259e88f~mv2.jpg",
  "https://static.wixstatic.com/media/3c031c_3d127bbf2df5480a8da898202fbd4281~mv2.jpg/v1/fill/w_361%2Ch_431%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_3d127bbf2df5480a8da898202fbd4281~mv2.jpg",
  "https://static.wixstatic.com/media/3c031c_fa661bb0b66940faa8d5be1bb6db127d~mv2.jpg/v1/fill/w_361%2Ch_431%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_fa661bb0b66940faa8d5be1bb6db127d~mv2.jpg",
  "https://static.wixstatic.com/media/3c031c_21d665d386bc4597a7dbe1dc1d745dda~mv2.jpg/v1/fill/w_361%2Ch_287%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_21d665d386bc4597a7dbe1dc1d745dda~mv2.jpg",
  "https://static.wixstatic.com/media/3c031c_86cbb4c4688446588ec7acb6913760f4~mv2.jpeg/v1/fill/w_361%2Ch_287%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_86cbb4c4688446588ec7acb6913760f4~mv2.jpeg",
  "https://static.wixstatic.com/media/3c031c_00c873afead54fd1a7f11fab421c55e4~mv2.jpg/v1/fill/w_361%2Ch_405%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_00c873afead54fd1a7f11fab421c55e4~mv2.jpg",
  "https://static.wixstatic.com/media/3c031c_ce0224dd0a6440b7be75bd6d0b6e0f3b~mv2.jpeg/v1/fill/w_361%2Ch_431%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_ce0224dd0a6440b7be75bd6d0b6e0f3b~mv2.jpeg",
  "https://static.wixstatic.com/media/3c031c_9bd03ee4cb77416788fefdcc83ddc1a0~mv2.png/v1/fill/w_361%2Ch_161%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_9bd03ee4cb77416788fefdcc83ddc1a0~mv2.png",
  "https://static.wixstatic.com/media/3c031c_352e225f7f0d4d4f881a95e6999060a3~mv2.jpg/v1/fill/w_361%2Ch_287%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_352e225f7f0d4d4f881a95e6999060a3~mv2.jpg",
  "https://static.wixstatic.com/media/3c031c_683544e961844e3f9d34d147307e0c09~mv2.png/v1/fill/w_230%2Ch_179%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_683544e961844e3f9d34d147307e0c09~mv2.png",
  "https://static.wixstatic.com/media/3c031c_7effbda3d79848998f329318726b4803~mv2.jpg/v1/fill/w_361%2Ch_431%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_7effbda3d79848998f329318726b4803~mv2.jpg",
  "https://static.wixstatic.com/media/3c031c_8a050454e1044083b78b163d3c90dac4~mv2.png/v1/fill/w_361%2Ch_225%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_8a050454e1044083b78b163d3c90dac4~mv2.png",
  "https://static.wixstatic.com/media/3c031c_3ba16f83d73b42d697a7bd53a7f46783~mv2.png/v1/fill/w_361%2Ch_287%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_3ba16f83d73b42d697a7bd53a7f46783~mv2.png",
];

export default function Gallery() {
  return (
    <Layout title="Gallery" description="Project and lab gallery.">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((url, i) => (
          <div key={i} className="relative w-full pt-[75%] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <Image src={url} alt={`Gallery ${i+1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </Layout>
  )
}
