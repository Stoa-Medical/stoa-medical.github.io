<script>
  import ActionButtons from "$lib/components/ActionButtons.svelte";
  const title = "Resources - Stoa Medical";
  const description = "Open-source tools, products, and educational content for healthcare technology integration.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<div class="page-content">
  <h1 class="page-title">Resources</h1>
  
  <h2 class="page-subtitle">
    Open-source tools, products, and educational content supporting healthcare technology integration
  </h2>

  <h2 class="section-title">Source-Available Products</h2>

  <div class="section-content">
    <div>
      <h4 class="subsection-title">Available Now</h4>
      <ul class="item-list">
        <li class="item">
          <a href="https://github.com/Stoa-Medical/Portico" class="item-link">Portico</a>
          - Agentic Integration Engine for Health Systems
        </li>
      </ul>
    </div>

    <div>
      <h4 class="subsection-title">Coming Soon</h4>
      <ul class="item-list">
        <li class="item"><strong>Pico</strong> - Patient data app</li>
        <li class="item"><strong>Picasso</strong> - Provider data app</li>
      </ul>
    </div>
  </div>

  <h2 class="section-title">Open-Source Tools</h2>

  <div class="section-content">
    <div>
      <h4 class="subsection-title">Available Now</h4>
      <ul class="item-list">
        <li class="item">
          <a href="https://github.com/Stoa-Medical/synthea-pydantic" class="item-link">synthea-pydantic</a>
          - Pydantic models for Synthea synthetic patient data
        </li>
        <li class="item">
          <a href="https://github.com/Stoa-Medical/omop-pydantic" class="item-link">omop-pydantic</a>
          - Pydantic models for OMOP Common Data Model
        </li>
      </ul>
    </div>

    <div>
      <h4 class="subsection-title">Coming Soon</h4>
      <ul class="item-list">
        <li class="item">
          <a href="https://github.com/Stoa-Medical/fhir-x-omop" class="item-link">fhir-x-omop</a>
          - Functional programming approach to FHIR ↔ OMOP data mapping
        </li>
      </ul>
    </div>
  </div>

  <h2 class="section-title">Talks & Presentations</h2>

  <div class="talks-section">
    <div>
      <h4 class="subsection-title">Academic Teaching</h4>
      <div class="teaching-content">
        <div>
          <h5 class="course-title">BIOS 417: "Back to the Future" with EHRs and Clinical AI (Stanford, Fall 2024)</h5>
          <p class="role-description">Creator + Co-Instructor</p>
          <ul class="lecture-list">
            <li><a href="https://youtu.be/VEStgIFHk94" class="item-link">Class 1 - The History of EHRs</a></li>
            <li><a href="https://youtu.be/XFNTVwvH0RA" class="item-link">Class 3 - Open-Source EHR Lab</a></li>
            <li><a href="https://youtu.be/Jj8vCFYWp_I" class="item-link">Class 5 - The Future (?) of EHRs</a></li>
          </ul>
        </div>

        <div>
          <h5 class="course-title">DESIGN 262: Design for Healthy Behaviors (Stanford, Winter 2024)</h5>
          <p class="role-description">Teaching Assistant</p>
          <ul class="lecture-list">
            <li><a href="https://docs.google.com/presentation/d/1FDOvKQofPTW6H_3ot4sbvtWun6HHTrptDFWM_ikHBDw/edit?usp=drive_link" class="item-link">Mini-lecture 1 - (Brief & Opinionated) Overview of Digital Health</a></li>
            <li><a href="https://docs.google.com/presentation/d/1BrRwrPI5iGz3eu7inTjLT31LwKl_JqlAE5xFsuYK5SA/edit?usp=drive_link" class="item-link">Mini-lecture 2 - (A longer and more opinionated) Intro to Digital Health</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <h4 class="subsection-title">Conference Presentations</h4>
      <ul class="item-list">
        <li class="item">
          <strong>FHIR DevDays 2025</strong> - 
          <a href="https://docs.google.com/presentation/d/1HimZzqz4sm17ThrKYisjpQZGQZN1X6EO/edit?usp=sharing&ouid=104278057375038637537&rtpof=true&sd=true" class="item-link">
            An open-source data mapping (fhir-x-omop) using functional programming in Python and Rust … finally!
          </a>
        </li>
        <li class="item">
          <strong>FHIR Synthetic Data Conference 2023</strong> - 
          <a href="https://docs.google.com/presentation/d/196esILnKJW5ZHyodlDIqvEy4UMTwhTDq/edit?usp=drive_link&ouid=108978819231638632466&rtpof=true&sd=true" class="item-link">
            Mapping OMOP ↔ FHIR for Synthetic Data
          </a>
        </li>
        <li class="item">
          <strong>FHIR DevDays 2023</strong> - 
          <a href="https://docs.google.com/presentation/d/1umUTmYhvYndnZIkRKfDGpqRzX9hjjT4x/edit?usp=drive_link&ouid=108978819231638632466&rtpof=true&sd=true" class="item-link">
            Data Mappings as Code: FHIR and Functional Programming
          </a>
        </li>
      </ul>
    </div>

    <div>
      <h4 class="subsection-title">Research & Innovation</h4>
      <ul class="item-list">
        <li class="item">
          <strong>Botha Chan Innovation Fellowship 2024</strong> - 
          <a href="https://docs.google.com/presentation/d/14DvLaPE23EUlAsYvfjQ9rWJFimObU0E16zCcFJ742sE/edit?usp=drive_link" class="item-link">
            PHR Exploration
          </a>
        </li>
        <li class="item">
          <strong>Zoom Mini-Conference 2024</strong> - 
          <a href="https://docs.google.com/document/d/1zhVbIgm-Thi0kkwN3TXRKoQ8mHDJ94_PKSalEsnmdAU/edit?tab=t.0" class="item-link">
            The Household as a Unit of Health Behavior Change
          </a>
        </li>
      </ul>
    </div>

    <div>
      <h4 class="subsection-title">Lab Meetings & Technical Talks</h4>
      <ul class="item-list">
        <li class="item">
          <strong>Floodgate Friends & Family</strong> - 
          <a href="https://docs.google.com/presentation/d/1eLYUe04JRDUIrk2bWc3ARAYvCzjWRBGROMxJ0mS-btI/edit?usp=sharing" class="item-link">
            Some thoughts on ~ vibe coding ~ (March 2025)
          </a>
        </li>
        <li class="item">
          <strong>Floodgate Friends & Family</strong> - 
          <a href="https://docs.google.com/presentation/d/1uzLH5GCcXaxK28-l8JZmraocu2VAQbZOZHk9-5QDc6I/edit?usp=drive_link" class="item-link">
            pydian: Pythonic Data Interchange (October 2024)
          </a>
        </li>
        <li class="item">
          <strong>Stanford Shah Lab Journal Club</strong> - 
          <a href="https://docs.google.com/presentation/d/15Hicn_vBB_uROC0No4nW9E5TH8bhIBPz5IZXgBygF0g/edit?usp=drive_link" class="item-link">
            What Can Transformers Learn In-Context? Case Study of Simple Function Classes
          </a>
        </li>
        <li class="item">
          <strong>Stanford HealthRex Lab</strong> - 
          <a href="https://docs.google.com/presentation/d/1KEe-eCgatpFLY4PNZQT2yIY5Lmf_HspX2wPjGDwmPPI/edit?usp=drive_link" class="item-link">
            Python and ✨You✨
          </a>
        </li>
      </ul>
    </div>
  </div>

  <h2 class="section-title">Key Definitions</h2>

  <div class="definitions-section">
    <p class="definition"><strong class="definition-term">Biomedicine:</strong> The study of disease and medical interventions, distinct from the broader concept of wellness</p>
    <p class="definition"><strong class="definition-term">Wellness:</strong> Holistic health that encompasses mental, physical, and social well-being; being free from illness while maintaining a positive condition</p>
    <p class="definition"><strong class="definition-term">Integration:</strong> Getting two specific systems to talk to each other through custom, often brittle connections</p>
    <p class="definition"><strong class="definition-term">Interoperability:</strong> Creating systems that can communicate with any compatible system using shared standards; everyone speaks the same language</p>
    <p class="definition"><strong class="definition-term">Data:</strong> Raw information captured at a point in time; digital bits that become valuable (or burdensome) depending on use</p>
    <p class="definition"><strong class="definition-term">Knowledge:</strong> Structured understanding of concepts; insights organized into meaningful patterns</p>
    <p class="definition"><strong class="definition-term">Intelligence:</strong> Using information effectively to achieve goals; the human element that turns data into decisions</p>
    <p class="definition"><strong class="definition-term">"iPhone Moment":</strong> A technology breakthrough that redefines user expectations and makes complex systems feel intuitive</p>
    <p class="definition"><strong class="definition-term">Value-Based Care:</strong> Paying for health outcomes and quality instead of procedures; shifting incentives from "do more" to "do better"</p>
    <p class="definition"><strong class="definition-term">Learning Health System:</strong> Healthcare that continuously improves by learning from every patient interaction; the vision of medicine getting better automatically</p>
  </div>

  <ActionButtons />
