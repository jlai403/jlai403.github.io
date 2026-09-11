<script>
  let {
    experienceHref = '/experience',
    stackHref = '/stack',
  } = $props();

  let p1Text = $state('');
  let p2Text = $state('');
  let p2Link = $state('');
  let p3Text = $state('');
  let p3Link = $state('');
  let p4Text = $state('');
  let p4Link = $state('');
  let typingPhase = $state(0);

  $effect(() => {
    function showFinal() {
      p1Text = "software developer, tinkerer and lifelong learner. passionate about emerging tech, product and solving customer problems.";
      p2Text = "leading engineering at ";
      p2Link = "stellaralgo";
      p3Text = "check out what I've done ";
      p3Link = "before";
      p4Text = "here are some of the ";
      p4Link = "tools I love to use";
      typingPhase = 8;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || sessionStorage.getItem('typewriter-done')) {
      showFinal();
      return;
    }

    const steps = [
      { text: "software developer, tinkerer and lifelong learner. passionate about emerging tech, product and solving customer problems.", phase: 1, delay: 200 },
      { text: "leading engineering at ", phase: 2 },
      { text: "stellaralgo", phase: 3 },
      { text: "check out what I've done ", phase: 4 },
      { text: "before", phase: 5, delay: 200 },
      { text: "here are some of the ", phase: 6 },
      { text: "tools I love to use", phase: 7 },
    ];

    let cancelled = false;

    async function run() {
      await new Promise(r => setTimeout(r, 400));
      for (const step of steps) {
        if (cancelled) return;
        typingPhase = step.phase;
        let accumulated = '';
        for (let i = 0; i <= step.text.length; i++) {
          if (cancelled) return;
          accumulated = step.text.slice(0, i);
          if (step.phase === 1) p1Text = accumulated;
          else if (step.phase === 2) p2Text = accumulated;
          else if (step.phase === 3) p2Link = accumulated;
          else if (step.phase === 4) p3Text = accumulated;
          else if (step.phase === 5) p3Link = accumulated;
          else if (step.phase === 6) p4Text = accumulated;
          else if (step.phase === 7) p4Link = accumulated;
          let currentSpeed = 35;
          if (i > 0) {
            const char = step.text[i - 1];
            if (char === '.' || char === '!' || char === '?') currentSpeed += 200;
            else if (char === ',') currentSpeed += 100;
            else currentSpeed += Math.random() * 30 - 15;
          }
          if (i < step.text.length) {
            await new Promise(r => setTimeout(r, Math.max(10, currentSpeed)));
          }
        }
        if (step.delay) await new Promise(r => setTimeout(r, step.delay));
      }
      typingPhase = 8;
      sessionStorage.setItem('typewriter-done', '1');
    }
    run();
    return () => { cancelled = true; };
  });
</script>

{#snippet typedLine({ text, textPhase, link, linkPhase, href, external = false, last = false })}
  <p class="whitespace-pre-wrap{last ? ' mb-0' : ''}"><span>{text}</span>{#if typingPhase === textPhase}<span class="blinking-cursor"></span>{/if}{#if linkPhase && typingPhase >= linkPhase}<a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} class="!no-underline"><span>{link}</span>{#if typingPhase === linkPhase}<span class="blinking-cursor"></span>{/if}</a>{/if}</p>
{/snippet}

<div class="space-y-6 mb-8">
  {@render typedLine({ text: p1Text, textPhase: 1 })}
  {#if typingPhase >= 2}
    {@render typedLine({ text: p2Text, textPhase: 2, link: p2Link, linkPhase: 3, href: 'https://stellaralgo.com', external: true })}
  {/if}
  {#if typingPhase >= 4}
    {@render typedLine({ text: p3Text, textPhase: 4, link: p3Link, linkPhase: 5, href: experienceHref })}
  {/if}
  {#if typingPhase >= 6}
    {@render typedLine({ text: p4Text, textPhase: 6, link: p4Link, linkPhase: 7, href: stackHref, last: true })}
  {/if}
</div>

{#if typingPhase >= 8}
  <div class="mb-4 opacity-20 text-text-primary">—</div>
  <div class="blinking-cursor"></div>
{/if}

<style>
  .blinking-cursor {
    display: inline-block;
    width: 1ch;
    height: 1.1em;
    margin-left: 2px;
    background-color: var(--color-text-primary);
    animation: blink 1s step-end infinite;
    vertical-align: -0.1em;
  }

  @media (prefers-reduced-motion: reduce) {
    .blinking-cursor {
      animation: none;
    }
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
</style>
