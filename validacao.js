function validarFormulario() {
    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const bairro = document.getElementById("bairro").value;
    const cep = document.getElementById("cep").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
    const telefoneFixo = document.getElementById("telefoneFixo").value;
    const celular = document.getElementById("celular").value;
    const rg = document.getElementById("rg").value;
    const cpf = document.getElementById("cpf").value;

    if (!nome || !endereco || !bairro || !cep || !cidade || !estado || !telefoneFixo || !celular || !rg || !cpf) {
        console.log("Por favor, preencha todos os campos.");
        return false;
    }

    // Validação de CEP (formato XXXXX-XXX)
    const cepRegex = /^\d{5}-\d{3}$/;
    if (!cep.match(cepRegex)) {
        console.log("Por favor, insira um CEP válido no formato XXXXX-XXX.");
        return false;
    }

    // Validação de telefone fixo (formato (XX) XXXX-XXXX)
    const telefoneFixoRegex = /^\(\d{2}\) \d{4}-\d{4}$/;
    if (!telefoneFixo.match(telefoneFixoRegex)) {
        console.log("Por favor, insira um telefone fixo válido no formato (XX) XXXX-XXXX.");
        return false;
    }

    // Validação de celular (formato (XX) XXXXX-XXXX)
    const celularRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!celular.match(celularRegex)) {
        console.log("Por favor, insira um celular válido no formato (XX) XXXXX-XXXX.");
        return false;
    }

    // Validação de RG (formato XXXXXXXX-X)
    const rgRegex = /^\d{8}-\d$/;
    if (!rg.match(rgRegex)) {
        console.log("Por favor, insira um RG válido no formato XXXXXXXX-X.");
        return false;
    }

    // Validação de CPF (formato XXX.XXX.XXX-XX)
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpf.match(cpfRegex)) {
        console.log("Por favor, insira um CPF válido no formato XXX.XXX.XXX-XX.");
        return false;
    }

    console.log("Formulário enviado com sucesso!");
    return true;
}