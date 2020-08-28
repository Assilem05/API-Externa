
$(document).on("click","#buscar",function(){
   $.ajax({
      type:"get",
      url:"http://apiadvisor.climatempo.com.br/api/v1/forecast/region/"+$("#regiao").val()+"?token=ede00d806e43a07e8496dfb0621c2da3",

       sucess: function listar(record){
        var Lista = "";

  $.each(record.data, function(i,dados){

        Lista += "<p><strong>Região: </strong>"+dados.region+"</p>";
        Lista += "<p><strong>Data: </strong>"+dados.date_br+"</p>";
        Lista += "<p>"+dados.image+"</p>";
        Lista += "<p>"+dados.text+"</p>";
     });

      $("#listarDados").html(Lista);
    },

    error: function(data){
        navigator.notification.alert("Erro ao fazer a busca do registro");
      }
    });
});
