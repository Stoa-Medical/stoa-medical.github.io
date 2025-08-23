<script>
  const title = "Resources & Writing - Stoa Medical";
  const description =
    "Open-source tools, products, and educational content for healthcare technology integration.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<div class="page-content">
  <div class="page-header">
    <h1 class="page-title">Resources & Writing</h1>
    <p class="page-subtitle">
      Open-source tools, products, and educational content supporting healthcare integration
    </p>
  </div>

  <div class="main-content">
    <div class="content-column">
      <section class="content-section">
        <h2 class="section-title">Source-Available Products</h2>
        
        <div class="subsection">
          <h3 class="subsection-label">Available now</h3>
          <div class="item-content">
            <a href="https://github.com/Stoa-Medical/Portico" class="item-link">Portico</a>
            <span class="item-description"> - Agentic Integration Engine for Health Systems</span>
          </div>
        </div>

        <div class="subsection">
          <h3 class="subsection-label">Coming soon</h3>
          <div class="item-content">
            <span class="item-name">Pico</span>
            <span class="item-description"> - Patient data app</span>
          </div>
          <div class="item-content">
            <span class="item-name">Picasso</span>
            <span class="item-description"> - Provider data app</span>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2 class="section-title">Open-Source Libraries</h2>
        
        <div class="subsection">
          <h3 class="subsection-label">Available now</h3>
          <div class="item-content">
            <a href="https://github.com/Stoa-Medical/synthea-pydantic" class="item-link">synthea-pydantic</a>
            <span class="item-description"> - Pydantic models for Synthea synthetic patient data</span>
          </div>
          <div class="item-content">
            <a href="https://github.com/Stoa-Medical/omop-pydantic" class="item-link">omop-pydantic</a>
            <span class="item-description"> - Pydantic models for OMOP Common Data Model</span>
          </div>
        </div>

        <div class="subsection">
          <h3 class="subsection-label">Coming soon</h3>
          <div class="item-content">
            <a href="https://github.com/Stoa-Medical/fhir-x-omop" class="item-link">fhir-x-omop</a>
            <span class="item-description"> - Functional programming approach to FHIR ↔ OMOP data mapping</span>
          </div>
        </div>
      </section>
    </div>
  </div>

  <section class="content-section">
    <h2 class="section-title">Writing</h2>
    
    <div class="writing-item">
      <p class="writing-date">15th December 2024</p>
      <div class="writing-content">
        <span class="writing-title">The Future of Healthcare Integration: Beyond Point-to-Point Solutions</span>
        <p class="writing-description">Exploring how modern healthcare systems can move beyond brittle integrations toward true interoperability through functional programming and standardized data models.</p>
      </div>
    </div>

    <div class="writing-item">
      <p class="writing-date">3rd November 2024</p>
      <div class="writing-content">
        <span class="writing-title">Building Patient-Centered Health Data Ownership</span>
        <p class="writing-description">Why patients should own their health data and how technology can make this a reality without compromising clinical workflows.</p>
      </div>
    </div>

    <div class="writing-item">
      <p class="writing-date">22nd October 2024</p>
      <div class="writing-content">
        <span class="writing-title">Lessons from Building EHR Integrations at Scale</span>
        <p class="writing-description">Practical insights from years of working with Epic, Canvas Medical, and 1upHealth on what makes healthcare integrations succeed or fail.</p>
      </div>
    </div>
  </section>

  <hr class="section-divider" />

  <section class="content-section">
    <h2 class="section-title">Talks & Presentations</h2>
    
    <div class="talks-layout">
      <div class="talks-column">
        <h3 class="talks-category">Academic Teaching</h3>
        
        <div class="talk-group">
          <div class="talk-header">
            <p class="talk-title">BIOS 417: "Back to the Future" with EHRs and Clinical AI (Stanford, Fall 2024)</p>
            <p class="talk-role">Creator + Co-Instructor</p>
          </div>
          <ul class="talk-links">
            <li><a href="https://youtu.be/VEStgIFHk94">Class 1 - The History of EHRs</a></li>
            <li><a href="https://youtu.be/XFNTVwvH0RA">Class 3 - Open-Source EHR Lab</a></li>
            <li><a href="https://youtu.be/Jj8vCFYWp_I">Class 5 - The Future (?) of EHRs</a></li>
          </ul>
        </div>

        <div class="talk-group">
          <div class="talk-header">
            <p class="talk-title">DESIGN 262: Design for Healthy Behaviors (Stanford, Winter 2024)</p>
            <p class="talk-role">Teaching Assistant</p>
          </div>
          <ul class="talk-links">
            <li><a href="https://docs.google.com/presentation/d/1FDOvKQofPTW6H_3ot4sbvtWun6HHTrptDFWM_ikHBDw/edit?usp=drive_link">Mini-lecture 1 - (Brief & Opinionated) Overview of Digital Health</a></li>
            <li><a href="https://docs.google.com/presentation/d/1BrRwrPI5iGz3eu7inTjLT31LwKl_JqlAE5xFsuYK5SA/edit?usp=drive_link">Mini-lecture 2 - (A longer and more opinionated) Intro to Digital Health</a></li>
          </ul>
        </div>
      </div>

      <div class="talks-column">
        <h3 class="talks-category">Conference Presentations</h3>
        
        <div class="talk-group">
          <p class="conference-name">FHIR DevDays 2025</p>
          <a href="https://docs.google.com/presentation/d/1HimZzqz4sm17ThrKYisjpQZGQZN1X6EO/edit?usp=sharing&ouid=104278057375038637537&rtpof=true&sd=true" class="talk-link">
            An open-source data mapping (fhir-x-omop) using functional programming in Python and Rust … finally!
          </a>
        </div>

        <div class="talk-group">
          <p class="conference-name">FHIR Synthetic Data Conference 2023</p>
          <a href="https://docs.google.com/presentation/d/196esILnKJW5ZHyodlDIqvEy4UMTwhTDq/edit?usp=drive_link&ouid=108978819231638632466&rtpof=true&sd=true" class="talk-link">
            Mapping OMOP ↔ FHIR for Synthetic Data
          </a>
        </div>

        <div class="talk-group">
          <p class="conference-name">FHIR DevDays 2023</p>
          <a href="https://docs.google.com/presentation/d/1umUTmYhvYndnZIkRKfDGpqRzX9hjjT4x/edit?usp=drive_link&ouid=108978819231638632466&rtpof=true&sd=true" class="talk-link">
            Data Mappings as Code: FHIR and Functional Programming
          </a>
        </div>
      </div>
    </div>

    <div class="talks-layout">
      <div class="talks-column">
        <h3 class="talks-category">Research & Innovation</h3>
        
        <div class="talk-group">
          <p class="conference-name">Botha Chan Innovation Fellowship 2024</p>
          <a href="https://docs.google.com/presentation/d/14DvLaPE23EUlAsYvfjQ9rWJFimObU0E16zCcFJ742sE/edit?usp=drive_link" class="talk-link">
            PHR Exploration
          </a>
        </div>

        <div class="talk-group">
          <p class="conference-name">Zoom Mini-Conference 2024</p>
          <a href="https://docs.google.com/document/d/1zhVbIgm-Thi0kkwN3TXRKoQ8mHDJ94_PKSalEsnmdAU/edit?tab=t.0" class="talk-link">
            The Household as a Unit of Health Behavior Change
          </a>
        </div>
      </div>

      <div class="talks-column">
        <h3 class="talks-category">Lab Meetings & Technical Talks</h3>
        
        <div class="talk-group">
          <p class="conference-name">Floodgate Friends & Family</p>
          <a href="https://docs.google.com/presentation/d/1eLYUe04JRDUIrk2bWc3ARAYvCzjWRBGROMxJ0mS-btI/edit?usp=sharing" class="talk-link">
            Some thoughts on ~ vibe coding ~ (March 2025)
          </a>
        </div>

        <div class="talk-group">
          <p class="conference-name">Floodgate Friends & Family</p>
          <a href="https://docs.google.com/presentation/d/1uzLH5GCcXaxK28-l8JZmraocu2VAQbZOZHk9-5QDc6I/edit?usp=drive_link" class="talk-link">
            pydian: Pythonic Data Interchange (October 2024)
          </a>
        </div>

        <div class="talk-group">
          <p class="conference-name">Stanford Shah Lab Journal Club</p>
          <a href="https://docs.google.com/presentation/d/15Hicn_vBB_uROC0No4nW9E5TH8bhIBPz5IZXgBygF0g/edit?usp=drive_link" class="talk-link">
            What Can Transformers Learn In-Context? Case Study of Simple Function Classes
          </a>
        </div>

        <div class="talk-group">
          <p class="conference-name">Stanford HealthRex Lab</p>
          <a href="https://docs.google.com/presentation/d/1KEe-eCgatpFLY4PNZQT2yIY5Lmf_HspX2wPjGDwmPPI/edit?usp=drive_link" class="talk-link">
            Python and ✨You✨
          </a>
        </div>
      </div>
    </div>
  </section>

  <hr class="section-divider" />

  <section class="content-section">
    <h2 class="section-title">Key Definitions</h2>
    
    <div class="definitions-content">
      <div class="definition-item">
        <strong class="definition-term">Biomedicine</strong>
        <span class="definition-text"> - The study of disease and medical interventions, distinct from the broader concept of wellness</span>
      </div>
      
      <div class="definition-item">
        <strong class="definition-term">Wellness</strong>
        <span class="definition-text"> - Holistic health that encompasses mental, physical, and social well-being; being free from illness while maintaining a positive condition</span>
      </div>
      
      <div class="definition-item">
        <strong class="definition-term">Integration</strong>
        <span class="definition-text"> - Getting two specific systems to talk to each other through custom, often brittle connections</span>
      </div>
      
      <div class="definition-item">
        <strong class="definition-term">Interoperability</strong>
        <span class="definition-text"> - Creating systems that can communicate with any compatible system using shared standards; everyone speaks the same language</span>
      </div>
      
      <div class="definition-item">
        <strong class="definition-term">Data</strong>
        <span class="definition-text"> - Raw information captured at a point in time; digital bits that become valuable (or burdensome) depending on use</span>
      </div>
      
      <div class="definition-item">
        <strong class="definition-term">Knowledge</strong>
        <span class="definition-text"> - Structured understanding of concepts; insights organized into meaningful patterns</span>
      </div>
      
      <div class="definition-item">
        <strong class="definition-term">Intelligence</strong>
        <span class="definition-text"> - Using information effectively to achieve goals; the human element that turns data into decisions</span>
      </div>
      
      <div class="definition-item">
        <strong class="definition-term">"iPhone Moment"</strong>
        <span class="definition-text"> - A technology breakthrough that redefines user expectations and makes complex systems feel intuitive</span>
      </div>
      
      <div class="definition-item">
        <strong class="definition-term">Value-Based Care</strong>
        <span class="definition-text"> - Paying for health outcomes and quality instead of procedures; shifting incentives from "do more" to "do better"</span>
      </div>
      
      <div class="definition-item">
        <strong class="definition-term">Learning Health System</strong>
        <span class="definition-text"> - Healthcare that continuously improves by learning from every patient interaction; the vision of medicine getting better automatically</span>
      </div>
    </div>
  </section>
