function clicked() {
    return confirm('clicked');
}

<script type='text/javascript'>

function foo() {


var user_choice = window.confirm('Would you like to continue?');


if(user_choice==true) {


window.location='your url';  // you can also use element.submit() if your input type='submit' 


} else {


return false;


}
}

</script>

<input type="button" onClick="foo()" value="save">