// loadMarkdown.js
async function loadMarkdown(filepath, elementId) {
    const converter = new showdown.Converter();
    try {
        const response = await fetch(filepath);
        const markdownText = await response.text();
        document.getElementById(elementId).innerHTML = converter.makeHtml(markdownText);
    } catch (error) {
        console.error("Markdownファイルの読み込みに失敗しました:", error);
    }
}
