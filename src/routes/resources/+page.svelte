<script>
  import ActionButtons from "$lib/components/ActionButtons.svelte";
  const title = "Resources - Stoa Medical";
  const description =
    "Open-source tools, products, and educational content for healthcare technology integration.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<div class="max-w-4xl mx-auto px-6 py-12">
  <h1 class="text-center mb-8">Resources</h1>

  <h3 class="text-center mb-12">
    Open-source tools, products, and educational content supporting healthtech
    integration
  </h3>

  <h2 class="text-left mt-12 mb-4">Source-Available Products</h2>

  <div class="space-y-8 mb-12">
    <div>
      <h3 class="font-bold text-lg mb-4">Available Now</h3>
      <ul class="space-y-2 list-disc list-inside">
        <li class="leading-relaxed">
          <a
            href="https://github.com/Stoa-Medical/Portico"
            class="underline font-medium hover:text-theme-secondary">Portico</a
          >
          - Agentic Integration Engine for Health Systems
        </li>
      </ul>
    </div>

    <div>
      <h3 class="font-bold text-lg mb-4">Coming Soon</h3>
      <ul class="space-y-2 list-disc list-inside">
        <li class="leading-relaxed">
          <strong>Pico</strong> - Patient data app
        </li>
        <li class="leading-relaxed">
          <strong>Picasso</strong> - Provider data app
        </li>
      </ul>
    </div>
  </div>

  <h2 class="text-left mt-12 mb-4">Open-Source Tools</h2>

  <div class="space-y-8 mb-12">
    <div>
      <h3 class="font-bold text-lg mb-4">Available Now</h3>
      <ul class="space-y-2 list-disc list-inside">
        <li class="leading-relaxed">
          <a
            href="https://github.com/Stoa-Medical/synthea-pydantic"
            class="underline font-medium hover:text-theme-secondary"
            >synthea-pydantic</a
          >
          - Pydantic models for Synthea synthetic patient data
        </li>
        <li class="leading-relaxed">
          <a
            href="https://github.com/Stoa-Medical/omop-pydantic"
            class="underline font-medium hover:text-theme-secondary"
            >omop-pydantic</a
          >
          - Pydantic models for OMOP Common Data Model
        </li>
      </ul>
    </div>

    <div>
      <h3 class="font-bold text-lg mb-4">Coming Soon</h3>
      <ul class="space-y-2 list-disc list-inside">
        <li class="leading-relaxed">
          <a
            href="https://github.com/Stoa-Medical/fhir-x-omop"
            class="underline font-medium hover:text-theme-secondary"
            >fhir-x-omop</a
          >
          - Functional programming approach to FHIR ↔ OMOP data mapping
        </li>
      </ul>
    </div>
  </div>

  <h2 class="text-left mt-12 mb-4">Talks & Presentations</h2>

  <div class="space-y-8 mb-12">
    <div>
      <h3 class="font-bold text-lg mb-4">Academic Teaching</h3>
      <div class="space-y-6">
        <div>
          <h4 class="font-semibold mb-2">
            BIOS 417: "Back to the Future" with EHRs and Clinical AI (Stanford,
            Fall 2024)
          </h4>
          <p class="text-sm text-theme-secondary mb-2">
            Creator + Co-Instructor
          </p>
          <ul class="space-y-1 list-disc list-inside ml-4">
            <li>
              <a
                href="https://youtu.be/VEStgIFHk94"
                class="underline hover:text-theme-secondary"
                >Class 1 - The History of EHRs</a
              >
            </li>
            <li>
              <a
                href="https://youtu.be/XFNTVwvH0RA"
                class="underline hover:text-theme-secondary"
                >Class 3 - Open-Source EHR Lab</a
              >
            </li>
            <li>
              <a
                href="https://youtu.be/Jj8vCFYWp_I"
                class="underline hover:text-theme-secondary"
                >Class 5 - The Future (?) of EHRs</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-2">
            DESIGN 262: Design for Healthy Behaviors (Stanford, Winter 2024)
          </h4>
          <p class="text-sm text-theme-secondary mb-2">Teaching Assistant</p>
          <ul class="space-y-1 list-disc list-inside ml-4">
            <li>
              <a
                href="https://docs.google.com/presentation/d/1FDOvKQofPTW6H_3ot4sbvtWun6HHTrptDFWM_ikHBDw/edit?usp=drive_link"
                class="underline hover:text-theme-secondary"
                >Mini-lecture 1 - (Brief & Opinionated) Overview of Digital
                Health</a
              >
            </li>
            <li>
              <a
                href="https://docs.google.com/presentation/d/1BrRwrPI5iGz3eu7inTjLT31LwKl_JqlAE5xFsuYK5SA/edit?usp=drive_link"
                class="underline hover:text-theme-secondary"
                >Mini-lecture 2 - (A longer and more opinionated) Intro to
                Digital Health</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <h3 class="font-bold text-lg mb-4">Conference Presentations</h3>
      <ul class="space-y-2 list-disc list-inside">
        <li class="leading-relaxed">
          <strong>FHIR DevDays 2025</strong> -
          <a
            href="https://docs.google.com/presentation/d/1HimZzqz4sm17ThrKYisjpQZGQZN1X6EO/edit?usp=sharing&ouid=104278057375038637537&rtpof=true&sd=true"
            class="underline hover:text-theme-secondary"
          >
            An open-source data mapping (fhir-x-omop) using functional
            programming in Python and Rust … finally!
          </a>
        </li>
        <li class="leading-relaxed">
          <strong>FHIR Synthetic Data Conference 2023</strong> -
          <a
            href="https://docs.google.com/presentation/d/196esILnKJW5ZHyodlDIqvEy4UMTwhTDq/edit?usp=drive_link&ouid=108978819231638632466&rtpof=true&sd=true"
            class="underline hover:text-theme-secondary"
          >
            Mapping OMOP ↔ FHIR for Synthetic Data
          </a>
        </li>
        <li class="leading-relaxed">
          <strong>FHIR DevDays 2023</strong> -
          <a
            href="https://docs.google.com/presentation/d/1umUTmYhvYndnZIkRKfDGpqRzX9hjjT4x/edit?usp=drive_link&ouid=108978819231638632466&rtpof=true&sd=true"
            class="underline hover:text-theme-secondary"
          >
            Data Mappings as Code: FHIR and Functional Programming
          </a>
        </li>
      </ul>
    </div>

    <div>
      <h3 class="font-bold text-lg mb-4">Research & Innovation</h3>
      <ul class="space-y-2 list-disc list-inside">
        <li class="leading-relaxed">
          <strong>Botha Chan Innovation Fellowship 2024</strong> -
          <a
            href="https://docs.google.com/presentation/d/14DvLaPE23EUlAsYvfjQ9rWJFimObU0E16zCcFJ742sE/edit?usp=drive_link"
            class="underline hover:text-theme-secondary"
          >
            PHR Exploration
          </a>
        </li>
        <li class="leading-relaxed">
          <strong>Zoom Mini-Conference 2024</strong> -
          <a
            href="https://docs.google.com/document/d/1zhVbIgm-Thi0kkwN3TXRKoQ8mHDJ94_PKSalEsnmdAU/edit?tab=t.0"
            class="underline hover:text-theme-secondary"
          >
            The Household as a Unit of Health Behavior Change
          </a>
        </li>
      </ul>
    </div>

    <div>
      <h3 class="font-bold text-lg mb-4">Lab Meetings & Technical Talks</h3>
      <ul class="space-y-2 list-disc list-inside">
        <li class="leading-relaxed">
          <strong>Floodgate Friends & Family</strong> -
          <a
            href="https://docs.google.com/presentation/d/1eLYUe04JRDUIrk2bWc3ARAYvCzjWRBGROMxJ0mS-btI/edit?usp=sharing"
            class="underline hover:text-theme-secondary"
          >
            Some thoughts on ~ vibe coding ~ (March 2025)
          </a>
        </li>
        <li class="leading-relaxed">
          <strong>Floodgate Friends & Family</strong> -
          <a
            href="https://docs.google.com/presentation/d/1uzLH5GCcXaxK28-l8JZmraocu2VAQbZOZHk9-5QDc6I/edit?usp=drive_link"
            class="underline hover:text-theme-secondary"
          >
            pydian: Pythonic Data Interchange (October 2024)
          </a>
        </li>
        <li class="leading-relaxed">
          <strong>Stanford Shah Lab Journal Club</strong> -
          <a
            href="https://docs.google.com/presentation/d/15Hicn_vBB_uROC0No4nW9E5TH8bhIBPz5IZXgBygF0g/edit?usp=drive_link"
            class="underline hover:text-theme-secondary"
          >
            What Can Transformers Learn In-Context? Case Study of Simple
            Function Classes
          </a>
        </li>
        <li class="leading-relaxed">
          <strong>Stanford HealthRex Lab</strong> -
          <a
            href="https://docs.google.com/presentation/d/1KEe-eCgatpFLY4PNZQT2yIY5Lmf_HspX2wPjGDwmPPI/edit?usp=drive_link"
            class="underline hover:text-theme-secondary"
          >
            Python and ✨You✨
          </a>
        </li>
      </ul>
    </div>
  </div>

  <h2 class="text-left mt-12 mb-4">Key Definitions</h2>

  <div class="space-y-3 mb-16">
    <p class="leading-relaxed">
      <strong class="underline">Biomedicine:</strong> The study of disease and medical
      interventions, distinct from the broader concept of wellness
    </p>
    <p class="leading-relaxed">
      <strong class="underline">Wellness:</strong> Holistic health that encompasses
      mental, physical, and social well-being; being free from illness while maintaining
      a positive condition
    </p>
    <p class="leading-relaxed">
      <strong class="underline">Integration:</strong> Getting two specific systems
      to talk to each other through custom, often brittle connections
    </p>
    <p class="leading-relaxed">
      <strong class="underline">Interoperability:</strong> Creating systems that
      can communicate with any compatible system using shared standards; everyone
      speaks the same language
    </p>
    <p class="leading-relaxed">
      <strong class="underline">Data:</strong> Raw information captured at a point
      in time; digital bits that become valuable (or burdensome) depending on use
    </p>
    <p class="leading-relaxed">
      <strong class="underline">Knowledge:</strong> Structured understanding of concepts;
      insights organized into meaningful patterns
    </p>
    <p class="leading-relaxed">
      <strong class="underline">Intelligence:</strong> Using information effectively
      to achieve goals; the human element that turns data into decisions
    </p>
    <p class="leading-relaxed">
      <strong class="underline">"iPhone Moment":</strong> A technology breakthrough
      that redefines user expectations and makes complex systems feel intuitive
    </p>
    <p class="leading-relaxed">
      <strong class="underline">Value-Based Care:</strong> Paying for health outcomes
      and quality instead of procedures; shifting incentives from "do more" to "do
      better"
    </p>
    <p class="leading-relaxed">
      <strong class="underline">Learning Health System:</strong> Healthcare that
      continuously improves by learning from every patient interaction; the vision
      of medicine getting better automatically
    </p>
  </div>

  <ActionButtons />
</div>
