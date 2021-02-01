$(document).ready(function(){   
    //Troca a cor da borda quando o input for preenchido.       
    $(function(){
        $('#nome, #email, #logr, #numero, #compl, #bairro, #cidade, #estado').focusout(function(event) {       
            if($(this).val()!==''){ 
                $(this).addClass('green-border');
            } else {
                $(this).removeClass('green-border');
            }
        }); 
    });

    //Máscara de telefone para números com 9 dígitos, e fixos.
    $('#tel').mask('(00) 0000-00000');          
    $('#tel').focusout(function(event) {
        if($(this).val().length < 14){
            //O telefone inserido é invalido.
            $(this).removeClass('green-border');
            $( "#telinvalido" ).text( "Insira um número válido." ).show().fadeOut( 5000 );
        }else{         
            if($(this).val().length == 15){ //9 dígitos + 2 dígitos DDD e 4 da máscara;
                $('#tel').mask('(00) 00000-0000'); 
                $(this).addClass('green-border');
            } else { //Para telefones fixos.
                $('#tel').mask('(00) 0000-0000');
                $(this).addClass('green-border');
            }    
        }
    });

    //Máscara de CEP.
    $('#cep').mask('00000-000'); 
    $('#cep').focusout(function(event) {
        if($(this).val().length < 9){  //8 dígitos + 1 da máscara;
            //O CEP inserido é inválido.
            $(this).removeClass('green-border');
            $( "#cepinvalido" ).text( "Insira um CEP válido." ).show().fadeOut( 5000 );
        }else{
            $(this).addClass('green-border');
        }
    });

    //Máscara de número residencial.
    $('#numero').mask('00000'); 
    
});