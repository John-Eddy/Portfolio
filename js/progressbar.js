/**
 * Created by Utilisateur on 29/03/2016.
 */
$('#progressbar').bind('inview', function(event) {

    setTimeout(animationBarre,1000);

});

function animationBarre() {
    $(document).ready(function() {
        $('.progress .progress-bar').css("width",
            function() {
                return $(this).attr("aria-valuenow") + "%";
            }
        )
    });

}