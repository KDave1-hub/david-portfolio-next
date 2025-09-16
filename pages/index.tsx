import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Home" description="David Asante-Asare — research portfolio.">
      <section className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2 space-y-6">
          
<h1 className="text-4xl md:text-5xl font-bold tracking-tight">David Asante-Asare</h1>

<div className="space-y-4 text-lg leading-relaxed">
  <p>
    I’m a researcher passionate about the intersection of <strong>machine learning, computational imaging, and biophysics</strong>, working to push the boundaries of dynamic bio-imaging.
  </p>
  <p>
  Currently, I’m pursuing a <strong>PhD in Computer Engineering</strong> at the University of Texas at Dallas, 
  where I work in the <a 
    href="https://labs.utdallas.edu/zihaoou/"   // replace with the actual lab site URL
    target="_blank"
    rel="noreferrer"
    className="text-blue-600 hover:underline dark:text-blue-400"
  >
    <strong>Dynamic Bio-Imaging Lab </strong>
  </a> 
  under the guidance of Dr. Zihao Ou.
</p>

  <p>
    My work combines <strong>deep learning</strong>, <strong>physics-informed models</strong>, and <strong>image-processing techniques</strong> to tackle one of the hardest problems in the field: how to see and make sense of what’s happening inside living biological tissue. Biological images are often noisy, dynamic, and difficult to interpret. By developing smarter ways to process and analyze them, I aim to transform blurred or hidden details into clear insights that can drive progress in science, medicine, and technology.
  </p>
  <p>
    Outside the lab, I enjoy playing the drums, experimenting on the piano, and going for a swim whenever I can. This portfolio brings together the projects, skills, and ideas I’ve explored on my path as an engineer and researcher committed to impactful innovation.
  </p>
</div>




          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className="btn btn-primary">View Projects</Link>
            <Link href="/publications" className="btn">Publications</Link>
            
          </div>
        </div>

        <div className="justify-self-center md:justify-self-end">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 w-56 h-56 relative bg-gray-100 dark:bg-gray-800">
            <Image
              src="https://static.wixstatic.com/media/3c031c_723d871b284045568356f2abda29d66d~mv2.jpg/v1/crop/x_0%2Cy_224%2Cw_719%2Ch_750/fill/w_460%2Ch_480%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/David_edited.jpg"
              alt="David Asante-Asare"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

    </Layout>
  )
}
