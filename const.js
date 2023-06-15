import chalk from "chalk";

const FRAMEWORKS = [
  {
    name: chalk.yellow("Vanilla"),
    value: "vanilla",
  },
  {
    name: chalk.green("Vue"),
    value: "vue",
  },
  {
    name: chalk.blue("React"),
    value: "react",
  },
  {
    name: chalk.magenta("Preact"),
    value: "preact",
  },
  {
    name: chalk.red("Lit"),
    value: "lit",
  },
  {
    name: chalk.red("Svelte"),
    value: "svelte",
  },
  {
    name: chalk.magenta("Qwik"),
    value: "qwik",
  },
  {
    name: chalk.blue("Solid"),
    value: "solid",
  },
];

const VARIANTS = {
  vanilla: [
    {
      name: chalk.yellow("JavaScript"),
      value: "vanilla",
    },
    {
      name: chalk.blue("TypeScript"),
      value: "vanilla-ts",
    },
  ],
  vue: [
    {
      name: chalk.yellow("JavaScript"),
      value: "vue",
    },
    {
      name: chalk.blue("TypeScript"),
      value: "vue-ts",
    },
    {
      name: chalk.green("Nuxt"),
      value: "nuxt",
    },
  ],
  react: [
    {
      name: chalk.yellow("JavaScript"),
      value: "react",
    },
    {
      name: chalk.blue("TypeScript"),
      value: "react-ts",
    },
    {
      name: chalk.yellow("JavaScript + SWC"),
      value: "react-swc",
    },
    {
      name: chalk.blue("TypeScript + SWC"),
      value: "react-ts-swc",
    },
  ],
  preact: [
    {
      name: chalk.yellow("JavaScript"),
      value: "preact",
    },
    {
      name: chalk.blue("TypeScript"),
      value: "preact-ts",
    },
  ],
  lit: [
    {
      name: chalk.yellow("JavaScript"),
      value: "lit",
    },
    {
      name: chalk.blue("TypeScript"),
      value: "lit-ts",
    },
  ],
  svelte: [
    {
      name: chalk.yellow("JavaScript"),
      value: "svelte",
    },
    {
      name: chalk.blue("TypeScript"),
      value: "svelte-ts",
    },
  ],
  solid: [
    {
      name: chalk.yellow("JavaScript"),
      value: "solid",
    },
    {
      name: chalk.blue("TypeScript"),
      value: "solid-ts",
    },
  ],
};

export { FRAMEWORKS, VARIANTS };
