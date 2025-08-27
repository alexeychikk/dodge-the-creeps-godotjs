import {
  Area2D,
  Variant,
  Vector2,
  Input,
  AnimatedSprite2D,
  clamp,
  Signal0,
  Node2D,
  CollisionShape2D,
} from 'godot';
import { export_var, onready, signal } from 'godot.annotations';

export default class Player extends Area2D {
  @onready('AnimatedSprite2D')
  animatedSprite!: AnimatedSprite2D;

  @onready('CollisionShape2D')
  collisionShape!: CollisionShape2D;

  @export_var(Variant.Type.TYPE_INT)
  speed = 400;

  @signal()
  hit!: Signal0;

  screenSize!: Vector2;

  _ready(): void {
    this.screenSize = this.get_viewport_rect().size;
    this.hide();
  }

  _process(delta: number): void {
    let velocity = new Vector2(0, 0);

    if (Input.is_action_pressed('move_right')) {
      velocity.x += 1;
    }
    if (Input.is_action_pressed('move_left')) {
      velocity.x -= 1;
    }
    if (Input.is_action_pressed('move_down')) {
      velocity.y += 1;
    }
    if (Input.is_action_pressed('move_up')) {
      velocity.y -= 1;
    }

    if (velocity.length() > 0) {
      velocity = Vector2.MULTIPLY(velocity.normalized(), this.speed);
      this.animatedSprite.play();
    } else {
      this.animatedSprite.stop();
    }

    this.position = Vector2.ADD(
      this.position,
      Vector2.MULTIPLY(velocity, delta),
    );
    this.position = new Vector2(
      clamp(this.position.x, 0, this.screenSize.x),
      clamp(this.position.y, 0, this.screenSize.y),
    );

    if (velocity.x !== 0) {
      this.animatedSprite.animation = 'walk';
      this.animatedSprite.flip_v = false;
      this.animatedSprite.flip_h = velocity.x < 0;
    } else if (velocity.y !== 0) {
      this.animatedSprite.animation = 'up';
      this.animatedSprite.flip_v = velocity.y > 0;
    }
  }

  start(position: Vector2): void {
    this.position = position;
    this.show();
    this.collisionShape.set_deferred('disabled', false);
  }

  onBodyEntered(_body: Node2D): void {
    this.hide();
    this.hit.emit();
    this.collisionShape.set_deferred('disabled', true);
  }
}
