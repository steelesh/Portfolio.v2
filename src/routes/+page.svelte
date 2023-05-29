<script>
  import Darkmode from "$lib/components/darkmode.svelte";
  import { Timeline, TimelineItem, Button } from "flowbite-svelte";

  let staggerCount = 1;

  const animate = (element) => {
    element.style.setProperty("--stagger", staggerCount++);
  };
</script>

<section>
  <header class="flex items-center mb-12">
    <h1 class="tracking-wide text-2xl">Steele Shreve</h1>
    <Darkmode />
  </header>
  <p data-animate use:animate>
    Working on crafting polished & user-friendly web experiences. Intern at
    <a href="https://183degrees.com" class="link" target="_blank">183°</a>.
  </p>
  <br />
  <p data-animate use:animate>
    Information Technology student attending the University of Cincinnati.
    Specialized in front-end web development & design. May 2025 exp. graduation.
  </p>
  <br />
  <p data-animate use:animate>
    View my 2023
    <a href="/resume/steele-resume2023.pdf" target="_blank" class="link"
      >resume</a
    >.
  </p>
</section>

<section>
  <h1 class="tracking-wide my-14 text-xl" data-animate use:animate>
    Developer Experience
  </h1>
  <div class="timeline" data-animate use:animate>
    <Timeline>
      <TimelineItem title="Intern, 183°" date="May 2023-PRESENT">
        <p class="mb-4 mt-2">
          — Worked alongside an experienced developer to create responsive web
          pages for various companies.
          <br />
          — Developed a long-term vision for career & goals.
        </p>
        <a href="183">
          <Button color="primary"
            >Learn more<svg
              class="ml-2 w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              /></svg
            ></Button
          >
        </a>
      </TimelineItem>
      <TimelineItem title="EEP / upskilling" date="May-August 2022">
        <p class="mb-4 mt-2">
          — Logged a total of 320 hours of technical upskilling through online
          courses and side projects.
          <br />
          — Met regularly with a mentor to discuss career goals and progress.
          <br />
          — Networked with industry professionals to gain insight into the IT field.
        </p>
      </TimelineItem>
    </Timeline>
  </div>
</section>

<section>
  <h1 class="tracking-wide my-14 text-xl" data-animate use:animate>
    Side Projects
  </h1>
  <div class="card-container flex items-center" data-animate use:animate>
    <div
      class="card rounded-md w-full dark:bg-darkmode-bg-accent bg-lightmode-bg-accent p-4"
    >
      <h2 class="text-lg mb-4">AltruCode</h2>
      <p class="text-sm">
        Exclusive web platform designed for University of Cincinnati developers
        to showcase their coding projects and connect with like-minded
        developers.
      </p>
      <div class="card-footer mt-8 flex flex-col gap-2 text-xs">
        <div class="demo">
          <i class="fa-solid fa-desktop w-4" />
          <a href="https://altrucode.app/" target="_blank" class="link ml-2"
            >Live demo</a
          >
        </div>
        <div class="repo">
          <i class="fa-solid fa-code w-4" />
          <a
            href="https://www.github.com/steelesh/IdeaStorm"
            target="_blank"
            class="link ml-2">Source code</a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="card-container flex items-center mt-8" data-animate use:animate>
    <div
      class="card rounded-md w-full dark:bg-darkmode-bg-accent bg-lightmode-bg-accent p-4"
    >
      <h2 class="text-lg mb-4">IdeaStorm</h2>
      <p class="text-sm">
        Mobile android application that presents users with activities that they
        can do, using an external api.
      </p>
      <div class="card-footer mt-8 text-xs">
        <div class="repo">
          <i class="fa-solid fa-code w-4" />
          <a
            href="https://www.github.com/steelesh/IdeaStorm"
            target="_blank"
            class="link ml-2">Source code</a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="card-container flex items-center mt-8" data-animate use:animate>
    <div
      class="card rounded-md w-full dark:bg-darkmode-bg-accent bg-lightmode-bg-accent p-4"
    >
      <h2 class="text-lg mb-4">100</h2>
      <p class="text-sm">
        One hundred days of notes & mini projects to explore and learn to code
        in JavaScript.
      </p>
      <div class="card-footer mt-8 flex flex-col gap-2 text-xs">
        <div class="demo">
          <i class="fa-solid fa-desktop w-4" />
          <a href="https://100.steelesh.dev" target="_blank" class="link ml-2"
            >Live demo</a
          >
        </div>
        <div class="repo">
          <i class="fa-solid fa-code w-4" />
          <a
            href="https://www.github.com/steelesh/IdeaStorm"
            target="_blank"
            class="link ml-2">Source code</a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="card-container flex items-center mt-8" data-animate use:animate>
    <div
      class="card rounded-md w-full dark:bg-darkmode-bg-accent bg-lightmode-bg-accent p-4"
    >
      <h2 class="text-lg mb-4">Library</h2>
      <p class="text-sm">
        Web Application to showcase our team members' favorite books. Database
        integration w/ CRUD functionality.
      </p>
      <div class="card-footer mt-8 text-xs">
        <div class="repo">
          <i class="fa-solid fa-code w-4" />
          <a
            href="https://www.github.com/steelesh/IdeaStorm"
            target="_blank"
            class="link ml-2">Source code</a
          >
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <h1
    class="tracking-wide my-14 text-xl"
    style="--stagger:6"
    data-animate
    use:animate
  >
    Connect
  </h1>
  <p style="--stagger:7" data-animate use:animate>
    Feel free to connect with me on <a
      href="https://www.linkedin.com/in/steelesh/"
      class="link"
      target="_blank">LinkedIn <i class="fa-brands fa-linkedin" /></a
    >
    and check out some of the code I've written on
    <a href="https://www.github.com/steelesh" class="link" target="_blank"
      >GitHub <i class="fa-brands fa-github" /></a
    >.
  </p>
  <br />
  <p style="--stagger:8" data-animate use:animate>
    Reach me at <a href="mailto:hello@steelesh.dev" target="_blank" class="link"
      >hello@steelesh.dev</a
    >
  </p>
</section>

<style lang="postcss">
  h1 {
    font-family: var(--font-heading);
  }
  p {
    font-weight: 300;
    @apply leading-7;
  }
</style>
