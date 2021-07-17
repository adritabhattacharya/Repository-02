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
    var add = document.getElementsByClassName("addemail")[0];
    add.addEventListener('click', emailfield);
    function emailfield(event) {
        var space = document.getElementsByClassName("additional")[0];
        space.innerHTML = space.innerHTML +
            `
            <div class="row">
                                        <div class="col-md-11 form-group">

                                            

                                            <input type="email" class="form-control form-control-hover-light"
                                                id="formControlHoverLightFullName" placeholder="loginid@gmail.com"
                                                aria-label="Mark Williams" style="float: left;">

                                        </div>
                                        <div class="col-md-1">
                                            
                                            <span style="font-size: 15px; cursor: pointer;"
                                                class="removeemail">&#10683;</span>
                                        </div>
                                        <!-- End Input Group -->
                                    </div>
            `;
        var rem = document.getElementsByClassName("removeemail")[0];
        rem.addEventListener('click', remfield);
    }

    function remfield(event) {
        var cross = event.target;
        cross.parentElement.parentElement.remove();

    }

}