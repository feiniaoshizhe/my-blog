import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// 获取所有mdx文件
function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}
// 读取这些文件数据
function readMDXFile(filePath: fs.PathOrFileDescriptor) {
    let rawContent = fs.readFileSync(filePath, "utf-8");
    return matter(rawContent);
}
// 展示mdx数据和元数据
function getMDXData(dir: string) {
    let mdxFiles = getMDXFiles(dir);
    return mdxFiles.map((file) => {
        let { data: metaData, content } = readMDXFile(path.join(dir, file))
        // 将文件名赋值给slug
        let slug = path.basename(file, path.extname(file));
        return {
            metaData,
            slug,
            content,
        }
    })
}

export function getBlogPosts() {
    return getMDXData(path.join(process.cwd(), "src", "app", "blog", "contents"));
}

// 格式化时间
export function formatDate(date: string, includeRelative = false) {
    let currentDate = new Date();
    if (!date.includes("T")) {
        date = `${date}T00:00:00`;
    }

    let targetDate = new Date(date);

    let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
    let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
    let daysAgo = currentDate.getDate() - targetDate.getDate();

    let formattedDate = "";

    if (yearsAgo > 0) {
        formattedDate = `${yearsAgo}年前`
    }
    else if (monthsAgo > 0) {
        formattedDate = `${monthsAgo}月前`
    }
    else if (daysAgo > 0) {
        formattedDate = `${daysAgo}天前`
    }

    let fullDate = targetDate.toLocaleDateString("zh-cn", {
        month: "long",
        day: "numeric",
        year: "numeric"
    })

    if (!includeRelative) {
        return fullDate
    }

    return `${fullDate}(${formattedDate})`
}