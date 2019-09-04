class ArborHelper {

	static dateFormat(date) {

		return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes();

	}

	static definePhoto(gender) {

		let data = gender;

		switch (data) {
			case 'Masculino':
				data = 'dist/img/avatar5.png';
				break;
			case 'Feminino':
				data = 'dist/img/avatar3.png';
				break;
			default:
				data = 'dist/img/boxed-bg.png';
				break;
		}

		return data;
		
	}

}