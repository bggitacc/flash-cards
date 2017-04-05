# flash-cards

Constructors for Basic and Cloze flash cards. 


Basic flashcards require properties to be passed to the constructor for front and back. <br /> 
<br />
returned object will have properties for front and back. <br />
<br />
example : <br />
<br />
yourVariableName.front  = property for front <br />
yourVariableName.back  = property for back <br />
<br />
Cloze flashcards require properties to be passed to the constructor for text and cloze. <br />
<br />
returned object will have properties for fullText and cloze and match.<br />
<br />
example :<br />
<br />
yourVariableName.fullText  = property for full text<br />
yourVariableName.cloze  = property for cloze phrase<br />
yourVariableName.match  = property for match - if found set to true if not found set to false<br />
<br />
constructors are scope safe.



