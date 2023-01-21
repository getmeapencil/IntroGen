$(document).ready(function() {
    let valid = false;
    $("#refresh-button").click(function() {
        location.reload();
    });
    $("#generate-paragraph").click(function(event) {
        event.preventDefault();
        (() => {
            const form = document.querySelectorAll('.needs-validation')[0]
            if (!form.checkValidity()) {
                valid=false;
                $("#output").hide();
                $("#copy-button").hide();
                event.stopPropagation(); 
            }
            else {
                valid = true;
            }
            form.classList.add('was-validated')
        })()

        if (valid) {
            var name = $("#name").val();
            var college = $("#college").val();
            var branch = $("#branch").val();
            var session1 = $("#session1").val();
            var session2 = $("#session2").val();
            var quote = $("#quote").val();
            var song = $("#song").val();
    
            var paragraphs = [
                "Hi @everyone! \nI am **" + name + "** and I am from **" + college + "**. \nI am in **" + branch + "** for the session **" + session1 + " - " + session2 + "**. \n\nHere's a quote that I like: \n> *" + quote + "*\n\nAlso listen to a song of my taste: \n" + song,
                "Hello @everyone! \nThis is **" + name + "** from **" + college + "**. \nI am currently enrolled in the batch **" + session1 + " - " + session2 + "** of **" + branch + "** department. \n\nA really good quote I read was: \n> *" + quote + "*\n\nNow that you have read all this, you can give this song a try: \n" + song,
                "Hello there @everyone! \nI'm **" + name + "** from **" + college + "**. \nI'm enrolled in session **" + session1 + " - " + session2 + "** while pursuing my degree in **" + branch + "**. \n\nOne of my go to quote is: \n> *" + quote + "*\n\nAnd you can vibe with me on the song: \n" + song,
                "Greetings @everyone! \nI'm **" + name + "** from **" + college + "**. \nI'm enrolled in session **" + session1 + " - " + session2 + "** and pursuing my degree in **" + branch + "**. \n\nThe quote I'll like to share with y'all is: \n> *" + quote + "*\n\nNow let's vibe to some music: \n" + song,
                "Hey there @everyone! Namaste! \nI'm **" + name + "**, an engineer in the making from **" + college + "**. \nI'm doing my graduation from **" + branch + "** department for the session **" + session1 + " - " + session2 + "**. \n\nIf you'd like to read more, read this: \n> *" + quote + "*\n\nAnd in case you've already had enough, listen to: \n" + song,
                "Hi @everyone! \nMy name is **" + name + "** and I am from **" + college + "**. \nI am enrolled in the batch **" + session1 + " - " + session2 + "** of **" + branch + "** department. \n\nHere's a quote that I like: \n> *" + quote + "*\n\nAlso why not give this song a try: \n" + song,
                "Hello @everyone! \nThis is **" + name + "** from **" + college + "**. \nI am in **" + branch + "** for the session **" + session1 + " - " + session2 + "**. \n\nA really good quote I read was: \n> *" + quote + "*\n\nAnd here's a nice song I'll like to share: \n" + song,
                "Greetings @everyone! \nI'm **" + name + "** from **" + college + "**. \nI'm enrolled in session **" + session1 + " - " + session2 + "** while pursuing my degree in **" + branch + "**. \n\nThe quote I'll like to share is: \n> *" + quote + "*\n\nAlso I like listening this song, hope you enjoy too: \n" + song,
                "Namaste @everyone! \nI'm **" + name + "** from **" + college + "**. \nI'm enrolled in session **" + session1 + " - " + session2 + "** and pursuing my degree in **" + branch + "**. \n\nTime for some wise words: \n> *" + quote + "*\n\nAnd you can take some time to listen a song I like: \n" + song,
                "Hey there @everyone! Namaste! \nMy name is **" + name + "** and I am from **" + college + "**. \nI'm doing my graduation from **" + branch + "** department for the session **" + session1 + " - " + session2 + "**. \n\nNow let me share a nice quote: \n> *" + quote + "*\n\nYou may also find this song interesting: \n" + song,
            ];
    
            var i = parseInt((Math.random() * paragraphs.length), 10);
            $("#output").val(paragraphs[i]);

            $("#output").show();
            $("#copy-button").show();
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