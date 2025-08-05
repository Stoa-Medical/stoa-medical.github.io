<script>
  import ActionButtons from "$lib/components/ActionButtons.svelte";
  const title = "For Providers - Stoa Medical";
  const description = "Technology that respects your time and expertise. Tools that help you practice medicine, not fight with computers.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<div class="max-w-4xl mx-auto px-6 py-12">
  <h1 class="text-center mb-12">Technology That Respects Your Time and Expertise</h1>
  
  <div class="space-y-4 mb-12 text-center">
    <p class="text-xl leading-relaxed">
      You became a clinician to heal, not to fight with computers. It's time for tech that actually helps you practice medicine.
    </p>
  </div>

  <h2 class="text-left mt-12 mb-8">I Know You're Exhausted</h2>

  <div class="space-y-4 mb-12">
    <p class="leading-relaxed">
      Let me guess:
    </p>
    
    <ul class="space-y-3 ml-6">
      <li class="leading-relaxed">• You spend 2+ hours on documentation for every hour with patients</li>
      <li class="leading-relaxed">• Your EHR feels designed by someone who's never seen a patient</li>
      <li class="leading-relaxed">• Alert fatigue has you clicking through warnings you should read</li>
      <li class="leading-relaxed">• You dream of having time to actually connect with your patients again</li>
    </ul>
    
    <p class="leading-relaxed font-semibold">
      You're not asking for much—just tools that don't actively fight against you.
    </p>
  </div>

  <h2 class="text-left mt-12 mb-8">The Problem Isn't You</h2>

  <div class="space-y-4 mb-12">
    <p class="leading-relaxed">
      I've spent years inside Epic, Canvas Medical, and teaching at Stanford. I've watched brilliant clinicians waste their expertise battling systems that should be helping them.
    </p>
    
    <p class="leading-relaxed">
      Here's what I learned: <strong>Healthcare software is built for administrators and billers, not for the people actually delivering care.</strong>
    </p>
  </div>

  <h2 class="text-left mt-12 mb-8">What If Technology Actually Supported Your Practice?</h2>

  <div class="bg-gray-50 rounded-lg p-6 mb-12">
    <p class="leading-relaxed mb-4"><strong>Imagine systems that:</strong></p>
    <ul class="space-y-2">
      <li class="leading-relaxed">• Remember your workflows and adapt to how YOU practice</li>
      <li class="leading-relaxed">• Surface relevant information without hunting through 47 tabs</li>
      <li class="leading-relaxed">• Let you document naturally while maintaining eye contact</li>
      <li class="leading-relaxed">• Give you back time to do what you trained for: caring for people</li>
    </ul>
  </div>

  <div class="space-y-4 mb-12">
    <p class="leading-relaxed">
      This isn't fantasy. It's what I'm building at Stoa Medical.
    </p>
    
    <p class="leading-relaxed">
      I'm not another vendor with promises. I'm a solo founder who has seen the problem from inside the EHR giants, understands both technical and clinical perspectives, and can move fast without corporate bureaucracy.
    </p>
    
    <p class="leading-relaxed">
      <strong>I measure success by how many hours I give back to you, not by features in a demo.</strong>
    </p>
  </div>

  <div class="rounded-lg p-8 mt-16 mb-12 text-center">
    <h2 class="mb-8">Your Expertise Should Shape The Tools You Use</h2>
    
    <p class="leading-relaxed mb-8">
      I'm looking for clinicians ready to move beyond accepting broken systems. Whether you're drowning in documentation, missing critical referral information, or just tired of technology that slows you down—your insights will directly shape what I build.
    </p>
    
    <p class="font-semibold mb-8">
      No focus groups, no middlemen—just honest conversations about what would actually make your day better.
    </p>
  </div>

  <div class="text-center mb-8">
    <p class="text-lg leading-relaxed">
      You didn't spend years in training to become a data entry clerk. Let's build technology that remembers that.
    </p>
  </div>

  <ActionButtons />
  
  <div class="text-center mt-12">
    <p class="text-sm text-gray-600 italic">
      Still skeptical? I get it. You've been burned before. Start small—just tell me about one thing that drives you crazy every day. Let's fix that first.
    </p>
  </div>
</div>