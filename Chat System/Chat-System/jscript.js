window.onload=function()
{
    $(document).ready(function(){

        $('#topimage').click(function(){
            document.getElementById('sidebar').style.display='block';
        });
        $('#close').click(function(){
            document.getElementById('sidebar').style.display='none';
        });

        
        $("#send").click(function(){
            var node=document.createElement('div');
            var  para=document.createElement('p');

              var a=document.getElementById('text_input').value;
              

            if(a!="")
            {
                para.innerText=a;
               node.append(para);
                // $("#textmsg").css("display",'block');
                // $("#textmsg").append(a +"<br>");
            }
            document.getElementById('input_text').appendChild(node);
           
        });


        $('#text_input').keypress(function(event){
            if ( event.which == 13 ){
                var node=document.createElement('div');
            var  para=document.createElement('p');

              var a=document.getElementById('text_input').value;
              

            if(a!="")
            {
                para.innerText=a;
               node.append(para);
                // $("#textmsg").css("display",'block');
                // $("#textmsg").append(a +"<br>");
            }
            document.getElementById('input_text').appendChild(node); 
            }
        });


        
       
    });


}