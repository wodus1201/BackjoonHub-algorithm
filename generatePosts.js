const fs = require("fs");
const path = require("path");

const baseDir = "BackjoonHub-algorithm/node.js/백준/Bronze"; // 문제 폴더 경로
const postsDir = "wodus1201.github.io/_posts/학습기록"; // 깃허브 페이지 포스트 경로

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

function createMarkdownForFolder(folderName) {
  const folderPath = path.join(baseDir, folderName);
  const postDate = formatDate(new Date());
  const sanitizedFolderName = folderName.replace(/\s+/g, "-");
  const postFileName = `${postDate}-${sanitizedFolderName}.md`;
  const postFilePath = path.join(postsDir, postFileName);

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
