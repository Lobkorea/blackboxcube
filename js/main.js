

		function hardwareLock(chkbox){
			if ( chkbox.checked == true ){
				//css change
				$('.class-ulsHlock p').addClass('class-act');
				$('.class-ulsHlock span').addClass('class-act');
				$('.class-email').addClass('class-act');
				$('.class-key').addClass('class-act');
				$('.class-btnIDgen').addClass('class-act');

				//button activate
				$('.class-btnIDgen').attr("disabled",false);
				$('.class-email').attr("disabled",false);
				$('.class-key').attr("disabled",false);



			}else{

				//css change
				$('.class-ulsHlock p').removeClass('class-act');
				$('.class-ulsHlock span').removeClass('class-act');
				$('.class-email').removeClass('class-act');
				$('.class-key').removeClass('class-act');
				$('.class-btnIDgen').removeClass('class-act');

				//button activate
				$('.class-btnIDgen').attr("disabled",true);
				$('.class-email').attr("disabled",true);
				$('.class-key').attr("disabled",true);
			}
		}
		
		function chkLength() {
			var key = document.keyGen.key.value;
			var keyLength = key.length;

		//	document.keyGen.email.value = keyLength;
			
			if(keyLength == 39) {
				$('.class-btnGen').attr("disabled",false);
				$('.class-btnGen').addClass('class-act');
			}else{
				$('.class-btnGen').attr("disabled",true);
				$('.class-btnGen').removeClass('class-act');
			} 


			setTimeout("chkLength()" ,0);
		}

		function fileUpload(obj){
			$('.class-upFname').text(obj.files[0].name);
			$('.class-btnStart').attr("disabled",false);
			$('.class-btnStart').addClass('class-act');
		}

		function uploadServer(){

			$('.class-btnStart').text("진 행 중");

			$('.class-btnStart').attr("disabled",false);
			$('.class-btnStart').addClass('class-act');

			$('.class-returnWrap').addClass('class-act');

			//업로드
			//frm.submit();

		}

		function init(){
		
			$('.class-btnStart').text("START");
			$('.class-btnStart').attr("disabled",true);
			$('.class-btnStart').removeClass('class-act');
			$('.class-returnWrap').removeClass('class-act');
			//
			$('.class-upFname').text('');
		}
		

