import Layout from '../components/Layout'

type Pub = { title: string; venue: string; link: string; year: string; };

const pubs: { title: string; venue: string; link: string; year: string }[] = [
  // Graduate
  {
    title:
      'Shabbir, M. W., Asante-Asare, D., Phillips, M., Ou, Z. "Transient Optical Clearing Using Absorbing Molecules for Ex Vivo and In Vivo Imaging." JoVE (221), e68629, 2025.',
    venue: 'Graduate',
    link: 'https://doi.org/10.3791/68629',
    year: '2025',
  },

  // Before PhD
  {
    title:
      'H. Beem, D. Asante-Asare, P. Obeng. "Exploring the Role of Engineering skills-building activities amongst youth in rural Karnataka," Research in Engineering Education Symposium (REES)-2024, Hubbali, India, 2024.',
    venue: 'Before PhD',
    link: 'https://doi.org/10.52202/073963-0026',
    year: '2024',
  },
  {
    title:
      'D. Asante-Asare, E. D. Mensah, G. Addo-Tetteh. (2023). "Internet of Things: The Budding Area of Mobile IoT Technologies (LTE-M and NB-IoT)." Science Engineering Entrepreneurship Design (SEED) Journal, 2(1).',
    venue: 'Before PhD',
    link: 'https://journal.ashesi.edu.gh/index.php/seed/article/view/67',
    year: '2023',
  },
  {
    title:
      'M. A. Boateng, D. Asante-Asare, T. Mashongedza, G. Arthur, D. Date, A. Dery, K. Chibiso, E. Kumi. (2023). "Ram vs. Cycle Pump: Designing a Sustainable Water Pump for Use in the Berekuso Township." Science Engineering Entrepreneurship Design (SEED) Journal, 2(1).',
    venue: 'Before PhD',
    link: 'https://journal.ashesi.edu.gh/index.php/seed/article/view/57',
    year: '2023',
  },
  {
    title:
      'M. A. Boateng, D. Asante-Asare, E. E. Amu, N. A. Frimpong. "A Solar-Electric Maize Dryer for Small-Holder Farmers in Ghana," 2022 IEEE 2nd International Conference on Mobile Networks and Wireless Communications (ICMNWC), Tumkur, Karnataka, India, 2022, pp. 1–5.',
    venue: 'Before PhD',
    link: 'https://doi.org/10.1109/ICMNWC56175.2022.10031823',
    year: '2022',
  },
];


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

      <h2 className="text-xl font-semibold mt-8 mb-3">Before PhD</h2>
      <ol className="space-y-4 list-decimal pl-6">
        {pubs.filter(p => p.venue === 'Before PhD').map((p, i) => (
          <li key={i}>
            <div className="font-medium">{p.title}</div>
            <a className="underline" href={p.link} target="_blank" rel="noreferrer">Link</a>
          </li>
        ))}
      </ol>
    </Layout>
  )
}
