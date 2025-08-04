<script>
  import Line from "$lib/components/Line.svelte";
  import { ArrowUpRightFromSquareOutline, MugHotOutline } from "flowbite-svelte-icons";
  import Typewriter from "$lib/components/Typewriter.svelte";
</script>

<svelte:head>
  <title>Stoa Medical</title>
  <meta
    name="description"
    content="We're building the future of EHR integrations with AI and human-centric software."
  />
</svelte:head>

<div class="max-w-4xl mx-auto">
  <h1 class="text-center">
    We're building the future of EHRs with AI integrations and user-centric
    software <br/> for <Typewriter
    texts={["patients", "providers", "health systems", "you"]}
    typeSpeed={80}
    deleteSpeed={80}
    repeat={0}
  />.
  </h1>

  <h3 class="text-center">
    You've been there. Waiting months for simple EHR feeds and every integration
    feels slow.
  </h3>

  <h3 class="text-center">
    We're writing the playbook for AI-powered EHR integrations.
    <br/>
    To cut implementation time and provider pain by 10x.
  </h3>

  <h2 class="text-center">About Stoa Medical</h2>


  <p>
    We're building technology that empowers patients, providers, and people
    within organizations to make better decisions and improve outcomes.
  </p>
  <p>
    By combining data, design, and engineering excellence, we can create a new
    model of care that is more personalized, proactive, and user-centric.
  </p>
  <p>
    Right now, we're bootstrapping — please reach out if you'd like to
    connect!
  </p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center pb-12">
    <button class="flex flex-row gap-1 justify-center">Get in touch<MugHotOutline /></button>
    <button class="flex flex-row gap-1 justify-center">Join the waitlist<ArrowUpRightFromSquareOutline /></button>
  </div>
</div>
