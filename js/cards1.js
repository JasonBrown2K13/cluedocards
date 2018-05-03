$(document).ready(function() {
console.log("document ready");
// some cool code!
var suspect, weapon, room, suspectImage, weaponImage, roomImage;
suspectImage = $('#suspect-image');
weaponImage = $('#weapon-image');
roomImage = $('#room-image');

    function sendTrackingEvent(action, label) {
        ga('send', 'event', 'CluedoCards', action, label);
}

    //function ga(a, b, c, d, e) {
    //    console.log('tracking: action = ' + d + ', label = ' + e);
    //}

	$("a.suspects").each(
	function(index, item) {
        $(item).click(function (e) {
            var siblings, img, description;
            siblings = $("a.suspects").siblings("figure.image").find("img");
            siblings.removeClass("colourscale");
            siblings.addClass("grayscale");
            img = $(item).siblings("figure.image").find("img");
            img.addClass("colourscale");
            suspect = $(item).siblings("p.card-title").text();
            description = $(item).siblings("p.card-description").text();
            console.log("Suspect = " + suspect);
            console.log("Description: " + description);
            suspectImage.attr('src', img.attr('src'));
            $('#suspect-message').text(suspect);
            $('#suspect-description').text(description);
            sendTrackingEvent('selectSuspect', suspect);
            
		})
    })

    $("a.weapon").each(
        function (index, item) {
            $(item).click(function (e) {
                var siblings, img, description;
                siblings = $("a.weapon").siblings("figure.image").find("img");
                siblings.removeClass("colourscale");
                siblings.addClass("grayscale");
                img = $(item).siblings("figure.image").find("img");
                img.addClass("colourscale");
                weapon = $(item).siblings("p.card-title").text();
                description = $(item).siblings("p.card-description").text();
                console.log("Weapon = " + weapon);
                console.log("Description: " + description);
                weaponImage.attr('src', img.attr('src'));
                $('#weapon-message').text(weapon);
                $('#weapon-description').text(description);
                sendTrackingEvent('selectWeapon', weapon);
            })
        })

    $("a.room").each(
        function (index, item) {
            $(item).click(function (e) {
                var siblings, img, description;
                siblings = $("a.room").siblings("figure.image").find("img");
                siblings.removeClass("colourscale");
                siblings.addClass("grayscale");
                img = $(item).siblings("figure.image").find("img");
                img.addClass("colourscale");
                room = $(item).siblings("p.card-title").text();
                description = $(item).siblings("p.card-description").text();
                console.log("Room = " + room);
                console.log("Description: " + description);
                roomImage.attr('src', img.attr('src'));
                $('#room-message').text(room);
                $('#room-description').text(description);
                sendTrackingEvent('selectRoom', room);
            })
        })
});
