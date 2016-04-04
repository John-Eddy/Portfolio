/**
 * Created by Eddy on 04/04/2016.
 */

/**
 * Created by Utilisateur on 29/03/2016.
 */
$('#webdesign').bind('inview', function(event) {

    setTimeout(animationWebdesign,0);

});

function animationWebdesign() {

        $('.webdesign').easyPieChart({
            scaleColor: "#ecf0f1",
            lineWidth: 20,
            lineCap: 'butt',
            barColor: '#1abc9c',
            trackColor:	"#ecf0f1",
            size: 160,
            animate: 3000,
        });


}

$('#devweb').bind('inview', function(event) {

    setTimeout(animationDevWeb,0);

});

function animationDevWeb() {

    $('.devweb').easyPieChart({
        scaleColor: "#ecf0f1",
        lineWidth: 20,
        lineCap: 'butt',
        barColor: '#1abc9c',
        trackColor:	"#ecf0f1",
        size: 160,
        animate: 3000,
    });


}

    $(document).ready(function(){
        $('#titre').parallax("center", 0, 0.1, true);borabora-sunset
        presentation
        $('#presentation').parallax("center", 900, 0.1, true);
        $('#cv').parallax("center", 900, 0.1, true);
        $('#borabora-sunset').parallax("center", 900, 0.1, true);


    })