</div>

<style>
  /* Section titles */
  .section-title {
    text-align: left;
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
  }

  /* Section content containers */
  .section-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .talks-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .definitions-section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 4rem;
  }

  /* Subsection titles */
  .subsection-title {
    font-weight: 600;
    font-size: 1.125rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  /* Item lists */
  .item-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-left: 1rem;
    list-style: none;
    padding: 0;
  }

  .item {
    line-height: 1.6;
    color: var(--text-primary);
  }

  /* Links */
  .item-link {
    color: var(--text-primary);
    text-decoration: underline;
    font-weight: 500;
    transition: color 0.2s ease;
  }

  .item-link:hover {
    color: var(--text-secondary);
  }

  /* Academic teaching specific styles */
  .teaching-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-left: 1rem;
  }

  .course-title {
    font-weight: 500;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: var(--text-primary);
  }

  .role-description {
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
  }

  .lecture-list {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    list-style-type: disc;
    list-style-position: inside;
    margin-left: 1rem;
    font-size: 0.875rem;
  }

  .lecture-list li {
    color: var(--text-primary);
  }

  /* Definitions */
  .definition {
    line-height: 1.6;
    color: var(--text-primary);
  }

  .definition-term {
    text-decoration: underline;
    font-weight: 600;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .section-title {
      margin-top: 2rem;
      margin-bottom: 1.5rem;
      font-size: 1.25rem;
    }

    .section-content,
    .talks-section {
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .definitions-section {
      margin-bottom: 3rem;
    }

    .teaching-content,
    .item-list {
      margin-left: 0.5rem;
    }

    .lecture-list {
      margin-left: 0.5rem;
    }
  }
</style>