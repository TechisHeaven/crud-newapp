

$("#add_user").submit(function (event) {
    alert("Data Inserted Successfully!")
})

$("#update_user").submit(function (event) {
    event.preventDefault()

    var unindexed_array = $(this).serializeArray()
    var data = {}


    $.map(unindexed_array, function (n, i) {
        data[n['name']] = n['value']
    })


    console.log(data)

    var request = {
        "url": `/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }


    $.ajax(request).done(function (response) {
        alert("Data Updated Successfully!!")
    })



    // alert("Data Inserted Successfully!")
})




if (window.location.pathname == "/") {
    $ondelete = $(".table tbody td a.delete")
    $ondelete.click(function () {
        var id = $(this).attr("data-id")

        var request = {
            "url": `/api/users/${id}`,
            "method": "DELETE"
        }
        if (confirm("Do you really want to delete this record?")) {
            $.ajax(request).done(function (response) {
                alert("Data Deleted Successfully!!")
                location.reload()
            })
        }

    })
}


 // preview photo

const inpPhoto = document.getElementById("pro_input");
const preview_container = document.getElementById("imagePreview");
const preview_Image = preview_container.querySelector(".image-preview-image");


inpPhoto.addEventListener("change",function(){
    const file = this.files[0];

    if (file){
        const reader = new FileReader();



        reader.addEventListener("load", function(){
            preview_Image.setAttribute("src", this.result);
        })


        reader.readAsDataURL(file);
    }



})

