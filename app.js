async function loadChapter(fileName){

    const response = await fetch(
        "capitulos/" + fileName
    );

    const markdown = await response.text();

    document.getElementById("content")
        .innerHTML = marked.parse(markdown);
}

loadChapter(
    "capitulo_0_introduccion.md"
);
