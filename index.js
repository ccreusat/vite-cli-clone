#!/usr/bin/env node

import inquirer from "inquirer";
import { Command } from "commander";
import InterruptedPrompt from "inquirer-interrupted-prompt";
import fs, { rm, existsSync, mkdirSync } from "node:fs";
import * as fsExtra from "fs-extra";

import { FRAMEWORKS, VARIANTS } from "./const.js";

// console.log(process.argv);
InterruptedPrompt.fromAll(inquirer);

const program = new Command();

const options = {};

const defaultFolder = "vite-project";
const cwd = process.cwd();

program
  .name("create-vite-clone")
  .version("1.0.0", "-v, --version", "output the current version")
  .description("CLI version");

if (process.argv[2] === undefined) {
  promptCLI();
} else {
  shortCLI();
}

function shortCLI() {
  program
    .argument("<project-name>", "name of your project")
    .action((action) => (options["name"] = action));

  program.requiredOption(
    "-t, --template <framework>",
    "name of the framework you want to use"
  );

  program.parse(process.argv);

  const programOpts = program.opts();

  if (options.name && existsSync(options.name)) {
    const questions = [];
    questions.push({
      type: "confirm",
      name: "overwrite",
      message:
        "Target directory is not empty. Remove existing files and continue?",
    });

    (async () => {
      try {
        const answers = await inquirer.prompt(questions);
        const dir = `${cwd}/${options.name}`;

        if (answers.overwrite) {
          rm(dir, { recursive: true, force: true }, (err) => {
            if (err) throw err;
          });
        }
      } catch (error) {
        if (error === InterruptedPrompt.EVENT_INTERRUPTED) {
          console.log("\n ❌ Operation cancelled");
        }
      }
    })();
  } else {
    mkdirSync(options.name);
  }
  if (programOpts.template !== undefined) {
    options["framework"] = programOpts.template.endsWith("-ts")
      ? programOpts.template.replace("-ts", "")
      : programOpts.template;
    options["variant"] = programOpts.template;
  }
}

function promptCLI() {
  const questions = [];
  questions.push({
    type: "input",
    name: "name",
    message: "Project name:",
    default: defaultFolder,
  });

  questions.push({
    type: "confirm",
    name: "overwrite",
    message:
      "Target directory is not empty. Remove existing files and continue?",
    when: ({ name }) => existsSync(name),
  });

  questions.push({
    type: "list",
    name: "framework",
    message: "Select a framework:",
    choices: FRAMEWORKS,
    when: async ({ name, overwrite }) => !existsSync(name) || overwrite,
  });

  questions.push({
    type: "list",
    name: "variant",
    message: "Select a variant:",
    choices: VARIANTS.vanilla,
    when: (answer) => answer.framework === "vanilla",
  });

  questions.push({
    type: "list",
    name: "variant",
    message: "Select a variant:",
    choices: VARIANTS.vue,
    when: (answer) => answer.framework === "vue",
  });

  questions.push({
    type: "list",
    name: "variant",
    message: "Select a variant:",
    choices: VARIANTS.react,
    when: (answer) => answer.framework === "react",
  });

  questions.push({
    type: "list",
    name: "variant",
    message: "Select a variant:",
    choices: VARIANTS.preact,
    when: (answer) => answer.framework === "preact",
  });

  questions.push({
    type: "list",
    name: "variant",
    message: "Select a variant:",
    choices: VARIANTS.lit,
    when: (answer) => answer.framework === "lit",
  });

  questions.push({
    type: "list",
    name: "variant",
    message: "Select a variant:",
    choices: VARIANTS.svelte,
    when: (answer) => answer.framework === "svelte",
  });

  questions.push({
    type: "list",
    name: "variant",
    message: "Select a variant:",
    choices: VARIANTS.solid,
    when: (answer) => answer.framework === "solid",
  });

  (async () => {
    try {
      const answers = await inquirer.prompt(questions);
      const dir = `${cwd}/${answers.name}`;
      fsExtra.emptyDirSync(dir);
      fs.cp(
        `../template-${answers.variant}`,
        `${cwd}/${answers.name}`,
        { recursive: true },
        function (err) {
          if (err) {
            console.log("An error occured while copying the folder.");
            return console.error(err);
          }
          console.log("Copy completed!");
        }
      );
    } catch (error) {
      if (error === InterruptedPrompt.EVENT_INTERRUPTED) {
        console.log("\n ❌ Operation cancelled");
      }
    }
  })();
}
