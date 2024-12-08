
console.log("CAAWCAW");
function write(){


    var name = document.getElementById('name').value;
    var noun = document.getElementById('noun').value;
    var colour = document.getElementById('colour').value;
    var adjective = document.getElementById('adjective').value;
    var acc = document.getElementById('acc').value;
    var number = document.getElementById('number').value;
    var animal = document.getElementById('animal').value;
    var weapon = document.getElementById('weapon').value;
    var creature = document.getElementById('creature').value;
    var verb = document.getElementById('verb').value;

    var stranger = document.querySelector('input[name="stranger"]:checked').value;



    var npc;

    if (stranger== "npc1") {
        npc = "elderly firbolg woman, knitting strange patches. She doesn't seem fond of the younger folks, but tells Finnik to look out for a 'Ginger New-Worlder'."
    }
    else if (stranger== "npc2") {
        npc = "anxious toad man selling books on the street side, he caught on to Finnik being an officer, and though he did not answer her questions, kept no-so-subtly glancing toward a shadowed path."
    }
    else if (stranger== "npc3") {
        npc = "eerie dark-feathered harpy, leaning against a rusted wall. She was only willing to give information in exchnage for her " +acc+". Once accepting the trade, she tells Finnik about someone named 'Little Mouse' who may know the one she was looking for."
    }



    document.getElementById('output').innerHTML = "Finnik entered the undercity accompanied by Lieutenant Jaxton and Officer " +name+ " with the goal of uncovering 'Ricktor', a renowned " +noun+ " smuggler. In an attempt to blend in, she wore a " +colour+ " shawl and handmade " +acc+ " that were both altered to look worn down. Finnik quickly discovered she disliked the undercity, with its mucky streets, " +adjective+ " vendors, and " +number+ " " +animal+ " around any given corner. She spotted an " +npc+ " While following the lead, Finnik found herself crossing through a dark alley way, and was cornered by two cloaked individuals, one weilding a " +weapon+ " while the other readied a simple dagger. When suddenly, a " +creature+"-kin girl with vibrant orange hair dashed to her rescue! As it turns out, she knows someone who's been on Ricktor's trail for years. Finnik and her new friend Aeress, " +verb+ " back to the " +creature+ "-kin's homested, where Finnik meets Little Mouse, an undercity operative that agrees to an alliance with top side, as getting rid of Ricktor would benefit them all. Aeress and Finnik agree to stay in touch.";

}
