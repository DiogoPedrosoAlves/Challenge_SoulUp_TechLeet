// Alterna visibilidade de um acessório específico
function toggleAccessory(accessory) {
    const element = document.getElementById(`layer-${accessory}`);
    if (!element) return; // evita erro se o elemento não existir
    
    element.classList.toggle('hidden');
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
