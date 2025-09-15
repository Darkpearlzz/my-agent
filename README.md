# My Agent

A modular AI-powered code review agent that automates code change analysis, commit message generation, and Markdown documentation creation.

## Features

- **Git File Change Detection:**  
  Retrieves and summarizes file changes in a specified directory using Git.

- **Commit Message Generation:**  
  Automatically generates conventional commit messages from code change summaries.

- **Markdown File Generation:**  
  Creates Markdown files from provided titles and content, useful for changelogs, reports, or documentation.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [bun](https://bun.sh/) (if used in your workflow)
- Git installed and accessible in your environment

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/my-agent.git
   cd my-agent
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   bun install
   ```
   This project was created using `bun init` in bun v1.2.22. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

### Usage

Update the prompt in `index.ts` to specify the directory and review instructions.  
Run the agent:

```sh
bun index.ts
# or
node index.js
```

The agent will:

- Review code changes in the specified directory
- Suggest improvements file by file
- Generate commit messages and Markdown documentation as needed

### Tools

- **getFileChangesInDirectoryTool:**  
  Retrieves code changes in a given directory.

- **generateCommitMessageTool:**  
  Generates commit messages from code change summaries.

- **generateMarkdownFileTool:**  
  Creates Markdown files from provided content.

### Configuration

- Edit `prompts.ts` to customize the system prompt.
- Add or modify tools in `tools.ts` as needed.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
