import Layout from '../components/Layout'
import Image from 'next/image'

type Project = {
  title: string;
  blurb: string;
  img: string;
  link?: string | null;
};

const projects: Project[] = [
  {
    "title": "Automatic Spice Dispenser for Catfish",
    "blurb": "An automatic dispenser to monitor the distribution of spices in a popular catfish restaurant in Ghana. This  was done for monitoring and accountability as the manager could not track the amount of spices required",
    "img": "https://static.wixstatic.com/media/3c031c_3d127bbf2df5480a8da898202fbd4281~mv2.jpg/v1/fill/w_310%2Ch_282%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/machine.jpg",
    "link": null
  },
  {
    "title": "Digitalized  Water Meter System",
    "blurb": "Designed a digital-based retrofitting unit to enable automatic meter reading for magnetic water meter systems. The device calculates water consumption and provide customers with real-time monitoring and a reliable billing system",
    "img": "https://static.wixstatic.com/media/3c031c_e7db2f2b150f4dec8a645a0f5259e88f~mv2.jpg/v1/fill/w_310%2Ch_282%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/water_meter_system.jpg",
    "link": "https://youtu.be/qOzCnYVGkFY"
  },
  {
    "title": "Solar Electric Maize Dryer",
    "blurb": "A low-cost solar electric maize dryer designed to empower small-holder farmers to reduce postharvest losses by allowing farmers to dry maize in all weather situations",
    "img": "https://static.wixstatic.com/media/3c031c_8a050454e1044083b78b163d3c90dac4~mv2.png/v1/crop/x_113%2Cy_0%2Cw_247%2Ch_225/fill/w_310%2Ch_282%2Cal_c%2Clg_1%2Cq_85%2Cenc_avif%2Cquality_auto/maize_dryer_PNG.png",
    "link": "https://www.youtube.com/shorts/fFdd1idHdZA"
  },
  {
    "title": "Waste Busters",
    "blurb": "1. A device that alerts waste management companies when the bin is almost full.\n\n2. A a container for waste so people do not have to bear the sight of overflowing waste",
    "img": "https://static.wixstatic.com/media/3c031c_8c2b40b7fa9e42ef9b78cd08a94d9e56~mv2.jpg/v1/fill/w_310%2Ch_282%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/wastebusters.jpg",
    "link": "https://www.youtube.com/watch?t=1s&v=sYdBB6ZFJGo"
  },
  {
    "title": "Cycle Water Pump",
    "blurb": "A bicycle water pump designed to help inhabitants of a village for easy access to water",
    "img": "https://static.wixstatic.com/media/3c031c_03bfe6dc15964f7a87d8712e764cae52~mv2.jpeg/v1/fill/w_310%2Ch_282%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/WhatsApp%20Image%202021-11-15%20at%2015_53_50.jpeg",
    "link": "https://www.youtube.com/watch?v=vF-vHI_B5gg"
  },
  {
    "title": "Arduino Tutoring",
    "blurb": "My team and I assisted children at the Christ Faith Foster Home School to code C++ in the Arduino programming environment, as well as control several electronic components (LEDs, Servo motors, buzzers, LDRs, And Ultrasonic sensors.",
    "img": "https://static.wixstatic.com/media/3c031c_683544e961844e3f9d34d147307e0c09~mv2.png/v1/crop/x_17%2Cy_0%2Cw_197%2Ch_179/fill/w_275%2Ch_251%2Cal_c%2Clg_1%2Cq_85%2Cenc_avif%2Cquality_auto/arduino_group_PNG.png",
    "link": "https://www.youtube.com/watch?v=lsGhTRWjjJQ"
  },
  {
    "title": "Hydroelectric Turbine",
    "blurb": "Exploring the effects of turbines in hydroelectric power, my team and I designed a prototype of a turbine and connected it to a voltmeter. We varied the fluid velocity at 12.5cm and 3.1cm that confirmed metal, plastic, plexiglass, wood and cardboard as the most efficient material respectively",
    "img": "https://static.wixstatic.com/media/3c031c_8519f1c2d2054ba89381104505e8cae2~mv2.jpg/v1/fill/w_310%2Ch_282%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/hydroturbine_edited.jpg",
    "link": "https://www.youtube.com/shorts/BHeeanys6o4"
  },
  {
    "title": "LCD Sharp Shooter Game",
    "blurb": "An embedded systems LCD game programmed in C where a created soldier character earns digital points by fighting against enemies.",
    "img": "https://static.wixstatic.com/media/3c031c_129146398b984cc1907218c331a58811~mv2.png/v1/fill/w_312%2Ch_284%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Capture_PNG.png",
    "link": "https://www.youtube.com/watch?v=OIB0qQphpWc"
  },
  {
    "title": "Electronic Piano",
    "blurb": "After studying Physics II, my team and I designed an electronic piano using resistors and capacitors. This piano offers bluetooth connectivity and can play music through its speakers from the device connected",
    "img": "https://static.wixstatic.com/media/3c031c_fa661bb0b66940faa8d5be1bb6db127d~mv2.jpg/v1/fill/w_312%2Ch_284%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/piano.jpg",
    "link": "https://www.youtube.com/watch?v=68ApA__qc9Q"
  },
  {
    "title": "Weighing Scale",
    "blurb": "A battery-powered weighing scale designed using a micro-controller and a load cell. The units of mass could switch between kg, g, or ounces. The percentage error compared to a real scale was a 3 to 4 % difference.",
    "img": "https://static.wixstatic.com/media/3c031c_ce60af08a89c4b4ba37bb1b7589b49fa~mv2.jpg/v1/crop/x_192%2Cy_0%2Cw_416%2Ch_378/fill/w_312%2Ch_284%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/weighing_scale.jpg",
    "link": "https://www.youtube.com/watch?v=_CvHEZAeQVI"
  },
  {
    "title": "Woodblock Charger",
    "blurb": "A charger made from wood. I applied the concept of conductivity of metals and made a charger using wood and metals. This woodblock charger was tested by charging a phone which worked perfectly",
    "img": "https://static.wixstatic.com/media/3c031c_23cb5fd3b83745378a1b6baca40b3c03~mv2.jpg/v1/fill/w_312%2Ch_284%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/woodblock.jpg",
    "link": null
  }
]

export default function Projects() {
  return (
    <Layout title="Projects" description="Selected engineering projects by David Asante-Asare.">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <h2 className="text-xl font-semibold mb-4">Undergraduate</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0,7).map((p, i) => (
          <article key={i} className="card">
            <div className="relative w-full pt-[60%] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image src={p.img} alt={p.title} fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold mt-3">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed whitespace-pre-line">{p.blurb}</p>
            {p.link && (
              <a className="mt-3 inline-block underline" href={p.link} target="_blank" rel="noreferrer">
                View
              </a>
            )}
          </article>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-10 mb-4">Mini Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(7).map((p, i) => (
          <article key={i} className="card">
            <div className="relative w-full pt-[60%] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image src={p.img} alt={p.title} fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold mt-3">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed whitespace-pre-line">{p.blurb}</p>
            {p.link && (
              <a className="mt-3 inline-block underline" href={p.link} target="_blank" rel="noreferrer">
                View
              </a>
            )}
          </article>
        ))}
      </div>
    </Layout>
  )
}
