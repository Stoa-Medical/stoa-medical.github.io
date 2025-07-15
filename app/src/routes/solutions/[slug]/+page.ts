import { error } from "@sveltejs/kit";

const solutions = {
  "ehr-to-ai": {
    title: "EHR → AI pipeline",
    subtitle: "Turn HL7/FHIR into embeddings + governance",
    icon: "🔄",
    description:
      "Transform your EHR data into AI-ready pipelines with automated governance and compliance.",
    overview:
      "Bridge the gap between your Electronic Health Records and AI applications. Our EHR-to-AI pipeline automatically extracts, transforms, and vectorizes your healthcare data while maintaining strict HIPAA compliance and audit trails.",
    benefits: [
      "Automatic FHIR resource parsing and validation",
      "Real-time data transformation with zero downtime",
      "Built-in PHI detection and secure handling",
      "Vector embeddings optimized for healthcare LLMs",
      "Comprehensive audit logging for compliance",
    ],
    process: [
      {
        title: "Data Extraction",
        description:
          "Connect to your EHR via FHIR APIs or HL7 feeds with secure authentication and rate limiting.",
      },
      {
        title: "Transformation",
        description:
          "Apply custom business logic, data validation, and format conversion using our visual workflow builder.",
      },
      {
        title: "Vectorization",
        description:
          "Generate embeddings using healthcare-specific models while preserving semantic relationships.",
      },
      {
        title: "AI Integration",
        description:
          "Deploy to your AI applications with real-time updates and version control.",
      },
    ],
    implementation: "API-first",
    timeline: "2-4 weeks",
    compliance: "HIPAA, SOC 2",
    related: [
      { title: "FHIR ↔ OMOP mapping", slug: "fhir-omop" },
      { title: "Agentic charting", slug: "agentic-charting" },
    ],
  },
  "fhir-omop": {
    title: "FHIR ↔ OMOP mapping",
    subtitle: "Bidirectional sync for research & ops",
    icon: "🔀",
    description:
      "Seamlessly convert between FHIR and OMOP formats for research and operational excellence.",
    overview:
      "Enable seamless data exchange between clinical operations (FHIR) and research environments (OMOP). Our bidirectional mapping ensures data consistency while supporting both real-time operations and batch research workflows.",
    benefits: [
      "Bidirectional FHIR ↔ OMOP conversion",
      "Real-time sync for operational workflows",
      "Batch processing for research datasets",
      "Automated concept mapping and validation",
      "Support for custom vocabularies and extensions",
    ],
    process: [
      {
        title: "Schema Analysis",
        description:
          "Analyze your existing FHIR and OMOP schemas to identify mapping opportunities and conflicts.",
      },
      {
        title: "Mapping Configuration",
        description:
          "Configure bidirectional mappings using our visual interface with support for custom transformations.",
      },
      {
        title: "Validation Testing",
        description:
          "Run comprehensive validation tests to ensure data integrity across both formats.",
      },
      {
        title: "Production Deployment",
        description:
          "Deploy with monitoring, alerting, and automatic rollback capabilities.",
      },
    ],
    implementation: "ETL Pipeline",
    timeline: "3-6 weeks",
    compliance: "HIPAA, 21 CFR Part 11",
    related: [
      { title: "EHR → AI pipeline", slug: "ehr-to-ai" },
      { title: "Agentic charting", slug: "agentic-charting" },
    ],
  },
  "agentic-charting": {
    title: "Agentic charting",
    subtitle: "LLM-generated SOAP notes inside Epic",
    icon: "📋",
    description:
      "AI-powered clinical documentation that integrates directly into your Epic workflow.",
    overview:
      "Transform clinical documentation with AI agents that generate accurate, compliant SOAP notes directly within Epic. Our solution learns from your documentation patterns while ensuring clinical accuracy and regulatory compliance.",
    benefits: [
      "Native Epic integration with zero workflow disruption",
      "AI-generated SOAP notes from voice or text input",
      "Provider review and approval workflow",
      "Continuous learning from provider feedback",
      "Full audit trail for regulatory compliance",
    ],
    process: [
      {
        title: "Epic Integration",
        description:
          "Deploy our SmartForm or activity within your Epic environment with proper security configurations.",
      },
      {
        title: "AI Training",
        description:
          "Train our models on your documentation patterns while maintaining patient privacy.",
      },
      {
        title: "Provider Onboarding",
        description:
          "Train your clinical staff on the new workflow with hands-on support and documentation.",
      },
      {
        title: "Production Rollout",
        description:
          "Gradually roll out to departments with monitoring, feedback collection, and continuous improvement.",
      },
    ],
    implementation: "Epic SmartForm",
    timeline: "6-12 weeks",
    compliance: "HIPAA, Joint Commission",
    related: [
      { title: "EHR → AI pipeline", slug: "ehr-to-ai" },
      { title: "FHIR ↔ OMOP mapping", slug: "fhir-omop" },
    ],
  },
};

export async function load({ params }) {
  const solution = solutions[params.slug as keyof typeof solutions];

  if (!solution) {
    throw error(404, `Solution "${params.slug}" not found`);
  }

  return {
    solution,
  };
}
