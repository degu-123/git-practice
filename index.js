let names=["Degu","Tsegab","Dawit","Daniel","Emir","Dilaferaw"];
      const name=document.getElementById("name");
      const btn=document.getElementById("btn");
      const input=document.getElementById("input");
      const list=document.getElementById("list")
      function render(filter=""){
        list.innerHTML="";
     let filterdName=names.filter(name=>name.toLowerCase().includes(filter.toLowerCase())
          );
         filterdName.forEach(name=>{
           const listItem=document.createElement("li");
           listItem.classList.add("listItem");
           listItem.textContent=name;
           list.appendChild(listItem);
           
           const button=document.createElement("button");
           button.textContent="delete";
           button.classList.add("button")
           listItem.appendChild(button);
           listItem.addEventListener("click",(e)=>{
             listItem.classList.toggle("done");
             
           })
           button.addEventListener("click",()=>{
             listItem.remove()
           })
         }) 
      }
      input.addEventListener("input",(e)=>{
        render(e.target.value);
      })
      btn.addEventListener("click",()=>{
      
       const value=document.createElement("li")
       if (!name.value)return;
        value.textContent=name.value;
        list.appendChild(value);
        names.push(name.value)
        name.value=""
        value.classList.add("listItem");
         const button=document.createElement("button");
           button.textContent="delete";
           button.classList.add("button")
           value.appendChild(button);
           value.addEventListener("click",(e)=>{
             value.classList.toggle("done");
             
           })
           button.addEventListener("click",()=>{
             value.remove()
           })
      })
    render()
