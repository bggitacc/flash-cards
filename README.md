# flash-cards

Constructors for Basic and Cloze flash cards. 


Basic flashcards require properties to be passed to the constructor for front and back. 

returned object will have properties for front and back.

example :

<yourVariableName>.front  = property for front
<yourVariableName>.back  = property for back

Cloze flashcards require properties to be passed to the constructor for text and cloze. 

returned object will have properties for fullText and cloze and match.

example :

<yourVariableName>.fullText  = property for full text
<yourVariableName>.cloze  = property for cloze phrase
<yourVariableName>.match  = property for match - if found set to true if not found set to false

constructors are scope safe.



