// Exibe um acessório específico sem removê-lo depois
function toggleAccessory(accessory) {
    const element = document.getElementById(`layer-${accessory}`);
    if (!element) return; // evita erro se o elemento não existir
    element.classList.remove('hidden');
}

// Reseta todos os acessórios
function reset() {
    const accessories = ['oculos', 'bone', 'bone-oculos'];
    accessories.forEach(acc => {
        const el = document.getElementById(`layer-${acc}`);
        if (el) el.classList.add('hidden');
    });
}

// Ativa óculos e boné juntos
function addBoth() {
    const oculos = document.getElementById('layer-oculos');
    const bone = document.getElementById('layer-bone');
    const boneOculos = document.getElementById('layer-bone-oculos');

    [oculos, bone, boneOculos].forEach(el => {
        if (el) el.classList.remove('hidden');
    });
}
document.addEventListener('DOMContentLoaded',function(){
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    const btn = form.querySelector('.btn-send');

    form.addEventListener('submit', async function(e){
        e.preventDefault();
        status.textContent=''; status.className='';
        if(!form.checkValidity()){
            status.textContent='Por favor, preencha os campos obrigatórios.'; status.className='error';
            return;
        }
        btn.disabled = true; btn.textContent='Enviando...';
        const data = {
            nome: document.getElementById('nomeInput').value.trim(),
            email: document.getElementById('email').value.trim(),
            assunto: document.getElementById('assunto').value.trim(),
            mensagem: document.getElementById('mensagem').value.trim()
        };
        try{
            // Simulate async send. Replace with real endpoint if available.
            await new Promise(r=>setTimeout(r,1000));
            form.reset();
            status.textContent='Mensagem enviada com sucesso!'; status.className='success';
        }catch(err){
            status.textContent='Ocorreu um erro ao enviar. Tente novamente.'; status.className='error';
        }finally{
            btn.disabled = false; btn.textContent='Send message';
        }
    });
});