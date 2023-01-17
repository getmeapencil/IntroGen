$(document).ready(function() {
    $("#refresh-button").click(function() {
        location.reload();
    });
    $("#generate-paragraph").click(function(event) {
        (() => {
            'use strict'
          
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            const forms = document.querySelectorAll('.needs-validation')
          
            // Loop over them and prevent submission
            Array.from(forms).forEach(form => {
              form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                  event.preventDefault()
                  event.stopPropagation()
                  $("#output").hide();
                  $("#copy-button").hide();
                }
                
                event.preventDefault();
                form.classList.add('was-validated')
              }, false)
            })
        })()

        if ($("form").hasClass("was-validated")) {

            //console.log("1st\n");

            var name = $("#name").val();
            var college = $("#college").val();
            var branch = $("#branch").val();
            var session1 = $("#session1").val();
            var session2 = $("#session2").val();
            var quote = $("#quote").val();
            var song = $("#song").val();
    
            var paragraphs = [
                "Hi @everyone! \nI am **" + name + "** and I am from **" + college + "**. \nI am in **" + branch + "** for session **" + session1 + " - " + session2 + "**. \n\nHere's a quote that I like: \n> *" + quote + "*\n\nAlso listen to a song of my taste: \n" + song,
                "Hello @everyone! \nThis is **" + name + "** from **" + college + "**. \nI am currently enrolled in batch **" + session1 + " - " + session2 + "** of **" + branch + "** department. \n\nA really good quote I read was: \n> *" + quote + "*\n\nNow that you have read all this, you can give this song a try: \n" + song,
                "Hello there @everyone! \nI'm **" + name + "** from college **" + college + "**. \nI'm enrolled in session **" + session1 + " - " + session2 + "** while pursuing my degree in **" + branch + "**. \n\nOne of my go to quote is: \n> *" + quote + "*\n\nAnd you can vibe with me on the song: \n" + song,
                "Greetings @everyone! \nI'm **" + name + "** from college **" + college + "**. \nI'm enrolled in session **" + session1 + " - " + session2 + "** and pursuing my degree in **" + branch + "**. \n\nThe quote I'll like to share with y'all is: \n> *" + quote + "*\n\nNow let's vibe to some music: \n" + song,
                "Hey there @everyone! Namaste! \nI'm **" + name + "**, a engineer in making from college **" + college + "**. \nI'm doing my graduation from **" + branch + "** department in the session **" + session1 + " - " + session2 + "**. \n\nIf you'd like to read more, read this: \n> *" + quote + "*\n\nAnd in case you've already had enough, listen to: \n" + song,
            ];
            
            //console.log("2nd\n");

            var i = parseInt((Math.random() * paragraphs.length), 10);
            $("#output").val(paragraphs[i]);
    
            //console.log("3rd\n");

            $("#output").show();
            $("#copy-button").show();
           
            //console.log("4th\n");
        }       
    });

    $("#copy-button").click(function() {
        var copyText = document.querySelector("#output");
        copyText.select();
        document.execCommand("copy");
        $(this).text("Copied!");
        setTimeout(function() {
            $("#copy-button").text("Copy");
        }, 2000);
    });

    

    // $("#copy-button").click(function() {
    //     let text = document.getElementById("output").value;
    //     navigator.clipboard.writeText(text)
    //         .then(() => {
    //             alert('Text copied to clipboard');
    //         })
    //         .catch(err => {
    //             alert('Error in copying text: ', err);
    //         });
    // });
    // function copy() {
    //     let copyText = document.querySelector("#output");
    //     copyText.select();
    //     document.execCommand("copy");
    // }
        
    // document.querySelector("#copy-button").addEventListener("click", copy);

});
