import {
	Marker2D,
	Node,
	PackedScene,
	PathFollow2D,
	randf,
	randf_range,
	Timer,
	Variant,
	Vector2,
} from "godot";
import { export_var, onready } from "godot.annotations";
import Player from "./Player";
import Mob from "./Mob";

export default class Main extends Node {
	@export_var(Variant.Type.TYPE_OBJECT, { class_: PackedScene })
	mobScene!: PackedScene;

	@onready("Player")
	player!: Player;

	@onready("MobTimer")
	mobTimer!: Timer;

	@onready("ScoreTimer")
	scoreTimer!: Timer;

	@onready("StartTimer")
	startTimer!: Timer;

	@onready("StartPosition")
	startPosition!: Marker2D;

	@onready("MobPath/MobSpawnLocation")
	mobSpawnLocation!: PathFollow2D;

	private score = 0;

	_ready(): void {
		this.newGame();
	}

	_process(delta: number): void {}

	newGame() {
		this.score = 0;
		this.player.start(this.startPosition.position);
		this.startTimer.start();
	}

	gameOver() {
		this.mobTimer.stop();
		this.scoreTimer.stop();
	}

	onStartTimerTimeout() {
		this.mobTimer.start();
		this.scoreTimer.start();
	}

	onMobTimerTimeout() {
		const mob = this.mobScene.instantiate() as Mob;
		this.mobSpawnLocation.progress_ratio = randf();

		let direction = this.mobSpawnLocation.rotation + Math.PI / 2;
		mob.position = this.mobSpawnLocation.position;

		direction += randf_range(-Math.PI / 4, Math.PI / 4);
		mob.rotation = direction;

		const velocity = new Vector2(randf_range(150, 250), 0);
		mob.linear_velocity = velocity.rotated(direction);

		this.add_child(mob);
	}

	onScoreTimerTimeout() {
		this.score += 1;
	}
}
