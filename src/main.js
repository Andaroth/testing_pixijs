const app = new PIXI.Application({
	width: 800,
	height: 600,
	backgroundColor: 0x061639,
	antialias: true,
	transparent: false,
	resolution: 1
});

document.body.appendChild(app.view);

PIXI.loader.add(["src/img/step_01.png","src/img/background.jpg"]).load((loader,res)=>{
	let bg = new PIXI.Sprite(PIXI.loader.resources["src/img/background.jpg"].texture);
	bg.width = app.renderer.width;
	bg.height = app.renderer.height;
	bg.x = 0;
	bg.y = 0;

	// let sheet = PIXI.loader.resources["src/img/walk.json"];
	// let chara = new PIXI.extras.AnimatedSprite(sheet.data.animations["step"]);
	let chara = new PIXI.Sprite(PIXI.loader.resources["src/img/step_01.png"].texture);

	chara.width = 32;
	chara.height = 52;
	chara.x = app.renderer.width;
	chara.y = app.renderer.height - chara.height;
	// chara.animationSpeed = 0.167;
	// chara.play();

	app.stage.addChild(bg);
	app.stage.addChild(chara);

	app.ticker.add(()=>{
		if (chara.x <= (-chara.width)) chara.x = app.renderer.width;
		chara.x -= 1
	});
});
