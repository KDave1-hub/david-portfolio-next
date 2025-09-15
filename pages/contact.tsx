import Layout from '../components/Layout'
import Image from 'next/image'

export default function Contact() {
  return (
    <Layout title="Contact" description="Get in touch with David Asante-Asare.">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <p className="mb-2"><strong>Academic:</strong> <a className="underline" href="mailto:dpa240001@utdallas.edu">dpa240001@utdallas.edu</a></p>
          <p className="mb-2"><strong>Personal:</strong> <a className="underline" href="mailto:topleveliot@gmail.com">topleveliot@gmail.com</a></p>
        </div>
        <div className="relative w-full md:max-w-sm md:justify-self-end pt-[120%] rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <Image src="https://static.wixstatic.com/media/3c031c_496a6264c4114bcb9fe27542e253b99e~mv2.jpg/v1/fill/w_329%2Ch_438%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/3c031c_496a6264c4114bcb9fe27542e253b99e~mv2.jpg" alt="Portrait" fill className="object-cover" />
        </div>
      </div>
    </Layout>
  )
}
