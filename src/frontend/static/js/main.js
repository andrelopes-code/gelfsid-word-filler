html = String.raw;
let PLACEHOLDERS = [];
let DOCX_FILE = null;

async function select_file() {
    result = await pywebview.api.files.select_file();
    if (!result) return;

    const fileDisplay = document.getElementById("file-display");
    const fileBtn = document.getElementById("file-btn");

    DOCX_FILE = result;
    fileDisplay.textContent = result;
    fileBtn.textContent = "ARQUIVO SELECIONADO";

    PLACEHOLDERS = await pywebview.api.template.placeholders(result);
    generate_inputs();
}

async function fill_document() {
    const form = document.getElementById("placeholders-form");
    const inputs = Array.from(form.querySelectorAll("input"));
    const data = {};

    for (const input of inputs) {
        data[input.name] = input.value;
    }

    const result = await pywebview.api.template.fill(DOCX_FILE, data);
}

async function generate_inputs() {
    const placeholdersForm = document.getElementById("placeholders-form");
    const fragment = document.createDocumentFragment();
    placeholdersForm.innerHTML = "";

    for (const placeholder of PLACEHOLDERS) {
        const tempContainer = document.createElement("div");

        tempContainer.innerHTML = html`
            <div class="input flex w-full flex-col h-fit static">
                <label
                    for="input"
                    class="text-primary text-md font-semibold relative top-3 ml-[7px] px-[3px] border-border bg-background-lighter w-fit"
                    >${placeholder}:</label
                >
                <input
                    id="${placeholder.toLowerCase()}"
                    name="${placeholder}"
                    type="text"
                    placeholder="..."
                    class="w-full text-font font-semibold input px-[10px] py-[11px] text-md border-border bg-background-lighter border-2 rounded-[5px] focus:outline-none placeholder:text-black/25"
                />
            </div>
        `;

        fragment.appendChild(tempContainer.firstElementChild);
    }

    placeholdersForm.appendChild(fragment);
}
