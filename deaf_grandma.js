function deafGrandma() {

    let goodbyes = 0
    
    let message = "HEY KID!"
    while (true) {
        
        let talk = prompt(message)
        
        
        if (talk=== ""){
            message = "WHAT?!";
        } else if (talk === "GOODBYE!") {
            if (goodbyes < 1) {
                message ="LEAVING SO SOON?"
                goodbyes++
            } else if (goodbye < 2) {
                message = "LATER, SKATER!"
                break;
            }
            
        } else if (talk === talk.toUpperCase()) {
            message = "NO, NOT SINCE 1946!"
        } else {
            message = "SPEAK UP, KID!"
        }
    }
    
    
    
    
    
    
    

}

deafGrandma();