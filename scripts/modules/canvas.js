export default drawCanvas
function drawCanvas(ideology, moderate, radical, socialist, capitalist, authoritarian, libertarian, nationalist, globalist, conventionalist, conspiratorialist) {
    var version = "Test Edition #3.0"
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        var bg = "#141414"
        var fg = "#EEEEEE"
    } else {
        var bg = "#EEEEEE"
        var fg = "#141414" 
    }
        var c = document.createElement("canvas")
        var ctx = c.getContext("2d")
        c.width = 800;
        c.height = 800;
        ctx.fillStyle = bg
        ctx.fillRect(0,0,800,800);

        var img = document.getElementById("img-moderate")
        ctx.drawImage(img, 20, 170, 100, 100);
        var img = document.getElementById("img-radical")
        ctx.drawImage(img, 680, 170, 100, 100)
        var img = document.getElementById("img-socialist")
        ctx.drawImage(img, 20, 290, 100, 100)
        var img = document.getElementById("img-capitalist")
        ctx.drawImage(img, 680, 290, 100, 100)
        var img = document.getElementById("img-authoritarian")
        ctx.drawImage(img, 20, 410, 100, 100)
        var img = document.getElementById("img-libertarian")
        ctx.drawImage(img, 680, 410, 100, 100)
        var img = document.getElementById("img-nationalist")
        ctx.drawImage(img, 20, 530, 100, 100)
        var img = document.getElementById("img-globalist")
        ctx.drawImage(img, 680, 530, 100, 100)
        var img = document.getElementById("img-conventionalist")
        ctx.drawImage(img, 20, 650, 100, 100)
        var img = document.getElementById("img-conspiratorialist")
        ctx.drawImage(img, 680, 650, 100, 100)

        ctx.fillStyle= "#222222"
        ctx.fillRect(120, 180, 560, 80)
        ctx.fillRect(120, 300, 560, 80)
        ctx.fillRect(120, 420, 560, 80)
        ctx.fillRect(120, 540, 560, 80)
        ctx.fillRect(120, 660, 560, 80)
        ctx.fillStyle="#00B0EF"
        ctx.fillRect(120, 184, 5.6*moderate-2, 72)
        ctx.fillStyle="#32315a"
        ctx.fillRect(682-5.6*radical, 184, 5.6*radical-2, 72)
        ctx.fillStyle="#cd0000"
        ctx.fillRect(120, 304, 5.6*socialist-2, 72)
        ctx.fillStyle="#ffe000"
        ctx.fillRect(682-5.6*capitalist, 304, 5.6*capitalist-2, 72)
        ctx.fillStyle="#aa00aa"
        ctx.fillRect(120, 424, 5.6*authoritarian-2, 72)
        ctx.fillStyle="#BD5BE5"
        ctx.fillRect(682-5.6*libertarian, 424, 5.6*libertarian-2, 72)
        ctx.fillStyle="#ff9800"
        ctx.fillRect(120, 544, 5.6*nationalist-2, 72)
        ctx.fillStyle="#03a9f4"
        ctx.fillRect(682-5.6*globalist, 544, 5.6*globalist-2, 72)
        ctx.fillStyle="#2331BC"
        ctx.fillRect(120, 664, 5.6*conventionalist-2, 72)
        ctx.fillStyle="#6c9569"
        ctx.fillRect(682-5.6*conspiratorialist, 664, 5.6*conspiratorialist-2, 72)
        ctx.fillStyle=fg
        ctx.font="700 60px Montserrat"
        ctx.textAlign="left"
        ctx.fillText("ConservaValues", 20, 90)
        ctx.font="50px Montserrat"
        ctx.fillText(ideology, 20, 140)
        ctx.fillStyle= "#222222"
        ctx.textAlign="left"
        if (moderate       > 30) {ctx.fillText(moderate + "%", 130, 237.5)}
        if (socialist      > 30) {ctx.fillText(socialist + "%", 130, 357.5)}
        if (authoritarian    > 30) {ctx.fillText(authoritarian + "%", 130, 477.5)}
        if (nationalist       > 30) {ctx.fillText(nationalist + "%", 130, 597.5)}
        if (conventionalist > 30) {ctx.fillText(conventionalist + "%", 130, 717.5)}
        ctx.textAlign="right"
        if (radical        > 30) {ctx.fillText(radical + "%", 670, 237.5)}
        if (capitalist       > 30) {ctx.fillText(capitalist + "%", 670, 357.5)}
        if (libertarian  > 30) {ctx.fillText(libertarian + "%", 670, 477.5)}
        if (globalist      > 30) {ctx.fillText(globalist + "%", 670, 597.5)}
        if (conspiratorialist    > 30) {ctx.fillText(conspiratorialist + "%", 670, 717.5)}
        ctx.fillStyle=fg
        ctx.font="300 25px Montserrat"
        ctx.fillText("afunhumaninter.github.io/conservavalues", 780, 40)
        ctx.fillText(version, 780, 70)
        ctx.textAlign="center"
        ctx.fillText("Radicality Axis: " + document.getElementById("radicality-label").innerHTML, 400, 175)
        ctx.fillText("Economic Axis: " + document.getElementById("economics-label").innerHTML, 400, 295)
        ctx.fillText("Civic Axis: " + document.getElementById("statism-label").innerHTML, 400, 415)
        ctx.fillText("Nation Axis: " + document.getElementById("nation-label").innerHTML, 400, 535)
        ctx.fillText("Conventionalism Axis: " + document.getElementById("conventionalism-label").innerHTML, 400, 655)

        document.getElementById("banner").src = c.toDataURL();
}