</div>

<style>
  .page-content {
    max-width: 64rem;
    margin: 0 auto;
    padding: 4.5rem 1.5rem 6rem;
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
  }

  .page-header {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .page-title {
    font-family: var(--font-primary);
    font-size: 5rem;
    line-height: 1.2;
    letter-spacing: -0.03em;
    color: var(--text-primary);
    margin: 0;
  }

  .page-subtitle {
    font-family: var(--font-primary);
    font-size: 2.5rem;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    margin: 0;
  }

  .main-content {
    display: flex;
    gap: 4rem;
  }

  .content-column {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    flex: 1;
  }

  .content-section {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .section-title {
    font-family: var(--font-primary);
    font-size: 1.5rem;
    line-height: 1.2;
    letter-spacing: -0.03em;
    color: var(--text-primary);
    margin: 0;
  }

  .subsection {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .subsection-label {
    font-family: var(--font-primary);
    font-style: italic;
    font-size: 1rem;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.02em;
  }

  .item-content {
    font-family: var(--font-primary);
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--text-primary);
    letter-spacing: -0.02em;
  }

  .item-link {
    text-decoration: underline;
    text-underline-offset: 2px;
    color: var(--text-primary);
  }

  .item-link:hover {
    opacity: 0.7;
  }

  .item-name {
    font-weight: 500;
  }

  .item-description {
    color: var(--text-primary);
  }

  /* Writing Section */
  .writing-item {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .writing-date {
    font-family: var(--font-primary);
    font-style: italic;
    font-size: 1rem;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.02em;
  }

  .writing-content {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .writing-title {
    font-family: var(--font-primary);
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--text-primary);
    text-decoration: underline;
    text-underline-offset: 2px;
    letter-spacing: -0.02em;
    margin: 0;
  }

  .writing-title:hover {
    opacity: 0.7;
  }

  .writing-description {
    font-family: var(--font-primary);
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    margin: 0;
  }

  /* Talks Section */
  .talks-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }

  .talks-column {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .talks-category {
    font-family: var(--font-primary);
    font-style: italic;
    font-size: 1.125rem;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.02em;
  }

  .talk-group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .talk-header {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .talk-title {
    font-family: var(--font-primary);
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.02em;
  }

  .talk-role {
    font-family: var(--font-primary);
    font-style: italic;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.02em;
  }

  .talk-links {
    list-style: disc;
    margin-left: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .talk-links li {
    font-family: var(--font-primary);
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--text-primary);
    letter-spacing: -0.02em;
  }

  .talk-links a {
    text-decoration: underline;
    text-underline-offset: 2px;
    color: var(--text-primary);
  }

  .talk-links a:hover {
    opacity: 0.7;
  }

  .conference-name {
    font-family: var(--font-primary);
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.02em;
  }

  .talk-link {
    font-family: var(--font-primary);
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--text-primary);
    text-decoration: underline;
    text-underline-offset: 2px;
    letter-spacing: -0.02em;
    display: block;
  }

  .talk-link:hover {
    opacity: 0.7;
  }

  /* Definitions Section */
  .definitions-content {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .definition-item {
    font-family: var(--font-primary);
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--text-primary);
    letter-spacing: -0.02em;
  }

  .definition-term {
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .definition-text {
    color: var(--text-primary);
  }

  .section-divider {
    border: none;
    border-top: 1px solid var(--text-primary);
    opacity: 0.2;
    width: 100%;
    margin: 2rem 0;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    .talks-layout {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    
    .main-content {
      flex-direction: column;
      gap: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    .page-title {
      font-size: 3.5rem;
    }
    
    .page-subtitle {
      font-size: 2rem;
    }
    
    .page-content {
      padding: 3rem 1rem 4rem;
      gap: 3rem;
    }
  }
</style>