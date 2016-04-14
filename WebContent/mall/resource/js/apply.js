function commit(){
	$(".p").hide();
	var status = 0;
	var real_name = $("#real_name").val();
	var art_direction = $("#art_direction").val();
	var education = $("#education").val();
	var introduction = $("#introduction").val();
	
	function check(art_direction,education,introduction,real_name){
		if(real_name==''){
			$("#validateRealName").show();
			return false;
		}
		if(art_direction==''){
			$("#validateArtDirection").show();
			return false;
		}
		if(education=='0'){
			$("#validateEducation").show();
			return false;
		}
		if(introduction==''){
			$("#validateIntroduction").show();
			return false;
		}
		return true;
	}
	
	if(check(art_direction,education,introduction,real_name))
		{
	
	$.post(
			"/Art/mall/commitArtist.json",
			{
				status:status,
				real_name:real_name,
				art_direction:art_direction,
				education:education,
				introduction:introduction
			},
			function(data){
				if(data.errno == 0)	{
					var url = '/Art/mall/jsp/artist/verifying';
				    window.location.href = url;
				}	
				else if(data.errno == 1){
					alert(data.data);
				}else if(data.errno == 2){
					alert(data.data);
					windows.open(data.data);
				}

			});

		}
	
	


}