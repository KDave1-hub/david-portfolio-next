import Layout from '../components/Layout'

type Pub = { title: string; venue: string; link: string; year: string; };

const pubs: Pub[] = [
  {
    "title": "Transient optical clearing using absorbing molecules for ex-vivo and in-vivo imaging M. W. Shabbir, D. Asante-Asare , M. Phillips, and Z. Ou* Journal of Visualized Experiments 221, e68629 (2025). DOI: 10.3791/68629",
    "venue": "Graduate",
    "link": "https://www.biorxiv.org",
    "year": "2025"
  },
  {
    "title": "H. Beem, D. Asante-Asare , P. Obeng, \u201cExploring the Role of Engineering skills-building activities amongst youth in rural Karnataka,\u201d Research in Engineering Education Symposium(REES)-2024,Hubbali, India, 2024.",
    "venue": "Undergraduate",
    "link": "https://www.proceedings.com",
    "year": "2024"
  },
  {
    "title": "D. Asante-Asare , E. D. Mensah, and G. Addo-Tetteh, \u201cInternet of Things: The Budding Area of Mobile IoT Technologies (LTE-M and NB-IoT)\u201d, SEED Journal, vol. 2, no. 1, May 2023",
    "venue": "Undergraduate",
    "link": "https://journal.ashesi.edu.gh",
    "year": "2023"
  },
  {
    "title": "M. A. Boateng, D. Asante-Asare , T. Mashongedza, G. Arthur, D. Date, A. Dery, K. Chibiso, and E. Kumi, \u201cRam vs. Cycle Pump: Designing a Sustainable Water Pump for Use in the Berekuso Township\u201d, SEED Journal, vol. 2, no. 1, May 2023",
    "venue": "Undergraduate",
    "link": "https://journal.ashesi.edu.gh",
    "year": "2023"
  },
  {
    "title": "M. A. Boateng, D. Asante-Asare , E. E. Amu and N. A. Frimpong, \"A Solar-Electric Maize Dryer for Small-Holder Farmers in Ghana,\" 2022 IEEE 2nd International Conference on Mobile Networks and Wireless Communications (ICMNWC), Tumkur, Karnataka, India, 2022, pp. 1-5, doi: 10.1109/ICMNWC56175.2022.10031823.",
    "venue": "Undergraduate",
    "link": "https://ieeexplore.ieee.org",
    "year": "2022"
  }
]

export default function Publications() {
  return (
    <Layout title="Publications & Academic Research" description="Peer-reviewed publications and academic outputs.">
      <h1 className="text-3xl font-bold mb-6">Publications & Academic Research</h1>
      <h2 className="text-xl font-semibold mb-3">Graduate</h2>
      <ol className="space-y-4 list-decimal pl-6">
        {pubs.filter(p => p.venue === 'Graduate').map((p, i) => (
          <li key={i}>
            <div className="font-medium">{p.title}</div>
            <a className="underline" href={p.link} target="_blank" rel="noreferrer">Link</a>
          </li>
        ))}
      </ol>

      <h2 className="text-xl font-semibold mt-8 mb-3">Undergraduate</h2>
      <ol className="space-y-4 list-decimal pl-6">
        {pubs.filter(p => p.venue === 'Undergraduate').map((p, i) => (
          <li key={i}>
            <div className="font-medium">{p.title}</div>
            <a className="underline" href={p.link} target="_blank" rel="noreferrer">Link</a>
          </li>
        ))}
      </ol>
    </Layout>
  )
}
