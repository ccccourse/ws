async function md2html(md) {
    let r = await fetch("https://api.github.com/markdown", {
        method: "POST",
        headers: {
            "Accept": "application/vnd.github.v3+json",
        },
        body: JSON.stringify({ "text": md }),
    })
    return r.text()
}

console.log(await md2html(`
# md2html

## Introduction

Use github api to convert markdown into html
`))
