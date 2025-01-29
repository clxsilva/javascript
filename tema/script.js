/**
 * uso do color-scheme para modificar o tema (claro-escuro)
 * uso do "local storage" para armazenar no banco de dados do navegador
 * @author Claudio Silva
 */

const html = document.querySelector('html')
// uso no banco de dados do navegador
const tema = localStorage.getItem('mode')

// capturar e implementar a preferência do usuário (light ou dark)
if (tema === 'ligth') {
    light()
}

if (tema === 'dark') {
    dark()
}

function light() {
    html.style.setProperty('color-scheme', 'light')
    localStorage.setItem('mode', 'light')
}

function dark() {
    html.style.setProperty('color-scheme', 'dark')
    localStorage.setItem('mode', 'dark')
}

function auto() {
    html.style.setProperty('color-scheme', 'light dark')
    localStorage.removeItem('mode')
}