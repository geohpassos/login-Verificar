function logar(event){
  //impede o envio normal do formulario.
  //força a chamada a passar pelo "modal"
    event.preventDefault();

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(usuario == 'Geovanna' && senha == 'admin01'){ 
        Swal.fire({
            title: 'Login Concluido!',
            text: 'Bem-Vindo, ' + usuario + '!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            setTimeout(() => {
                location.href = "./html/home.html";
            }, 100);
        });

    }else{
        Swal.fire({
            title: 'Erro!',
            text: 'Usuário ou senha incorreto.',
            icon: 'error',
            confirmButtonText: 'Tentar Novamente'
        });

     }


}