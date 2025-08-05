<script>
  import Typewriter from "$lib/components/Typewriter.svelte";
  import ActionButtons from "$lib/components/ActionButtons.svelte";
</script>

<svelte:head>
  <title>Stoa Medical</title>
  <meta
    name="description"
    content="We're building the future of EHR integrations with AI and human-centric software."
  />
</svelte:head>

<div class="max-w-4xl mx-auto px-6 py-12">
  <h1 class="text-center mb-16">
    We're building the future of EHRs with AI integrations and user-centric
    design <br/> for <Typewriter
    texts={["patients", "providers", "health systems", "you"]}
    typeSpeed={80}
    deleteSpeed={80}
    repeat={0}
    blinkingCursor={true}
  />.
  </h1>

  <h2 class="text-left mt-20 mb-10">What we believe to be true:</h2>

  <div class="space-y-10">
    <div>
      <h3 class="font-bold text-lg mb-4">PATIENTS</h3>
      <div class="space-y-2">
        <p class="leading-relaxed"><span class="font-medium">I.</span> Healthcare should serve your wellness, not the other way around.</p>
        <p class="leading-relaxed"><span class="font-medium">II.</span> Health is personal, and you should have a voice in what that means to you and your loved ones.</p>
        <p class="leading-relaxed"><span class="font-medium">III.</span> Your data belongs to you.</p>
        <p class="leading-relaxed"><span class="font-medium">IV.</span> Technology should enable community: a reminder that you're not alone in your health journey.</p>
      </div>
    </div>

    <div>
      <h3 class="font-bold text-lg mb-4">PROVIDERS</h3>
      <div class="space-y-2">
        <p><span class="font-medium">V.</span> You should love your computers, and it should be your choice on whether that's true or not.</p>
        <p><span class="font-medium">VI.</span> It should be simple to get the latest, most accurate data you need for your patients.</p>
        <p><span class="font-medium">VII.</span> You should be able to focus on your expression and practice of medicine.</p>
        <p><span class="font-medium">VIII.</span> Technology should augment the healing spirit of the medical community.</p>
      </div>
    </div>

    <div>
      <h3 class="font-bold text-lg mb-4">HEALTH SYSTEMS</h3>
      <div class="space-y-2">
        <p><span class="font-medium">IX.</span> Your IT systems should be best-in-class like in "regular tech": secure, robust, and competitive.</p>
        <p><span class="font-medium">X.</span> Learnings should be shared for the benefit of all: "infinite game" mindsets will win.</p>
        <p><span class="font-medium">XI.</span> Technology is a tool, and the focus should be on simplicity and effectiveness over novelty.</p>
        <p><span class="font-medium">XII.</span> Solutions should be elegant and personalizable without the need for unreasonable compromise.</p>
      </div>
    </div>

    <div>
      <h3 class="font-bold text-lg mb-4">SOCIETY</h3>
      <div class="space-y-2">
        <p><span class="font-medium">XIII.</span> Leveraging AI in safe, private, and user-centric ways will be essential for fostering wellness and human flourishing.</p>
      </div>
    </div>
  </div>

  <h2 class="text-left mt-20 mb-10">About Stoa Medical</h2>

  <div class="flex gap-8 items-start">
    <div class="flex-1 space-y-4">
      <p class="leading-relaxed">
        Stoa Medical is an early healthtech startup with the mission to fix how healthcare works by integrating biomedicine and wellness.
      </p>
      <p class="leading-relaxed">
        In the short-term, this means building AI-native integration tools and applications for healthcare consumers (patients, providers, and health systems).
      </p>
      <p class="leading-relaxed">
        Based on experiences working as an engineer across enterprises (Epic), academia (UCLA, Georgia Tech, Stanford), and startups (1upHealth, Canvas Medical): I'm building Stoa to serve patients, providers, and health systems with first-principles, AI-native software that I wish existed.
      </p>
      <p class="leading-relaxed">
        Right now, it's just me bootstrapping (solo founder + some help from friends & freelancers). Please reach out if you'd like to connect and be an early adopter!
      </p>
    </div>
    <div class="w-1/3 flex-shrink-0">
      <img src="/DBDS-ericpan1.jpg" alt="Eric S Pan from Stoa Medical" class="w-full rounded-xl" />
      <p class="text-center text-sm mt-2"><em><a href="https://www.linkedin.com/in/ericpan64/">Eric S Pan</a>, Engineer + Founder @ Stoa Medical</em></p>
    </div>
  </div>

  <p class="text-center mt-16 mb-8"><em>"If your choices are beautiful, so too will you be." - Epictetus</em></p>
  <ActionButtons />
</div>
