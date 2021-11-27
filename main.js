'use strict'

const openModal = () => document.getElementById('modal').classList.add('active')
const closeModal = () => document.getElementById('modal').classList.remove('active')

const tempCurso = {
    id: 1000,
    titulo: 'Criptomoedas',
    descricao: 'Curso de CriptoMoedas',
    imagem: 'https://i.pinimg.com/originals/21/c0/40/21c0403207a38659937fe764d93d20f0.png',
    professor: 'JC Bombardeli',
    aulas: 'https://www.gama.academy/'
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_curso')) ?? []
const setLocalStorage = (dbCurso) => localStorage.setItem('db_curso', JSON.stringify(dbCurso))

const deletarCurso = (index) => {
    const dbCurso = listaCursos()
    dbCurso.splice(index, 1)
    setLocalStorage(dbCurso)
}

const atualizarCurso = (index, curso) => {
    const dbCurso = listaCursos()
    dbCurso[index] = curso
    setLocalStorage(dbCurso)
}

const listaCursos = () => getLocalStorage()

// CRUD - CREATE
const criarCurso = (curso) => {
    const dbCurso = getLocalStorage()
    dbCurso.push(curso)
    setLocalStorage(dbCurso)
}

// Events
document.getElementById('cadastrarCurso').addEventListener('click', openModal)

document.getElementById('modalClose').addEventListener('click', closeModal)

document.getElementById('cancelar').addEventListener('click', closeModal)