const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "node.js/백준/Bronze");
const postsDir = path.join(__dirname, "../wodus1201.github.io/_posts/학습기록");

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

function createMarkdownForFolder(folderName) {
  // 폴더명 내 넓은 공백 및 특수 공백을 일반 하이픈으로 교체
  const sanitizedFolderName = folderName.replace(/[\s\u2000-\u200A\u202F\u205F\u3000]+/g, "-");
  const folderPath = path.join(baseDir, folderName);
  const postDate = formatDate(new Date());
  const postFileName = `${postDate}-${sanitizedFolderName}.md`;
  const postFilePath = path.join(postsDir, postFileName);

  console.log(`Looking for folder: ${folderPath}`);

  if (!fs.existsSync(folderPath)) {
    console.error(`Folder ${folderPath} not found`);
    return;
  }

  // README.md 읽기
  const readmePath = path.join(folderPath, "README.md");
  let readmeContent = "";
  if (fs.existsSync(readmePath)) {
    readmeContent = fs.readFileSync(readmePath, "utf-8");
  }

  // js 파일 목록과 내용 읽기
  const files = fs.readdirSync(folderPath);
  const jsFiles = files.filter((f) => f.endsWith(".js"));

  let jsContents = "";
  jsFiles.forEach((jsFile) => {
    const content = fs.readFileSync(path.join(folderPath, jsFile), "utf-8");
    jsContents += `\n\n## ${jsFile}\n\n\`\`\`javascript\n${content}\n\`\`\`\n`;
  });

  // 마크다운 템플릿 작성
  const mdContent = `---
categories: [학습기록]
tags: [study, baekjun]
---

${readmeContent}

${jsContents}
`;

  fs.writeFileSync(postFilePath, mdContent);
  console.log(`Created post: ${postFileName}`);
}

// 새 폴더 이름 인자로 받아 실행
const newFolderName = process.argv[2];
if (!newFolderName) {
  console.error("Usage: node generatePosts.js <folderName>");
  process.exit(1);
}

createMarkdownForFolder(newFolderName);
