//Declaration Start
//Declaration End

function BMI(m,h) {
    var r=m/(h*h)
    r=r.toPrecision(4)
    return r
}

function mBMR(m,h,a) {
    // alert(`mBMR ${m},${h},${a}`)
    //var r=(66+(13.7*m)+(5*h))-(6.8*o)
    var r = (66 + (13.7 * m) + (5 * h)) - (6.8 * a)
    //r=r.toPrecision(4);
    return r
}

function fBMR(m,h,a) {
    var r=655.1 + (9.563 * m) + (1.85 * h) - (4.676 *a)
  //  var r = 655+(9.6*m)+(1.8*h)-(4.7*o)
    r=r.toPrecision(4);
    return r
}

function inchTometer(inc) {
    // body...
    return (inc*2.5)/100;
}

function comment(bmi) {
    if (bmi<18.5) {
        return "Low Weight !";
    }else if (bmi>=18.5&&bmi<=24.9) {
        return "Healthy.";
    }else if (bmi >=25&&bmi <=29.9) {
        return "Heavy Weight !";
    }else if (bmi>=30&&bmi<=34.9) {
        return "1st step of Thickness.";
    }else if(bmi>=35&&bmi <=39.9){
        return "2nd step of Thickness.";
    }else if (bmi>=40) {
        return "Heavy Fat.";
    }
}

function bmiCalculat(argument) {
    // body...
    
    var height=$("#bmiHeight").val();
    var weight=$("#bmiWeight").val();
    height=inchTometer(height)
    var bmi='Your BMI : '+BMI(weight,height)
    var comments=comment(BMI(weight,height))
    alert(comments)
    let result=`<ul><li>Your BMI - ${bmi} kg/m<sup>2</sup></li><li>${comments}</li></ul></br>`
    $("#result").html(result)
}

function bmrCalculat() {
    // body...
    var bmr;
    var height=$("#bmrHeight").val();
    var weight=$("#bmrWeight").val();
    var age=$("#bmrAge").val()
    height=inchTometer(height)
    var gender = $("#bmrGender").val()
    
    if (gender=='male') {
        bmr=mBMR(weight,height,age)
    }else{
        bmr=fBMR(weight,height,age)
    }
    let result=`<ul><li>Your BMR - ${bmr}  kal</li></ul>`
    $("#result").html(result)
}

function reset() {
    $("input").val("")
}
function ok(weight,size,age) {
    // body...
return 66.47 + (13.75 * weight) + (5.003 * size) - (6.755 * age)
}