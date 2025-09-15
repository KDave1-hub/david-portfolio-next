
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  const gallery = ['https://static.wixstatic.com/media/3c031c_e7db2f2b150f4dec8a645a0f5259e88f~mv2.jpg/v1/fill/w_361%2Ch_287%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_e7db2f2b150f4dec8a645a0f5259e88f~mv2.jpg','https://static.wixstatic.com/media/3c031c_3d127bbf2df5480a8da898202fbd4281~mv2.jpg/v1/fill/w_361%2Ch_431%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_3d127bbf2df5480a8da898202fbd4281~mv2.jpg','https://static.wixstatic.com/media/3c031c_fa661bb0b66940faa8d5be1bb6db127d~mv2.jpg/v1/fill/w_361%2Ch_431%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_fa661bb0b66940faa8d5be1bb6db127d~mv2.jpg','https://static.wixstatic.com/media/3c031c_21d665d386bc4597a7dbe1dc1d745dda~mv2.jpg/v1/fill/w_361%2Ch_287%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_21d665d386bc4597a7dbe1dc1d745dda~mv2.jpg','https://static.wixstatic.com/media/3c031c_86cbb4c4688446588ec7acb6913760f4~mv2.jpeg/v1/fill/w_361%2Ch_287%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_86cbb4c4688446588ec7acb6913760f4~mv2.jpeg','https://static.wixstatic.com/media/3c031c_00c873afead54fd1a7f11fab421c55e4~mv2.jpg/v1/fill/w_361%2Ch_405%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_00c873afead54fd1a7f11fab421c55e4~mv2.jpg','https://static.wixstatic.com/media/3c031c_ce0224dd0a6440b7be75bd6d0b6e0f3b~mv2.jpeg/v1/fill/w_361%2Ch_431%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_ce0224dd0a6440b7be75bd6d0b6e0f3b~mv2.jpeg','https://static.wixstatic.com/media/3c031c_9bd03ee4cb77416788fefdcc83ddc1a0~mv2.png/v1/fill/w_361%2Ch_161%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_9bd03ee4cb77416788fefdcc83ddc1a0~mv2.png','https://static.wixstatic.com/media/3c031c_352e225f7f0d4d4f881a95e6999060a3~mv2.jpg/v1/fill/w_361%2Ch_287%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_352e225f7f0d4d4f881a95e6999060a3~mv2.jpg','https://static.wixstatic.com/media/3c031c_683544e961844e3f9d34d147307e0c09~mv2.png/v1/fill/w_230%2Ch_179%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_683544e961844e3f9d34d147307e0c09~mv2.png','https://static.wixstatic.com/media/3c031c_7effbda3d79848998f329318726b4803~mv2.jpg/v1/fill/w_361%2Ch_431%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_7effbda3d79848998f329318726b4803~mv2.jpg','https://static.wixstatic.com/media/3c031c_8a050454e1044083b78b163d3c90dac4~mv2.png/v1/fill/w_361%2Ch_225%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_8a050454e1044083b78b163d3c90dac4~mv2.png','https://static.wixstatic.com/media/3c031c_3ba16f83d73b42d697a7bd53a7f46783~mv2.png/v1/fill/w_361%2Ch_287%2Cq_90%2Cenc_avif%2Cquality_auto/3c031c_3ba16f83d73b42d697a7bd53a7f46783~mv2.png'];
  return (
    <Layout title="Home" description="David Asante-Asare — research portfolio.">
      <section className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Welcome !!!</h1>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>Hi, I’m David Asante-Asare—a passionate and driven researcher working at the intersection of Machine Learning, Image Processing, and Edge AI to push the boundaries of dynamic bio-imaging.</p><p>I hold a Bachelor’s degree in Computer Engineering from Ashesi University in Ghana, where I also worked as a Teaching Assistant for two years. I’m currently pursuing a PhD in Computer Engineering at the University of Texas at Dallas, supervised by Dr. Zihao Ou.</p><p>My research focuses on using computational techniques—including image processing and AI—to improve visibility, clarity, and insight in biological imaging, especially in dynamic, high-resolution, and real-time contexts.</p><p>Outside of research, I love playing the drums, experimenting on the piano, and going for a swim whenever I can.  
This portfolio is a snapshot of my journey—the projects, skills, and ideas I’ve explored as an emerging computer engineer and researcher passionate about impactful innovation.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className="btn btn-primary">View Projects</Link>
            <Link href="/publications" className="btn">Publications</Link>
            <a href="/cv.pdf" className="btn" target="_blank" rel="noreferrer">Download CV</a>
          </div>
        </div>
        <div className="justify-self-center md:justify-self-end">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 w-56 h-56 relative bg-gray-100 dark:bg-gray-800">
            <Image src="https://static.wixstatic.com/media/3c031c_723d871b284045568356f2abda29d66d~mv2.jpg/v1/crop/x_0%2Cy_224%2Cw_719%2Ch_750/fill/w_460%2Ch_480%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/David_edited.jpg" alt="David Asante-Asare" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">An Interesting Story!</h2>
        <div className="mt-4 space-y-3">
          <p>While working on a project with the esp32-cam microcontroller, I run into an error I couldn't fix. I spent about two weeks just trying to fix and find solutions to the error but to no avail. I realized several other people faced the same issues but couldn't move past it. Eventually, I was able to fix it myself and I thought, why not make a video so it can help others who are facing or will face this same error. I did that and now the video has over 8K views on Youtube.</p><p>It's not exactly a huge project but I'm glad that my work is out there making a difference</p><p>(Year: 2023)</p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {gallery.map((url, i) => (
            <div key={i} className="relative w-full pt-[75%] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image src={url} alt={`Gallery ${i}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
