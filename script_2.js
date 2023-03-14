function func(){
	let s1 = Number(document.getElementById("s1").value);
    let s2 = Number(document.getElementById("s2").value);
    let s3 = Number(document.getElementById("s3").value);
    let l = Number(document.getElementById("l").value);
    let v1
    let v2
    let e
    let k
    let sm
    let vo
    let vko

    let h = Number(document.getElementById("h").value);
    let vk1
    let vk2
    let result

    sm= s1 * s2

    k = sm ** 0.5

    e = (s1 - s2) / s1

    if (e <= 40) {
    	v1 = ((s1 + s2) / 2) * l
    	v2 = ((s2 + s3) / 2) * l
    }
    else if (e > 40) {
    	v1 = (s1 * l + s2 * l + k * l) / 3
    	v2 = (s2 * l + s3 * l + k * l) / 3
    }
    else {
    	document.getElementById("result").innerHTML = "Ошибка";
    }


    
    vk1 = 1/3 * s1 * h
    vk2 = 1/3 * s3 * h
    result = v1 + v2 + vk1 + vk2

    vo = v1 + v2
    vko = vk1 + vk2
    document.getElementById("vo").innerHTML = "Объём: " + vo + "    м<sup>3</sup>";
    document.getElementById("vko").innerHTML = "Объём: " + vko + "    м<sup>3</sup>";
    document.getElementById("result").innerHTML = "Общий объём = " + result + "    м<sup>3</sup>";
}

