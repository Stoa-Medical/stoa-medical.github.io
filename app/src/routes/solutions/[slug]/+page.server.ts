import { error } from "@sveltejs/kit";

const solutionMeta = {
  "ehr-to-ai": {
    title: "EHR → AI Pipeline — Stoa Medical",
    description: "Transform your EHR data into AI-ready pipelines with automated governance and compliance.",
  },
  "fhir-omop": {
    title: "FHIR ↔ OMOP Mapping — Stoa Medical",
    description: "Seamlessly convert between FHIR and OMOP formats for research and operational excellence.",
  },
  "agentic-charting": {
    title: "Agentic Charting — Stoa Medical",
    description: "AI-powered clinical documentation that integrates directly into your Epic workflow.",
  },
};

export async function load({ params }) {
  const meta = solutionMeta[params.slug as keyof typeof solutionMeta];

  if (!meta) {
    throw error(404, `Solution "${params.slug}" not found`);
  }

  return {
    meta: {
      ...meta,
      ogImage: `/og/solutions/${params.slug}.png`,
      ogType: "website",
      twitterCard: "summary_large_image",
    },
  };
}