//basic card constructor

function BasicCard(front,back) {
    
    if(this instanceof BasicCard) {
    // sets property for front
    this.front = front;
     // sets property for back
    this.back = back;
    
    } else {
        
        return new BasicCard(front,back);
    }
}

//clozec card constructor


function ClozeCard(text,cloze) {
    
    if(this instanceof ClozeCard) {
    
     // sets property for full text
     
        this.fullText = text;
        
     // sets property for cloze phrase
     
        this.cloze = cloze;
        
     // sets property for match and checks for cloze phase match in full test property. resolves to true or false. can be used as a flag to do something.
    
        this.match = this.fullText.includes(this.cloze);
    
     // checks for match in text sets full text and partial to does not work and cloze to oops if no match 
     
     if (!this.match) {
         
         this.partial = "This doesn't work";
        
     } else {
     
     // sets property for partial text and removes cloze text from full text and replaces with a placeholder ...
     
        this.partial = this.fullText.replace(this.cloze,"... ");
   }
   
    }
   
   else {
       
       return new ClozeCard(text,cloze);
   }
    
}



// run checks

var firstPresident = BasicCard("Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 


var firstPresidentCloze = ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText)

// check for error in match

var firstPresidentCloze = ClozeCard(
    "George Washington was the first president of the United States.", "Georg Washington");

// "Georg Washington"
console.log(firstPresidentCloze.cloze); 

// "This doesn't work
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText)