<script>
  import Line from "$lib/components/Line.svelte";
  import LightbulbIcon from "$lib/icons/LightbulbIcon.svelte";
  import { ArrowUpRightFromSquareOutline, MugHotOutline } from "flowbite-svelte-icons";
</script>

<svelte:head>
  <title>Stoa Medical</title>
  <meta
    name="description"
    content="We're building the future of EHR integrations with AI and human-centric software."
  />
</svelte:head>

<h1 class="text-center">
  We're building the future of EHRs with AI integrations and user-centric
  software.
</h1>
<div class="flex flex-col sm:flex-row gap-4 justify-left pb-12">
  <button class="flex flex-row gap-1">Get in touch<MugHotOutline /></button>
  <button class="flex flex-row gap-1">Join the waitlist<ArrowUpRightFromSquareOutline /></button>
</div>

<!-- Vertical line between sections -->
<div style="position: relative; height: 4rem;">
  <Line x="50%" />
</div>

<h3 class="text-center">
  You've been there. Waiting months for simple EHR feeds and every integration
  feels slow.
</h3>

<!-- Another vertical line -->
<div style="position: relative; height: 3rem;">
  <Line x="50%" />
</div>

<h3 class="text-center">
  We're writing the playbook for AI-powered EHR integrations.
  <br/>
  To cut implementation time and provider pain by 10x.
</h3>

<!-- Another vertical line -->
<div style="position: relative; height: 3rem;">
  <Line x="50%" />
</div>

<h2>The Modern alternative to legacy healthcare integrations</h2>

<div class="flex flex-col md:flex-row gap-8 my-8">
  <div class="flex-1">
    <h3>AI-Native Integration Engine for Health Systems</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
  <div class="flex-1">
    <h3>AI-native clinical data handoff app for providers</h3>
    <p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat.
    </p>
  </div>
  <div class="flex-1">
    <h3>AI-native PHR app for patients</h3>
    <p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat.
    </p>
  </div>
</div>

<!-- Vertical line before About section -->
<div style="position: relative; height: 4rem;">
  <Line x="50%" />
</div>

<h2>About Stoa Medical</h2>

<div class="flex flex-col md:flex-row gap-8 my-8">
  <div class="flex-1">
    <h3>Our Mission</h3>
    <p>
      We're building technology that empowers patients, providers, and people
      within organizations to make better decisions and improve outcomes.
    </p>
    <p>
      By combining data, design, and engineering excellence, we can create a new
      model of care that is more personalized, proactive, and user-centric.
    </p>
  </div>
  <div class="flex-1">
    <h3>Get Started</h3>
    <p>
      Right now, we're bootstrapping — please reach out if you'd like to
      connect!
    </p>
    <ul>
      <li>Learn more about our vision</li>
      <li>Explore our products</li>
      <li>Join our journey</li>
    </ul>
  </div>
</div>
