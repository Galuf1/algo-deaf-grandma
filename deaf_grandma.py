def deaf_grandma():
    counter = 0
    message = "HEY KID!"

    while True:
        talk = input(message + "\n")
        if talk == "":
            message = "WHAT?!"
        elif talk == "GOODBYE!":
            if counter == 0:
                message = "LEAVING SO SOON?"
                counter +=1
            elif counter == 1:
                message = "LATER, SKATER!"
                break
        elif talk == talk.upper():
            message = "NO, NOT SINCE 1946!"
        else: 
            message = "SPEAK UP, KID!"
            



deaf_grandma()
