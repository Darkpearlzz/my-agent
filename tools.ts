import { z } from "zod";
import { tool } from "ai";
import { simpleGit } from "simple-git";

const fileChange = z.object({
  rootDir: z.string().min(1).describe("The root directory"),
});

type FileChange = z.infer<typeof fileChange>;

const excludeFiles = ["dist", "bun.lock"];

async function getFileChangesInDirectory({ rootDir }: FileChange) {
  const git = simpleGit(rootDir);
  const summary = await git.diffSummary();
  const diffs: { file: string; diff: string }[] = [];

  for (const file of summary.files) {
    if (excludeFiles.includes(file.file)) continue;
    const diff = await git.diff(["--", file.file]);
    diffs.push({ file: file.file, diff });
  }

  return diffs;
}

export const getFileChangesInDirectoryTool = tool({
  description: "Gets the code changes made in given directory",
  inputSchema: fileChange,
  execute: getFileChangesInDirectory,
});

// Commit Message Generation Tool
const commitMessageInput = z.object({
  changes: z.string().min(1).describe("Summary or list of code changes"),
});

type CommitMessageInput = z.infer<typeof commitMessageInput>;

async function generateCommitMessage({ changes }: CommitMessageInput) {
  // Placeholder: Replace with LLM or more advanced logic as needed
  const firstLine = changes.split("\n")[0] ?? "";
  return `feat: ${firstLine.slice(0, 50)}...`;
}

export const generateCommitMessageTool = tool({
  description: "Generates an ideal commit message from code changes summary",
  inputSchema: commitMessageInput,
  execute: generateCommitMessage,
});

// Markdown File Generation Tool
const markdownFileInput = z.object({
  title: z.string().min(1).describe("Title of the markdown file"),
  content: z
    .string()
    .min(1)
    .describe("Content to include in the markdown file"),
});

type MarkdownFileInput = z.infer<typeof markdownFileInput>;

async function generateMarkdownFile({ title, content }: MarkdownFileInput) {
  return `# ${title}\n\n${content}`;
}

export const generateMarkdownFileTool = tool({
  description: "Generates a Markdown file from provided title and content",
  inputSchema: markdownFileInput,
  execute: generateMarkdownFile,
});
