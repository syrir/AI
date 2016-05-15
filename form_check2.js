function isEmpty(str){
  if(str==undefined||str.length==0)
  {
    return true;
  }
  else
  {
    return false;
  }
}
function isWhiteSpace(str) {
  var ws = "\t\n\r ";
  for (var i = 0; i < str.length; i++) {
    var c = str.charAt(i);
    if (ws.indexOf(c) == -1) {
      return false;
    }
  }
  return true;
}
function checkString(str,msg)
{
  if(isEmpty(str))
  {
    alert("Podaj "+msg+" !");
    return false;
  }
  else if (isWhiteSpace(str))
  {
    alert("Podaj "+msg+" !");
    return false;
  }
  else
  {
    return true;
  }
}
function checkEmail(str) {
  if (isWhiteSpace(str)) {
    //alert("Podaj właściwy e-mail");
    return false;
  }
  else {
    var at = str.indexOf("@");
    if (at < 1) {
      //alert("Nieprawidłowy e-mail");
      return false;
    }
    else {
      var l = -1;
      for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (c == ".") {
          l = i;
        }
      }
      if ((l < (at + 2)) || (l == str.length - 1)) {
        //  alert("Nieprawidłowy e-mail");
        return false;
      }
    }
    return true;
  }
}
function checkStringAndFocus(obj, msg) {
  var str = obj.value;
  var errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
  var id =obj.name.substr(2, obj.name.length);
  if (isWhiteSpace(str) || isEmpty(str)) {
    document.getElementById(errorFieldName).innerHTML = msg;
    document.getElementById(id).style.borderColor = "red";
    return false;
  }
  else {
    document.getElementById(errorFieldName).innerHTML = "";
    document.getElementById(id).style.borderColor = "";
    return true;
  }
}
function checkEmailAndFocus(obj, msg) {
  var str = obj.value;
  var errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
  var id =obj.name.substr(2, obj.name.length);
  if (!checkEmail(str)||isEmpty(str)) {
    document.getElementById(errorFieldName).innerHTML = msg;
    document.getElementById(id).style.borderColor = "red";
    return false;
  }
  else {
    document.getElementById(errorFieldName).innerHTML = "";
    document.getElementById(id).style.borderColor = "";
    return true;
  }
}
function checkDate(obj, msg) {
  var str = obj.value;
  var errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
  var id =obj.name.substr(2, obj.name.length);
  if (!isDateSelected(obj)) {
    document.getElementById(errorFieldName).innerHTML = msg;
    document.getElementById(id).style.borderColor = "red";
    return false;
  }
  else {
    document.getElementById(errorFieldName).innerHTML = "";
    document.getElementById(id).style.borderColor = "";
    return true;
  }
}
function validate(formularz){
  var i=true;

  if(!validate_text(formularz.elements.f_imie))
  {
    i=false;
    var text1="Brak imienia!"+"<br>";
  }
  if(!validate_text(formularz.elements.f_nazwisko))
  {
    i=false;
    var text2="Brak nazwiska!"+"<br>";
  }
  if(!validate_email(formularz.elements.f_email))
  {
    i=false;
    var text3="Niepoprawny adres email!"+"<br>";
  }
  if(validate_date(formularz.elements.f_bdata))
  {
    i=false;
  var text4="Niepoprawna data urodzenia!"+"<br>";
  }

  if(!validate_Pass1(formularz.elements.f_password))
  {
    i=false;
    var string=formularz.elements.f_password.value;
    var temp = /[0-9]/;
    if (string.length < 8 )
    {
      var text5="Chasło za krotkie. "+"<br>";
    }
    if (!temp.test(string))
    {
      var  text6="Brak cyfry w haśle. "+"<br>";
    }
  }
  if(!validate_pass(formularz.elements.f_password,formularz.elements.f_password2))
  {
    i=false;
    var text7="Chasła nie są identyczne!"+"<br>";
  }
  if(i==false)
  {
    if(text1==undefined)
    {text1="";}
    if(text2==undefined)
    {text2="";}
    if(text3==undefined)
    {text3="";}
    if(text4==undefined)
    {text4="";}
    if(text5==undefined)
    {text5="";}
    if(text6==undefined)
    {text6="";}
    if(text7==undefined)
    {text7="";}
    var text= text1+text2+text3+text4+text5+text6+text7;
    document.getElementById('p1').innerHTML=text;
    document.getElementById('p1').style.visibility="visible";
    document.getElementById('p1').style.border.style="visible";
  }
  if (i==true)
  {
    document.getElementById('p1').style.visibility="hidden";
    document.getElementById('p1').style.border.style="hidden";
    document.getElementById('p1').innerHTML="";
  }
  return i;
}
function validate_text(temp)
{
    if(!checkStringAndFocus(temp,"*"))
      {
        return false;
      }
    return true;
}
function validate_email(temp)
{
    if(!checkEmailAndFocus(temp,"*"))
      {
        return false;
      }
    return true;
}

