let TEMPLATE_FILE = null;

async function select_file() {
    result = await pywebview.api.files.select_file();
    if (!result) return;

    const fileDisplay = document.getElementById("file-display");
    const fileBtn = document.getElementById("file-btn");

    TEMPLATE_FILE = result;

    fileDisplay.textContent = result;
    fileBtn.textContent = "ARQUIVO SELECIONADO";
}
