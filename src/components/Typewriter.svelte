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
    }
    run();
    return () => { cancelled = true; };
  });
</script>

<div class="space-y-6 mb-8">
  <p class="whitespace-pre-wrap">
    <span>{p1Text}</span>{#if typingPhase === 1}<span class="blinking-cursor"></span>{/if}
  </p>
  {#if typingPhase >= 2}<p class="whitespace-pre-wrap"><span>{p2Text}</span>{#if typingPhase === 2}<span class="blinking-cursor"></span>{/if}{#if typingPhase >= 3}<a href="https://stellaralgo.com" target="_blank" rel="noopener noreferrer" class="!no-underline"><span>{p2Link}</span>{#if typingPhase === 3}<span class="blinking-cursor"></span>{/if}</a>{/if}</p>{/if}
  {#if typingPhase >= 4}<p class="whitespace-pre-wrap"><span>{p3Text}</span>{#if typingPhase === 4}<span class="blinking-cursor"></span>{/if}{#if typingPhase >= 5}<a href={experienceHref} class="!no-underline"><span>{p3Link}</span>{#if typingPhase === 5}<span class="blinking-cursor"></span>{/if}</a>{/if}</p>{/if}
  {#if typingPhase >= 6}<p class="whitespace-pre-wrap mb-0"><span>{p4Text}</span>{#if typingPhase === 6}<span class="blinking-cursor"></span>{/if}{#if typingPhase >= 7}<a href={stackHref} class="!no-underline"><span>{p4Link}</span>{#if typingPhase === 7}<span class="blinking-cursor"></span>{/if}</a>{/if}</p>{/if}
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

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
</style>
