import { opendir } from "node:fs/promises";

async function isEmptyDir({ path }) {
  try {
    const directory = await opendir(path);
    const entry = await directory.read();
    await directory.close();

    return entry === null;
  } catch (error) {
    /* console.log(
      `Target directory ${name} is not empty. Remove existing files and continue?`
    ); */
    return false;
  }
}

async function isFolderExists(name) {
  try {
    if (!fs.existsSync(name)) {
      fs.mkdirSync(name);
    } else {
      console.log("Do you want to continue with this folder?");
    }
  } catch (err) {
    console.error(err);
  }
}

export { isEmptyDir, isFolderExists };
