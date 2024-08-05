function switchFormat(format) {
	if (format === 'name') {
		document.getElementById('nameFormat').style.display = 'block';
		document.getElementById('name2Format').style.display = 'none';
		document.getElementById('name3Format').style.display = 'none';
		updateButtonStyles('nameBtn');
	}
	if (format === 'name2') {
		document.getElementById('nameFormat').style.display = 'none';
		document.getElementById('name2Format').style.display = 'block';
		document.getElementById('name3Format').style.display = 'none';
		updateButtonStyles('name2Btn');
	}
	if (format === 'name3') {
		document.getElementById('nameFormat').style.display = 'none';
		document.getElementById('name2Format').style.display = 'none';
		document.getElementById('name3Format').style.display = 'block';
		updateButtonStyles('name3Btn');
	}
}

function updateButtonStyles(activeButtonId) {
	document.getElementById('nameBtn').classList.remove('btn-primary');
	document.getElementById('nameBtn').classList.add('btn-secondary');
	document.getElementById('name2Btn').classList.remove('btn-primary');
	document.getElementById('name2Btn').classList.add('btn-secondary');
	document.getElementById('name3Btn').classList.remove('btn-primary');
	document.getElementById('name3Btn').classList.add('btn-secondary');

	document.getElementById(activeButtonId).classList.remove('btn-secondary');
	document.getElementById(activeButtonId).classList.add('btn-primary');
}

function updateName() {
	var name = document.getElementById('nameInput').value;
	document.getElementById('nameDisplay').textContent = '我忘不了' + name + '了。如果不是知道了' + name + ',说不定我已经对这个 世界没有留恋了。' + name + '真的好可爱啊。蹲路灯下的样子很可爱, 故意撒娇也很可爱,做味增汤的时候很可爱,生气做恶作剧的时候也 很可爱。所以我离不开' + name + '了。如果早晨不是有' + name + '的起床闹钟的话,说不定我永远都不愿意睁眼了,如果晚上不是有' + name + '的声音陪伴的话,这一天我都不希望过完了。' + name + '的眼睛好灵动,如果能映照出我就好了。' + name + '的笑容好温柔,如果只为我一个人绽放就好了。' + name + '的头发好柔顺,如果能让我尽情抚摸就好了。' + name + '这样的存在真的是被允许的吗。只是像现在这样默念' + name + '的名字,我就觉得自己是世界上最幸福的傻子。我真的想' + name + '想得要发病了，我躺在床上会想' + name + ',我洗澡会想' + name + ',我出门会想' + name + ',我走路会想' + name + ',我坐车会想' + name + ',我工作会想' + name + ',我玩手机会想' + name + ',我真的觉得自己像中邪了一樣,我对' + name + '的念想似乎都是' + name + '的了,我好孤独啊!真的好孤独啊!这世界上那么多' + name + '为什么没有一个是属于三次元的,你知道吗?每到深夜,我的胸口滚烫滚烫,我发病了我要同' + name + '困觉,我的牛子受不了了,' + name + '我的' + name + '😭😭😭,' + name + '我的' + name + '😭😭😭,' + name + '我的' + name + '😭😭😭。';
}

function updatename2() {
	var name2 = document.getElementById('name2Input').value;
	document.getElementById('name2Display').textContent = '狠狠愛上就是這樣的吧？好想和' + name2 + '交往，給予她名門望族的生活裡所未曾體會的真誠，庸俗的快樂。懶散的躺在沙發上依偎著，用餐時佯裝順手的摘下對方嘴角的飯粒，洗碗時互相打鬧潑水，睡前的吻和深情的擁抱。清晨，' + name2 + '會比我早起準備早餐，一切妥當後再狠狠的騎上我的身體，卻發現怎麼也叫不醒我。她不知道的是，我在前一天的睡前牛奶裡加入了過量的安眠藥，早就已經死了。她會嘗試進行基本急救，發了瘋似的四處求助——這當然無濟於事，最終失落的回到我的身邊，哭泣著回想美好過去的點滴。我將會成為她心裡永遠過不去的坎，銘記於' + name2 + '意識裡的各個角落。啊啊，要是能遇見' + name2 + '就好了。';
}

function updatename3() {
	var name3 = document.getElementById('name3Input').value;
	document.getElementById('name3Display').textContent = '如果' + name3 + '有一百萬粉絲，我是其中之一。如果' + name3 + '有十個粉絲，我是其中之一。如果' + name3 + '只有一個粉絲，那就是我。如果' + name3 + '沒有粉絲，那就意味着我已經不在這個世界上了。如果全世界都反對' + name3 + '，那我就反對全世界。我愛' + name3 + '直到我最後一口氣。';
}


function copyText() {
	var text;
	if (document.getElementById('nameFormat').style.display === 'block') {
		text = document.getElementById('nameDisplay').textContent;
	}
	if (document.getElementById('name2Format').style.display === 'block') {
		text = document.getElementById('name2Display').textContent;
	}
	if (document.getElementById('name3Format').style.display === 'block') {
		text = document.getElementById('name3Display').textContent;
	}
	navigator.clipboard.writeText(text).then(function() {
		var copyMessage = document.getElementById('copyMessage');
		copyMessage.style.display = 'block';
		setTimeout(function() {
			copyMessage.style.display = 'none';
		}, 2000);
	});
}