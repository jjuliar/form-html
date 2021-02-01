$(document).ready(function() {

    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#logr").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#estado").val("");
        
    }

    function validacao(){
        if($('#logr').val()!==''){  //assuming the form doesn't have some fields populated by default.
                            $('#logr').addClass('green-border');
                        } else {
                            $('#logr').removeClass('green-border');
                        }

                        if($('#bairro').val()!==''){  //assuming the form doesn't have some fields populated by default.
                            $('#bairro').addClass('green-border');
                        } else {
                            $('#bairro').removeClass('green-border');
                        }
                        
                        if($('#cidade').val()!==''){  //assuming the form doesn't have some fields populated by default.
                            $('#cidade').addClass('green-border');
                        } else {
                            $('#cidade').removeClass('green-border');
                        }

                        if($('#estado').val()!==''){  //assuming the form doesn't have some fields populated by default.
                        $('#estado').addClass('green-border');
                        } else {
                            $('#estado').removeClass('green-border');
                        }
    }
    
    //Quando o campo cep perde o foco.
    $("#cep").blur(function() {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#logr").val("...");
                $("#bairro").val("...");
                $("#cidade").val("...");
                $("#estado").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                       // $('#logr, #bairro, #cidade, #estado').addClass('green-border');
                        
                        $("#logr").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#estado").val(dados.uf);
                        validacao();

                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        validacao();
                        $('#cep').removeClass('green-border');
                        $( "#cepinvalido" ).text( "Insira um CEP válido." ).show().fadeOut( 5000 );             

                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                validacao();
                //alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
            validacao();
        }
       
    });
});