export function Article() {
  return (
    <article className="research-article">
      <header className="article-header">
        <h1 className="article-title">
          The Central Nervous System: Structure, Function, and Clinical Significance
        </h1>
        <div className="article-meta">
          <p className="article-authors">Dr. Sarah Johnson, Dr. Michael Chen, Dr. Emily Rodriguez</p>
          <p className="article-date">Published: March 19, 2026</p>
          <p className="article-institution">Department of Neuroscience, Institute of Advanced Medical Research</p>
        </div>
      </header>

      <section id="abstract" className="article-section">
        <h2>Abstract</h2>
        <p>
          The central nervous system (CNS) represents one of the most complex and sophisticated
          biological systems known to science. Comprising the brain and spinal cord, the CNS serves
          as the primary control center for all bodily functions, integrating sensory information
          and coordinating responses throughout the organism. This comprehensive review examines the
          structural organization, functional mechanisms, and clinical implications of the CNS,
          providing insights into both normal physiology and pathological conditions.
        </p>
        <p>
          Our analysis encompasses recent advances in neuroimaging, molecular neurobiology, and
          computational neuroscience, offering a multidisciplinary perspective on CNS function. We
          explore the intricate networks of neurons, the role of neurotransmitters, and the
          remarkable plasticity that enables learning and adaptation throughout the lifespan.
        </p>
      </section>

      <section id="introduction" className="article-section">
        <h2>Introduction</h2>
        <p>
          The central nervous system stands as a testament to biological evolution's capacity for
          creating intricate systems of information processing and control. With approximately 86
          billion neurons in the human brain alone, each forming thousands of synaptic connections,
          the CNS represents an unparalleled computational network.
        </p>
        <p>
          Understanding the CNS is fundamental to advancing medical science, as disorders affecting
          this system impact millions worldwide. From neurodegenerative diseases like Alzheimer's
          and Parkinson's to psychiatric conditions and traumatic injuries, CNS pathologies present
          some of the most challenging medical problems of our time.
        </p>
        <p>
          This article synthesizes current knowledge about the CNS, exploring its architecture,
          operational principles, and the cutting-edge research that continues to unveil its
          mysteries. We aim to provide a comprehensive resource for researchers, clinicians, and
          students seeking to understand this remarkable system.
        </p>
      </section>

      <section id="structure" className="article-section">
        <h2>Structure of the CNS</h2>
        <p>
          The central nervous system consists of two primary components: the brain, housed within
          the protective cranium, and the spinal cord, which extends through the vertebral column.
          Both structures are enveloped by three protective membranes called meninges: the dura
          mater, arachnoid mater, and pia mater.
        </p>
        <h3>Protective Mechanisms</h3>
        <p>
          The CNS benefits from multiple layers of protection. The skull and vertebral column
          provide mechanical protection, while the cerebrospinal fluid (CSF) acts as a shock
          absorber and maintains chemical homeostasis. The blood-brain barrier, formed by
          specialized endothelial cells, selectively regulates the passage of substances between
          the bloodstream and neural tissue.
        </p>
        <h3>Organizational Hierarchy</h3>
        <p>
          The CNS exhibits hierarchical organization at multiple scales, from molecular components
          to large-scale networks. At the cellular level, neurons and glial cells form the basic
          functional units. These cells organize into layers and nuclei, which in turn form larger
          structures such as cortical columns and neural circuits.
        </p>
      </section>

      <section id="brain" className="article-section">
        <h2>The Brain</h2>
        <p>
          The human brain, weighing approximately 1.4 kilograms, represents the most complex organ
          in the body. It can be divided into several major regions, each with specialized
          functions that contribute to the integrated operation of the nervous system.
        </p>
        <h3>Cerebrum</h3>
        <p>
          The cerebrum, comprising about 85% of brain mass, consists of two hemispheres connected
          by the corpus callosum. The cerebral cortex, the outer layer of the cerebrum, contains
          gray matter with billions of neurons organized into distinct functional areas. These
          regions process sensory information, generate motor commands, and support higher cognitive
          functions including language, reasoning, and consciousness.
        </p>
        <h3>Cerebellum</h3>
        <p>
          Located beneath the occipital lobes, the cerebellum plays a crucial role in motor
          coordination, balance, and motor learning. Despite containing only 10% of the brain's
          volume, it houses more than 50% of its neurons, reflecting its computational intensity.
        </p>
        <h3>Brainstem</h3>
        <p>
          The brainstem, consisting of the midbrain, pons, and medulla oblongata, controls vital
          autonomic functions such as heart rate, breathing, and blood pressure. It also serves as
          a conduit for neural pathways between the brain and spinal cord.
        </p>
      </section>

      <section id="spinal-cord" className="article-section">
        <h2>Spinal Cord</h2>
        <p>
          The spinal cord extends from the brainstem to the lumbar region, serving as the primary
          pathway for information traveling between the brain and the peripheral nervous system. Its
          segmental organization allows for localized reflex circuits while maintaining integration
          with higher brain centers.
        </p>
        <h3>Gray and White Matter</h3>
        <p>
          In cross-section, the spinal cord reveals a butterfly-shaped core of gray matter
          surrounded by white matter. The gray matter contains neuronal cell bodies and is
          organized into dorsal (sensory), lateral, and ventral (motor) horns. The white matter
          consists of myelinated axons organized into ascending and descending tracts.
        </p>
        <h3>Functional Pathways</h3>
        <p>
          Ascending pathways carry sensory information to the brain, including touch, pain,
          temperature, and proprioception. Descending pathways transmit motor commands and
          modulatory signals from the brain to spinal circuits, enabling voluntary movement and
          autonomic control.
        </p>
      </section>

      <section id="neurons" className="article-section">
        <h2>Neurons and Neurotransmitters</h2>
        <p>
          Neurons represent the fundamental signaling units of the CNS, specialized for rapid
          electrical communication. Each neuron consists of a cell body (soma), dendrites that
          receive inputs, and an axon that transmits signals to other cells.
        </p>
        <h3>Synaptic Transmission</h3>
        <p>
          Communication between neurons occurs at synapses, specialized junctions where
          neurotransmitters bridge the synaptic cleft. When an action potential reaches the axon
          terminal, it triggers the release of neurotransmitter molecules that bind to receptors on
          the postsynaptic cell, either exciting or inhibiting its activity.
        </p>
        <h3>Major Neurotransmitter Systems</h3>
        <p>
          The CNS employs numerous neurotransmitters, each with distinct roles. Glutamate serves as
          the primary excitatory neurotransmitter, while GABA provides inhibitory control. Dopamine
          modulates reward and motor control, serotonin influences mood and sleep, and
          acetylcholine supports attention and memory. Imbalances in these systems contribute to
          various neurological and psychiatric disorders.
        </p>
      </section>

      <section id="functions" className="article-section">
        <h2>Key Functions</h2>
        <p>
          The CNS orchestrates an remarkable array of functions, from basic homeostatic regulation
          to complex cognitive processes that define human experience.
        </p>
        <h3>Sensory Processing</h3>
        <p>
          The CNS continuously processes sensory information from multiple modalities, constructing
          coherent representations of the external and internal environment. This involves not only
          detection but also interpretation, integration, and conscious perception of stimuli.
        </p>
        <h3>Motor Control</h3>
        <p>
          Motor control emerges from hierarchical interactions between cortical planning areas,
          subcortical structures, and spinal circuits. This system enables both reflexive responses
          and skilled voluntary movements, with remarkable precision and adaptability.
        </p>
        <h3>Cognitive Functions</h3>
        <p>
          Higher cognitive functions, including attention, memory, language, and executive control,
          arise from distributed networks spanning multiple brain regions. These capabilities enable
          humans to learn from experience, solve problems, and engage in abstract thought.
        </p>
        <h3>Emotional Regulation</h3>
        <p>
          The limbic system and associated structures process emotional information, influencing
          behavior, decision-making, and social interactions. Emotional and cognitive systems are
          deeply intertwined, jointly shaping human behavior and experience.
        </p>
      </section>

      <section id="disorders" className="article-section">
        <h2>Common Disorders</h2>
        <p>
          CNS disorders encompass a wide spectrum of conditions, from acute injuries to chronic
          degenerative diseases, each presenting unique challenges for diagnosis and treatment.
        </p>
        <h3>Neurodegenerative Diseases</h3>
        <p>
          Conditions such as Alzheimer's disease, Parkinson's disease, and amyotrophic lateral
          sclerosis (ALS) involve progressive neuronal loss, leading to cognitive and motor
          impairments. Understanding the molecular mechanisms underlying these diseases remains a
          critical research priority.
        </p>
        <h3>Stroke and Traumatic Injury</h3>
        <p>
          Acute damage to CNS tissue, whether from interrupted blood flow or physical trauma, can
          result in permanent neurological deficits. Advances in acute intervention and
          rehabilitation continue to improve outcomes for affected individuals.
        </p>
        <h3>Psychiatric Disorders</h3>
        <p>
          Mental health conditions, including depression, schizophrenia, and anxiety disorders,
          reflect altered CNS function at multiple levels. Modern neuroscience increasingly
          recognizes these as brain disorders with identifiable neurobiological correlates.
        </p>
      </section>

      <section id="conclusion" className="article-section">
        <h2>Conclusion</h2>
        <p>
          The central nervous system represents a pinnacle of biological complexity, integrating
          countless cellular and molecular processes into a unified system capable of perception,
          action, and thought. Our understanding of the CNS has advanced tremendously, yet
          fundamental questions remain about the neural basis of consciousness, the mechanisms of
          learning and memory, and the origins of neurological disease.
        </p>
        <p>
          Future progress will require continued interdisciplinary collaboration, bringing together
          insights from molecular biology, systems neuroscience, computational modeling, and
          clinical research. As we develop new technologies and analytical approaches, we move
          closer to unlocking the remaining mysteries of the nervous system and translating this
          knowledge into effective treatments for CNS disorders.
        </p>
        <p>
          The journey to fully understand the CNS continues, promising not only to illuminate the
          workings of the human mind but also to alleviate the suffering caused by neurological
          disease and injury.
        </p>
      </section>

      <section id="references" className="article-section">
        <h2>References</h2>
        <ol className="references-list">
          <li>Kandel, E. R., Schwartz, J. H., & Jessell, T. M. (2025). Principles of Neural Science (7th ed.). McGraw-Hill.</li>
          <li>Bear, M. F., Connors, B. W., & Paradiso, M. A. (2024). Neuroscience: Exploring the Brain (5th ed.). Wolters Kluwer.</li>
          <li>Purves, D., et al. (2025). Neuroscience (7th ed.). Oxford University Press.</li>
          <li>Squire, L. R., et al. (2024). Fundamental Neuroscience (5th ed.). Academic Press.</li>
          <li>Gazzaniga, M. S., Ivry, R. B., & Mangun, G. R. (2025). Cognitive Neuroscience: The Biology of the Mind (6th ed.). W. W. Norton.</li>
        </ol>
      </section>
    </article>
  );
}
