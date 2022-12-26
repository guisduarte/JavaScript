function verificar(){
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.querySelector('#res');

    if(fano.value.length == 0 || Number (fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number (fano.value);
        let gênero = ''
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade <10){
                //Criança
                img.setAttribute('src', 'bebe-homem.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-homem.png')
            }else if (idade < 50){
                //Adulto
               img.setAttribute('src', 'adulto-homem.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idoso-homem.png')
            }

        }else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade >=0 && idade <10){
                //Criança
                img.setAttribute('src', 'bebe-mulher.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-mulher.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-mulher.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idoso-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}