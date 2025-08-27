import { Button, CanvasLayer, Label, Signal0, Timer } from 'godot';
import { onready, signal } from 'godot.annotations';

export default class Hud extends CanvasLayer {
  @signal()
  startGame!: Signal0;

  @onready('Message')
  message!: Label;

  @onready('MessageTimer')
  messageTimer!: Timer;

  @onready('StartButton')
  startButton!: Button;

  @onready('ScoreLabel')
  scoreLabel!: Label;

  _ready(): void {}

  _process(_delta: number): void {}

  showMessage(text: string): void {
    this.message.text = text;
    this.message.show();
    this.messageTimer.start();
  }

  async showGameOver(): Promise<void> {
    this.showMessage('Game Over');

    await this.messageTimer.timeout.as_promise();
    this.message.text = 'Dodge the Creeps!';
    this.message.show();

    await this.get_tree()?.create_timer(1).timeout.as_promise();
    this.startButton.show();
  }

  updateScore(score: number): void {
    this.scoreLabel.text = score.toString();
  }

  onStartButtonPressed(): void {
    this.startButton.hide();
    this.startGame.emit();
  }

  onMessageTimerTimeout(): void {
    this.message.hide();
  }
}
