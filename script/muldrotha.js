function muldrotha_reset() {
    var checkboxes = document.getElementsByTagName("input");
	var i;
	for (i = 0; i < checkboxes.length; i++) {
		if(checkboxes[i].type == "checkbox")
			checkboxes[i].checked = 0;
	}
}