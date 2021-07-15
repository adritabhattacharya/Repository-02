window.onload = function () {
    var addless = document.getElementsByClassName("addLess")[0];
    console.log(addless);
    addless.addEventListener('click', wrapUp);
    function wrapUp(event) {

        var segment = document.getElementsByClassName("hidden")[0];
        if (segment.style.display === "block") {
            segment.style.display = "none";
            addless.innerHTML = `<p style="text-align: right; cursor: pointer;" class="addLess">Add More 	
            &#709;</p>`
        }
        else {
            segment.style.display = "block";
            addless.innerHTML = `<p style="text-align: right; cursor: pointer;" class="addLess">Show Less &#708;</p>`
        }

    }
}