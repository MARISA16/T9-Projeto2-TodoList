//window.addEventListener('DOMContentLoaded',function(){


//})
    
    //criar arquivo JS   //
//vincular js e css no html   //
//inserir fuction de leitura do js //
// capturar dados do Input exibir na lista
// colocar os itens como concluidos individualmente
// adicionar botao de fechar nos itens da lista
  //excluir o item individualmente
//Validar campo de texto para não entrar itens vazios
// Limpar campo de texto depois que insere o item na lista






//Declarando as constantes

const botaoAdd = document.querySelector('#todoSubmit')

const form = document.querySelector('#todoForm');

const listaTarefas = document.querySelector('#todolista')

const botaoMarcarTodas = document.querySelector('#todoMarcarTodos')

const botaoRemoverTodos = document.querySelector('#todoRemoverTodos')

//pegar  o botão e adecionar no eventlistener para dar um click
//e colocamos o preventDefault ele impende a atualização da página.
//função de click para coletar dados digitados  e criado p,span

botaoAdd.addEventListener('click', function addTarefa(e){
  e.preventDefault()
  //criar uma tarefa
const input = document.querySelector('#todoInput').value
const tarefa  = document.createElement('li');
const paragrafo = document.createElement('p')
const span = document.createElement('span')
//valor que pegamos colocamos na caixa de texto
paragrafo.innerText = input
//if uma condição para não aceitar espaço e branco na tarefa usando o trim
//seja se a condição do if for falsa ele ira executar as instruções do else ou seja ,entra no else
if(paragrafo.innerText.trim() == ""){
  alert('Adicione uma tarefa')
  
}else{


  tarefa.appendChild(paragrafo)
  tarefa.appendChild(span)
  listaTarefas.appendChild(tarefa);
  //condição do form reset ele limpo o campo que esta em branco para poder digitar de novo
 form.reset()
}
// colocar o conteudo do x
//Inserido condição para não receber campos em branco e espaço. Adicionado classe para o x
//Criamos um botão esta dentro do span e chamamos a classList para add o botoa de excluir
span.innerText = 'X'
span.classList.add('todo__btn-excluir')

//Adicionado funçao para remover tarefa
//Falamos span (que é um elemento) add no eventListener o click nesta função para remover a tarefa
span.addEventListener('click',(e) =>{
e.preventDefault()
tarefa.remove()


})

//Adicionado função para dar marcar itens como concluido
//toggle se houver ação ele retira e se não houver ele adiciona(checked)
// ou seja, toggle ativa e desativa uma função para classList.
paragrafo.addEventListener('click',(e) =>{
  e.preventDefault()
  paragrafo.classList.toggle('checked')
})


})
//criado paragrafos para receber os 'ps' e criado para função para marcar todas
botaoMarcarTodas.addEventListener('click',(e) =>{
  e.preventDefault()
const paragrafos = document.querySelectorAll('p')

//criado for para paragrafos que forem ad
//função criada para marcar todas tarefa concluidas
//usamos condição for para percorram exibindo cada texto do array
for(let i = 0; i<paragrafos.length; i++){
paragrafos[i].classList.add('checked')

}

})
//criado função para remover todos com while
//função  criada para remover todos que foram marcados
botaoRemoverTodos.addEventListener('click',(e) =>{
  e.preventDefault()
  
while(listaTarefas.firstChild){
  listaTarefas.removeChild(listaTarefas.firstChild)
}
  
})



    
 



    


    
    


    
    
