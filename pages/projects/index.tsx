import Layout from "../../components/Layout";
import ProjectCard from "../../components/ProjectCard";

export default function ProjectsGraduate() {
  return (
    <Layout title="Projects" description="Graduate projects by David Asante-Asare.">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="mt-2 opacity-80">
          A selection of research and engineering projects showcasing my work across different areas of computer engineering and applied science.
        </p>
      </header>

      <section className="grid sm:grid-cols-2 gap-6">
        {/* 1) Making Live Animals Transparent */}
        <ProjectCard
          title="Making Live Animals Transparent (Tartrazine-Assisted Optical Clearing)"
          image="/projects/clearing.jpg"
          summary="Biological tissues scatter light due to refractive-index mismatch, limiting imaging depth. We applied a food-safe dye (Tartrazine) to temporarily reduce scattering in live mouse tissue, improving visibility of internal structures during in-vivo imaging."
          bullets={[
            "Led the image-processing pipeline: contrast enhancement, denoising, organ segmentation to reveal fine structures.",
            "Demonstrated how physics-aware preprocessing + ML improve dynamic bio-imaging readouts.",
          ]}
          tags={["Computational Imaging", "Image Processing", "Segmentation", "In-vivo Imaging", "Python", "OpenCV"]}
          links={[]}
        />

        {/* 2) Automated Inspection of IC Markings */}
        <ProjectCard
          title="Automated Inspection of IC Markings"
          image="/projects/ic-inspection.jpg"
          summary="End-to-end vision pipeline to classify chip markings as Good/Defective (missing/unclear/distorted characters). Combined classical methods for detection/segmentation with learned recognition."
          bullets={[
            "Preprocessing: grayscale + Gaussian blur; Canny + hybrid Otsu/Sauvola binarization.",
            "Layout: contour/projection profiles; Fourier & Hough for orientation correction.",
            "Text extraction: MSER, SWT, watershed, CRAFT; recognition via custom YOLOv8.",
            "Rule-based final classification; highlighted impact of dataset size on overall accuracy."
          ]}
          tags={["OpenCV", "scikit-image", "NumPy", "YOLOv8", "CRAFT", "TensorFlow/Keras", "Manufacturing QA"]}
          links={[]}
        />

        {/* 3) Shortest-Path Timing in Circuit Graphs (ISCAS’85) */}
        <ProjectCard
          title="Shortest-Path Timing in Circuit Graphs (ISCAS’85)"
          image="/projects/iscas.jpg"
          summary="C++ tool that models ISCAS’85 logic circuits as weighted directed graphs and computes minimum-delay paths between chosen IOs."
          bullets={[
            "Bench parser preserving canonical names (e.g., G1gat) and robust CLI checks.",
            "Graph from gate connectivity; edge weights from fan-out; Dijkstra + path reconstruction.",
            "Useful for identifying critical timing paths that drive VLSI performance."
          ]}
          tags={["C++", "STL", "Graph Algorithms", "Dijkstra", "VLSI Timing", "Makefile", "Unix"]}
          links={[]}
        />

        {/* 4) Deep Learning for Malaria Detection */}
        <ProjectCard
          title="Deep Learning for Malaria Detection from Blood Smears"
          image="/projects/malaria.jpg"
          summary="CNN-based classifier for red-blood-cell images (infected vs. uninfected) using the NIH malaria dataset (~27k images)."
          bullets={[
            "Keras ImageDataGenerator for augmentation (rotation, rescaling, zoom, flips).",
            "Custom CNN with dropout; early stopping; evaluation via confusion matrix & reports.",
            "Model exported for reuse/deployment (malaria_detector.h5)."
          ]}
          tags={["Python", "TensorFlow/Keras", "scikit-learn", "Data Augmentation", "Medical Imaging"]}
          links={[]}
        />
      </section>
    </Layout>
  );
}
