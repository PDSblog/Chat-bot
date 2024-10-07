
function 
send()
{
let input = document.getElementById("text").value;
let box = document.getElementById("box");
box.innerHTML +=`<div id="sender">${input}</div>`;
start(""+input);
}

function 
start(sentence)
{
let text=sentence.toLocaleLowerCase()
let result = Direct_Test(text);
if (result.condition) {
Answer(result.answer);
}else{
let result2=Split_Test(text)
Answer(result2.structure)
}
}

function
Split_Test(text)
{
let word=text.split(" ")
for(let i=0;i<word.length;i++){
for(let j= 0;j<data.length;j++){
if(data[j].Question.includes(word[i])) {
let ans =data[j].Answer[getRandomNumber(0,data[j].Answer.length)];
return {condition:true,structure:ans};

}
}
}
return {condition:false,structure:"I am sorry,i have no answer about this. Ask another question."};
}

function
StructureToText(structure)
{
return structure
}

function
Direct_Test(texts)
{
let text="";
if(texts[texts.length-1]===" "){
text=texts.trim();
}else{
text=texts;
}

for(let i=0;i< array.length;i++) {
if(array[i].Question.includes(text)) {
let ans =array[i].Answer[getRandomNumber(0,array[i].Answer.length)];
return {condition:true,answer:ans};
break;
}
}
return {condition:false};
}

function
getRandomNumber(from,to) 
{
return Math.floor(Math.random() * (to - from) + from);
}

function 
Answer(text)
{
let input = document.getElementById("text").value;
document.getElementById('text').value="";
let box = document.getElementById("box");
box.innerHTML +=`<div class="ai" >${text}</div>`;
}