let cidade = "Sao Paulo"; 
let cidades = ["Sao Paulo", "Rio de Janeiro", "Pernambuco"];

aluno = [{
    nome:"Lucas",
    idade:22,
    curso:"Ciencias da Computacao",
    falar: function(){
        console.log("Ola mundo");
    }
},
{   
    nome:"Thais",
    idade:29,
    curso:"Sistemas da Informacao"
}];

console.log(cidade);
console.log(cidades);

console.log(aluno[1].idade);
aluno[0].falar();

for(let i = 0; i < aluno.length; i++){
    console.log(aluno[i].nome);
}

var j = 0;
while(j < aluno.length){
    console.log(aluno[j].idade);
    j++;
}

//Conversao de objeto em json

let alunojson = JSON.stringify(aluno);
console.log(aluno[0].nome) //Lucas
console.log(alunojson[0].nome) //undefinid

//Conversaao de json em objeto

let alunoobj = JSON.parse(alunojson);
console.log(alunoobj[1].idade); //29


