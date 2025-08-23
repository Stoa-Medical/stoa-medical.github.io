<script>
  let {
    texts = [],
    typeSpeed = 80,
    deleteSpeed = 80,
    repeat = 0,
    delay = 1000,
    blinkingCursor = true,
  } = $props();

  let displayText = $state("");
  let currentIndex = $state(0);
  let isDeleting = $state(false);
  let currentRepeat = $state(0);

  const linkMap = {
    patients: "/patients",
    you: "/contact",
    providers: "/providers",
    "health systems": "/organizations",
  };

  /**
   * @param {string} text
   */
  function createLinkElement(text) {
    // Check if the current text matches any of our link terms exactly
    const lowerText = text.toLowerCase();
    const href = /** @type {Record<string, string>} */ (linkMap)[lowerText];
    if (href) {
      return `<a href="${href}" class="typewriter-link">${text}</a>`;
    }

    // Check if the current text is a partial match that could become a link
    for (const [key, url] of Object.entries(linkMap)) {
      if (key.startsWith(lowerText) && lowerText.length > 0) {
        // If we're typing and this could become a link, wrap the current text in a link
        return `<a href="${url}" class="typewriter-link">${text}</a>`;
      }
    }

    return text;
  }

  function typewrite() {
    const currentText = texts[currentIndex] || "";

    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        displayText = currentText.slice(0, displayText.length + 1);
        setTimeout(typewrite, typeSpeed);
      } else {
        setTimeout(() => {
          isDeleting = true;
          typewrite();
        }, delay);
      }
    } else {
      if (displayText.length > 0) {
        displayText = displayText.slice(0, -1);
        setTimeout(typewrite, deleteSpeed);
      } else {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;

        if (currentIndex === 0) {
          currentRepeat++;
          if (repeat > 0 && currentRepeat >= repeat) {
            return;
          }
        }

        setTimeout(typewrite, typeSpeed);
      }
    }
  }

  $effect(() => {
    if (texts.length > 0) {
      const timeoutId = setTimeout(typewrite, 500);
      return () => clearTimeout(timeoutId);
    }
  });
</script>

<span class="typewriter-container">
  {@html createLinkElement(displayText)}<span
    class={blinkingCursor ? "cursor-blink" : ""}>|</span
  >
</span>

<style>
  .typewriter-container {
    display: inline-block;
  }

  :global(.typewriter-link) {
    text-decoration: underline;
  }

  :global(.typewriter-link:hover) {
    text-decoration: none;
  }

  .cursor-blink {
    animation: blink 1s ease-in-out infinite;
  }

  @keyframes blink {
    0%,
    50% {
      opacity: 1;
    }
    51%,
    100% {
      opacity: 0;
    }
  }
</style>
