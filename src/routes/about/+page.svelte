<script>
  import ActionButtons from "$lib/components/ActionButtons.svelte";
  const title = "About Stoa Medical";
  const description = "Learn about our mission to fix how healthcare works through technology that empowers patients and providers.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<div class="max-w-4xl mx-auto px-6 py-12">
  <h1 class="text-center mb-16">A Stoa for Healthcare</h1>

  <div class="space-y-4 mb-12">
    <p class="leading-relaxed">
      In ancient Athens, the Stoa was a covered walkway where philosophers gathered to teach, debate, and explore how to live better lives. It was a place of learning, public discourse, and practical wisdom - where complex ideas became accessible to all.
    </p>
    <p class="leading-relaxed">
      I'm building Stoa Medical to carry forward this tradition in healthcare - a modern place where patients, providers, and healthcare organizations can come together to learn, make better decisions, and improve outcomes.
    </p>
  </div>

  <h2 class="text-left mt-12 mb-8">My Mission</h2>

  <div class="space-y-4 mb-12">
    <p class="leading-relaxed">
      Healthcare's biggest problems aren't technical - they're human. I've watched patients lose control of their own health data, brilliant clinicians waste time fighting clunky systems instead of caring for people, and families manage "mom binders" that doctors never have time to read.
    </p>
    <p class="leading-relaxed">
      I'm building technology that fixes the invisible barriers preventing healthcare from feeling good. By treating data integration as collaborative art rather than technical plumbing, I'm creating tools where patients truly own their health story and clinicians love their computers again.
    </p>
  </div>

  <h2 class="text-left mt-12 mb-8">My Story</h2>

  <div class="space-y-4 mb-12">
    <p class="leading-relaxed">
      Like many healthcare innovations, Stoa Medical started with frustration. After working inside major EHR companies (Epic, Canvas Medical, 1upHealth) and watching brilliant clinicians struggle with systems that fight against them, I realized something: the problem isn't just technical - it's cultural.
    </p>
    <p class="leading-relaxed">
      Healthcare has accepted that technology should be painful. I disagree.
    </p>
    <p class="leading-relaxed">
      Through years of building integration systems, teaching health informatics at Stanford and Georgia Tech, and conducting research on everything from cryptographic protocols to clinical AI, I've learned that the best healthcare technology disappears into the background, letting human connection and healing take center stage.
    </p>
    <p class="leading-relaxed">
      Right now, I'm solo and bootstrapping - which means you'll work directly with me to shape solutions that actually solve your problems. No layers of management, no corporate bureaucracy, just someone who genuinely cares about fixing healthcare's technology mess.
    </p>
  </div>

  <h2 class="text-left mt-12 mb-8">Stoa's Philosophy</h2>

  <div class="space-y-8 mb-12">
    <div>
      <h3 class="font-bold text-lg mb-4">User-Centered Design</h3>
      <p class="leading-relaxed">
        Healthcare technology should serve the people who use it, not the other way around. Every interface, every workflow, and every decision I make starts with understanding real human needs - not what some committee thinks users should want.
      </p>
    </div>

    <div>
      <h3 class="font-bold text-lg mb-4">Evidence-Based Approach</h3>
      <p class="leading-relaxed">
        Like the ancient Stoics who grounded their philosophy in reason and observation, I build solutions on solid data and proven methodologies. Every feature is designed to improve measurable outcomes, not just look impressive in demos.
      </p>
    </div>

    <div>
      <h3 class="font-bold text-lg mb-4">Continuous Innovation</h3>
      <p class="leading-relaxed">
        Healthcare is constantly evolving, and so am I. I'm embracing new technologies (like AI coding tools that've 4x'd my development speed) while maintaining the reliability and trust that healthcare demands.
      </p>
    </div>
  </div>

  <h2 class="text-left mt-12 mb-8">Stoa's Technology</h2>

  <div class="space-y-4 mb-12">
    <p class="leading-relaxed">I build with tools that prioritize elegance and reliability:</p>
    <ul class="space-y-2 list-disc list-inside">
      <li class="leading-relaxed">Python and Rust for systems that scale without breaking</li>
      <li class="leading-relaxed">Modern web frameworks for interfaces that feel effortless</li>
      <li class="leading-relaxed">AI tools that augment human intelligence rather than replace it</li>
      <li class="leading-relaxed">Open standards (FHIR, OMOP) that break down data silos</li>
    </ul>
    <p class="leading-relaxed">
      My technical choices reflect my philosophy: powerful systems should feel simple, and complex problems deserve thoughtful solutions. Plus, working solo means I can move fast and actually ship things that work.
    </p>
  </div>

  <h2 class="text-left mt-12 mb-8">Let's Build Together</h2>

  <div class="space-y-4 mb-16">
    <p class="leading-relaxed">
      I'm looking for healthcare organizations ready to move beyond "that's just how things work" and toward "this is how things should work." Whether you're a health system tired of integration headaches, a startup needing bulletproof FHIR APIs, or a patient advocate dreaming of true data ownership - let's build the future together.
    </p>
    <p class="leading-relaxed">
      The best part about working with a solo founder? You get my full attention, direct communication, and solutions built specifically for your needs. No sales teams, no account managers, just me and my laptop solving your problems.
    </p>
    <p class="leading-relaxed">
      Ready to join this modern Stoa? Let's prove that healthcare technology can feel as good as it works.
    </p>
  </div>

  <ActionButtons />
</div>