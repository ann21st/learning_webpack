export async function Button(element) {
    const btn = document.createElement('button');
    btn.type = 'button'
    btn.innerText = 'load...'
    const { Hello } = await import(/* webpackPreload: true */ './hello');
    btn.onclick = async (evt) => {
        element.appendChild(Hello())
    }
    return btn
}
