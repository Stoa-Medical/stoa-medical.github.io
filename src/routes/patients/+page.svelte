<script>
  import ActionButtons from "$lib/components/ActionButtons.svelte";
  const title = "For Patients - Stoa Medical";
  const description = "Take control of your healthcare journey with technology that actually works for you, not against you.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<div class="max-w-4xl mx-auto px-6 py-12">
  <h1 class="text-center mb-12">Your Health Story Deserves Better</h1>
  
  <div class="space-y-4 mb-12 text-center">
    <p class="text-xl leading-relaxed">
      You're not just a patient ID or a collection of test results. You're a person with a unique health journey - and it's time technology treated you that way.
    </p>
  </div>

  <h2 class="text-left mt-12 mb-8">I Hear Your Frustration</h2>

  <div class="space-y-4 mb-12">
    <p class="leading-relaxed">
      If you've ever felt invisible in your own healthcare journey, you're not alone. Every day, I hear from patients who struggle with:
    </p>
    
    <ul class="space-y-3 ml-6">
      <li class="leading-relaxed">• Medical records scattered across a dozen portals that don't talk to each other</li>
      <li class="leading-relaxed">• Repeating your history to every new provider because "the system doesn't have that"</li>
      <li class="leading-relaxed">• Managing a loved one's care without access to the information you need</li>
      <li class="leading-relaxed">• Technology that feels like another barrier between you and your care team</li>
    </ul>
    
    <p class="leading-relaxed font-semibold">
      This isn't how healthcare should feel. And it doesn't have to be this way.
    </p>
  </div>

  <h2 class="text-left mt-12 mb-8">Imagine Healthcare That Works For You</h2>

  <div class="bg-gray-50 rounded-lg p-6 mb-12">
    <p class="leading-relaxed mb-4"><strong>What if...</strong></p>
    <ul class="space-y-2">
      <li class="leading-relaxed">• All your health information lived in one place that YOU control</li>
      <li class="leading-relaxed">• New doctors could instantly understand your complete health journey</li>
      <li class="leading-relaxed">• Your care team had more time to listen because the technology actually helped</li>
      <li class="leading-relaxed">• Healthcare technology felt as intuitive as the apps you use every day</li>
    </ul>
  </div>

  <div class="space-y-4 mb-12">
    <p class="leading-relaxed">
      This isn't a pipe dream. It's what I'm building at Stoa Medical - starting with understanding exactly what would make YOUR healthcare experience better.
    </p>
    
    <p class="leading-relaxed">
      I've spent years inside the healthcare technology machine at Epic and Canvas Medical. I've seen why things are broken, and more importantly, I know how to fix them. But here's what makes me different: <strong>I'm building what you tell me you need.</strong>
    </p>
  </div>

  <div class="rounded-lg p-8 mt-16 mb-12 text-center">
    <h2 class="mb-8">Help Me Build Healthcare That Works For You</h2>
    
    <p class="leading-relaxed mb-8">
      I'm looking for patients and caregivers ready to share their stories and shape the future of healthcare technology. Your experiences - the good, the bad, and the frustrating - will directly influence what I build.
    </p>
    
    <p class="font-semibold mb-8">
      This is your chance to be heard and to ensure healthcare technology actually serves patients first.
    </p>
  </div>

  <div class="text-center mb-8">
    <p class="text-lg leading-relaxed">
      Ready to take control of your health story? Let's start the conversation.
    </p>
  </div>

  <ActionButtons />
  
  <div class="text-center mt-12">
    <p class="text-sm text-gray-600 italic">
      Healthcare should be personal, not institutional. Technology should connect us to our care, not create barriers to it.
    </p>
  </div>
</div>