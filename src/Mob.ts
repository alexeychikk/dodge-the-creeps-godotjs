import { AnimatedSprite2D, CollisionShape2D, randi, RigidBody2D } from "godot";
import { onready } from "godot.annotations";

export default class Mob extends RigidBody2D {
	@onready("CollisionShape2D")
	collisionShape!: CollisionShape2D;

	@onready("AnimatedSprite2D")
	animatedSprite!: AnimatedSprite2D;

	_ready(): void {
		const mobTypes = this.animatedSprite.sprite_frames.get_animation_names();
		const randomType = mobTypes.get(randi() % mobTypes.size());
		this.animatedSprite.play(randomType);
	}

	_process(delta: number): void {}

	onScreenExited() {
		this.queue_free();
	}
}
