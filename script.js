let addBtn = document.getElementById("add-btn");
let inputs  = document.getElementById("inputs");
let heading = document.getElementById("heading");




addBtn.addEventListener("click" ,()=>{
    if(inputs.value == '' ){
        alert("Your Notes is Empty");
       
    }
   else if(heading.value==''){
        alert("Your Heading is Empty");
      
    }
    else{

      let h1 = document.createElement("h1");
      
      h1.innerHTML = "Heading:"+heading.value;
      

      let para = document.createElement("div");
    
      para.className = "para";
      para.innerHTML = "Content:" + inputs.value;
        
     
      let deleteBtn = document.createElement("button");
      deleteBtn.className="delete";
          deleteBtn.innerHTML="DELETE";
      let editBtn = document.createElement("button");
      editBtn.className="edit";
          editBtn.innerHTML="EDIT";

     let ContentBtn = document.createElement("div");
      ContentBtn.className = "content-btn";
      ContentBtn.appendChild(deleteBtn);
      ContentBtn.appendChild(editBtn);

      let Content = document.createElement("div");
      Content.className = "content";
      Content.appendChild(h1);
      Content.appendChild(para);
      Content.appendChild(ContentBtn);

      myNotes.appendChild(Content);


      saveData();
      


    alert("Notes Added Successfully");
    inputs.value='';
    heading.value ='';


    

    }
})

let showNotes = document.getElementById("myNote");
let homeBtn = document.getElementById("home-btn");
let home = document.getElementById("notes");
let myNotes = document.getElementById("my-notes");

showNotes.addEventListener("click" , ()=>{
   showTask();
   myNotes.style.display="flex";
   home.style.display = "none";
})
homeBtn.addEventListener("click" , ()=>{
    
    myNotes.style.display="none";
    home.style.display = "flex";
 })



function saveData(){
    localStorage.setItem("data", myNotes.innerHTML);

}
function showTask(){
     myNotes.innerHTML = localStorage.getItem("data");
}

/*showTask();*/


myNotes.addEventListener("click" , function(e){
    if(e.target.className === "edit"){
        
      let text="Your current data will be removed ?";
     // confirm("Your current data will be removed ?");
      if(confirm(text) == true){
      
      e.target.parentElement.parentElement.remove();
      myNotes.style.display="none";
      home.style.display = "flex";
      }
        saveData();
    }
    else if(e.target.className === "delete"){
        e.target.parentElement.parentElement.remove();
        alert("Notes deleted successfuly");
       
        saveData();
    }
},false);