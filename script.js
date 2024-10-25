// script.js
const API_URL = 'http://localhost:3000/api/animals';

async function fetchAnimals() {
    const response = await fetch(API_URL);
    const animals = await response.json();
    const animalList = document.getElementById('animal-list');
    animalList.innerHTML = '';

    animals.forEach(animal => {
        const animalCard = document.createElement('div');
        animalCard.className = 'animal-card';
        animalCard.innerHTML = `
            <h3>${animal.nome}</h3>
            <p>Espécie: ${animal.especie}</p>
            <p>Idade: ${animal.idade}</p>
            <img src="${animal.foto}" alt="${animal.nome}" width="100">
            <p>${animal.descricao}</p>
            <button onclick="deleteAnimal(${animal.id})">Delete</button>
        `;
        animalList.appendChild(animalCard);
    });
}

async function deleteAnimal(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchAnimals();
}

document.addEventListener('DOMContentLoaded', fetchAnimals);

async function fetchAnimals() {
    const response = await fetch(API_URL);
    const animals = await response.json();
    // Renderiza os animais no DOM (detalhado anteriormente)
}

document.getElementById('add-animal-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const newAnimal = {
        nome: document.getElementById('nome').value,
        especie: document.getElementById('especie').value,
        idade: parseInt(document.getElementById('idade').value),
        foto: document.getElementById('foto').value,
        descricao: document.getElementById('descricao').value
    };
    
    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAnimal)
    });
    
    fetchAnimals(); // Atualiza a lista de animais
});

// Adicionar no animalCard do script.js
<button onclick="editAnimal(${animal.id})">Editar</button>

async function editAnimal(id) {
    const response = await fetch(`${API_URL}/${id}`);
    const animal = await response.json();

    // Preencher o formulário com os dados para editar
    document.getElementById('nome').value = animal.nome;
    document.getElementById('especie').value = animal.especie;
    document.getElementById('idade').value = animal.idade;
    document.getElementById('foto').value = animal.foto;
    document.getElementById('descricao').value = animal.descricao;

    document.getElementById('add-animal-form').onsubmit = async (e) => {
        e.preventDefault();
        
        const updatedAnimal = {
            nome: document.getElementById('nome').value,
            especie: document.getElementById('especie').value,
            idade: parseInt(document.getElementById('idade').value),
            foto: document.getElementById('foto').value,
            descricao: document.getElementById('descricao').value
        };

        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedAnimal)
        });

        fetchAnimals();
    };
}

async function deleteAnimal(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchAnimals(); // Atualiza a lista
}
