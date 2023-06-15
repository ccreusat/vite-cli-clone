import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import chalk from "chalk";

const cwd = process.cwd();
/* fs.readFile(
  "/Users/ccre/Developer/lab/git-cli/test/vite-project/package.json",
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  }
); */

async function readFile(folderName, fileName) {
  try {
    const data = await fs.readFile(`${cwd}/${folderName}/${fileName}`, {
      encoding: "utf8",
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

async function writeFile(folderName, fileName, content) {
  try {
    await fs.writeFile(`${cwd}/${folderName}/${fileName}`, content);
  } catch (err) {
    console.log(err);
  }
}

async function isFolderExists(folderName) {
  try {
    const result = await existsSync(`${cwd}/${folderName}`);
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function createFolder(name) {
  const exist = await isFolderExists(name);
  try {
    if (!exist) {
      await fs.mkdir(`${cwd}/${name}`);
    } else {
      console.log(chalk.red("Folder already exists"));
    }
  } catch (err) {
    console.error(err);
  }
}

async function readFolder(folderName) {
  const folderPath = `${cwd}/${folderName}`;

  try {
    const result = await fs.readdir(folderPath);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

async function removeFolder(folderName) {
  const folderPath = `${cwd}/${folderName}`;

  try {
    await fs.rm(folderPath, { recursive: true });
    console.log(`${folderName} is deleted!`);
  } catch (error) {
    console.log(error);
  }
}

async function renameFolder(folderName, newName) {
  const folderPath = `${cwd}/${folderName}`;

  try {
    await fs.rename(folderPath, newName);
  } catch (error) {
    console.log(error);
  }
}

readFile("vite-project", "app.vue");
