nameOfTheStudentArray = [];

function submit()
{
    var name1 = document.getElementById("nameOfTheStudent1").value;
    var name2 = document.getElementById("nameOfTheStudent2").value;
    var name3 = document.getElementById("nameOfTheStudent3").value;
    var name4 = document.getElementById("nameOfTheStudent4").value;

    nameOfTheStudentArray.push(name1);
    nameOfTheStudentArray.push(name2);
    nameOfTheStudentArray.push(name3);
    nameOfTheStudentArray.push(name4);

    console.log(nameOfTheStudentArray);

    document.getElementById("displayName").innerHTML = nameOfTheStudentArray;
    
    document.getElementById("submitButtom").style.display = "none";

    document.getElementById("sortButtom").style.display = "inline-block";

}
function sorting()
{
    nameOfTheStudentArray.sort();
    console.log(nameOfTheStudentArray);
    document.getElementById("displayName").innerHTML = nameOfTheStudentArray;
}