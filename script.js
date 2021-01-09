function toggle(e){
	var flags = document.getElementById(e);
	if (flags.style.display == 'block'){
		flags.style.display = 'none';
	} else {
		flags.style.display = 'block';
	}
}