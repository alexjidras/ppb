fetch('./getDbSchema.php').then((res)=> res.json()).then((dbSchema)=> {
	$(function() {
    	updateInputs($("[name='tabel']").val());
	    $("[name='tabel']").on("change", function() {
		  	updateInputs($(this).val());
	    });
	    $("form:not(:first)").submit( function(eventObj) {
	    	switch($(this).attr('name')) {
	    		case "f-sort":  
			    		if($(this).find("select").filter(function() {return $(this).val() !== ""}).length === 0) {
					    	alert("Cel putin 1 camp trebuie completat!");
						    return false;
					    }
					        break;
		    	case "f-modify":
			    		if($(this).find("input[name*='result']").filter(function() {return $(this).val() !== ""}).length === 0) {
				    		alert("Cel putin 1 camp trebuie completat!");
					    	return false;
					    }
				default:
					if($(this).find("input").filter(function() {return $(this).val() !== ""}).length === 0) {
				    		alert("Cel putin 1 camp trebuie completat!");
					    	return false;
					}
			}
	        $('<input />').attr('type', 'hidden')
	            .attr('name', "tabel")
	            .attr('value', $("[name='tabel']").val())
	            .appendTo(this);
	        return true;
	    });
	    
    })

  function updateInputs(table) {
    $("form:not(:first)").each(function() {
	    var submit = $(this).find($(":submit"));
	    $(this).empty().append($.map(dbSchema[table], (type, name) =>  {
	    	return $(this).attr('name') === "f-modify" 
	    	? '<label>' + name + '</label><input type="' + type + '" name="search[' + name + ']">' 
	    	: $(this).attr('name') === "f-sort" ? '<label>' + name + "</label><select name=" + name + "><option value=''>niciuna</option><option value='asc'>crescator</option><option value='desc'>descrescator</option></select>"
	    	: '<label>' + name + '</label><input type="' + type + '" name="' + name + '">';
	    })).append(submit);
    });
    
    
    $("[name='f-modify'] :submit").before("<br>", $.map(dbSchema[table], function(type, name)  {
	    return '<label>' + name + '</label><input type="' + type + '" name="result[' + name + ']">'
	}));
  }

})
    