//checks for past date selection
function isDateSelected(obj)
{
    var today =new Date();
    if (obj.value == "")
    {
        return false;
    }
    var inputDate = new Date(obj.value);
    if (inputDate > today) {
        return false;
    }
    else
    {
        return true;
    }
}

function validate_date(temp)
{
    if(checkDate(temp,"*"))
      {
        return false;
      }
    return true;
}
function validate_Pass1(obj)
{
  var str = obj.value;
  var errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
  var id =obj.name.substr(2, obj.name.length);
  if (!pass_compose(str)) {
    document.getElementById(errorFieldName).innerHTML = "*";
    document.getElementById(id).style.borderColor = "red";
    return false;
  }
  else {
    document.getElementById(errorFieldName).innerHTML = " ";
    document.getElementById(id).style.borderColor = "";
    return true;
  }
}
function checkPass2(obj1,obj2,msg)
{
  var str1 = obj1.value;
  var str2 = obj2.value;
  var errorFieldName1 = "e_" + obj1.name.substr(2, obj1.name.length);
  var errorFieldName2 = "e_" + obj2.name.substr(2, obj1.name.length);
  var id1 =obj1.name.substr(2, obj1.name.length);
  var id2 = obj2.name.substr(2, obj1.name.length);
  if (!(obj1.value===obj2.value)  || !pass_compose(str1) || !pass_compose(str2)) {
    document.getElementById(errorFieldName1).innerHTML = msg;
    document.getElementById(errorFieldName2).innerHTML = msg;
    document.getElementById(id1).style.borderColor = "red";
    document.getElementById(id2).style.borderColor = "red";
    return false;
  }
  else {
    document.getElementById(errorFieldName1).innerHTML = " ";
    document.getElementById(errorFieldName2).innerHTML = " ";
    document.getElementById(id1).style.borderColor = "";
    document.getElementById(id2).style.borderColor = "";

    return true;
  }
}
function validate_pass(obj1,obj2)
{
  if(!checkPass2(obj1,obj2,"*"))
    {
      return false;
    }
    return true;
}


function pass_compose(string)
{
  var temp = /[0-9]/;
  if (string.length < 8 || !temp.test(string))
  {
    return false;
  }

    return true;

}
/////////////////////////////////////////////////////////////////////////////////
function updateColors(i, row) {
    if (row)
    {
      if ((i % 2) === 1)
      {
        row.style = "background-color: #0097F5";
      }
      else
      {
        row.style = "background-color: #95F24E";
      }
      row = row.nextSibling;
      while(row && row.nodeType != 1)
      {
        row = row.nextSibling;
      }
      updateColors(++i, row);
    }
  }

(function(){
  function init() {
  updateColors(2, document.querySelectorAll('tbody')[1].firstChild);
}
 document.addEventListener('DOMContentLoaded', init);
 })();

 function AddButton()
 {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = '<input type="text" class="input" maxlength="20" />';
    var td2 = document.createElement("td");
    td2.innerHTML = '<input type="text" class="input" maxlength="20" />';
    var td3 = document.createElement("td");
    td3.innerHTML = `<input type="button" value="Zapisz" class="savebutton" onclick="SaveButton(this)" />
    <input type="button" value="Usun" class="deletebutton" onclick="DeleteButton(this);" />`;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    document.querySelectorAll('tbody')[1].appendChild(tr);
    updateColors(1, document.querySelectorAll('tbody')[1].firstChild);
  }
  function EditButton(t)
  {
    var row=t.parentNode.parentNode;
    var temp=row.querySelectorAll("td");
    for(var n=0;n<temp.length-1;n++)
    {
      temp[n].innerHTML='<input type="text" class="input" maxlength="20"/>';
      t.value="Zapisz";
      t.setAttribute("onclick","SaveButton(this)");
      t.setAttribute("class","savebutton");

    }
  }
function DeleteButton(t)
{
  document.querySelectorAll('tbody')[1].removeChild(t.parentNode.parentNode);
  updateColors(1, document.querySelectorAll('tbody')[1].firstChild);
}
function SaveButton(t)
{

  var row=t.parentNode.parentNode;
  var temp=row.querySelectorAll('.input');
  for(var i=0;i<temp.length;i++)
  {
    temp[i].parentNode.innerText=temp[i].value;
  }
  t.value="Edytuj";
  t.setAttribute("onclick","EditButton(this)");
  t.setAttribute("class","editbutton");
  updateColors(1, document.querySelectorAll('tbody')[1].firstChild);
}
