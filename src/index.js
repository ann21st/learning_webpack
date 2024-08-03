async function getComponent() {
    const element = document.createElement('div');

    const { Button } = await import('widget/button')
    const btn = await Button(element)
    element.appendChild(btn)

    return element;
}

getComponent().then((c) => {
    document.body.appendChild(c);
});
