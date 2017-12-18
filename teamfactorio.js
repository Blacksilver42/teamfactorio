function get_data(){
	return $.ajax({
		url: "teamfactorio.json"
	})
}

var data = $("<table>")

get_data().done(function(x){
	console.log(x);
	for(var E in x){
		X = x[E];
		console.log(X);
		var team = $("<td>");
		team.addClass("team");
		team.attr("rowspan",X.members.length);
		team.html(X.name);
		
		var mem0 = $("<td>").html(X.members[0]);
		mem0.addClass("memb");

		if(X.members.length == 1){
			mem0.addClass("last");
		}

		var row1 = $("<tr>").html(team).append(mem0);
		data.append(row1);

		for(var i=1;i<X.members.length;i++){
			var td = $("<td>").html(X.members[i])
				.addClass("memb")
			if(i == X.members.length-1) td.addClass("last");
			var tr = $("<tr>").html(td)
			data.append(tr);
		}
	}

	$(document).ready(function(){
		$("#main").html(data);
	})
});
