function selectedIndex(selectElement, callback) {

    $(selectElement).on("change", function () {

        if (typeof callback === "function") {

            callback();

        } else {

            console.log("No callback method available");

            if ($(this)) {

                console.log($(this).val());

            } else {

                console.log("No data available");

            }

        }

    });

}