document.addEventListener('DOMContentLoaded', function() {
	function loadData() {
		//alert('lol');
	   var acc = localStorage.getItem('_acc');
	   alert(acc);
	   //if (!acc) return false;
	   localStorage.removeItem('_acc');
	   //decodes a string data encoded using base-64
	   acc = atob(acc);
	   //parses to Object the JSON string
	   acc = JSON.parse(acc);
	   //do what you need with the Object
	   fillFields(acc.urlIs);
	   document.getElementById('demo').value = acc.urlIs;
	   return true;
	}
	loadData();
});