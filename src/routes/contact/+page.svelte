<script>
  import ActionButtons from "$lib/components/ActionButtons.svelte";
  const title = "Contact - Stoa Medical";
  const description = "Get in touch to discuss how we can build healthcare technology that actually works for everyone.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<div class="max-w-4xl mx-auto px-6 py-12">
  <h1 class="text-center mb-12">Let's Build Healthcare That Actually Works</h1>
  
  <div class="space-y-4 mb-12 text-center">
    <p class="text-xl leading-relaxed">
      Whether you're a patient tired of broken systems, a clinician fighting technology, or an organization ready for real innovation—I'm here to help.
    </p>
  </div>

  <h2 class="text-left mt-12 mb-8">Healthcare Technology Should Feel Good</h2>

  <div class="space-y-4 mb-12">
    <p class="leading-relaxed">
      I'm Eric, and I'm building Stoa Medical because I believe:
    </p>
    
    <ul class="space-y-2 ml-6">
      <li class="leading-relaxed">• Patients deserve control over their health stories</li>
      <li class="leading-relaxed">• Clinicians should spend time healing, not clicking</li>
      <li class="leading-relaxed">• AI should amplify human connection, not replace it</li>
      <li class="leading-relaxed">• Good design can transform healthcare experiences</li>
    </ul>
  </div>

  <h2 class="text-left mt-12 mb-8">What I Do</h2>

  <div class="space-y-4 mb-12">
    <p class="leading-relaxed">
      I build technology that bridges the gap between what healthcare is and what it should be.
    </p>
  </div>

  <div class="bg-gray-50 rounded-lg p-6 mb-12">
    <p class="leading-relaxed mb-4"><strong>Current focus areas:</strong></p>
    <ul class="space-y-2">
      <li class="leading-relaxed">• Patient data ownership—your health story, in your control</li>
      <li class="leading-relaxed">• Clinical workflow tools—technology that respects your expertise</li>
      <li class="leading-relaxed">• AI integration—thoughtful automation that enhances care</li>
      <li class="leading-relaxed">• Interoperability solutions—making systems actually talk to each other</li>
    </ul>
  </div>

  <div class="rounded-lg p-8 mt-16 mb-12 text-center">
    <h2 class="mb-8">Let's Talk</h2>
    
    <p class="leading-relaxed mb-8">
      I'm looking for patients ready to share their stories, clinicians who know exactly what's broken, organizations seeking pragmatic innovation, and anyone who believes healthcare technology can and should be better.
    </p>
    
    <p class="font-semibold mb-8">
      Ready to build something that makes a real difference?
    </p>
  </div>

  <div class="text-center mb-8">
    <p class="text-lg leading-relaxed mb-6">
      Get in touch—let's start the conversation.
    </p>
  </div>

  <ActionButtons />
  
  <div class="text-center mt-12">
    <p class="text-sm text-gray-600 italic">
      "The future of healthcare isn't about the fanciest AI or the biggest vendor. It's about technology that remembers there's a human on both sides of the screen."
    </p>
  </div>
</div>