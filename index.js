form=document.getElementById('formid');
submit=document.getElementById('id3');
 const ul=document.getElementById('tblid');



submit.addEventListener('click',adddata);

function adddata(e){
    
    e.preventDefault();
    naam=document.getElementById('id1').value;
    email=document.getElementById('id2').value;
    price=document.getElementById('id4').value;
    choice=document.getElementById('1').value;
    
    if(naam!==''||email!=='' || price!=='')
    {

   
        const myobj={
             'naam':naam,
            'email':email,
            'price': price,
            'choice':choice
        }
        const serilazation=JSON.stringify(myobj);
        localStorage.setItem(email,serilazation);
     
    

    Object.keys(localStorage).forEach((key) => {
            stringifiedDetailsOfPeople = localStorage.getItem(key);
            detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
            addNewLineElement(detailsOfPeople);
        });
    }
//     let ul=document.createElement('ul');
//     ul.id='ulid';

//    let li=document.createElement('li');
//    let newnodetext=document.createTextNode()
//     ul.appendChild()


    
}
 window.addEventListener('DOMContentLoaded', (event) => {
        Object.keys(localStorage).forEach(key => {
            const user = JSON.parse(localStorage.getItem(key))
            addNewLineElement(user)
        })
    })

function addNewLineElement(obj){
    let li=`<li id=${obj.email}> ${obj.naam} - ${obj.email}-${obj.price}-${obj.choice}
    <button onclick=deleteUser('${obj.email}')> Delete User </button>
    <button onclick=editUserDetails('${obj.email}','${obj.naam}','${obj.price}','${obj.choice}')>Edit User </button>
 </li>`
    
    ul.innerHTML=ul.innerHTML+li;

}

function deleteUser(email) {
        localStorage.removeItem(email)
        removeItemFromScreen(email)
    }
    
    function removeItemFromScreen(email){
        const parentNode = document.getElementById('tblid');
        const elem = document.getElementById(email)
        parentNode.removeChild(elem);
    }
    
    
    function editUserDetails(emailId, name,choice,price){
    
        document.getElementById('id2').value = emailId;
        document.getElementById('id1').value = name;
        document.getElementById('id4').value = price;
        document.getElementById('1').value = choice;
        
    
    
        deleteUser(emailId)
     }
