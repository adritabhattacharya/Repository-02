window.onload = function () {
    var addless = document.getElementsByClassName("addLess")[0];
    addless.addEventListener('click', dropopen);
    function dropopen(event) {

        document.getElementsByClassName("visible")[0].classList.toggle("collapse");
    }
    var addNew = document.getElementsByClassName("addNew")[0];
    addNew.addEventListener('click', newContact);
    function newContact(event) {
        var space = document.getElementsByClassName("new")[0];


        space.innerHTML = space.innerHTML + `<input type="email" class="form-control form-control-hover-light"
        id="formControlHoverLightFullName"
        placeholder="Person Name here (Relation comes here)"
        aria-label="Mark Williams">`;
    }

}